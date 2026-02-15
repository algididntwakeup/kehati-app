import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { newsData } from "@/lib/mock-data"

const news = newsData.slice(0, 2) // Show only latest 2 news

export default function NewsWidget() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Berita Terkini</h2>
                <Link href="/dashboard/news">
                    <Button variant="ghost" size="sm" className="text-brand-primary h-8 px-2">
                        Lihat Semua <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </Link>
            </div>

            <div className="space-y-3">
                {news.map((item) => (
                    <Link href={`/dashboard/news/${item.id}`} key={item.id}>
                        <Card className="flex overflow-hidden mb-3 hover:shadow-md transition-shadow border-slate-100">
                            <div className="w-24 h-24 relative bg-slate-200 shrink-0">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className="p-3 flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-semibold text-brand-secondary bg-blue-50 px-2 py-0.5 rounded-full">{item.category}</span>
                                    <h3 className="text-sm font-medium leading-tight mt-1 line-clamp-2 text-slate-800">{item.title}</h3>
                                </div>
                                <p className="text-xs text-slate-400">{item.date}</p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
