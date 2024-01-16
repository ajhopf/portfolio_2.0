import Image from 'next/image';

import { Skeleton } from '@nextui-org/react';

import andre from '../../lib/assets/andre-hopf.png';
import styles from './home.module.css';

import { technologies, frameworks, databases } from '@/app/lib/data';
import TechnologyBadge from './technology-badge';
import { Suspense } from 'react';

// className="absolute bottom-1/4 right-0 w-1/3"

const imageSkeleton = <Skeleton className="flex rounded-full w-12 h-12" />;

const Home = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row lg:justify-center items-center">
        <div>
          <Suspense fallback={imageSkeleton}>
            <Image
              className={`${styles.image} max-h-[90vh] lg:max-h-[100vh] w-auto grayscale lg:ml-4 relative lg:-top-4`}
              src={andre}
              priority={true}
              alt="André Hopf"
            />
          </Suspense>
        </div>
        <div className="text-center">
          <h1 className="pr-4 text-lg">
            Hey! I&apos;m
            <span className="text-green-400"> André Hopf</span>, Full-Stack
            Developer Based in Florianópolis
          </h1>
        </div>
      </section>

      <div
        style={{
          height: '2px',
          width: '80vw',
          backgroundColor: '#4ade80',
          margin: '2rem 0 2rem 50%',
          transform: 'translateX(-50%)'
        }}
      ></div>

      <section className="flex flex-col text-center">
        <div>
          <h2>Technologies</h2>
          <ul className="flex flex-wrap justify-center">
            {technologies.map(tech => (
              <TechnologyBadge
                key={tech.title}
                title={tech.title}
                src={tech.iconSrc}
              />
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2>Frameworks</h2>
          <ul className="flex flex-wrap justify-center">
            {frameworks.map(framework => (
              <TechnologyBadge
                key={framework.title}
                title={framework.title}
                src={framework.iconSrc}
              />
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2>Databases</h2>
          <ul className="flex flex-wrap justify-center">
            {databases.map(db => (
              <TechnologyBadge
                key={db.title}
                title={db.title}
                src={db.iconSrc}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
