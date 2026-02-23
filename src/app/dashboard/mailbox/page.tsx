"use client"

import { mockMessages } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MailOpen } from "lucide-react"
import Link from "next/link"

export default function MailboxPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="-ml-2">
                        <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                    </Button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Kotak Pesan</h1>
            </div>

            <div className="space-y-3">
                {mockMessages.map((message) => (
                    <Link href={`/dashboard/mailbox/${message.id}`} key={message.id} className="block">
                        <Card className={`transition-all hover:shadow-md border-l-4 ${message.isRead ? 'bg-white border-l-slate-300' : 'bg-blue-50/50 border-l-brand-primary'}`}>
                            <CardContent className="p-4 flex gap-4 items-start">
                                <div className="mt-1">
                                    {message.isRead ? (
                                        <MailOpen className="w-5 h-5 text-slate-400" />
                                    ) : (
                                        <Mail className="w-5 h-5 text-brand-primary fill-brand-primary/10" />
                                    )}
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className={`text-sm ${message.isRead ? 'font-medium text-slate-700' : 'font-bold text-slate-900'}`}>
                                            {message.title}
                                        </h3>
                                        <span className="text-xs text-slate-500 shrink-0 ml-2">{message.date}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 font-medium">{message.sender}</p>
                                    <p className="text-sm text-slate-500 line-clamp-1 border-t pt-2 mt-2">{message.content}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
                {mockMessages.length === 0 && (
                    <div className="text-center py-12 text-slate-500">
                        Belum ada pesan masuk.
                    </div>
                )}
            </div>
        </div>
    )
}
