'use client';
import { Image } from '@nextui-org/react';
import { motion, scroll } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  scroll(progress => setScrollProgress(0.7 - progress));

  return (
    <>
      <section className="h-[90vh] flex justify-center items-center relative">
        <h1 className="text-[7vw]">Resume</h1>
        <motion.div
          style={{ opacity: scrollProgress }}
          className="absolute bottom-10"
          animate={{
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.3
          }}
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVR4nO3YS0vrUBSA0YP3fzkQuSqoiK+JilzFifizfaADUcS33iUHI4aQaH3FE9gLOilNur/uBtqkFEIIIRQKSzjFCebTUOHIq/00VBrSUImQwsRGShMbKU1spDSxkdLERkoTGylNbKQ0xW8EGzjDMZa/GpLPUf0tPsTsjw3eeNM/OK/N95DDPhtSfSj5HC8OfjyieuOx6s5IXR5k86Mh+ZhGRH8h1QCrLQM84t+oIfm11TF1D1jsLaQaZAX3jUH+Y/e9EGx1RKz3GtG4SO+6YtpCsN0RsfYrEbWYWdy0xOw1Q7DTEnHX+9epCxZw2xLjnefyMQupJJjBtdGVF/EC0yPG3BZ/UxtTuHojIl9Pc2kI8Lcj5qa3nyDfBeO4qEVcYjINESaqgPyYSEPmOWbYESGEEFKHJ2gjDEnpqr4iAAAAAElFTkSuQmCC"
            alt="down arrow"
          />
        </motion.div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] h-[10vh] p-10">
          <h2 className="text-xl text-green-400">About me</h2>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10">
          <p>
            <span className="text-green-400">Name: </span>André Jaques Hopf
          </p>
          <p>
            <span className="text-green-400">Age: </span>31
          </p>
          <p>
            <span className="text-green-400">Residence: </span> Florianópolis /
            Santa Catarina
          </p>
          <p>
            <span className="text-green-400">Email: </span>andre.hopf@gmail.com
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] h-[10vh] p-10">
          <h2 className="text-xl text-green-400">Education</h2>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10">
          <p>
            <span className="text-green-400">Graduação: </span>Ciência da
            Computação - Faculdade Digital Descomplica
          </p>
          <p>
            <span className="text-green-400">Age: </span>31
          </p>
          <p>
            <span className="text-green-400">Residence: </span> Florianópolis /
            Santa Catarina
          </p>
          <p>
            <span className="text-green-400">Email: </span>andre.hopf@gmail.com
          </p>
        </div>
      </section>

      <p>
        Desenvolvedor com experiência utilizando React e Angular para o frontend
        e Node.js e Java (Spring) para o backend. Possuo familiaridade com
        bancos de dados relacionais (DB Oracle utilizando a linguagem PL/SQL) e
        não relacionais (MongoDB). Experiência na criação de testes unitários
        utilizando JUnit, Karma e Jasmine. Também tenho conhecimento em Docker
        para a criação e implantação de ambientes de desenvolvimento. Sou
        proficiente no versionamento de softwares utilizando Git e Github. Com
        graduação na área da saúde e experiência em captação e reabilitação de
        pacientes, reconheço a importância da comunicação efetiva no sucesso de
        projetos e relacionamentos. Procuro aplicar esses princípios não apenas
        ao desenvolver códigos limpos e de fácil entendimento e manutenção, mas
        também na minha interação com outras pessoas. Em busca de educação
        contínua, em outubro de 2023 iniciei uma nova graduação em Ciência da
        Computação com ênfase em Dev Fullstack na faculdade Descomplica.
      </p>
    </>
  );
};

export default About;
