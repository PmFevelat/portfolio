"use client";
import { Product } from "@/types/products";
import React, { useEffect } from "react";
import Image from "next/image";

export const ProductDebug = ({ product }: { product: Product }) => {
  useEffect(() => {
    console.log("Thumbnail type:", typeof product.thumbnail);
    console.log("Thumbnail value:", product.thumbnail);
    
    // Si c'est un objet, afficher ses propriétés
    if (typeof product.thumbnail === 'object' && product.thumbnail !== null) {
      console.log("Thumbnail properties:", Object.keys(product.thumbnail));
      
      // @ts-ignore
      if (product.thumbnail.src) {
        // @ts-ignore
        console.log("Thumbnail src:", product.thumbnail.src);
      }
    }
  }, [product.thumbnail]);

  return (
    <div className="p-4 border border-red-500 my-4">
      <h3 className="text-xl font-bold">Image Debug Info</h3>
      <p>Title: {product.title}</p>
      <p>Image Type: {typeof product.thumbnail}</p>
      <p>Check console for more details</p>
      
      {/* Test avec Image */}
      <div className="mt-4">
        <h4 className="font-bold">Test img with direct src:</h4>
        <Image 
          src="/images/peerz.png" 
          alt="Test" 
          width={200}
          height={150}
          style={{ width: '200px', height: 'auto', border: '1px solid blue' }} 
        />
      </div>
      
      {/* Test avec objet */}
      <div className="mt-4">
        <h4 className="font-bold">Test img with object src:</h4>
        {typeof product.thumbnail === 'object' && product.thumbnail !== null && (
          // @ts-ignore
          <Image 
            // @ts-ignore
            src={product.thumbnail.src} 
            alt="Test object" 
            width={200}
            height={150}
            style={{ width: '200px', height: 'auto', border: '1px solid green' }} 
          />
        )}
      </div>
    </div>
  );
}; 