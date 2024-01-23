"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function MainNav() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              legacyBehavior
              passHref
              className="flex items-center space-x-2"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="inline-block font-bold text-2xl">Zero Chat</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link
              href="/uswap"
              legacyBehavior
              passHref
              className="flex items-center space-x-2"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="inline-block font-bold">Swap Tokens</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
