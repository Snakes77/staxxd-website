'use client'

import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import Logo from '@/components/ui/Logo'

interface MobileMenuProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  if (!open) return null

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo className="text-2xl text-brand-primary" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-brand-accent hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
