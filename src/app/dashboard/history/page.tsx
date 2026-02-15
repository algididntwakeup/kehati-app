"use client"

import { useState } from "react"
import { historyData } from "@/lib/mock-data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Video, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
    const [activeTab, setActiveTab] = useState("upcoming") // upcoming | history

    const filteredData = historyData.filter(item =>
        activeTab === "upcoming"
            ? item.status === "upcoming"
            : item.status === "completed" || item.status === "cancelled"
    )

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="-ml-2">
                        <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                    </Button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Riwayat Konseling</h1>
            </div>

            {/* Custom Tab Switcher */}
            <div className="grid grid-cols-2 bg-slate-100 p-1 rounded-lg">
                <button
                    onClick={() => setActiveTab("upcoming")}
                    className={`text-sm font-medium py-2 rounded-md transition-all ${activeTab === "upcoming" ? "bg-white text-brand-primary shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    Akan Datang
                </button>
                <button
                    onClick={() => setActiveTab("history")}
                    className={`text-sm font-medium py-2 rounded-md transition-all ${activeTab === "history" ? "bg-white text-brand-primary shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    Selesai
                </button>
            </div>

            <div className="space-y-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <Card key={item.id} className="border-l-4 border-l-brand-primary overflow-hidden">
                            <CardContent className="p-4 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Kode Tiket</p>
                                        <p className="font-mono font-bold text-slate-800">{item.id}</p>
                                    </div>
                                    <div className={`text-xs font-semibold px-2 py-1 rounded-full ${item.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                            item.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {item.status === 'upcoming' ? 'Terjadwal' : item.status === 'completed' ? 'Selesai' : 'Batal'}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center text-slate-600">
                                        <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center text-slate-600">
                                        <Clock className="w-4 h-4 mr-2 text-slate-400" />
                                        {item.time} WIB
                                    </div>
                                </div>

                                <div className="flex items-center text-sm text-slate-700 bg-slate-50 p-2 rounded">
                                    {item.type === 'online' ? <Video className="w-4 h-4 mr-2 text-brand-accent" /> : <MapPin className="w-4 h-4 mr-2 text-brand-accent" />}
                                    <span>{item.type === 'online' ? 'Konseling Daring (Zoom)' : 'Konseling Tatap Muka'}</span>
                                </div>
                            </CardContent>
                            {item.status === 'upcoming' && (
                                <CardFooter className="bg-slate-50 p-3 border-t">
                                    <Button size="sm" className="w-full bg-brand-primary">Check-in</Button>
                                </CardFooter>
                            )}
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-12 space-y-3">
                        <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                            <FileText className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-slate-900 font-medium">Belum ada riwayat</h3>
                            <p className="text-sm text-slate-500">Anda belum memiliki jadwal pada kategori ini.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
