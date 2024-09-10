import Image from "next/image"
interface IconProps{
    srcpath:string,
    className:string
}
export default function Icons({srcpath,className}:IconProps){
    return(
            <Image src={srcpath} alt={srcpath} className={className} />
    )
}