import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-200 p-4 text-center">
      <div className="mb-8 p-6 bg-white rounded-full shadow-xl">
        <Shield className="w-24 h-24 text-brand-primary" />
      </div>

      <h1 className="text-4xl font-bold text-brand-primary mb-2 tracking-tight">KEHATI</h1>
      <p className="text-xl text-slate-600 mb-8 max-w-md">
        Layanan Psikologi Online<br />
        Biro SDM Polda Jabar
      </p>

      <div className="space-y-4 w-full max-w-xs">
        <Link href="/login" className="block w-full">
          <Button size="lg" className="w-full text-lg shadow-lg">
            Masuk Aplikasi
          </Button>
        </Link>

        <div className="pt-8 text-sm text-slate-400">
          <p>Protected by Polda Jabar</p>
          <p>v1.0.0</p>
        </div>
      </div>
    </div>
  )
}
