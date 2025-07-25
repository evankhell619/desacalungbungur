"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Download, Trash2, Edit, X } from "lucide-react"

interface Document {
  id: string
  name: string
  type: string
  size: string
  file?: File
  url?: string
  uploadDate: string
}

export function DocumentManager() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      name: "Peraturan Desa Calungbungur",
      type: "PDF",
      size: "2.3 MB",
      uploadDate: "2024-01-15",
    },
    {
      id: "2",
      name: "Formulir Surat Keterangan Domisili",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2024-01-10",
    },
    {
      id: "3",
      name: "Data Penduduk 2024",
      type: "XLSX",
      size: "3.1 MB",
      uploadDate: "2024-01-08",
    },
  ])

  const [isUploading, setIsUploading] = useState(false)
  const [editingDoc, setEditingDoc] = useState<string | null>(null)
  const [newDocName, setNewDocName] = useState("")

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    // Get file info
    const fileSize = (file.size / (1024 * 1024)).toFixed(1) + " MB"
    const fileType = file.name.split(".").pop()?.toUpperCase() || "FILE"

    // Create new document entry
    const newDoc: Document = {
      id: Date.now().toString(),
      name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
      type: fileType,
      size: fileSize,
      file: file,
      url: URL.createObjectURL(file),
      uploadDate: new Date().toISOString().split("T")[0],
    }

    setDocuments((prev) => [...prev, newDoc])
    setIsUploading(false)

    // Reset input
    event.target.value = ""
  }

  const handleDownload = (doc: Document) => {
    if (doc.url) {
      // For uploaded files
      const link = document.createElement("a")
      link.href = doc.url
      link.download = `${doc.name}.${doc.type.toLowerCase()}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // For existing documents (placeholder)
      alert(`Mengunduh: ${doc.name}.${doc.type.toLowerCase()}`)
    }
  }

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus dokumen ini?")) {
      setDocuments((prev) => {
        const docToDelete = prev.find((doc) => doc.id === id)
        if (docToDelete?.url) {
          URL.revokeObjectURL(docToDelete.url)
        }
        return prev.filter((doc) => doc.id !== id)
      })
    }
  }

  const handleEdit = (id: string, newName: string) => {
    setDocuments((prev) => prev.map((doc) => (doc.id === id ? { ...doc, name: newName } : doc)))
    setEditingDoc(null)
    setNewDocName("")
  }

  const getFileIcon = (type: string) => {
    return <FileText className="w-5 h-5 text-blue-600" />
  }

  const getTypeColor = (type: string) => {
    switch (type.toUpperCase()) {
      case "PDF":
        return "bg-red-100 text-red-800"
      case "XLSX":
      case "XLS":
        return "bg-green-100 text-green-800"
      case "DOCX":
      case "DOC":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Dokumen & Formulir</span>
            </CardTitle>
            <CardDescription>Kelola dan unduh dokumen penting desa</CardDescription>
          </div>

          {/* Upload Button */}
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.xlsx,.xls,.docx,.doc"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            <Button
              onClick={() => document.getElementById("file-upload")?.click()}
              disabled={isUploading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Mengunggah...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Unggah Dokumen
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* File Type Info */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Format yang didukung:</strong> PDF, Excel (.xlsx, .xls), Word (.docx, .doc)
          </p>
          <p className="text-xs text-blue-600 mt-1">Maksimal ukuran file: 10 MB</p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3 flex-1">
                {getFileIcon(doc.type)}
                <div className="flex-1 min-w-0">
                  {editingDoc === doc.id ? (
                    <div className="flex items-center space-x-2">
                      <Input
                        value={newDocName}
                        onChange={(e) => setNewDocName(e.target.value)}
                        className="text-sm"
                        placeholder="Nama dokumen"
                      />
                      <Button size="sm" onClick={() => handleEdit(doc.id, newDocName)} disabled={!newDocName.trim()}>
                        <FileText className="w-3 h-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingDoc(null)
                          setNewDocName("")
                        }}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <p className="font-medium text-gray-900 truncate">{doc.name}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className={getTypeColor(doc.type)}>
                          {doc.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{doc.size}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          {new Date(doc.uploadDate).toLocaleDateString("id-ID")}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(doc)}
                  className="flex items-center space-x-1"
                >
                  <Download className="w-3 h-3" />
                  <span className="hidden sm:inline">Unduh</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditingDoc(doc.id)
                    setNewDocName(doc.name)
                  }}
                >
                  <Edit className="w-3 h-3" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(doc.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {documents.length === 0 && (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Belum ada dokumen yang diunggah</p>
            <p className="text-sm text-gray-400">Klik tombol "Unggah Dokumen" untuk menambahkan file</p>
          </div>
        )}

        {/* Statistics */}
        {documents.length > 0 && (
          <div className="mt-6 pt-4 border-t">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-gray-900">{documents.length}</div>
                <div className="text-sm text-gray-600">Total Dokumen</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-blue-600">
                  {documents.filter((doc) => doc.type === "PDF").length}
                </div>
                <div className="text-sm text-gray-600">File PDF</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-600">
                  {documents.filter((doc) => ["XLSX", "XLS"].includes(doc.type)).length}
                </div>
                <div className="text-sm text-gray-600">File Excel</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-purple-600">
                  {documents.filter((doc) => ["DOCX", "DOC"].includes(doc.type)).length}
                </div>
                <div className="text-sm text-gray-600">File Word</div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
