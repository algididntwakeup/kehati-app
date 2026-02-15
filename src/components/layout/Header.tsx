import { Shield, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="flex h-16 items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-brand-primary rounded-full p-1.5 text-white">
                        <Shield className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-lg text-brand-primary tracking-tight">KEHATI</span>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0 text-slate-500">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                        <User className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </header>
    )
}
