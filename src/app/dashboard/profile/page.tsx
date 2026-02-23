"use client"

import { useState } from "react"
import { userData } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, User, Lock, Mail, BadgeCheck, Briefcase } from "lucide-react"

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<'data' | 'pengaturan'>('data')
    const [isLoading, setIsLoading] = useState(false)

    const handleSavePassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate save
        await new Promise(r => setTimeout(r, 1500))
        setIsLoading(false)
        alert("Pengaturan Berhasil Disimpan")
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">

            {/* Header Section */}
            <Card className="border-t-4 border-t-brand-primary overflow-hidden">
                <div className="bg-brand-primary/10 h-24 w-full"></div>
                <div className="px-6 pb-6 relative">
                    <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12">
                        <div className="h-24 w-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                            <img
                                src={userData.avatar}
                                alt={userData.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="text-center sm:text-left space-y-1 mb-2">
                            <h1 className="text-2xl font-bold text-slate-900">{userData.name}</h1>
                            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-slate-500 text-sm">
                                <span className="flex items-center gap-1">
                                    <BadgeCheck className="w-4 h-4 text-brand-primary" />
                                    {userData.rank}
                                </span>
                                <span className="hidden sm:inline text-slate-300">•</span>
                                <span className="flex items-center gap-1 font-mono">
                                    NRP: {userData.nrp}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Custom Tabs */}
            <div className="flex w-full bg-slate-100 rounded-lg p-1.5 shadow-sm">
                <button
                    onClick={() => setActiveTab('data')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${activeTab === 'data'
                            ? 'bg-white text-brand-primary shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                        }`}
                >
                    <User className="w-4 h-4" /> Data Personel
                </button>
                <button
                    onClick={() => setActiveTab('pengaturan')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${activeTab === 'pengaturan'
                            ? 'bg-white text-brand-primary shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                        }`}
                >
                    <Lock className="w-4 h-4" /> Pengaturan
                </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'data' && (
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Informasi Resmi</CardTitle>
                        <CardDescription>
                            Data personel terhubung dengan sistem SDM Polri. Perubahan data utama hubungi Admin Satker.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Nama Lengkap</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input defaultValue={userData.name} className="pl-9 bg-slate-50 text-slate-600" disabled />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>NRP</Label>
                                <div className="relative">
                                    <Shield className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input defaultValue={userData.nrp} className="pl-9 bg-slate-50 text-slate-600 font-mono" disabled />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Pangkat</Label>
                                <div className="relative">
                                    <BadgeCheck className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input defaultValue={userData.rank} className="pl-9 bg-slate-50 text-slate-600" disabled />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Satuan Kerja (Satker)</Label>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input defaultValue={userData.unit} className="pl-9 bg-slate-50 text-slate-600" disabled />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {activeTab === 'pengaturan' && (
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Keamanan Akun</CardTitle>
                        <CardDescription>
                            Perbarui alamat email dinas dan password aplikasi KEHATI Anda.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSavePassword} className="space-y-4 max-w-md">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Dinas</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="email" type="email" defaultValue="bripda.algi@polri.go.id" className="pl-9" />
                                </div>
                            </div>

                            <div className="py-2 border-b border-slate-100"></div>

                            <div className="space-y-2">
                                <Label htmlFor="current-password">Password Lama</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="current-password" type="password" placeholder="••••••••" className="pl-9" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">Password Baru</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="new-password" type="password" placeholder="Minimal 8 karakter" className="pl-9" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="confirm-password" type="password" placeholder="Ulangi password baru" className="pl-9" />
                                </div>
                            </div>

                            <Button type="submit" className="w-full mt-4 bg-brand-primary hover:bg-brand-primary/90" disabled={isLoading}>
                                {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}

        </div>
    )
}
