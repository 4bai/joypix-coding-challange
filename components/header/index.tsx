import React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
    NavigationMenuLink
} from "~/components/ui/navigation-menu"
import Image from "next/image"
import HeaderAccount from "~/components/header/header-account"

export default function header() {
    return (
        <div className="w-full flex justify-between p-5">
            <Link className="flex items-center gap-2" href="/" >
                <Image src="/icon.png" alt="logo" width={50} height={50} priority />
                <span className="hidden font-bold md:inline-block">Joypix</span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                        <HeaderAccount />
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}