'use client';
import { Image } from '@nextui-org/react';
import { motion, scroll } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  scroll(progress => setScrollProgress(1 - progress * 5));

  return (
    <>
      <section className="h-[90vh] flex justify-center items-center relative">
        <motion.h1 className="text-[7vw]" style={{ opacity: scrollProgress }}>
          Resume
        </motion.h1>
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
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2023-Present</p>
          <p>
            <span className="text-green-400">Graduation: </span>Computer Science
          </p>
          <p>
            <span className="text-green-400">School: </span> Centro
            Universitário União das Américas Descomplica
          </p>
          <p>
            <span className="text-green-400">Expected conclusion date: </span>{' '}
            10/2027
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2023</p>
          <p>
            <span className="text-green-400">Bootcamp: </span>Full-Stack Dev
          </p>
          <p>
            <span className="text-green-400">School: </span> Senai / DevInHouse
          </p>
          <p>
            <span className="text-green-400">Conclusion date: </span> 08/2023
          </p>
          <p>
            {' '}
            <span className="text-green-400">Content: </span> Angular, Java,
            SpringBoot, Oracle, Unity Tests, Docker, Software Architecture, Git
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2022-2023</p>
          <p>
            <span className="text-green-400">Bootcamp: </span>Full-Stack Dev
          </p>
          <p>
            <span className="text-green-400">School: </span> Tera
          </p>
          <p>
            <span className="text-green-400">Conclusion date: </span> 02/2023
          </p>
          <p>
            {' '}
            <span className="text-green-400">Content: </span> React, Node,
            MongoDB, Python, Git
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2016-2020</p>
          <p>
            <span className="text-green-400">Graduation: </span>Physiotherapy
          </p>
          <p>
            <span className="text-green-400">School: </span> Universidade do Sul
            de Santa Catarina
          </p>
          <p>
            <span className="text-green-400">Conclusion date: </span> 12/2020
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] h-[10vh] p-10">
          <h2 className="text-xl text-green-400">Work Experience</h2>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2023-Present</p>
          <p className="text-green-400">Career Transition</p>
          <p>
            <span className="text-green-400">Description: </span> After
            acquiring initial experience as a programmer while also working as a
            physiotherapist, I am now fully committed to my career in
            programming. During this period until late 2023 I was also working
            to construct my own house.
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2018-2023</p>
          <p className="text-green-400">Physiotherapist</p>
          <p>
            <span className="text-green-400">Description: </span> Since the
            middle of my physiotherapy degree, I started offering private home
            care. Initially, I only worked with friends and acquaintances, but
            gradually I was able to expand my reach, allowing me to put into
            practice the skills I had acquired at university. In addition, this
            experience provided me with the development of soft skills, such as
            sales, effective communication, empathy, and direct contact with
            customers.
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2020-2022</p>
          <p className="text-green-400">Physiotherapist / Trainer</p>
          <p>
            <span className="text-green-400">Location: </span> Inside Core
            Studio
          </p>
          <p>
            <span className="text-green-400">Description: </span> As a coach,
            specialized in Pilates and functional training, my responsibility
            was to create personalized treatment and training plans, considering
            the physical capacity, goals, and comorbidities of each client.
            During the sessions, I attended 2 to 6 people simultaneously,
            developing dynamism, observation skills, and effective
            communication.
          </p>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="border border-gray-200/30 w-[70vw] p-10 relative">
          <p className="text-xs text-green-400 absolute top-2">2014-2015</p>
          <p className="text-green-400">Cook</p>
          <p>
            <span className="text-green-400">Location: </span> Patagonia
            Chocolates / Queenstown - New Zealand
          </p>
          <p>
            <span className="text-green-400">Description: </span> As a coach,
            specialized in Pilates and functional training, my responsibility
            was to create personalized treatment and training plans, considering
            the physical capacity, goals, and comorbidities of each client.
            During the sessions, I attended 2 to 6 people simultaneously,
            developing dynamism, observation skills, and effective
            communication.
          </p>
        </div>
      </section>

      {/* <p>
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
      </p> */}
    </>
  );
};

export default About;
