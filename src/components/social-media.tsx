import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiGithubFill, RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Button } from "./ui/button";

interface SocialMediaProps {
    icon: IconType;
    link: string;
    className: string;
}


const allSocialMedia: SocialMediaProps[] = [
  { icon: RiWhatsappFill, link: "https://wa.me/085157447629", className: "hover:text-green-500" },
  { icon: MdEmail, link: "mailto:example@email.com", className: "hover:text-red-400" },
  { icon: RiInstagramFill, link: "https://instagram.com", className: "hover:text-pink-500" },
  { icon: RiGithubFill, link: "https://github.com", className: "hover:text-gray-400" },
  { icon: FaLinkedin, link: "https://linkedin.com", className: "hover:text-blue-500" },
];

const sidebarSocialMedia: SocialMediaProps[] = [

  { icon: RiInstagramFill, link: "https://instagram.com", className: "hover:text-pink-500" },
  { icon: RiGithubFill, link: "https://github.com", className: "hover:text-gray-400" },
  { icon: FaLinkedin, link: "https://linkedin.com", className: "hover:text-blue-500" },
];

const SocialMedia = ({icon: Icon, link, className} : SocialMediaProps) => {
    return (
        <>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Icon size={40} className={cn(className, "transition-colors")} />
            </Link>
        </>
    )
}

export const SocialMediaGroup = () => {
    return (
        <div className="flex flex-col items-center gap-6 text-white">
          <div className="lg:mr-60 flex flex-col items-center">
            <div className="flex gap-10">             
                {allSocialMedia.map((item, index) => (
                    <SocialMedia key={index} {...item} />
                ))}
            </div>

            <Button 
                className="mt-10 w-full rounded-md py-4 hover:bg-neutral-400 hover:text-black transition-colors cursor-pointer"
                variant="outline"
                >
                Hire Me
            </Button>
          </div>
        </div>
    );
};

export const SidebarSocialMedia = () => {
    return (
        <div className="flex gap-4">
            {sidebarSocialMedia.map(({icon: Icon, className, link}, index) => (
            <Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                <Icon size={30} className={cn(className, "transition-colors")} />
            </Link>
            ))}
        </div>
    )
};