import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowRight, Megaphone, Star } from "lucide-react"
import Link from "next/link"
import { getFeaturedNews, getRegularNews } from "@/lib/news-data"

export default function News() {
  const featuredNews = getFeaturedNews()
  const newsArticles = getRegularNews()

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Acara: "bg-purple-100 text-purple-800",
      Kesehatan: "bg-red-100 text-red-800",
      Infrastruktur: "bg-blue-100 text-blue-800",
      Komunitas: "bg-green-100 text-green-800",
      Pemerintahan: "bg-gray-100 text-gray-800",
      Keamanan: "bg-orange-100 text-orange-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Berita Desa</h1>
        <p className="text-gray-600">Tetap update dengan berita dan pengumuman terbaru</p>
      </div>

      {/* Featured News */}
      {featuredNews && (
        <Card className="mb-8 border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-800">Unggulan</Badge>
            </div>
            <CardTitle className="text-2xl">{featuredNews.title}</CardTitle>
            <CardDescription className="text-base">{featuredNews.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(featuredNews.date).toLocaleDateString("id-ID")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{featuredNews.author}</span>
                </div>
                <Badge variant="outline" className={getCategoryColor(featuredNews.category)}>
                  {featuredNews.category}
                </Badge>
              </div>
              <Link href={`/news/${featuredNews.id}`}>
                <Button>
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <Card key={article.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{new Date(article.date).toLocaleDateString("id-ID")}</span>
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
              <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <Link href={`/news/${article.id}`}>
                  <Button variant="outline" size="sm">
                    Baca Selengkapnya
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

     
    </div>
  )
}
