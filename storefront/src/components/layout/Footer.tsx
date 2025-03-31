import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600">
              Enterprise equipment configuration platform for complex systems.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/components" className="text-gray-600 hover:text-primary-600">
                  Components
                </a>
              </li>
              <li>
                <a href="/configurations" className="text-gray-600 hover:text-primary-600">
                  Configurations
                </a>
              </li>
              <li>
                <a href="/quotations" className="text-gray-600 hover:text-primary-600">
                  Quotations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: support@example.com</li>
              <li className="text-gray-600">Phone: (555) 123-4567</li>
              <li className="text-gray-600">Address: 123 Business St</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Equipment Configurator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 