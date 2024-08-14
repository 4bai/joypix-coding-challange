import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuList,
} from '~/components/ui/navigation-menu'
import HeaderAccount from '~/components/header/header-account'

export default function header() {
  return (
    <div className="flex w-full justify-between p-5">
      <Link className="flex items-center gap-2" href="/">
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
