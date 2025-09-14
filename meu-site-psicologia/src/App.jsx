import React from 'react';

// Link unificado do WhatsApp (com mensagem codificada)
const WHATSAPP_LINK =
  'https://wa.me/5534988287468?text=' +
  encodeURIComponent('Olá! Gostaria de agendar uma consulta.');

// --- ÍCONES SVG ---
// Para manter tudo em um único arquivo, os ícones são componentes SVG.
const InstagramIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <img
    className={className}
    src="https://cdn-icons-png.flaticon.com/512/174/174879.png"
    alt="WhatsApp"
    loading="lazy"
    decoding="async"
  />
);

const ArrowDownIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);


// --- COMPONENTES DE SEÇÃO ---

// Efeito customizado para animação de scroll
const useScrollAnimation = () => {
  React.useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};


// Seção Hero (Principal)
const HeroSection = () => (
  <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-teal-50 to-blue-50 relative p-4">
    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
    <div className="relative z-10">
      <div className="fade-in-down mb-4">
        <img
          src="/luciana.jpg"
          alt="Luciana Cordeiro"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto border-4 border-white shadow-lg object-cover object-center"
          loading="eager"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/160x160/99d9d9/333333?text=LC'; }}
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tight fade-in-down" style={{ animationDelay: '0.2s' }}>
        Luciana Cordeiro
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-teal-700 font-medium fade-in-down" style={{ animationDelay: '0.4s' }}>
        Psicoterapeuta de Adolescentes e Palestrante
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-300 ease-in-out fade-in-down"
        style={{ animationDelay: '0.6s' }}
      >
        Agendar Horário
      </a>
    </div>
    <a href="#about" className="absolute bottom-10 animate-bounce">
      <ArrowDownIcon className="w-8 h-8 text-teal-500" />
    </a>
  </section>
);


// Seção Sobre
const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <div className="scroll-animate">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Acolhimento e desenvolvimento para uma fase de descobertas</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Olá! Sou Luciana Cordeiro, psicóloga com registro CRP 04/69211. Minha paixão é guiar adolescentes através das complexidades e maravilhas da sua jornada de crescimento. Com uma abordagem empática e focada, crio um espaço seguro para que possam explorar suas emoções, fortalecer a autoestima e construir as ferramentas necessárias para um futuro saudável e consciente. Acredito no potencial de cada jovem e no poder da terapia para transformar desafios em oportunidades.
        </p>
      </div>
    </div>
  </section>
);

// Seção de Serviços
const ServicesSection = () => {
    const services = [
    {
      title: "Psicoterapia para Adolescentes",
      description: "Um espaço de escuta e acolhimento para lidar com questões como ansiedade, desafios de relacionamento, autoestima, orientação vocacional e as transições típicas da idade. O objetivo é promover autoconhecimento e bem-estar emocional.",
      icon: "🧠"
    },
    {
      title: "Palestras e Workshops",
      description: "Levo temas essenciais da psicologia do adolescente para escolas, empresas e comunidades. Assuntos como saúde mental, comunicação familiar, prevenção ao bullying e desenvolvimento de habilidades socioemocionais, com uma linguagem dinâmica e acessível.",
      icon: "🎙️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl font-bold text-gray-800">Como posso ajudar</h2>
          <p className="text-gray-600 mt-2">Duas frentes de trabalho dedicadas ao universo jovem.</p>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 scroll-animate" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Seção do Instagram
const InstagramSection = () => {
  const mockPosts = Array(6).fill(0).map((_, i) => ({
    id: i,
    alt: `Postagem ${i + 1} do Instagram`,
    // Usando placeholders para as imagens
    img: `https://placehold.co/400x400/a0d9d9/333333?text=Post+${i+1}`
  }));

  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="scroll-animate mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Acompanhe nas Redes</h2>
          <p className="text-gray-600 mt-2">Dicas, reflexões e conteúdos sobre o universo adolescente.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 scroll-animate">
          {mockPosts.map((post, index) => (
            <a key={post.id} href="https://www.instagram.com/lucianacordeiropsicologa/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={post.img} alt={post.alt} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>
        <div className="mt-8 scroll-animate">
            <a href="https://www.instagram.com/lucianacordeiropsicologa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <InstagramIcon className="w-5 h-5 mr-2" />
                @lucianacordeiropsicologa
            </a>
        </div>
      </div>
    </section>
  );
}


// Seção de Contato (CTA)
const ContactSection = () => (
  <section id="contact" className="py-20 bg-teal-700 text-white">
    <div className="container mx-auto px-6 text-center">
      <div className="scroll-animate">
        <h2 className="text-3xl font-bold mb-4">Vamos conversar?</h2>
        <p className="text-teal-100 max-w-2xl mx-auto mb-8">
          Se você é adolescente e busca um espaço para se entender melhor, ou se são pais procurando apoio para seus filhos, estou aqui para ajudar. Dê o primeiro passo em direção ao bem-estar.
        </p>
        <a
          href="https://wa.me/5511912345678?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, '_blank'); }}
          className="inline-flex items-center bg-white text-teal-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300"
        >
          <WhatsAppIcon className="w-6 h-6 mr-3" />
          Marcar um horário pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
);


// Rodapé
const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Luciana Cordeiro | Psicóloga CRP 04/69211</p>
      <p className="text-sm text-gray-400 mt-2">Site desenvolvido com ❤️</p>
    </div>
  </footer>
);


// Botão flutuante do WhatsApp
const FloatingWhatsAppButton = () => (
    <a
        href="https://wa.me/5511912345678?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, '_blank'); }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Agendar consulta no WhatsApp"
    >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8"/>
    </a>
)


// --- COMPONENTE PRINCIPAL DA APLICAÇÃO ---
export default function App() {
  useScrollAnimation();

  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal">
      <style>{`
        /* Padrão de grid sutil para o fundo do Hero */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(178, 223, 219, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(178, 223, 219, 0.4) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }

        /* Animações */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Classes de animação */
        .fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        
        .scroll-animate {
            opacity: 0;
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-up {
            opacity: 1;
            transform: translateY(0);
        }
      `}</style>

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <InstagramSection />
        <ContactSection />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
