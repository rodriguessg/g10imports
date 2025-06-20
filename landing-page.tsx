import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Smartphone, Shield, Truck, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "./components/whatsapp-button"
import { EconomyCalculator } from "./components/economy-calculator"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-black" />
            <span className="text-2xl font-bold text-black">G10 Imports</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#produtos" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Produtos
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Sobre
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contato
            </Link>
          </nav>
          <Button className="bg-black text-white hover:bg-gray-800">Fale Conosco</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    🔥 Ofertas Limitadas
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    iPhones Importados com os <span className="text-blue-600">Melhores Preços</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Importação direta dos EUA. Produtos originais, garantia internacional e preços que cabem no seu
                    bolso.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                    Ver Produtos
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white text-black border-gray-300 hover:bg-gray-50">
                    Solicitar Orçamento
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Garantia Internacional</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Entrega Rápida</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  width="400"
                  height="500"
                  alt="iPhone Collection"
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher a G10 Imports?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos especialistas em importação de iPhones com anos de experiência no mercado
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-gray-200">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 mx-auto text-blue-600" />
                  <CardTitle>Garantia Internacional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Todos os produtos com garantia internacional Apple válida em qualquer país
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader className="text-center">
                  <Truck className="h-12 w-12 mx-auto text-green-600" />
                  <CardTitle>Entrega Segura</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    Entrega rápida e segura em todo o Brasil com rastreamento completo
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200">
                <CardHeader className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto text-purple-600" />
                  <CardTitle>Produtos Originais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-center">
                    100% originais, importados diretamente das lojas oficiais Apple nos EUA
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="produtos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vitrine de Produtos</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira nossa linha completa de iPhones importados com os melhores preços
                </p>
              </div>
            </div>

            {/* iPhone 15 Series */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8">Série iPhone 15</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 15 Pro Max"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 15 Pro Max</CardTitle>
                    <CardDescription className="text-center">256GB • Titânio Natural</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 7.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 10.499 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 2.500
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 15 Pro"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 15 Pro</CardTitle>
                    <CardDescription className="text-center">128GB • Titânio Azul</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 6.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 8.999 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 2.000
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 15 Plus"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 15 Plus</CardTitle>
                    <CardDescription className="text-center">128GB • Rosa</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 5.499</p>
                      <p className="text-sm text-gray-500 line-through">R$ 7.299 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.800
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 15"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 15</CardTitle>
                    <CardDescription className="text-center">128GB • Preto</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 4.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 6.499 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.500
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* iPhone 14 Series */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Série iPhone 14</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 14 Pro Max"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 14 Pro Max</CardTitle>
                    <CardDescription className="text-center">256GB • Roxo Profundo</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 5.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 7.999 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 2.000
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 14 Pro"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 14 Pro</CardTitle>
                    <CardDescription className="text-center">128GB • Dourado</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 4.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 6.799 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.800
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 14 Plus"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 14 Plus</CardTitle>
                    <CardDescription className="text-center">128GB • Azul</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 4.299</p>
                      <p className="text-sm text-gray-500 line-through">R$ 5.799 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.500
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 14"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 14</CardTitle>
                    <CardDescription className="text-center">128GB • Vermelho</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 3.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 5.299 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.300
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* iPhone 13 Series */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Série iPhone 13</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 13 Pro"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 13 Pro</CardTitle>
                    <CardDescription className="text-center">128GB • Grafite</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 3.799</p>
                      <p className="text-sm text-gray-500 line-through">R$ 5.199 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.400
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 13"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 13</CardTitle>
                    <CardDescription className="text-center">128GB • Verde</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 2.999</p>
                      <p className="text-sm text-gray-500 line-through">R$ 4.199 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.200
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      width="200"
                      height="200"
                      alt="iPhone 13 mini"
                      className="mx-auto"
                    />
                    <CardTitle className="text-center">iPhone 13 mini</CardTitle>
                    <CardDescription className="text-center">128GB • Rosa</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">R$ 2.599</p>
                      <p className="text-sm text-gray-500 line-through">R$ 3.699 (Brasil)</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Economia de R$ 1.100
                      </Badge>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Comprar Agora</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Calculadora de Economia */}
        <EconomyCalculator />

        {/* Depoimentos */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos clientes dizem</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mais de 5.000 clientes satisfeitos em todo o Brasil
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Maria Silva</CardTitle>
                  <CardDescription>São Paulo, SP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Comprei meu iPhone 15 Pro e economizei mais de R$ 2.000! Produto original, entrega rápida e
                    atendimento excelente."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">João Santos</CardTitle>
                  <CardDescription>Rio de Janeiro, RJ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Já é minha terceira compra com a G10 Imports. Sempre produtos originais e preços imbatíveis. Super
                    recomendo!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Ana Costa</CardTitle>
                  <CardDescription>Belo Horizonte, MG</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Processo muito transparente, recebi todas as informações sobre a importação. iPhone chegou
                    perfeito!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pronto para economizar?</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solicite seu orçamento agora e descubra quanto você pode economizar
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Seu melhor e-mail" className="max-w-lg flex-1 bg-white text-black" />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Solicitar
                  </Button>
                </form>
                <p className="text-xs text-gray-400">Resposta em até 2 horas úteis. Sem spam, prometemos!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aqui para tirar todas as suas dúvidas
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <Card className="bg-white border-gray-200 text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 mx-auto text-blue-600" />
                  <CardTitle>Telefone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">(11) 99999-9999</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 9h às 18h</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 mx-auto text-green-600" />
                  <CardTitle>E-mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">contato@g10imports.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 2h</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 mx-auto text-purple-600" />
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">São Paulo, SP</p>
                  <p className="text-sm text-gray-500">Atendemos todo o Brasil</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center space-x-2">
          <Smartphone className="h-6 w-6 text-black" />
          <span className="text-lg font-bold text-black">G10 Imports</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-auto">© 2024 G10 Imports. Todos os direitos reservados.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Uso
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Política de Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}
