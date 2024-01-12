import Image from 'next/image';
import andre from './andre-hopf.png';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className="relative max-h-[90vh]">
      <Image
        className={`${styles.image} h-[80vh] w-auto grayscale hover:grayscale-0 ease-in-out duration-700 ml-4 relative lg:-top-4`}
        src={andre}
        alt="André Hopf"
      />
      <div className="absolute bottom-1/4 right-0 w-1/3">
        <p className="pr-4 text-lg">
          Hey! I&apos;m
          <span className="text-green-400"> André Hopf</span>, Full-Stack
          Developer Based in Florianópolis
        </p>
      </div>
    </div>
  );
};

export default Home;
