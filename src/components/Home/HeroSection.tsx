'use client';

import { SparklesCore } from '../ui/sparkles';

import Image from 'next/image';
import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { FlipWords } from '../ui/flip-words';

export default function HeroSection() {
  return (
    <>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute"
        particleColor="#FFFFFF"
      />
      <section className="py-10 px-20 h-screen relative pt-20">
        <div className="flex items-center h-full justify-between">
          <div>
            <h1 className="text-neutral-50 font-bold text-[40px]">
              Hi, I'm Jane Doe
            </h1>
            <h2>
              <FlipWords
                className="text-[#8d41d9] text-[30px] font-bold mt-[-10px]"
                words={['Frontend Developer', 'UI/UX Designer', 'Freelancer']}
              />
            </h2>
            <p className="max-w-[600px] text-base text-neutral-300 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              asperiores nam et odio quam quae obcaecati consequatur, ab
              molestiae dolorem minima pariatur totam repellat? Cupiditate
              facere nobis perspiciatis cumque aperiam nesciunt itaque fugit
              alias impedit tenetur ad quidem iure repellendus expedita adipisci
              velit.
            </p>
            <div className="flex gap-x-6 mt-6 text-neutral-50">
              <div className="rounded-xl w-32 text-center py-2 bg-[#8d41d9] text-base font-medium text-[#11071F]">
                Hire Me
              </div>
              <div className="rounded-xl w-32 text-center py-2 text-[#8d41d9] text-base font-medium border-2 border-[#8d41d9]">
                CV
              </div>
            </div>
            <div className="flex gap-x-4 text-[#8d41d9] text-[20px] absolute bottom-10">
              <FaLinkedinIn />
              <FaGithub />
              <FaEnvelope />
            </div>
          </div>
          <div className="flex gap-x-8 items-center">
            <div className="text-white text-[50px] flex flex-col gap-y-16">
              <div className="rounded-full bg-orange-500 w-fit p-4 text-center shadow-[0px_0px_50px_0px] shadow-orange-500 translate-x-10">
                <FaHtml5 />
              </div>
              <div className="rounded-full bg-sky-500 w-fit p-4 text-center shadow-[0px_0px_50px_0px] shadow-sky-500 -translate-x-5">
                <FaCss3Alt />
              </div>
              <div className="rounded-full bg-yellow-500 w-fit p-4 text-center shadow-[0px_0px_50px_0px] shadow-yellow-500 translate-x-10">
                <FaJs />
              </div>
            </div>
            <div className="rounded-full size-72 bg-[#8d41d9] relative overflow-hidden shadow-[0px_0px_50px_0px] shadow-[#8d41d9]">
              <Image
                src="/hero.png"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="size-96 top-[-50px] object-contain absolute right-[-7px] z-30"
              />
              <Image
                src="/hero-shadow.png"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="size-96 top-[-40px] object-contain absolute right-[10px] z-20 opacity-20"
              />
              <Image
                src="/moon.jpg"
                alt="Moon Texture"
                width={1000}
                height={1000}
                className="absolute h-96 w-full object-cover opacity-25 z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
