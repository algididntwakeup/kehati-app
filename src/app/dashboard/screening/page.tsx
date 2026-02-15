import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ScreeningPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="-ml-2">
                        <ArrowLeft className="w-5 h-5 mr-1" /> Kembali
                    </Button>
                </Link>
                <h1 className="text-xl font-bold text-slate-900">Screening Mandiri</h1>
            </div>

            <Card className="border-l-4 border-l-blue-500 shadow-md">
                <CardHeader>
                    <CardTitle className="text-lg">SRQ-20 (Self Reporting Questionnaire)</CardTitle>
                    <CardDescription>
                        Screening ini bertujuan untuk mendeteksi dini masalah kesehatan mental.
                        Hasil screening ini bersifat <strong>RAHASIA</strong> dan hanya digunakan untuk kepentingan medis.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-blue-800 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>
                            Jawablah pertanyaan berikut sesuai dengan apa yang Anda rasakan selama <strong>30 hari terakhir</strong>.
                        </p>
                    </div>

                    <Link href="/dashboard/screening/test" className="block">
                        <Button className="w-full" size="lg">
                            Mulai Screening
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
