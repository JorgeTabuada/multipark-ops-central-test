import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Calendar } from 'lucide-react'

const Reservas = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Reservas" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Sistema de Reservas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gestão de reservas em desenvolvimento...</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Reservas