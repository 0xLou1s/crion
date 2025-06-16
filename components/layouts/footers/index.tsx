import { TelegramIcon, XIcon } from "@/components/icons";
import Logo from "@/components/logo";
import Link from "next/link";

const links = [
  {
    title: "Whitepaper",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Terms of Service",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "X/Twitter",
    icon: XIcon,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: TelegramIcon,
    href: "#",
  },
];

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-primary block"
            >
              <social.icon className="size-6" />
            </Link>
          ))}
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Crion, All rights reserved
        </span>
      </div>
    </footer>
  );
}
