"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Calendar } from "lucide-react"
import Link from "next/link"
import React, { Suspense } from "react"

function ResultContent() {
    const searchParams = useSearchParams()
    const risk = searchParams.get("risk")

    const isHighRisk = risk === "high"

    return (
        <div className="space-y-6 pt-4">
            <div className="text-center space-y-2">
                {isHighRisk ? (
                    <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4 animate-bounce">
                        <AlertTriangle className="w-10 h-10" />
                    </div>
                ) : (
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                )}

                <h1 className="text-2xl font-bold text-slate-900">
                    {isHighRisk ? "Perlu Konsultasi Lanjut" : "Kondisi Mental Stabil"}
                </h1>
                <p className="text-slate-500">
                    {isHighRisk
                        ? "Berdasarkan hasil screening, kami menyarankan Anda untuk berkonsultasi dengan psikolog."
                        : "Pertahankan kesehatan mental Anda dengan pola hidup sehat dan istirahat yang cukup."}
                </p>
            </div>

            <Card className={`border-l-4 shadow-md ${isHighRisk ? "border-l-red-500" : "border-l-green-500"}`}>
                <CardHeader>
                    <CardTitle className="text-base">Rekomendasi Tindakan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isHighRisk ? (
                        <>
                            <div className="bg-red-50 p-4 rounded-lg text-sm text-red-800">
                                <p className="font-semibold mb-1">Rujukan Konseling</p>
                                <p>Segera jadwalkan sesi konseling dengan psikolog Biro SDM Polda Jabar.</p>
                            </div>
                            <Link href="/dashboard/booking" className="block">
                                <Button className="w-full bg-red-600 hover:bg-red-700">
                                    <Calendar className="w-4 h-4 mr-2" /> Buat Jadwal Konseling
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="bg-green-50 p-4 rounded-lg text-sm text-green-800">
                                <p className="font-semibold mb-1">Tetap Semangat!</p>
                                <p>Anda dapat melakukan screening ulang bulan depan atau jika merasa ada keluhan.</p>
                            </div>
                            <Link href="/dashboard" className="block">
                                <Button variant="outline" className="w-full">
                                    Kembali ke Beranda
                                </Button>
                            </Link>
                        </>
                    )}
                </CardContent>
            </Card>

            {isHighRisk && (
                <Link href="/dashboard" className="block text-center text-sm text-slate-400 hover:text-slate-600">
                    Kembali ke Beranda
                </Link>
            )}
        </div>
    )
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div>Loading result...</div>}>
            <ResultContent />
        </Suspense>
    )
}
