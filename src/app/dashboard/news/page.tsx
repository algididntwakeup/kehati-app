import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { newsData } from "@/lib/mock-data"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="-ml-2">
                        <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                    </Button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Berita & Artikel</h1>
            </div>

            <div className="grid gap-4">
                {newsData.map((item) => (
                    <Link href={`/dashboard/news/${item.id}`} key={item.id}>
                        <Card className="overflow-hidden hover:shadow-md transition-shadow border-slate-200">
                            <div className="aspect-video w-full relative bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-brand-secondary bg-blue-50 px-2 py-0.5 rounded-full">{item.category}</span>
                                    <span className="text-xs text-slate-400">{item.date}</span>
                                </div>
                                <h2 className="font-bold text-slate-800 leading-tight mb-2">{item.title}</h2>
                                <p className="text-sm text-slate-500 line-clamp-2">
                                    {item.content.replace(/<[^>]*>?/gm, '')}
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
