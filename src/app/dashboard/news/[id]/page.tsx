import { newsData } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const newsItem = newsData.find(n => n.id === parseInt(id))

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="space-y-6 pb-8">
            {/* Navigation */}
            <Link href="/dashboard/news">
                <Button variant="ghost" size="sm" className="-ml-2 text-slate-500">
                    <ArrowLeft className="w-5 h-5 mr-1" /> Kembali ke Berita
                </Button>
            </Link>

            {/* Article Content */}
            <article className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="space-y-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-secondary bg-blue-50 px-2 py-1 rounded-full">
                        <Tag className="w-3 h-3" /> {newsItem.category}
                    </span>
                    <h1 className="text-2xl font-bold text-slate-900 leading-tight">{newsItem.title}</h1>
                    <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {newsItem.date}
                    </div>
                </div>

                <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-slate-100">
                    <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div
                    className="prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:text-slate-800"
                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
            </article>
        </div>
    )
}
