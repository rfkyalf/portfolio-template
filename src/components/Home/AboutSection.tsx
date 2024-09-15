'use client';

import Image from 'next/image';
import { HoverEffect } from '../ui/card-hover-effect';
import { SparklesCore } from '../ui/sparkles';

export default function AboutSection() {
  return (
    <>
      <SparklesCore
        id="hero"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute"
        particleColor="#FFFFFF"
      />
      <section className="py-10 px-20 h-screen relative overflow-hidden">
        <div className="bg-[#8d41d9]/10 h-full rounded-xl p-8 flex flex-col justify-center shadow-[0px_0px_30px_5px] shadow-[#8d41d9]/30 overflow-hidden relative">
          <h1 className="text-neutral-50 text-[40px] font-bold">About Me</h1>
          <div className="flex items-center justify-center h-full gap-x-8">
            <Image
              src="/about.png"
              alt="About Image"
              width={1000}
              height={1000}
              className="size-64 object-contain z-40"
            />
            <HoverEffect items={CardList} />
          </div>
        </div>
      </section>
    </>
  );
}

const CardList = [
  {
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde, porro possimus illo asperiores cumque commodi deleniti cupiditate aut provident.',
    link: '/frontend-developer',
  },
  {
    title: 'UI/UX Designer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde, porro possimus illo asperiores cumque commodi deleniti cupiditate aut provident.',
    link: '/ui-ux-designer',
  },
  {
    title: 'Freelancer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde, porro possimus illo asperiores cumque commodi deleniti cupiditate aut provident.',
    link: '/freelancer',
  },
];
