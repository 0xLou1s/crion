"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { HyperText } from "@/components/hyper-text";
import { Button } from "@/components/ui/button";
import { WalletSelector } from "@/components/wallet-selector";

const menuItems = [

  { name: "Passport", href: "/passport" },
];

export const HomeHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-0"
      >
        {/* Full width blurred bg khi scroll */}
        {isScrolled && (
          <div
            className={
              `absolute inset-0 w-full h-full bg-[#171a2005] backdrop-blur-md z-0` +
              (menuState ? "" : " pointer-events-none")
            }
          />
        )}
        <div className="relative mx-auto  max-w-6xl px-6 lg:px-4 z-10">
          <div className="relative flex flex-wrap items-center justify-between gap-4 py-1 lg:gap-6">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo isScrolled={isScrolled} />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent z-30">
              <div className="hidden lg:block">
                <ul className="flex gap-6 text-sm font-medium">
                  {menuItems.map((item, index) => (
                    <li key={index} className="whitespace-nowrap">
                      <Link
                        href={item.href}
                        className="text-secondary transition duration-400 hover:text-primary font-mono uppercase cursor-pointer"
                        tabIndex={0}
                        onClick={e => {
                          e.preventDefault();
                          window.location.href = item.href;
                        }}
                      >
                        <HyperText>{item.name}</HyperText>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150 cursor-pointer"
                        tabIndex={0}
                        onClick={e => {
                          e.preventDefault();
                          setMenuState(false);
                          window.location.href = item.href;
                        }}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:ml-8">
                <WalletSelector />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
