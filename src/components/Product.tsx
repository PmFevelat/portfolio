"use client";
import { Product } from "@/types/products";
import React, { CSSProperties } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const SingleProduct = ({ product }: { product: Product }) => {
  // Utiliser directement le chemin absolu pour l'image
  const getImagePath = () => {
    if (typeof product.thumbnail === 'string') {
      return product.thumbnail;
    }
    
    // Cas où c'est un objet importé
    if (product.thumbnail && typeof product.thumbnail === 'object') {
      // @ts-ignore
      if (product.thumbnail.src) {
        // @ts-ignore
        return product.thumbnail.src;
      }
    }
    
    // Chemin de secours spécifique au projet
    if (product.title === "Peerz") {
      return "/images/peerz.png";
    }
    
    return "";
  };

  const imageUrl = getImagePath();
  
  // Choisir le style d'affichage en fonction du titre du projet
  const getImageStyle = (): CSSProperties => {
    // Pour Presence V2, utiliser une approche spéciale pour afficher l'image complète
    if (product.title === "Presence V2") {
      return {
        width: 'auto',
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        margin: '0 auto',
        display: 'block',
        backgroundColor: '#f9fafb'
      } as CSSProperties;
    }
    // Pour les projets avec des images qui nécessitent un cadrage spécial
    else if (product.title === "Calice" || product.title === "Skopa (Graph)" || product.title === "Skopa (AI Agent)" || product.title === "Ondanse" || product.title === "Metricore" || product.title === "Kascad" || product.title === "Shazam for need discovery V2" || product.title === "Juntoo") {
      return {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        backgroundColor: '#f9fafb'
      } as CSSProperties;
    }
    // Pour les projets qui utilisent la même image (abm.png)
    else if (product.title === "Reelay" || product.title === "Syncrowd" || product.title === "Shazam for need discovery") {
      return {
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
        objectPosition: 'center top'
      } as CSSProperties;
    }
    
    // Style par défaut pour les autres projets
    return {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    } as CSSProperties;
  };

  return (
    <div className="py-10">
      {/* Image principale avec chemin absolu */}
      <div 
        className="w-full bg-gray-50 overflow-hidden rounded-lg shadow-md"
        style={{ 
          height: '400px',
          maxHeight: '400px',
          padding: product.title === "Presence V2" ? '20px' : '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
          >
        <img
          src={imageUrl}
          alt={product.title}
          style={getImageStyle()}
        />
      </div>

      {/* Chemin d'image de secours */}
      {!imageUrl && product.title === "Peerz" && (
        <div 
          className="w-full bg-gray-50 overflow-hidden mt-4"
          style={{ height: '400px' }}
        >
          <img
            src="/images/peerz.png"
            alt={product.title}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            } as CSSProperties}
          />
        </div>
      )}

      {/* Tags Container */}
      <div className="flex flex-wrap gap-2 my-4">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
            className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>

      {/* Product details section */}
      <div className="flex lg:flex-row justify-between items-center flex-col mt-8">
        <Heading className="font-black mb-2 pb-1">{product.title}</Heading>
      </div>
      
      <div>
        <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph>
      </div>
      
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {product?.content}
      </div>

      {product.title !== "Kascad" && product.title !== "Shazam for need discovery" && product.title !== "Shazam for need discovery V2" && product.title !== "Peerz" && product.title !== "Calice" && product.title !== "Skopa (Graph)" && product.title !== "Skopa (AI Agent)" && product.title !== "Ondanse" && product.title !== "Metricore" && product.title !== "Presence V2" && product.title !== "Juntoo" && product.title !== "Syncrowd" && product.title !== "Reelay" && (
      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
          {(product.title === "Skopa") ? "View Website" : "View Figma"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
      )}
    </div>
  );
};
