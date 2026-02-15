"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Calendar, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BottomNav() {
    const pathname = usePathname()

    const navItems = [
        { href: "/dashboard", label: "Beranda", icon: Home },
        { href: "/dashboard/news", label: "Berita", icon: FileText },
        { href: "/dashboard/booking", label: "Booking", icon: Calendar },
        { href: "/dashboard/history", label: "Riwayat", icon: Clock },
        { href: "/dashboard/profile", label: "Profil", icon: User },
    ]

    return (
        <nav className="fixed bottom-0 z-50 w-full border-t bg-white h-16 pb-safe">
            <div className="grid h-full grid-cols-5">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 text-xs transition-colors",
                                isActive
                                    ? "text-brand-primary font-medium"
                                    : "text-slate-500 hover:text-slate-700"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive && "fill-current")} />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
