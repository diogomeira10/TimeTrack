export function InfoCard({informacao, value}) {
    return <div className="flex rounded-2xl gap-8 flex-col items-center justify-center  bg-gray-500 h-32 w-32">
        <div className='text-white text-xs'>{informacao}</div>
        <div className='text-3xl text-white'>{value}21</div>
    </div>
}