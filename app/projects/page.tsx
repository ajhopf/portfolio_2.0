import { Image, Link } from '@nextui-org/react';

const Projects = () => {
  return (
    <>
      <div className="text-center h-[43vh] lg:h-[33vh] flex flex-col justify-center">
        <div>
          <Image
            className="ml-[50%] translate-x-[-50%]"
            width="80"
            height="80"
            src="https://img.icons8.com/dotty/80/FFFFFF/digger.png"
            alt="digger"
          />
        </div>

        <p className="text-green-400">Under Construction</p>
        <p>
          Meanwhile, visit my{' '}
          <Link
            className="text-green-400"
            href="https://github.com/ajhopf"
            rel="noopener noreferrer"
            target="_blank"
          >
            github portfolio
          </Link>{' '}
          to see some of my projects
        </p>
      </div>
    </>
  );
};

export default Projects;
