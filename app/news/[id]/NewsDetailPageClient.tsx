"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getNewsById, getAllNews } from "@/lib/news-data";
import { notFound } from "next/navigation";
import { useParams, useRouter } from "next/navigation";

export default function NewsDetailPageClient() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const article = getNewsById(params.id);

  if (!article) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Acara: "bg-purple-100 text-purple-800",
      Kesehatan: "bg-red-100 text-red-800",
      Bansos: "bg-blue-100 text-blue-800",
      Komunitas: "bg-green-100 text-green-800",
      Pemerintahan: "bg-gray-100 text-gray-800",
      Keamanan: "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin ke clipboard!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/news">
          <Button
            variant="outline"
            className="flex items-center space-x-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita</span>
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="outline"
              className={getCategoryColor(article.category)}
            >
              {article.category}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(article.sourceUrl, "_blank")}
            >
              Sumber
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Bagikan
            </Button>
          </div>

          <CardTitle className="text-3xl font-bold mb-4">
            {article.title}
          </CardTitle>

          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.date).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 menit baca</span>
            </div>
          </div>

          <CardDescription className="text-lg text-gray-700">
            {article.excerpt}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Article Image */}
      {article.image && (
        <div className="mb-8">
          <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <Card>
        <CardContent className="pt-6">
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </CardContent>
      </Card>

      {/* Article Footer */}
      <Card className="mt-8 bg-gray-50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Ditulis oleh</p>
              <p className="font-semibold text-gray-900">{article.author}</p>
              <p className="text-sm text-gray-500">
                Dipublikasikan pada{" "}
                {new Date(article.date).toLocaleDateString("id-ID")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
