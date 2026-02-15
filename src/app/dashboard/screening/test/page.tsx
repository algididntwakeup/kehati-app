"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { screeningQuestions, calculateRisk } from "@/lib/screening-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
// Need to install @radix-ui/react-progress or create a simple Progress component if not exists
// Assuming simple div for progress for now to avoid dependency hell if I don't have it

export default function ScreeningTestPage() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers] = useState<Record<number, boolean>>({})

    const question = screeningQuestions[currentStep]
    const progress = ((currentStep + 1) / screeningQuestions.length) * 100

    const handleAnswer = (value: boolean) => {
        const newAnswers = { ...answers, [question.id]: value }
        setAnswers(newAnswers)

        if (currentStep < screeningQuestions.length - 1) {
            setCurrentStep(currentStep + 1)
        } else {
            // Finish test
            const riskLevel = calculateRisk(newAnswers)
            // In a real app, save to DB here. For now, pass via URL query or localStorage
            // Using query param for simplicity in MVP
            router.push(`/dashboard/screening/result?risk=${riskLevel}`)
        }
    }

    return (
        <div className="max-w-md mx-auto space-y-8 pt-8">
            <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-500">
                    <span>Progress</span>
                    <span>{currentStep + 1} / {screeningQuestions.length}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-primary transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <Card className="border-t-4 border-t-brand-primary shadow-lg min-h-[300px] flex flex-col justify-center">
                <CardContent className="space-y-8 text-center p-8">
                    <h2 className="text-xl font-medium text-slate-800 leading-relaxed">
                        {question.question}
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            variant="outline"
                            onClick={() => handleAnswer(false)}
                            className="h-14 text-lg border-slate-300 hover:bg-slate-50"
                        >
                            TIDAK
                        </Button>
                        <Button
                            onClick={() => handleAnswer(true)}
                            className="h-14 text-lg bg-brand-primary hover:bg-brand-secondary"
                        >
                            YA
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
