import Link from "next/link";
import { ArrowLeftCircleIcon, StarIcon } from "@heroicons/react/20/solid";
export default function Studionavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5 bg-[#1A1A1A]">
                <Link href="/" className="text-yellow-500 flex items-center">
                    <ArrowLeftCircleIcon className="h-6 w-6" />  Go to Website
                </Link>

                <div className="flex items-center justify-center  text-yellow-500 border-2 border-white-200 p-5">
                    <StarIcon className="h-6 w-6" />
                    <h1>WELCOME TO DASHBOARD AND HAVE A LOOK AROUND </h1>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}
