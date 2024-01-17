import { Tooltip } from '@nextui-org/tooltip';
import Image from 'next/image';

const TechnologyBadge = ({ title, src }: { title: string; src: string }) => {
  return (
    <Tooltip
      classNames={{
        content: ['rounded py-2 px-4 shadow-xl bg-[#101010]', 'text-green-400']
      }}
      key={title}
      content={title}
    >
      <Image
        className="grayscale hover:grayscale-0 h-14 w-auto m-1"
        width={100}
        height={100}
        src={src}
        alt={title}
      />
    </Tooltip>
  );
};

export default TechnologyBadge;
