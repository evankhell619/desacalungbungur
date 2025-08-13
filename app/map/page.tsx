import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function Map() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Peta Desa Calungbungur</h1>
        <p className="text-gray-600">Lokasi dan wilayah Desa Calungbungur, Lebak, Banten</p>
      </div>

      {/* Google Maps Integration */}
      <Card>
        <CardHeader>
          <CardTitle>Peta Interaktif</CardTitle>
          <CardDescription>Lokasi Desa Calungbungur dan sekitarnya</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Google Maps Embed Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3246.849264089086!2d106.3090247749925!3d-6.476450893515367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjgnMzUuMiJTIDEwNsKwMTgnNDEuOCJF!5e1!3m2!1sen!2sid!4v1755096090476!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      {/* Location Info */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Informasi Lokasi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-gray-600">Jl. Muncang-Sabagi Rangkas Bitung Kp.Karian Baru Desa Calungbungur, Kec. Sajira-Banten 42371</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Koordinat</p>
                <p className="text-gray-600">-6.5622° S, 106.2318° E</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
