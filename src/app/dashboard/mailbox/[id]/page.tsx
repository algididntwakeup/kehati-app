"use client"

import { useParams, useRouter } from "next/navigation"
import { mockMessages } from "@/lib/mock-data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer, Download } from "lucide-react"

export default function MailboxDetailPage() {
    const params = useParams()
    const router = useRouter()
    const id = params.id as string

    const message = mockMessages.find(msg => msg.id === id)

    if (!message) {
        return (
            <div className="text-center py-12 space-y-4">
                <p className="text-slate-500">Pesan tidak ditemukan.</p>
                <Button variant="outline" onClick={() => router.push('/dashboard/mailbox')}>
                    Kembali ke Kotak Pesan
                </Button>
            </div>
        )
    }

    return (
        <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard/mailbox')} className="-ml-2">
                    <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-slate-500 hover:text-brand-primary">
                        <Printer className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-slate-500 hover:text-brand-primary">
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <Card className="shadow-lg border-t-8 border-t-brand-primary bg-white">
                <CardHeader className="border-b border-slate-100 pb-6 mb-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-slate-50 px-3 py-1 rounded-md border text-xs font-mono text-slate-600">
                            ID: {message.id}
                        </div>
                        <div className="text-sm font-medium text-slate-500">
                            {message.date}
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 leading-tight">
                        {message.title}
                    </h1>
                    <div className="flex items-center gap-2 mt-4 text-sm text-slate-600">
                        <span className="font-semibold px-2 py-0.5 bg-blue-50 text-brand-primary rounded">Dari:</span>
                        <span>{message.sender}</span>
                    </div>
                </CardHeader>

                <CardContent className="prose prose-slate prose-sm max-w-none text-slate-800 leading-relaxed font-serif pb-8 px-6 sm:px-8">
                    {/* Render content with line breaks */}
                    {message.content.split('\n').map((line, i) => (
                        <p key={i} className="mb-4">
                            {line.trim() === '' ? <br /> : line}
                        </p>
                    ))}

                    <div className="mt-12 pt-8 border-t border-dashed border-slate-200 text-sm text-slate-500 text-center">
                        Dokumen ini digenerate secara otomatis oleh Sistem Aplikasi KEHATI<br />
                        Biro SDM Polda Jawa Barat
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
