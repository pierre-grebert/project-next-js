import Link from "next/link"

export const Header:React.FC = () => {
    return (
        <>
        <div className="flex justify-center flex-row gap-x-4 text-center items-center bg-[#545454] pt-2 pb-2">

            <div className="flex justify-center bg-[#e8f2ff] w-40 h-7 rounded-full">
                <Link className="object-cover w-40 h-7 rounded-full hover:transition-colors hover:bg-[#b98242] hover:text-white" href="/">🏠 Accueil</Link>
            </div>

            <div className="flex justify-center bg-[#e8f2ff] w-40 h-7 rounded-full">
                <Link className="object-cover w-40 h-7 rounded-full hover:transition-colors hover:bg-[#b98242] hover:text-white" href="/cv">📄 CV</Link>
            </div>

        </div>
        </>
    )
}