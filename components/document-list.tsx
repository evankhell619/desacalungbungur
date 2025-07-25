"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, File, FileSpreadsheet } from "lucide-react"

interface DocumentFile {
  name: string
  displayName: string
  type: string
  size: string
  path: string
  icon: React.ComponentType<{ className?: string }>
}

export function DocumentList() {
  const [documents, setDocuments] = useState<DocumentFile[]>([])
  const [loading, setLoading] = useState(true)

  // Static file list - you'll add your files here
  const staticFiles = [
    "peraturan-desa-calungbungur.pdf",
    "formulir-surat-keterangan-domisili.pdf",
    "panduan-izin-mendirikan-bangunan.pdf",
    "prosedur-darurat.pdf",
    "data-penduduk-2024.xlsx",
    "RAB RKP 2024.xlsx",
    "formulir-bantuan-sosial.pdf",
    "surat-pengantar-nikah.pdf",
  ]

  useEffect(() => {
    const loadDocuments = async () => {
      setLoading(true)
      const documentList: DocumentFile[] = []

      for (const fileName of staticFiles) {
        try {
          // Fetch file to get size
          const response = await fetch(`/files/${fileName}`, { method: "HEAD" })

          if (response.ok) {
            const contentLength = response.headers.get("content-length")
            const fileSize = contentLength ? formatFileSize(Number.parseInt(contentLength)) : "Unknown"

            const fileExtension = fileName.split(".").pop()?.toUpperCase() || "FILE"
            const displayName = fileName
              .replace(/\.[^/.]+$/, "") // Remove extension
              .replace(/-/g, " ") // Replace hyphens with spaces
              .replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize first letter of each word

            documentList.push({
              name: fileName,
              displayName,
              type: fileExtension,
              size: fileSize,
              path: `/files/${fileName}`,
              icon: getFileIcon(fileExtension),
            })
          }
        } catch (error) {
          console.log(`File ${fileName} not found or error loading:`, error)
        }
      }

      setDocuments(documentList)
      setLoading(false)
    }

    loadDocuments()
  }, [])

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  const getFileIcon = (type: string) => {
    switch (type.toUpperCase()) {
      case "PDF":
        return FileText
      case "XLSX":
      case "XLS":
        return FileSpreadsheet
      case "DOCX":
      case "DOC":
        return File
      default:
        return File
    }
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

  const handleDownload = (doc: DocumentFile) => {
    const link = document.createElement("a")
    link.href = doc.path
    link.download = doc.name
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Dokumen & Formulir</span>
          </CardTitle>
          <CardDescription>Unduh dokumen penting desa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <span className="ml-2 text-gray-600">Memuat dokumen...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-5 h-5" />
          <span>Dokumen & Formulir</span>
        </CardTitle>
        <CardDescription>Unduh dokumen penting desa</CardDescription>
      </CardHeader>
      <CardContent>
        {documents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc) => {
                const IconComponent = doc.icon
                return (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{doc.displayName}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className={getTypeColor(doc.type)}>
                            {doc.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(doc)} className="ml-4">
                      <Download className="w-4 h-4 mr-2" />
                      Unduh
                    </Button>
                  </div>
                )
              })}
            </div>

            {/* Statistics */}
            <div className="mt-6 pt-4 border-t">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{documents.length}</div>
                  <div className="text-sm text-gray-600">Total Dokumen</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-red-600">
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
                  <div className="text-lg font-semibold text-blue-600">
                    {documents.filter((doc) => ["DOCX", "DOC"].includes(doc.type)).length}
                  </div>
                  <div className="text-sm text-gray-600">File Word</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Tidak ada dokumen tersedia</p>
            <p className="text-sm text-gray-400">Dokumen akan muncul setelah ditambahkan ke folder /public/files</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
