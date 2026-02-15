import MenuGrid from "@/components/dashboard/MenuGrid"
import NewsWidget from "@/components/dashboard/NewsWidget"
import { Sun } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Greeting Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-slate-500 text-sm mb-1">Selamat Pagi,</p>
                        <h1 className="text-2xl font-bold text-slate-900">Bripda Algi</h1>
                        <p className="text-xs text-brand-accent mt-1">Ditreskrimum Polda Jabar</p>
                    </div>
                    <Sun className="w-8 h-8 text-yellow-500" />
                </div>
            </div>

            {/* Menu Grid */}
            <MenuGrid />

            {/* News Widget */}
            <NewsWidget />
        </div>
    )
}
