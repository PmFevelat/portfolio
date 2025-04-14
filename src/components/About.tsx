"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import figmascreen from "public/images/figmascreen.png";
import excel from "public/images/excel.png";
import calls from "public/images/calls.png";
import cursorscreen from "public/images/cursorscreen.png";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    figmascreen,
    excel,
    calls,
    cursorscreen,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt={`about-image-${index + 1}`}
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Pierre-Marie, a student at HEC Paris and a founder at heart.
          After co-founding my first startup six months ago, I learned design and coding with AI to launch and prototype my own ideas.
          I&apos;ve spent the last four months looking for my next startup project, trying to build something people want.
        </Paragraph>
        <Paragraph className=" mt-4">
          My core principle: sell before you build. So I test assumptions fast to know whether the world I imagine is worth building. I follow a lean, user-first approach: studying markets, sketching early prototypes, talking to users (on LinkedIn, through the HEC alumni network, or even in the street or in train stations for B2C apps), and iterating based on real feedback (Mom Test, Jobs to Be Done framework).
        </Paragraph>
        <Paragraph className=" mt-4">
          I&apos;m obsessed with listening, learning, and adapting quickly. It&apos;s all about building what matters — and doing things that don&apos;t scale, until they do.
        </Paragraph>
      </div>
    </div>
  );
}
