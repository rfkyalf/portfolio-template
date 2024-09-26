'use client';

import Image from 'next/image';
import { SparklesCore } from '../ui/sparkles';

export default function ExperienceSection() {
  return (
    <>
      <SparklesCore
        id="exp"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute"
        particleColor="#FFFFFF"
      />
      <section className="py-10 px-20 relative h-screen">
        <div className="flex flex-col justify-center h-full gap-y-8">
          <h1 className="text-neutral-50 text-[40px] font-bold">Experience</h1>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4">
            <div className="relative overflow-hidden bg-[#8d41d9]/10 shadow-[0px_0px_10px_5px] shadow-[#8d41d9]/30 p-4 flex flex-col rounded-xl mt-4">
              <Image
                src="/microsoft.png"
                alt="Microsoft Corp."
                width={1000}
                height={1000}
                className="size-40 object-contain absolute -top-4 -right-4 opacity-10"
              />
              <div className="flex items-center gap-x-2 text-neutral-100">
                <h1 className="text-[40px] font-semibold">28</h1>
                <div className="text-sm flex flex-col space-y-[-1px] font-semibold">
                  <p>November</p>
                  <p>2024</p>
                </div>
              </div>
              <div className="border-t border-[#8d41d9]/30 mt-2 pt-2 pb-2">
                <h2 className="text-[30px] font-medium text-neutral-100">
                  Microsoft Corp.
                </h2>
                <p className="text-base -mt-2 text-neutral-200">
                  Frontend Developer
                </p>
                <ul className="mt-2 text-neutral-300">
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden bg-[#8d41d9]/10 shadow-[0px_0px_10px_5px] shadow-[#8d41d9]/30 p-4 flex flex-col rounded-xl mt-4">
              <Image
                src="/netflix.png"
                alt="Netflix Inc."
                width={1000}
                height={1000}
                className="size-40 object-contain absolute -top-4 -right-4 opacity-10"
              />
              <div className="flex items-center gap-x-2 text-neutral-100">
                <h1 className="text-[40px] font-semibold">17</h1>
                <div className="text-sm flex flex-col space-y-[-1px] font-semibold">
                  <p>July</p>
                  <p>2022</p>
                </div>
              </div>
              <div className="border-t border-[#8d41d9]/30 mt-2 pt-2 pb-2">
                <h2 className="text-[30px] font-medium text-neutral-100">
                  Netflix Inc.
                </h2>
                <p className="text-base -mt-2 text-neutral-200">
                  Software Engineer
                </p>
                <ul className="mt-2 text-neutral-300">
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative overflow-hidden bg-[#8d41d9]/10 shadow-[0px_0px_10px_5px] shadow-[#8d41d9]/30 p-4 flex flex-col rounded-xl mt-4">
              <Image
                src="/google.png"
                alt="Google LLC"
                width={1000}
                height={1000}
                className="size-40 object-contain absolute -top-4 -right-4 opacity-10"
              />
              <div className="flex items-center gap-x-2 text-neutral-100">
                <h1 className="text-[40px] font-semibold">05</h1>
                <div className="text-sm flex flex-col space-y-[-1px] font-semibold">
                  <p>May</p>
                  <p>2020</p>
                </div>
              </div>
              <div className="border-t border-[#8d41d9]/30 mt-2 pt-2 pb-2">
                <h2 className="text-[30px] font-medium text-neutral-100">
                  Google LLC
                </h2>
                <p className="text-base -mt-2 text-neutral-200">
                  Fullstack Developer
                </p>
                <ul className="mt-2 text-neutral-300">
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                  <li className="flex gap-x-2">
                    <span>-</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, ipsum.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-32 text-center py-2 bg-[#8d41d9] text-base font-medium text-[#11071F] self-center mt-4">
            View More
          </div>
        </div>
      </section>
    </>
  );
}
