"use client"

import { Card } from "@/components/ui/card"
import { ClipboardList, CalendarDays, FileText, History } from "lucide-react"
import Link from "next/link"

const menuItems = [
    {
        title: "Screening",
        description: "Cek kesehatan mental",
        icon: ClipboardList,
        href: "/dashboard/screening",
        color: "bg-blue-500",
    },
    {
        title: "Booking",
        description: "Jadwal konseling",
        icon: CalendarDays,
        href: "/dashboard/booking",
        color: "bg-teal-500",
    },
    {
        title: "E-News",
        description: "Berita & Artikel",
        icon: FileText,
        href: "/dashboard/news",
        color: "bg-indigo-500",
    },
    {
        title: "Riwayat",
        description: "Catatan aktivitas",
        icon: History,
        href: "/dashboard/history",
        color: "bg-orange-500",
    },
]

export default function MenuGrid() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {menuItems.map((item) => (
                <Link href={item.href} key={item.title}>
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-transparent shadow-sm">
                        <div className="flex flex-col items-center text-center space-y-3 p-4">
                            <div className={`p-3 rounded-full ${item.color} text-white shadow-sm`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                <p className="text-xs text-slate-500">{item.description}</p>
                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
