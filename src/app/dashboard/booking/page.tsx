"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Calendar, Clock, Video, MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"

const timeSlots = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00"
]

export default function BookingPage() {
    const [date, setDate] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [type, setType] = useState("online") // online | offline
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
        }, 1500)
    }

    if (isSuccess) {
        return (
            <div className="space-y-6 pt-8 text-center">
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-900">Booking Berhasil!</h1>
                    <p className="text-slate-500">Jadwal konseling Anda telah terkonfirmasi.</p>
                </div>

                <Card className="max-w-xs mx-auto text-left border-dashed border-2 border-slate-300 shadow-none bg-slate-50">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-center text-sm border-b pb-2 border-slate-200">
                            <span className="text-slate-500">Tanggal</span>
                            <span className="font-medium text-slate-900">{date}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b pb-2 border-slate-200">
                            <span className="text-slate-500">Waktu</span>
                            <span className="font-medium text-slate-900">{selectedTime} WIB</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500">Metode</span>
                            <span className="font-medium text-brand-primary flex items-center">
                                {type === 'online' ? <Video className="w-3 h-3 mr-1" /> : <MapPin className="w-3 h-3 mr-1" />}
                                {type === 'online' ? 'Daring (Zoom)' : 'Tatap Muka'}
                            </span>
                        </div>
                    </CardContent>
                </Card>

                <div className="pt-4 space-y-3">
                    <Link href="/dashboard" className="block">
                        <Button className="w-full">
                            Kembali ke Beranda
                        </Button>
                    </Link>
                    <Link href="/dashboard/history" className="block">
                        <Button variant="outline" className="w-full">
                            Lihat Tiket Saya
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="-ml-2">
                        <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                    </Button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Buat Jadwal</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Pilih Jadwal Konseling</CardTitle>
                    <CardDescription>Sesuaikan dengan waktu luang dinas Anda.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleBooking} className="space-y-6">

                        {/* Date Selection */}
                        <div className="space-y-3">
                            <Label htmlFor="date">Tanggal</Label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input
                                    id="date"
                                    type="date"
                                    className="pl-9"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Type Selection */}
                        <div className="space-y-3">
                            <Label>Metode Konseling</Label>
                            <div className="grid grid-cols-2 gap-3">
                                <div
                                    className={`border rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer transition-all ${type === 'online' ? 'border-brand-primary bg-blue-50 text-brand-primary ring-1 ring-brand-primary' : 'border-slate-200 hover:border-slate-300'}`}
                                    onClick={() => setType('online')}
                                >
                                    <Video className="w-6 h-6" />
                                    <span className="text-sm font-medium">Daring (Online)</span>
                                </div>
                                <div
                                    className={`border rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer transition-all ${type === 'offline' ? 'border-brand-primary bg-blue-50 text-brand-primary ring-1 ring-brand-primary' : 'border-slate-200 hover:border-slate-300'}`}
                                    onClick={() => setType('offline')}
                                >
                                    <MapPin className="w-6 h-6" />
                                    <span className="text-sm font-medium">Tatap Muka</span>
                                </div>
                            </div>
                        </div>

                        {/* Time Selection */}
                        <div className="space-y-3">
                            <Label>Waktu Tersedia</Label>
                            <div className="grid grid-cols-4 gap-2">
                                {timeSlots.map((time) => (
                                    <Button
                                        key={time}
                                        type="button"
                                        variant={selectedTime === time ? "default" : "outline"}
                                        className={`h-10 text-xs ${selectedTime === time ? 'bg-brand-primary text-white' : 'border-slate-200 text-slate-600'}`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </div>
                            {selectedTime === "" && (
                                <p className="text-xs text-red-500 mt-1">*Silahkan pilih waktu terlebih dahulu</p>
                            )}
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-semibold shadow-md"
                                disabled={!date || !selectedTime || isLoading}
                            >
                                {isLoading ? "Memproses..." : "Konfirmasi Jadwal"}
                            </Button>
                            <p className="text-xs text-slate-400 text-center mt-3">
                                Pastikan Anda datang tepat waktu sesuai jadwal yang dipilih.
                            </p>
                        </div>

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
