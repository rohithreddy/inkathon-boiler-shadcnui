'use client';
import { buttonVariants } from "@/components/ui/button";
import MainNav from "./main-nav"
import { ThemeToggle } from "@/app/components/theme-button";
import { Icons } from "@/components/ui/icons";
import { ConnectButton } from "@/components/web3/connect-button";

export default function SiteHeader() {
    return(
        <>
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav ></MainNav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                {/* <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div> */}
              <ThemeToggle></ThemeToggle>
                <ConnectButton /> 
                </div>
                
                {/* <ThemeToggle></ThemeToggle>
                <ConnectButton />  */}
            </div>
        </header>
        </>
    )
}