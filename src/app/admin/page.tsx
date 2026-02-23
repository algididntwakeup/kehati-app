"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    CalendarCheck,
    AlertCircle,
    Clock,
    CheckCircle2,
    UserPlus,
    MessageSquare,
    Activity
} from "lucide-react"

export default function AdminDashboardPage() {
    // Mock Data for Admin View
    const stats = [
        { title: "Total Janji Temu Hari Ini", value: "12", icon: CalendarCheck, color: "text-blue-600", bg: "bg-blue-100" },
        { title: "Menunggu Persetujuan", value: "5", icon: AlertCircle, color: "text-orange-600", bg: "bg-orange-100" },
        { title: "Pasien Aktif Bulan Ini", value: "156", icon: Users, color: "text-emerald-600", bg: "bg-emerald-100" },
    ]

    const upcomingSchedules = [
        { id: "1", name: "Bripda Ahmad Yusuf", rank: "Bripda", time: "09:00 WIB", type: "Tatapan Muka", status: "menunggu", statusLabel: "Menunggu" },
        { id: "2", name: "Ipda Rini Andini", rank: "Ipda", time: "10:30 WIB", type: "Online", status: "disetujui", statusLabel: "Disetujui" },
        { id: "3", name: "Kompol Budi Hartono", rank: "Kompol", time: "13:00 WIB", type: "Tatapan Muka", status: "selesai", statusLabel: "Selesai" },
        { id: "4", name: "Aipda Sandi Wijaya", rank: "Aipda", time: "15:00 WIB", type: "Online", status: "disetujui", statusLabel: "Disetujui" },
    ]

    const recentActivities = [
        { id: 1, text: "Bripda Rina mengajukan jadwal konseling baru.", time: "10 menit lalu", icon: CalendarCheck },
        { id: 2, text: "Hasil E-Triase Aipda Hendra (Risiko Tinggi).", time: "35 menit lalu", icon: AlertCircle },
        { id: 3, text: "Sesi konseling dengan Kompol Budi selesai.", time: "1 jam lalu", icon: CheckCircle2 },
        { id: 4, text: "Pendaftaran akun baru: Brigadir Faisal.", time: "2 jam lalu", icon: UserPlus },
    ]

    const getStatusBadge = (status: string, label: string) => {
        switch (status) {
            case "menunggu":
                return <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">{label}</Badge>
            case "disetujui":
                return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{label}</Badge>
            case "selesai":
                return <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">{label}</Badge>
            default:
                return <Badge variant="outline">{label}</Badge>
        }
    }

    return (
        <div className="space-y-6">

            {/* Header Area */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Konselor</h1>
                <p className="text-slate-500 mt-1">Ringkasan aktivitas layanan psikologi hari ini.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="shadow-sm border-slate-200">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                            <div className={`p-4 rounded-full ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Upcoming Schedules (Takes up 2 columns on lg) */}
                <Card className="lg:col-span-2 shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 pb-4">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Clock className="w-5 h-5 text-brand-primary" />
                                Jadwal Terdekat
                            </CardTitle>
                            <span className="text-sm text-brand-primary font-medium hover:underline cursor-pointer">Lihat Semua</span>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            {upcomingSchedules.map((schedule) => (
                                <div key={schedule.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between sm:flex-row flex-col sm:items-center gap-4">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium shrink-0">
                                            {schedule.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 leading-none mb-1">
                                                {schedule.name}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <span className="font-medium text-slate-700">{schedule.rank}</span>
                                                <span>•</span>
                                                <span>{schedule.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                                        <div className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                                            {schedule.time}
                                        </div>
                                        {getStatusBadge(schedule.status, schedule.statusLabel)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Activity Log (Takes up 1 column on lg) */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 pb-4">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Activity className="w-5 h-5 text-brand-primary" />
                            Aktivitas Terkini
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="space-y-6">
                            {recentActivities.map((activity, index) => (
                                <div key={activity.id} className="flex gap-4 relative">
                                    {/* Timeline connector line */}
                                    {index !== recentActivities.length - 1 && (
                                        <div className="absolute top-8 bottom-[-24px] left-[15px] w-px bg-slate-200" />
                                    )}

                                    <div className="mt-1 relative z-10 bg-white">
                                        <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                                            <activity.icon className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="space-y-1 py-1">
                                        <p className="text-sm text-slate-700 leading-snug">
                                            {activity.text}
                                        </p>
                                        <p className="text-xs text-slate-400">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
