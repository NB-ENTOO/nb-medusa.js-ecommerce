import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Equipment Configurator
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/components" className="text-gray-600 hover:text-primary-600">
              Components
            </Link>
            <Link href="/configurations" className="text-gray-600 hover:text-primary-600">
              Configurations
            </Link>
            <Link href="/quotations" className="text-gray-600 hover:text-primary-600">
              Quotations
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 