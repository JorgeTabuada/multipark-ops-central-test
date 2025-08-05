import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Package } from 'lucide-react'

const Recolhas = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Recolhas" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Sistema de Recolhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gestão de recolhas em desenvolvimento...</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Recolhas