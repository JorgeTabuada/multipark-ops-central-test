import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/Header'
import { 
  CreditCard, XCircle, CheckCircle, Truck, Package, Calendar,
  DollarSign, FileText, Users, FolderOpen, ListTodo,
  Brain, TrendingUp, MapPin, Megaphone, Activity, BarChart3, ExternalLink,
  Shield, MessageCircle, GraduationCap, Search
} from 'lucide-react'

const moduleCategories = [
  {
    title: "Operacional",
    description: "Operações diárias",
    color: "bg-blue-50 border-blue-200",
    modules: [
      { name: "Caixa Multipark", path: "/caixa", icon: CreditCard, status: "active" },
      { name: "Cancelamentos", path: "/cancelamentos", icon: XCircle, status: "basic" },
      { name: "Confirmação de Caixa", path: "/confirmacao-caixa", icon: CheckCircle, status: "basic" },
      { name: "Entregas", path: "/entregas", icon: Truck, status: "basic" },
      { name: "Recolhas", path: "/recolhas", icon: Package, status: "active" },
      { name: "Reservas", path: "/reservas", icon: Calendar, status: "active" }
    ]
  },
  {
    title: "Gestão",
    description: "Administração e controlo",
    color: "bg-green-50 border-green-200",
    modules: [
      { name: "Despesas", path: "/despesas", icon: DollarSign, status: "basic" },
      { name: "Faturação", path: "/faturacao", icon: FileText, status: "basic" },
      { name: "Recursos Humanos", path: "/recursos-humanos", icon: Users, status: "basic" },
      { name: "Projetos", path: "/projetos", icon: FolderOpen, status: "basic" },
      { name: "Tarefas", path: "/tarefas", icon: ListTodo, status: "basic" }
    ]
  },
  {
    title: "Análises",
    description: "Relatórios e métricas",
    color: "bg-purple-50 border-purple-200",
    modules: [
      { name: "BI Interno", path: "/bi-interno", icon: Brain, status: "active" },
      { name: "Comportamentos", path: "/comportamentos", icon: TrendingUp, status: "enhanced", new: true },
      { name: "Mapa de Ocupação", path: "/mapa-ocupacao", icon: MapPin, status: "basic" },
      { name: "Marketing", path: "/marketing", icon: Megaphone, status: "basic" },
      { name: "Produtividade Condutores", path: "/produtividade-condutores", icon: Activity, status: "active" },
      { name: "Relatórios", path: "/relatorios", icon: BarChart3, status: "active" },
      { name: "Reservas Externas", path: "/reservas-externas", icon: ExternalLink, status: "basic" }
    ]
  },
  {
    title: "Administração e Suporte",
    description: "Sistema e suporte",
    color: "bg-orange-50 border-orange-200",
    modules: [
      { name: "Acessos e Alterações", path: "/acessos-alteracoes", icon: Shield, status: "basic" },
      { name: "Auditorias Internas", path: "/auditorias-internas", icon: FileText, status: "active" },
      { name: "Comentários & Reclamações", path: "/comentarios-reclamacoes", icon: MessageCircle, status: "basic" },
      { name: "Formação & Apoio", path: "/formacao-apoio", icon: GraduationCap, status: "basic" },
      { name: "Perdidos & Achados", path: "/perdidos-achados", icon: Search, status: "active" }
    ]
  }
]

const getStatusBadge = (status: string, isNew?: boolean) => {
  if (isNew) {
    return <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700 text-xs">NOVO</Badge>
  }
  
  switch (status) {
    case 'enhanced':
      return <Badge variant="default" className="ml-2 bg-purple-100 text-purple-700 text-xs">MELHORADO</Badge>
    case 'active':
      return <Badge variant="default" className="ml-2 bg-blue-100 text-blue-700 text-xs">ATIVO</Badge>
    default:
      return <Badge variant="outline" className="ml-2 text-xs">BÁSICO</Badge>
  }
}

export const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Dashboard MultiPark" showParkSelector />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Ferramentas MultiPark
          </h1>
          <p className="text-lg text-gray-600">
            Plataforma integrada de gestão operacional
          </p>
        </div>

        <div className="space-y-8">
          {moduleCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className={`${category.color} border-2`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.modules.map((module, moduleIndex) => {
                    const IconComponent = module.icon
                    return (
                      <Link
                        key={moduleIndex}
                        to={module.path}
                        className="group"
                      >
                        <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer border-2 hover:border-blue-300">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-blue-50 transition-colors">
                                  <IconComponent className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {module.name}
                                    {getStatusBadge(module.status, module.new)}
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}