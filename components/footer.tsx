import Image from "next/image";
import { Button } from "./ui/button";

const flags = [
  {
    src: '/spain.svg',
    name: 'spanish'
  },
  {
    src: '/spain.svg',
    name: 'spanish'
  },
  {
    src: '/spain.svg',
    name: 'spanish'
  },
  {
    src: '/spain.svg',
    name: 'spanish'
  },
  {
    src: '/spain.svg',
    name: 'spanish'
  },
];

export function Footer () {
  return (
    // <footer className="flex justify-center mt-auto space-x-12 border-t ">
    //   {flags.map((flag, index) => (
    //     <span key={index} className="flex flex-row items-center">
    //       <Image src={flag.src} width={80} height={80} alt={flag.name} />
    //       {flag.name}
    //     </span>
    //   ))}
    // </footer>
    <footer className="mt-auto lg:block h-25 w-full border-t p-5 h-20">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {flags.map((flag, index) => (
          <Button key={index} size="lg" variant="ghost" className="w-full">
            <Image src='/spain.svg' alt="" height={32} width={50} className="mr-4 rounded-md"/>
            Italian
          </Button>
        ))}
      </div>
    </footer>
  );
}
