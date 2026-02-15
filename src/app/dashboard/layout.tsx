import Header from "@/components/layout/Header"
import BottomNav from "@/components/layout/BottomNav"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <Header />
            <main className="container max-w-md mx-auto p-4 space-y-6">
                {children}
            </main>
            <BottomNav />
        </div>
    )
}
