"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, User, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate login
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading(false)
        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <Card className="w-full max-w-md border-t-4 border-t-slate-800 shadow-xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto bg-slate-100 p-3 rounded-full w-fit mb-2">
                        <Shield className="w-8 h-8 text-slate-800" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900">KEHATI</CardTitle>
                    <CardDescription>
                        Layanan Psikologi Online SDM Polda Jabar
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="identifier">NRP / Email</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input
                                    id="identifier"
                                    placeholder="Masukkan NRP atau Email"
                                    className="pl-9"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link href="#" className="text-xs text-slate-500 hover:text-slate-800 hover:underline">
                                    Lupa password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-9"
                                    required
                                />
                            </div>
                        </div>

                        <Button className="w-full bg-slate-900 hover:bg-slate-800 mt-2" type="submit" disabled={loading}>
                            {loading ? "Memproses..." : "Masuk Aplikasi"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t p-6 bg-slate-50 rounded-b-xl">
                    <div className="text-center text-sm text-slate-600">
                        Belum terdaftar?{" "}
                        <Link href="/register" className="font-semibold text-slate-900 hover:underline inline-flex items-center">
                            Registrasi Personel <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                    </div>
                    <p className="text-xs text-slate-400 text-center">
                        &copy; 2026 Biro SDM Polda Jabar. Hak Cipta Dilindungi.
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
