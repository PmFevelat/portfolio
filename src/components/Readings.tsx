"use client";
import React from "react";
import { Heading } from "./Heading";
import { Reading } from "@/types/readings";
import { readings } from "@/constants/readings";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Readings = () => {
  // Grouper les lectures par catégorie
  const readingsByCategory = readings.reduce((acc, reading) => {
    if (!acc[reading.category]) {
      acc[reading.category] = [];
    }
    acc[reading.category].push(reading);
    return acc;
  }, {} as Record<string, Reading[]>);

  return (
    <div className="relative" style={{ zIndex: 5 }}>
      <div className="grid grid-cols-1 gap-12 pt-10">
        {Object.entries(readingsByCategory).map(([category, categoryReadings], categoryIndex) => (
          <div key={category} className="space-y-6">
            <Heading as="h3" className="text-xl font-bold text-gray-900">
              {category}
            </Heading>
            <div className="grid grid-cols-1 gap-12">
              {categoryReadings.map((reading, readingIndex) => (
                <motion.div
                  key={reading.href}
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 0.2, delay: (categoryIndex * 0.1) + (readingIndex * 0.05) }}
                >
                  <a
                    href={reading.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
                  >
                    <div className="relative">
                      <Image
                        src={reading.thumbnail}
                        alt="thumbnail"
                        height="200"
                        width="200"
                        className="rounded-md w-[200px] h-[200px] object-contain bg-gray-50"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <Heading
                          as="h4"
                          className="font-black text-lg md:text-lg lg:text-lg"
                        >
                          {reading.title}
                        </Heading>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 