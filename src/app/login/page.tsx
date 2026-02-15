"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, User, Briefcase, BadgeCheck } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
    const [loading, setLoading] = React.useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate login
        setTimeout(() => {
            setLoading(false)
            alert("Login Simulation: Success!")
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-police-blue-50 to-white">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary text-white mb-4 shadow-lg">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-brand-primary">KEHATI</h1>
                    <p className="text-slate-500">Layanan Psikologi Online SDM Polda Jabar</p>
                </div>

                <Card className="border-t-4 border-t-brand-primary shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-xl text-center text-brand-primary">Selamat Datang</CardTitle>
                        <CardDescription className="text-center">
                            Silahkan masuk menggunakan NRP anda
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nrp">NRP</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="nrp" placeholder="Masukkan NRP" className="pl-9" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="rank">Pangkat</Label>
                                <div className="relative">
                                    <BadgeCheck className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <select
                                        id="rank"
                                        className="flex h-10 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:cursor-not-allowed disabled:opacity-50 text-slate-900"
                                        required
                                    >
                                        <option value="" disabled selected>Pilih Pangkat</option>
                                        <option value="perwira-tinggi">Perwira Tinggi (Jenderal)</option>
                                        <option value="perwira-menengah">Perwira Menengah (Kombes - Kompol)</option>
                                        <option value="perwira-pertama">Perwira Pertama (AKP - Ipda)</option>
                                        <option value="bintara">Bintara</option>
                                        <option value="tamtama">Tamtama</option>
                                        <option value="pns">PNS Polri</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="unit">Satuan Kerja (Satker)</Label>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="unit" placeholder="Contoh: Ditreskrimum" className="pl-9" required />
                                </div>
                            </div>

                            <Button type="submit" className="w-full mt-6 shadow-md" disabled={loading}>
                                {loading ? "Memproses..." : "Masuk Aplikasi"}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t p-4 bg-slate-50 rounded-b-xl">
                        <p className="text-xs text-slate-400 text-center">
                            &copy; 2024 Biro Psikologi SSDM Polda Jabar<br />
                            Aplikasi KEHATI v1.0
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
