"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign, TrendingDown } from "lucide-react"

const iPhoneModels = [
  { name: "iPhone 15 Pro Max 256GB", brazilPrice: 10499, importPrice: 7999 },
  { name: "iPhone 15 Pro 128GB", brazilPrice: 8999, importPrice: 6999 },
  { name: "iPhone 15 Plus 128GB", brazilPrice: 7299, importPrice: 5499 },
  { name: "iPhone 15 128GB", brazilPrice: 6499, importPrice: 4999 },
  { name: "iPhone 14 Pro Max 256GB", brazilPrice: 7999, importPrice: 5999 },
  { name: "iPhone 14 Pro 128GB", brazilPrice: 6799, importPrice: 4999 },
  { name: "iPhone 14 Plus 128GB", brazilPrice: 5799, importPrice: 4299 },
  { name: "iPhone 14 128GB", brazilPrice: 5299, importPrice: 3999 },
  { name: "iPhone 13 Pro 128GB", brazilPrice: 5199, importPrice: 3799 },
  { name: "iPhone 13 128GB", brazilPrice: 4199, importPrice: 2999 },
  { name: "iPhone 13 mini 128GB", brazilPrice: 3699, importPrice: 2599 },
]

export function EconomyCalculator() {
  const [selectedModel, setSelectedModel] = useState<string>("")
  const [calculation, setCalculation] = useState<{
    model: string
    brazilPrice: number
    importPrice: number
    savings: number
    savingsPercentage: number
  } | null>(null)

  const calculateSavings = () => {
    const model = iPhoneModels.find((m) => m.name === selectedModel)
    if (model) {
      const savings = model.brazilPrice - model.importPrice
      const savingsPercentage = (savings / model.brazilPrice) * 100

      setCalculation({
        model: model.name,
        brazilPrice: model.brazilPrice,
        importPrice: model.importPrice,
        savings,
        savingsPercentage,
      })
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Calculator className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calculadora de Economia</h2>
            </div>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubra quanto você pode economizar importando seu iPhone conosco
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculadora */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Calcule sua Economia</span>
                </CardTitle>
                <CardDescription>Selecione o modelo desejado e veja quanto você economiza</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Escolha o modelo do iPhone:</label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      {iPhoneModels.map((model) => (
                        <SelectItem key={model.name} value={model.name}>
                          {model.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculateSavings}
                  disabled={!selectedModel}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Calcular Economia
                </Button>
              </CardContent>
            </Card>

            {/* Resultado */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                  <span>Resultado da Economia</span>
                </CardTitle>
                <CardDescription>Veja o comparativo de preços e sua economia</CardDescription>
              </CardHeader>
              <CardContent>
                {calculation ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-4">{calculation.model}</h3>
                    </div>

                    <div className="grid gap-4">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="text-sm font-medium">Preço no Brasil:</span>
                        <span className="text-lg font-bold text-red-600">
                          {formatCurrency(calculation.brazilPrice)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium">Preço G10 Imports:</span>
                        <span className="text-lg font-bold text-blue-600">
                          {formatCurrency(calculation.importPrice)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
                        <span className="text-sm font-medium">Sua Economia:</span>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{formatCurrency(calculation.savings)}</div>
                          <div className="text-sm text-green-500">
                            ({calculation.savingsPercentage.toFixed(1)}% de desconto)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <Button className="bg-green-600 hover:bg-green-700">Solicitar Orçamento</Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Selecione um modelo acima para ver sua economia</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 text-center">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Produtos Originais</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">R$ 2.500</div>
                    <div className="text-sm text-gray-600">Economia Média</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">5.000+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
