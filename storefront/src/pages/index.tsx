import React from 'react'
import Layout from '@/components/layout/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Enterprise Equipment Configuration
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Configure complex equipment systems with our intuitive platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Components</h2>
            <p className="text-gray-600">
              Browse and select from our extensive catalog of equipment components
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Configurations</h2>
            <p className="text-gray-600">
              Create and manage your equipment configurations
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quotations</h2>
            <p className="text-gray-600">
              Generate detailed quotations for your configurations
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home 