
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js, Python, bases de dados SQL/NoSQL",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Figma, Adobe Creative Suite, prototipagem e design responsivo",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização de aplicações, SEO, acessibilidade e melhores práticas",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe, metodologias ágeis, comunicação eficaz",
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
              Profissional apaixonado por tecnologia com mais de 5 anos de experiência 
              criando soluções digitais inovadoras e impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Minha Jornada</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Iniciei minha carreira como desenvolvedor em 2019, focando em tecnologias web modernas. 
                  Ao longo dos anos, expandir minhas competências para incluir design UI/UX, 
                  gestão de projetos e liderança de equipes.
                </p>
                <p>
                  Tenho experiência em diversos setores, desde startups até grandes corporações, 
                  sempre com foco em entregar valor real através da tecnologia.
                </p>
                <p>
                  Atualmente, trabalho como Full Stack Developer, onde combino minha paixão 
                  por código limpo com design centrado no usuário.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Experiência</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Senior Full Stack Developer</h4>
                  <p className="text-blue-600">Tech Company • 2022 - Presente</p>
                  <p className="text-gray-600 text-sm">Liderança de projetos web complexos, mentoria de equipe</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Full Stack Developer</h4>
                  <p className="text-gray-600">Startup Inc. • 2020 - 2022</p>
                  <p className="text-gray-600 text-sm">Desenvolvimento de aplicações web e mobile</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-800">Junior Developer</h4>
                  <p className="text-gray-600">Agency Ltd. • 2019 - 2020</p>
                  <p className="text-gray-600 text-sm">Desenvolvimento frontend e design responsivo</p>
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
