'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import * as React from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer'
import { menu } from '@/constants/data'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components'
import Link from 'next/link'
import { FileTreeNavigation } from '.'

function MenuItems({ items }: { items: MenuItem[] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => {
        if (item.subItems !== undefined) {
          return (
            <Collapsible key={item.name}>
              <CollapsibleTrigger asChild>
                <MenuItem>{item.name}</MenuItem>
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-8">
                <MenuItems items={item.subItems} />
              </CollapsibleContent>
            </Collapsible>
          )
        }

        return (
          <Link href={item.href} key={item.name}>
            <MenuItem>{item.name}</MenuItem>
          </Link>
        )
      })}
    </ul>
  )
}

function MenuItem({ children, ...props }: { children: React.ReactNode }) {
  return (
    <span className="text-xl font-bold" {...props}>
      {children}
    </span>
  )
}

export function Mobile() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <HamburgerMenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Menu Navigation</DrawerTitle>
          </DrawerHeader>
          <FileTreeNavigation data={menu} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
