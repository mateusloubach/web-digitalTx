import Image from 'next/image'
import { LinearGradient } from 'react-text-gradients'
import illustration1 from "@/public/images/illustrations/illustration1a.png"
import illustration2 from "@/public/images/illustrations/illustration2a.png"
import illustration3 from "@/public/images/illustrations/illustration3a.png"


export default function Zigzag() {
  return (
    <section id='zigzag'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-900">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm py-1 px-3 m-2 text-lime-700 font-inter bg-green-200 rounded-full mb-4">Alcance seus objetivos</div>
            <h1 className="h2 font-martian_mono mb-4">Uma Solução Versátil para Todas as Necessidades</h1>
            <p className="text-xl text-gray-400">
              Vamos além dos pixels para criar experiências on-line imersivas que ressoam com seu público e geram resultados significativos, 
              para transformar sua presença digital em um ativo poderoso que cativa, envolve e inspira.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto pointer-events-none" src={illustration1} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    <LinearGradient gradient={['to bottom right', '#5d6bff ,#865dff']}>Mais rápido. Menos estresse.</LinearGradient></div>
                  <h3 className="h3 mb-3">Comprometimento com a entrega de projetos de alta qualidade</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Com uma equipe talentosa e processos eficientes, garantimos uma jornada digital rápida suave e sem preocupações.
                  </p>
                  <ul className="text-lg font-exo text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Recursos padronizados</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Projeto com autonomia do cliente</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Desenvolvido com tecnologia de ponta</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto pointer-events-none" src={illustration2} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"><LinearGradient gradient={['to bottom left', '#5d6bff ,#865dff']}>Compromisso com o Cronograma</LinearGradient></div>
                  <h3 className="h3 mb-3">Mantendo os projetos dentro do cronograma</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Honramos nossos compromissos. Nossos projetos são planejados e executados para garantir que estejam sempre alinhados com o cronograma.
                  </p>
                  <ul className="text-lg font-exo text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Estratégia de Execução Eficiente</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Abordagem Proativa para Mitigação de Riscos</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Equipe Dedicada e Orientada para Resultados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto pointer-events-none" src={illustration3} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"><LinearGradient gradient={['to top right', '#5d6bff ,#865dff']}>Propostas sob medida que superam Expectativas</LinearGradient></div>
                  <h3 className="h3 mb-3">Transformando Visões em Realidade</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Colaboramos de perto com você para entender suas necessidades e criamos propostas que superam expectativas.
                  </p>
                  <ul className="text-lg font-exo text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Inovação e Criatividade Constantes</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Análise Detalhada das Necessidades do Cliente</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-purple-600 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Foco no Sucesso do Cliente</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
