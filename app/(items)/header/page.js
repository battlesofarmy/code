import Formet from '@/components/displayFormet/Formet'
import Preview from '@/components/displayFormet/Preview'
import React from 'react'
import Navbar_1 from './item-1/Navbar_1'
import Code from '@/components/displayFormet/Code'
import CodeEditor from '@/components/displayFormet/CodeEditor'
import Header_3 from './(elements)/Header_3'
import Header_4 from './(elements)/Header_4'

export default function Headers() {

const navbar_1 = `
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  import Link from "next/link";
import LargeMenu from "./LargeMenu_1";
import MobileMenu from "./MobileMenu_1";
  
  const navigation = [
    { name: "Home", href: "/", },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  
  export default function Navbar_1() {
    return (
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
  
            <div className="flex flex-1 items-center justify-center sm:justify-between">
              <div className="flex shrink-0 items-center">
                <Link href={"/"}>
                  <h2 className="text-2xl text-gray-200">Muntasir </h2>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Large Schrren Menu  */}
                  <LargeMenu navigation={navigation} />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Mobile Menu  */}
            <MobileMenu navigation={navigation} />
          </div>
        </DisclosurePanel>
      </Disclosure>
    );
  }
`
const largetMenu_1 = `
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LargeMenu_1({ navigation }) {
  const pathname = usePathname();
  
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={\` rounded-md px-3 py-2 text-sm font-medium \${
            item.href === pathname
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }\`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
`
const MobileMenu = `
"use client";

import { DisclosureButton } from "@headlessui/react";
import { usePathname } from "next/navigation";

export default function MobileMenu_1({ navigation }) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={\`block rounded-md px-3 py-2 text-base font-medium \${
            item.href === pathname
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }\`}
        >
          {item.name}
        </DisclosureButton>
      ))}
    </>
  );
}
`


  return (
    <> 
      {/* Header Design 1  */}
      <Formet>
        <Preview id={1}>
          <Navbar_1/>
        </Preview>
        <Code id={1}>
          <h2 className="text-2xl">Navbar.tsx</h2>
          <CodeEditor code={navbar_1} />

          <h2 className="text-2xl mt-5">LargeNav.tsx</h2>
          <CodeEditor code={largetMenu_1} />

          <h2 className="text-2xl mt-5">MobileMenu.tsx</h2>
          <CodeEditor code={largetMenu_1} />
        </Code>
      </Formet>


      {/* Header Design 2  */}
      <Formet>
        <Preview id={2}>
          <Navbar_1/>
        </Preview>
        <Code id={2}>
          <h2 className="text-2xl">Navbar.tsx</h2>
          <CodeEditor code={navbar_1} />

          <h2 className="text-2xl mt-5">LargeNav.tsx</h2>
          <CodeEditor code={largetMenu_1} />

          <h2 className="text-2xl mt-5">MobileMenu.tsx</h2>
          <CodeEditor code={largetMenu_1} />
        </Code>
      </Formet>


      {/* Header Design 3  */}
      <Formet>
        <Preview id={3}>
          <Header_3/>
        </Preview>
        <Code id={3}>
          <CodeEditor code={navbar_1} />
        </Code>
      </Formet>

      {/* Header Design 4  */}
      <Formet>
        <Preview id={4}>
          <Header_4/>
        </Preview>
        <Code id={4}>
          <CodeEditor code={navbar_1} />
        </Code>
      </Formet>


    </>
  )
}
