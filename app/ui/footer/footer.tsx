import styles from './footer.module.css';
import { Image, Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className={`'w-[100vw] h-[40vh] lg:h-[50vh] mt-[3rem]`}>
      <div
        className={`${styles['image-container']} h-[30vh] lg:h-[40vh] bg-center bg-cover flex align-center`}
      >
        <div className="flex flex-col justify-end items-end grow m-3">
          <Link href="https://www.linkedin.com/in/andre-hopf/">
            <Image
              src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
              alt="linkedin"
            />
          </Link>
          <Link href="https://www.github.com/ajhopf/">
            <Image
              src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png"
              alt="github"
            />
          </Link>
        </div>
      </div>
      <div className="h-[10vh] text-center flex flex-col justify-center">
        <p>André Hopf</p>
        <div
          style={{
            height: '1px',
            width: '80vw',
            backgroundColor: '#4ade80',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
          }}
        ></div>
        <p>2024</p>
        <Link
          href="https://icons8.com"
          className="no-underline text-green-100 absolute pt-12 right-2 text-xs"
        >
          Icons by Icons8
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
