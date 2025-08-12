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
    label: string;
}

const ctaLinkEmail = "https://mail.google.com/mail/?view=cm&to=noerkholis.madjid@gmail.com&su=Job%20Opportunity&body=Halo%20Nurkholis%2C%0A%0ASaya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda..."

const allSocialMedia: SocialMediaProps[] = [
  { icon: RiWhatsappFill, link: "https://wa.me/+6285157447629", className: "hover:text-green-500", label: "WhatsApp" },
  { icon: MdEmail, link: ctaLinkEmail, className: "hover:text-red-400", label: "Email" },
  { icon: RiInstagramFill, link: "https://instagram.com/noerkholis.madjid", className: "hover:text-pink-500", label: "Instagram" },
  { icon: RiGithubFill, link: "https://github.com/Noerkholizs", className: "hover:text-gray-400", label: "GitHub" },
  { icon: FaLinkedin, link: "https://linkedin.com/in/noerkholis", className: "hover:text-blue-500", label: "LinkedIn" },
];

const sidebarSocialMedia: SocialMediaProps[] = [
  { icon: RiInstagramFill, link: "https://instagram.com/noerkholis.madjid", className: "hover:text-pink-500", label: "Instagram" },
  { icon: RiGithubFill, link: "https://github.com/Noerkholizs", className: "hover:text-gray-400", label: "GitHub" },
  { icon: FaLinkedin, link: "https://linkedin.com/in/noerkholis", className: "hover:text-blue-500", label: "LinkedIn" },
];

const SocialMedia = ({icon: Icon, link, className, label} : SocialMediaProps) => {
    return (
        <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
            aria-label={label}
        >
            <Icon 
                size={40} 
                className={cn(
                    className, 
                    "transition-all duration-200 group-hover:scale-110"
                )} 
            />
        </Link>
    )
}

export const SocialMediaGroup = () => {
    return (
        <div className="flex flex-col items-center gap-8 lg:gap-12 text-white">
          <div className="w-full max-w-2xl flex flex-col items-center">
            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-8">             
                {allSocialMedia.map((item, index) => (
                    <SocialMedia key={index} {...item} />
                ))}
            </div>

            {/* Hire Me Button */}
            <Button 
                className="w-full max-w-xs lg:max-w-sm rounded-lg py-4 text-lg font-semibold hover:bg-neutral-800 hover:text-white transition-all duration-200 border-2 border-white/20 hover:border-white/40"
                variant="outline"
                asChild
            >
                <Link href={ctaLinkEmail} target="_blank" rel="noopener noreferrer">
                    Hire Me
                </Link>
            </Button>
          </div>
        </div>
    );
};

export const SidebarSocialMedia = () => {
    return (
        <div className="flex gap-4">
            {sidebarSocialMedia.map(({icon: Icon, className, link, label}, index) => (
            <Link 
                key={index} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label={label}
            >
                <Icon 
                    size={30} 
                    className={cn(
                        className, 
                        "transition-all duration-200 group-hover:scale-110"
                    )} 
                />
            </Link>
            ))}
        </div>
    )
};