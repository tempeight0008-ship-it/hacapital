"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
        <p>© {currentYear} HACAPITAL. All rights reserved.</p>
      </div>
    </footer>
  )
}
