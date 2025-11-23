"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-black">
          HACAPITAL
        </Link>
      </div>
    </header>
  )
}
