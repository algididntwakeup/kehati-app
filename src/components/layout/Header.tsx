"use client"

import { useState, useRef, useEffect } from "react"
import { Shield, Bell, User, Mail, LogOut, Settings } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Header() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLogout = () => {
        setIsProfileOpen(false)
        router.push('/login')
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="flex h-16 items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-brand-primary rounded-full p-1.5 text-white">
                        <Shield className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-lg text-brand-primary tracking-tight">KEHATI</span>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/dashboard/mailbox" className="relative group">
                        <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0 text-slate-500 group-hover:text-brand-primary transition-colors">
                            <Mail className="h-5 w-5" />
                        </Button>
                        <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                    </Link>
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0 text-slate-500 hover:text-brand-primary transition-colors">
                        <Bell className="h-5 w-5" />
                    </Button>

                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-1"
                        >
                            <User className="h-5 w-5" />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-slate-100 ring-1 ring-black ring-opacity-5 z-50">
                                <Link
                                    href="/dashboard/profile"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-primary"
                                >
                                    <Settings className="h-4 w-4 mr-2" />
                                    Profil & Pengaturan
                                </Link>
                                <div className="border-t border-slate-100 my-1"></div>
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
