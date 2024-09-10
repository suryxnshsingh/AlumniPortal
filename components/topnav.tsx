import Image from "next/image"


export default function TopNav(){
    
    return(
        <div className="flex justify-center items-center bg-[#45433E] w-screen h-20">
            <input placeholder="Search" className="p-4 text-center placeholder-[#45433E] font-bold text-xl rounded-full w-1/3 bg-white"></input>
            <Image src="/icons/search.png" alt="search" height={28} width={28} className="-ml-16"/>
        </div>
    )
}