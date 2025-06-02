"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  // Liste des projets avec le statut "tested"
  const testedProjects = [
    "Calice", "Peerz", "Skopa (Graph)", "Skopa (AI Agent)", "Shazam for need discovery V2", "Shazam for need discovery", "Syncrowd", "Reelay", "Kascad", "Presence V2", "Juntoo", "Ondanse", "Transition insurance for challenger software", "Waze / Glassdoor for Sales Intelligence", "Back again in the sales industry", "IntentSwap"
  ];
  
  // Projet avec le statut "delayed"
  const delayedProjects = ["Metricore", "4 Explorations in IT Systems, ERP, and Software Integration"];

  // Séparer les projets selon la section
  const latestProjectsTitles = [
    "IntentSwap",
    "Back again in the sales industry",
    "Waze / Glassdoor for Sales Intelligence"
  ];
  const latestProjects = products.filter((p: any) => latestProjectsTitles.includes(p.title));
  const oldProjects = products.filter((p: any) => !latestProjectsTitles.includes(p.title));

  return (
    <div className="relative" style={{ zIndex: 5 }}>
      <div className="grid grid-cols-1 gap-12 pt-10">
        {/* Section Latest projects in May */}
        <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-0 mb-4">
          Latest projects in May
        </Heading>
        {latestProjects.map((product: any, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <div className="relative">
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md w-[200px] h-[200px] object-contain bg-gray-50"
                />
                {testedProjects.includes(product.title) && (
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    tested
                  </span>
                )}
                {delayedProjects.includes(product.title) && (
                  <span className="absolute top-2 right-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                    delayed
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Section Projects from January to April */}
        <Heading as="h3" className="font-black text-md md:text-lg lg:text-lg mt-8 mb-2 text-gray-700">
          Projects from January to April
        </Heading>
        {oldProjects.map((product: any, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <div className="relative">
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md w-[200px] h-[200px] object-contain bg-gray-50"
                />
                {testedProjects.includes(product.title) && (
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    tested
                  </span>
                )}
                {delayedProjects.includes(product.title) && (
                  <span className="absolute top-2 right-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                    delayed
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
