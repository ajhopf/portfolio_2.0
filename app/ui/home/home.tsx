import Image from 'next/image';
import andre from './andre-hopf2.png';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className="relative max-h-[90vh]">
      <Image
        className={`${styles.image} max-h-[60vh] w-auto grayscale hover:grayscale-0 ease-in-out duration-700 ml-4`}
        src={andre}
        alt="André Hopf"
      />
      <div className="absolute bottom-1/4 right-0 ">
        <p className="pr-4 text-lg">
          Hello, I&apos;m
          <span className="text-green-400"> André Hopf</span>, Full-Stack
          Developer Based in Florianópolis
        </p>
      </div>
    </div>
  );
};

export default Home;
