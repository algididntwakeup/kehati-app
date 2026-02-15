"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, User, Lock, Briefcase, BadgeCheck, Mail } from "lucide-react"

export default function RegisterPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate registration delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false)
        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-md border-t-4 border-t-slate-800 shadow-xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto bg-slate-100 p-3 rounded-full w-fit mb-2">
                        <Shield className="w-8 h-8 text-slate-800" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">Registrasi Personel</CardTitle>
                    <CardDescription>
                        Lengkapi data diri untuk akses layanan KEHATI
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="fullname">Nama Lengkap</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input id="fullname" placeholder="Bripda Algi" className="pl-9" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="nrp">NRP</Label>
                                <div className="relative">
                                    <BadgeCheck className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                    <Input id="nrp" type="number" placeholder="12345678" className="pl-9" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="rank">Pangkat</Label>
                                <select
                                    id="rank"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                >
                                    <option value="">Pilih Pangkat</option>
                                    <option value="Bripda">Bripda</option>
                                    <option value="Briptu">Briptu</option>
                                    <option value="Brigadir">Brigadir</option>
                                    <option value="Ipda">Ipda</option>
                                    <option value="Iptu">Iptu</option>
                                    <option value="AKP">AKP</option>
                                    <option value="Kompol">Kompol</option>
                                    <option value="AKBP">AKBP</option>
                                    <option value="Kombes">Kombes</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="unit">Satuan Kerja (Satker)</Label>
                            <div className="relative">
                                <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input id="unit" placeholder="Polres Bogor" className="pl-9" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Dinas / Pribadi</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input id="email" type="email" placeholder="nama@polri.go.id" className="pl-9" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input id="password" type="password" placeholder="••••••••" className="pl-9" required />
                            </div>
                        </div>

                        <Button className="w-full bg-slate-900 hover:bg-slate-800" type="submit" disabled={isLoading}>
                            {isLoading ? "Memproses..." : "Daftar Akun"}
                        </Button>

                    </form>
                </CardContent>
                <CardFooter className="justify-center">
                    <p className="text-sm text-slate-500">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="text-slate-900 font-semibold hover:underline">
                            Login disini
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
