"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Heart,
  Globe,
  Clock,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  BookOpen,
  Shield,
  Smile,
  Award,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ReactNode } from "react"
import ReactCountryFlag from "react-country-flag"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

interface FadeInWhenVisibleProps {
  children: ReactNode
}

function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeIn}>
      {children}
    </motion.div>
  )
}

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#B8956A]/20 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-[#2C4A42]">
                <Image
                  src="/logogustavo.png"
                  alt="Gustavo Alexandre - Psicanalista"
                  width={200}
                  height={60}
                  className="h-28 w-auto"
                  priority
                />
               
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="#inicio" className="text-[#8B7355] hover:text-[#2C4A42] transition-colors">
                Início
              </Link>
              <Link href="#tratamentos" className="text-[#8B7355] hover:text-[#2C4A42] transition-colors">
                Tratamentos
              </Link>
              <Link href="#diferenciais" className="text-[#8B7355] hover:text-[#2C4A42] transition-colors">
                Diferenciais
              </Link>
              <Link href="#sobre" className="text-[#8B7355] hover:text-[#2C4A42] transition-colors">
                Sobre Mim
              </Link>
              <Link href="#depoimentos" className="text-[#8B7355] hover:text-[#2C4A42] transition-colors">
                Depoimentos
              </Link>
              <Link href="#faq" className="text-[#8B7355] hover:text-[#2C4A42] transition-colors">
                FAQ
              </Link>
            </div>

            <Button className="bg-[#B8956A] hover:bg-[#8B7355] text-white shadow-lg font-bold">
              <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-[#FDFCF8] via-[#FDFCF8] to-[#B8956A]/10"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#5A7C76]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#2C4A42]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#B8956A]/20 rounded-full blur-2xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 py-20 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badges de idiomas melhorados */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-white/80 backdrop-blur-sm text-[#2C4A42] hover:bg-white border border-[#B8956A] flex items-center gap-2 px-4 py-2 shadow-lg">
                  <ReactCountryFlag countryCode="BR" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  <span className="font-medium">Português</span>
                </Badge>
                <Badge className="bg-white/80 backdrop-blur-sm text-[#2C4A42] hover:bg-white border border-[#B8956A] flex items-center gap-2 px-4 py-2 shadow-lg">
                  <ReactCountryFlag countryCode="US" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  <span className="font-medium">English</span>
                </Badge>
                <Badge className="bg-white/80 backdrop-blur-sm text-[#2C4A42] hover:bg-white border border-[#B8956A] flex items-center gap-2 px-4 py-2 shadow-lg">
                  <ReactCountryFlag countryCode="ES" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  <span className="font-medium">Español</span>
                </Badge>
              </div>

              {/* Título principal melhorado */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2C4A42] leading-tight"
                >
                  Psicanalista
                  <span className="block text-[#B8956A] relative">
                    Gustavo Alexandre
                    <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-[#B8956A] to-[#8B7355] rounded-full"></div>
                  </span>
                </motion.h1>
              </div>

              {/* Subtítulo melhorado */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-3xl text-[#5A7C76] font-medium">
                  Especialista em Psicanálise Clínica e Terapia de Casais
                </h2>
                <p className="text-lg text-[#8B7355] leading-relaxed max-w-lg">
                  Transforme sua vida emocional com uma abordagem humanizada e cristã, especializada em casais e líderes
                  de família.
                </p>
              </motion.div>

              {/* Botões de ação melhorados */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-[#B8956A] hover:bg-[#8B7355] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-bold"
                >
                  <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </motion.div>

              {/* Estatísticas/credenciais */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-[#B8956A]/20"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C4A42]">500+</div>
                  <div className="text-sm text-[#8B7355]">Pacientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C4A42]">5+</div>
                  <div className="text-sm text-[#8B7355]">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C4A42]">3</div>
                  <div className="text-sm text-[#8B7355]">Idiomas</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Imagem do profissional melhorada */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Elementos decorativos ao redor da imagem */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#5A7C76]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2C4A42]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#B8956A]/10 rounded-full blur-2xl"></div>

                {/* Container da imagem com bordas decorativas */}
                <div className="relative bg-gradient-to-br from-white to-[#FDFCF8] p-6 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8956A]/10 to-[#8B7355]/10 rounded-3xl"></div>
                  
                  {/* Badge de credenciamento */}
                  <div className="absolute -top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                    <CheckCircle className="w-5 h-5 text-[#B8956A]" />
                    <span className="text-sm font-medium text-[#2C4A42]">CRTP 8100/SP</span>
                  </div>

                  {/* Container da imagem com efeito de borda */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B8956A]/20 to-transparent z-10"></div>
                    <Image
                      src="/gustavo.png?height=600&width=500"
                      alt="Psicanalista Gustavo Alexandre"
                      width={500}
                      height={600}
                      className="rounded-2xl relative z-10 mx-auto transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Badge de idiomas */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-3 z-20">
                    <ReactCountryFlag countryCode="BR" svg style={{ width: "1.5em", height: "1.5em", borderRadius: "4px" }} />
                    <ReactCountryFlag countryCode="ES" svg style={{ width: "1.5em", height: "1.5em", borderRadius: "4px" }} />
                    <ReactCountryFlag countryCode="US" svg style={{ width: "1.5em", height: "1.5em", borderRadius: "4px" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A42] mb-4">Tratamentos</h2>
              <p className="text-lg text-[#8B7355] max-w-3xl mx-auto">
                A psicanálise é uma jornada de autoconhecimento e transformação. Com Gustavo Alexandre, você encontra um
                espaço seguro para explorar suas emoções e desafios, construindo um caminho para uma vida emocionalmente
                mais saudável.
              </p>
            </div>
          </FadeInWhenVisible>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#2C4A42]">Ansiedade, Depressão e Esgotamento Emocional</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#8B7355] text-center">
                    Aprenda a lidar com preocupações excessivas e crises emocionais.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#2C4A42]">Crises Existenciais e Conflitos Internos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#8B7355] text-center">
                    Encontre suporte para superar momentos difíceis e restaurar sua qualidade de vida.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#2C4A42]">Transtornos de Personalidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#8B7355] text-center">
                    Fortaleça vínculos afetivos e melhore sua comunicação interpessoal (CI, BPD, Narcisismo).
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#2C4A42]">Mentoria para Desenvolvimento Pessoal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#8B7355] text-center">
                    Resolva questões do passado que ainda impactam o presente.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#2C4A42]">Terapia Individual ou para Casais</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#8B7355] text-center">
                    Descubra seus potenciais e compreenda seus padrões emocionais.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-[#2C4A42]">Apoio Emocional para Líderes e Expatriados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#8B7355] text-center">
                    Consultas presenciais em Campo Grande - MS e online de qualquer localidade, garantindo
                    acessibilidade e conforto.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#B8956A] hover:bg-[#8B7355] text-white shadow-lg font-bold">
              <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 bg-[#FDFCF8]">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A42] mb-4">Meus Diferenciais</h2>
            </div>
          </FadeInWhenVisible>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-[#2C4A42]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C4A42] mb-2 text-center">Abordagem Integrada</h3>
                  <p className="text-[#8B7355] text-center">
                    Combinação da tradição psicanalítica com estratégias contemporâneas, unindo profundidade com clareza
                    prática.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Smile className="w-8 h-8 text-[#2C4A42]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C4A42] mb-2 text-center">Ambiente Acolhedor</h3>
                  <p className="text-[#8B7355] text-center">
                    Consultório projetado para oferecer conforto e tranquilidade, criando um espaço seguro e confiável
                    para compartilhar suas emoções.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-[#2C4A42]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C4A42] mb-2 text-center">Atendimento Flexível</h3>
                  <p className="text-[#8B7355] text-center">
                    Disponibilidade para consultas online e presenciais, permitindo que você escolha o formato que
                    melhor se adapta à sua rotina.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-[#2C4A42]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C4A42] mb-2 text-center">Ética e Compromisso</h3>
                  <p className="text-[#8B7355] text-center">
                    Atuação com total respeito à privacidade dos pacientes, garantindo confidencialidade e um
                    atendimento profissional.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-[#2C4A42]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C4A42] mb-2 text-center">Foco no Bem-Estar Emocional</h3>
                  <p className="text-[#8B7355] text-center">
                    Dedicação em ajudar pacientes a superar suas dificuldades, alcançando mais equilíbrio,
                    autoconhecimento e qualidade de vida.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-[#B8956A] hover:shadow-lg transition-all duration-300 h-full group bg-white">
                <CardContent className="pt-6">
                  <div className="flex justify-center gap-3 mb-4">
                    <ReactCountryFlag countryCode="BR" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                    <ReactCountryFlag countryCode="ES" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                    <ReactCountryFlag countryCode="US" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C4A42] mb-2 text-center">Atendimento Multilíngue</h3>
                  <p className="text-[#8B7355] text-center">
                    Consultas disponíveis em português e espanhol, facilitando o acesso para pacientes de
                    diferentes nacionalidades.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button className="bg-[#B8956A] hover:bg-[#8B7355] text-white shadow-lg font-bold">
              <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Conheça os diferenciais
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <Image
                src="/gustavo2.png?height=500&width=400"
                alt="Gustavo Alexandre"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl mx-auto"
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A42] mb-6">
                  Conheça o Psicanalista Gustavo Alexandre
                </h2>

                <div className="space-y-4 text-[#8B7355] mb-8">
                  <p>
                    Sou Gustavo Alexandre, psicanalista clínico com abordagem humanizada e cristã, especializado em
                    casais e líderes de família. Acredito que a restauração emocional é possível para quem deseja
                    reconstruir sua história com equilíbrio, fé e maturidade afetiva.
                  </p>
                  <p>
                    Formado em Psicanálise Clínica pelo Centro Universitário UNIFATEC, possuo especializações em Gestão
                    de Projetos (Unopar), Terapia Sistêmica e Constelar (Centro Universitário UNIFATEC) e MBA em Terapia
                    Neurocientífica e Intervenção Estratégica (Instituto Luis Lindner).
                  </p>
                  <p>
                    Atendo em um ambiente acolhedor e discreto na Av. Afonso Pena, 736 – Campo Grande/MS, projetado para
                    garantir conforto, privacidade e segurança emocional.
                  </p>
                </div>

                <Button size="lg" className="bg-[#B8956A] hover:bg-[#8B7355] text-white shadow-lg font-bold">
                  <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    AGENDAR CONSULTA
                  </a>
                </Button>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 bg-[#FDFCF8]">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A42] mb-4">Depoimentos</h2>
              <p className="text-[#8B7355]">
                Depoimentos de pacientes serão adicionados conforme disponibilizados, respeitando a confidencialidade e
                o anonimato conforme contrato.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="flex justify-center">
            <Card className="border-[#B8956A] max-w-md bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B8956A] to-[#8B7355] rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#2C4A42]" />
                  </div>
                </div>
                <p className="text-[#8B7355] italic text-center">
                  "Os depoimentos serão adicionados em breve, sempre respeitando a privacidade e confidencialidade dos
                  pacientes."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A42] mb-4">Perguntas Frequentes</h2>
            </div>
          </FadeInWhenVisible>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-[#B8956A] rounded-lg px-6">
                <AccordionTrigger className="text-[#2C4A42] hover:text-[#B8956A]">
                  Como funciona o atendimento online?
                </AccordionTrigger>
                <AccordionContent className="text-[#8B7355]">
                  As consultas online são realizadas via plataformas seguras, oferecendo a mesma qualidade e atenção do
                  atendimento presencial, no conforto da sua casa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-[#B8956A] rounded-lg px-6">
                <AccordionTrigger className="text-[#2C4A42] hover:text-[#B8956A]">
                  Quanto tempo dura o tratamento?
                </AccordionTrigger>
                <AccordionContent className="text-[#8B7355]">
                  O tempo de tratamento varia conforme as necessidades individuais de cada paciente, sendo discutido e
                  ajustado ao longo do processo terapêutico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-[#B8956A] rounded-lg px-6">
                <AccordionTrigger className="text-[#2C4A42] hover:text-[#B8956A]">
                  Você trabalha com convênios ou planos de saúde?
                </AccordionTrigger>
                <AccordionContent className="text-[#8B7355]">
                  Atualmente, os atendimentos são particulares. Forneço recibo para que o paciente possa solicitar
                  reembolso junto ao seu plano de saúde, conforme as políticas da operadora.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-[#B8956A] rounded-lg px-6">
                <AccordionTrigger className="text-[#2C4A42] hover:text-[#B8956A]">
                  Como agendar minha consulta?
                </AccordionTrigger>
                <AccordionContent className="text-[#8B7355]">
                  Você pode entrar em contato pelo WhatsApp para verificar a disponibilidade e marcar sua sessão.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Button className="bg-[#B8956A] hover:bg-[#8B7355] text-white shadow-lg font-bold">
                <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  AGENDAR CONSULTA
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#B8956A] to-[#8B7355]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para transformar sua saúde emocional?
            </h2>
            <p className="text-xl text-white/90 mb-8">Agende sua primeira sessão hoje mesmo!</p>
            <Button size="lg" className="bg-white text-[#B8956A] hover:bg-[#FDFCF8] shadow-lg font-bold">
              <a href="https://wa.me/5567981007338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                AGENDAR CONSULTA
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-[#2C4A42] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>(67) 99999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contato@gustavoalexandre.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Avenida Afonso Pena, 736, Bairro Amambai, Campo Grande - MS</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Idiomas de Atendimento</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <ReactCountryFlag countryCode="BR" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  <span className="ml-3">Português</span>
                </div>
                <div className="flex items-center">
                  <ReactCountryFlag countryCode="ES" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  <span className="ml-3">Español</span>
                </div>
                  <div className="flex items-center">
                  <ReactCountryFlag countryCode="US" svg style={{ width: "2em", height: "2em", borderRadius: "4px" }} />
                  <span className="ml-3">Inglês</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Horários</h3>
              <div className="space-y-2">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábados: Mediante agendamento</p>
                <p>Atendimento online com horários flexíveis</p>
              </div>
            </div>


            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
                <div className="flex items-center">
                  <Image
                    src="/logo02.png"
                    alt="HW Logo"
                    width={120}
                    height={60}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
            </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>Psicanalista Gustavo Alexandre - CRTP 8100/SP &copy; 2025 | Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
