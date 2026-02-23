"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    CalendarDays,
    Users,
    FileText,
    Settings,
    LogOut,
    Menu,
    X,
    Shield
} from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Jadwal Konseling", href: "/admin/schedule", icon: CalendarDays },
        { name: "Data Anggota", href: "/admin/members", icon: Users },
        { name: "Laporan", href: "/admin/reports", icon: FileText },
        { name: "Pengaturan", href: "/admin/settings", icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-slate-50 flex">

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50">
                    <Shield className="w-6 h-6 text-blue-400 mr-2" />
                    <span className="text-lg font-bold text-white tracking-widest">KEHATI <span className="text-blue-400 font-normal">ADMIN</span></span>
                    <button
                        className="ml-auto lg:hidden text-slate-400 hover:text-white"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Sidebar Nav */}
                <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                                        : "hover:bg-slate-800 hover:text-white"
                                    }`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400 transition-colors"}`} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-slate-800">
                    <Link
                        href="/login"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout Admin</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 shadow-sm">
                    <button
                        className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Right side Header */}
                    <div className="ml-auto flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-slate-900">AKBP Dr. Sarah, M.Psi</p>
                            <p className="text-xs text-slate-500">Konselor Utama</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-blue-100 border-2 border-blue-200 overflow-hidden">
                            <img src="https://placehold.co/100x100/1e3a8a/ffffff?text=SR" alt="Admin" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 p-4 lg:p-8 overflow-y-auto bg-slate-50">
                    {children}
                </div>
            </main>

        </div>
    )
}

