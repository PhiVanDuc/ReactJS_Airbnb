import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

export default function FormOAuth() {
    return (
        <div className="flex gap-x-[10px]">
            <div className="hover:bg-slate-50 py-[10px] border border-neutral-200 rounded-[5px] w-full flex justify-center cursor-pointer hover:shadow-sm transition">
                <FcGoogle size={25} />
            </div>

            <div className="hover:bg-slate-50 py-[10px] border border-neutral-200 rounded-[5px] w-full flex justify-center cursor-pointer hover:shadow-sm transition">
                <IoLogoGithub size={25} />
            </div>
        </div>
    )
}
