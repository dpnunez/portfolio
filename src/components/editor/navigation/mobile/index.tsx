'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import * as React from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Editor,
} from '@/components'
import { menu } from '@/constants/data'

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
          <Editor.Navigation.FileTreeNavigation data={menu} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
