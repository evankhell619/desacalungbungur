import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileX className="w-8 h-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">Berita Tidak Ditemukan</CardTitle>
            <CardDescription>
              Maaf, berita yang Anda cari tidak dapat ditemukan atau mungkin telah dihapus.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/news">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Halaman Berita
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
