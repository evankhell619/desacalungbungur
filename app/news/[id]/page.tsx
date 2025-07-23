import { getAllNews } from "@/lib/news-data"
import NewsDetailPageClient from "./NewsDetailPageClient"

interface NewsDetailPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const news = getAllNews()
  return news.map((article) => ({
    id: article.id,
  }))
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  return <NewsDetailPageClient />
}
