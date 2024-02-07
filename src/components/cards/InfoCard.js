export function InfoCard({titulo, valor}) {
    return <div className="flex-shrink-0 bg-gray-400 text-center text-white w-28 h-28 flex gap-4 justify-center flex-col items-center rounded-3xl">
        <div className="text-xs">{titulo}</div>
        <div className="text-xl font-bold">{valor}</div>
    </div>
}