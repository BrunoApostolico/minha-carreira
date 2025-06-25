
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Java, Spring Boot, React, TypeScript, Node.js, bases de dados SQL/NoSQL",
    },
    {
      icon: Palette,
      title: "Arquitetura de Software",
      description: "Design patterns, microserviços, sistemas distribuídos e clean architecture",
    },
    {
      icon: Zap,
      title: "Engenharia de Software",
      description: "Metodologias ágeis, DevOps, CI/CD, testes automatizados e otimização",
    },
    {
      icon: Users,
      title: "Gestão e Liderança",
      description: "Gestão de pessoas, coordenação de projetos e desenvolvimento de equipes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desenvolvedor Full Stack e Analista de Sistemas com mais de 17 anos de experiência 
              em desenvolvimento de software e gestão de projetos tecnológicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Minha Jornada</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Graduado em Análise e Desenvolvimento de Sistemas, com especializações em 
                  Engenharia de Software com Java (MIT) e Gestão de Pessoas e Negócios, 
                  combinando expertise técnica com competências de liderança.
                </p>
                <p>
                  Durante minha carreira, trabalhei em empresas de diferentes setores, desde 
                  energia elétrica até serviços marítimos, sempre focado em entregar soluções 
                  tecnológicas robustas e eficientes.
                </p>
                <p>
                  Atualmente na Oceanpact Serviços, onde aplico minha experiência em desenvolvimento 
                  e gestão para criar sistemas que impactam positivamente os processos empresariais.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Experiência Profissional</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Desenvolvedor Full Stack</h4>
                  <p className="text-blue-600">Oceanpact Serviços • 2022 - Presente</p>
                  <p className="text-gray-600 text-sm">Desenvolvimento de sistemas e gestão de projetos tecnológicos</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Analista de Sistemas</h4>
                  <p className="text-gray-600">Fattu do Brasil • 2018 - 2022</p>
                  <p className="text-gray-600 text-sm">Desenvolvimento de aplicações e análise de sistemas</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Desenvolvedor de Sistemas</h4>
                  <p className="text-gray-600">Light Distribuidora • 2007 - 2018</p>
                  <p className="text-gray-600 text-sm">11 anos desenvolvendo sistemas para o setor elétrico</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Formação Acadêmica</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Graduação</h4>
                  <p className="text-blue-600 font-medium">Análise e Desenvolvimento de Sistemas</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Pós-graduação MIT</h4>
                  <p className="text-blue-600 font-medium">Engenharia de Software com Java</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Pós-graduação</h4>
                  <p className="text-blue-600 font-medium">Gestão de Pessoas e Negócios</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
