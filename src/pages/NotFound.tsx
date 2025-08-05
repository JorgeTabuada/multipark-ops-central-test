import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <p className="text-2xl font-semibold text-gray-600 mb-2">Página não encontrada</p>
          <p className="text-gray-500 mb-8">A página que procuras não existe.</p>
        </div>
        
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar atrás
            </Link>
          </Button>
          
          <Button asChild>
            <Link to="/dashboard" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound