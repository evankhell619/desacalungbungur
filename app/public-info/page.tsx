import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MapPin, AlertCircle, FileText } from "lucide-react"
import { DocumentManager } from "@/components/document-manager"
import { DocumentList } from "@/components/document-list"

export default function PublicInfo() {
  const emergencyContacts = [
    // { service: "Layanan Darurat", number: "112", available: "24/7" },
    { service: "Kantor Desa", number: "0857 7688 8813", available: "Hermawan" },
    { service: "Kantor Desa", number: "0878 2220 0364", available: "Madsuhi" },
    // { service: "Pemeliharaan", number: "(0252) 345-6789", available: "Sen-Jum 7:00-16:00" },
  ]

  const publicServices = [
    {
      title: "Pengumpulan Sampah",
      description: "Setiap Selasa dan Jumat pukul 07:00 WIB",
      icon: AlertCircle,
      status: "Aktif",
    },
    {
      title: "Pasokan Air",
      description: "Layanan 24/7 dengan pemeliharaan Minggu 14:00-16:00 WIB",
      icon: AlertCircle,
      status: "Aktif",
    },
    {
      title: "Transportasi Umum",
      description: "Layanan angkot setiap 30 menit, 06:00-22:00 WIB",
      icon: AlertCircle,
      status: "Aktif",
    },
    {
      title: "Penerangan Jalan",
      description: "Penerangan otomatis dari maghrib hingga subuh",
      icon: AlertCircle,
      status: "Aktif",
    },
  ]

  const documents = [
    { name: "Peraturan Desa", type: "PDF", size: "2.3 MB" },
    { name: "Panduan Izin Mendirikan Bangunan", type: "PDF", size: "1.8 MB" },
    { name: "Pedoman Masyarakat", type: "PDF", size: "1.2 MB" },
    { name: "Prosedur Darurat", type: "PDF", size: "3.1 MB" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Informasi Publik</h1>
        <p className="text-gray-600">Informasi penting dan layanan untuk warga desa</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Kontak Darurat</span>
            </CardTitle>
            <CardDescription>Nomor telepon penting untuk keadaan darurat dan layanan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergencyContacts.map((contact) => (
              <div key={contact.service} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{contact.service}</p>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    {contact.available}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-blue-600">{contact.number}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Village Office Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Jam Kantor</span>
            </CardTitle>
            <CardDescription>Kapan layanan desa tersedia</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Senin - Jumat</span>
                <Badge variant="secondary">08:00 - 16:00</Badge>
              </div>
              {/* <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Sabtu</span>
                <Badge variant="outline">09:00 - 13:00</Badge>
              </div> */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Sabtu - Minggu</span>
                <Badge variant="secondary">Libur</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>CalungBungur</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                <Mail className="w-4 h-4" />
                <span>desa.calungbungur@gmail.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Public Services */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Pelayanan Publik</CardTitle>
          <CardDescription>Status terkini layanan desa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publicServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="flex items-start space-x-3 p-4 border rounded-lg">
                  <Icon className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900">{service.title}</h3>
                      <Badge variant="secondary" className="text-green-700 bg-green-100">
                        {service.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Documents and Forms
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>Dokumen & Formulir</span>
          </CardTitle>
          <CardDescription>Unduh dokumen penting desa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.name}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Unduh
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* Dynamic Documents and Forms Manager
      <DocumentManager /> */}
      {/* Documents from public/files folder */}
      <DocumentList />
    </div>
  )
}
