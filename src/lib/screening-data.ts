export const screeningQuestions = [
    {
        id: 1,
        question: "Apakah Anda sering merasa sakit kepala?",
    },
    {
        id: 2,
        question: "Apakah tidur Anda tidak nyenyak?",
    },
    {
        id: 3,
        question: "Apakah Anda mudah merasa takut?",
    },
    {
        id: 4,
        question: "Apakah Anda merasa cemas, tegang, atau khawatir?",
    },
    {
        id: 5,
        question: "Apakah tangan Anda gemetar?",
    },
    {
        id: 6,
        question: "Apakah pencernaan Anda terganggu / buruk?",
    },
    {
        id: 7,
        question: "Apakah Anda sulit berpikir jernih?",
    },
    {
        id: 8,
        question: "Apakah Anda merasa tidak bahagia?",
    },
    {
        id: 9,
        question: "Apakah Anda sering menangis?",
    },
    {
        id: 10,
        question: "Apakah Anda merasa sulit untuk menikmati kegiatan sehari-hari?",
    },
    {
        id: 11,
        question: "Apakah Anda merasa sulit mengambil keputusan?",
    },
    {
        id: 12,
        question: "Apakah pekerjaan sehari-hari Anda terganggu?",
    },
    {
        id: 13,
        question: "Apakah Anda merasa tidak mampun memainkan peran yang berguna dalam hidup?",
    },
    {
        id: 14,
        question: "Apakah Anda kehilangan minat pada berbagai hal?",
    },
    {
        id: 15,
        question: "Apakah Anda merasa tidak berharga?",
    },
    {
        id: 16,
        question: "Apakah Anda mempunyai pkiran untuk mengakhiri hidup?",
    },
    {
        id: 17,
        question: "Apakah Anda merasa lelah sepanjang waktu?",
    },
    {
        id: 18,
        question: "Apakah Anda mengalami rasa tidak enak di perut?",
    },
    {
        id: 19,
        question: "Apakah Anda mudah lelah?",
    },
    {
        id: 20,
        question: "Apakah Anda sedang menggunakan obat-obatan?",
    }
];

export const calculateRisk = (answers: Record<number, boolean>) => {
    // Simple logic: If more than 6 "Yes", consider High Risk (SRQ-20 cutoff is usually 6)
    const yesCount = Object.values(answers).filter((a) => a).length;
    return yesCount >= 6 ? "high" : "low";
};
