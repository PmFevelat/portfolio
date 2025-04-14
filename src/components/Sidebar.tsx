"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  // On initialise avec true par défaut pour desktop, false pour mobile
  const [open, setOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Effet pour gérer l'initialisation côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Effet séparé pour la détection mobile, uniquement exécuté une fois après le montage
  useEffect(() => {
    if (mounted) {
      const isMobileView = window.innerWidth <= 1024;
      
      // Vérifier s'il existe déjà une préférence dans localStorage
      const savedState = localStorage.getItem('sidebarOpen');
      
      if (savedState !== null) {
        setOpen(JSON.parse(savedState));
      } else if (isMobileView) {
        setOpen(false);
      }
    }
  }, [mounted]);

  // Stocker l'état dans localStorage pour le rendre persistant
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('sidebarOpen', JSON.stringify(open));
    }
  }, [open, mounted]);

  const toggleSidebar = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      {/* Sidebar principale */}
      <motion.div
        initial={{ x: open ? 0 : -230 }}
        animate={{ x: open ? 0 : -230 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-6 z-[100] py-10 bg-neutral-100 w-[230px] fixed h-screen left-0 flex flex-col justify-between shadow-md overflow-hidden"
      >
        <div className="flex-1 overflow-auto">
          <SidebarHeader />
          <Navigation setOpen={setOpen} />
        </div>
      </motion.div>

      {/* Barre minimaliste qui reste visible quand la sidebar est fermée */}
      <div 
        className={`fixed left-0 top-0 h-screen z-[99] w-[60px] bg-neutral-100 shadow-md transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Bouton toggle - positionné de façon absolue et toujours visible */}
      <button
        className="fixed top-1/2 transform -translate-y-1/2 left-[45px] h-[40px] w-[40px] bg-neutral-100 rounded-full shadow-md flex items-center justify-center z-[101] border border-gray-200 hover:bg-gray-50 transition-all duration-200"
        onClick={toggleSidebar}
        style={{ 
          left: open ? '215px' : '45px'
        }}
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
      >
        {open ? (
          <IconChevronLeft className="h-5 w-5 text-gray-600" />
        ) : (
          <IconChevronRight className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {/* Espace pour compenser la sidebar */}
      <div className={`${open ? 'w-[230px]' : 'w-[60px]'} transition-all duration-300 flex-shrink-0`} />
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2 pr-2 pb-1">
      <div className="w-10 h-10 relative flex-shrink-0">
        <Image
          src="/images/Profil.jpeg"
          alt="Avatar"
          fill
          sizes="40px"
          className="rounded-full object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>
      <div className="flex text-sm flex-col overflow-visible">
        <p className="font-bold text-primary whitespace-nowrap">Pierre-Marie Fevelat</p>
        <p className="font-light text-secondary">Student At HEC Paris</p>
      </div>
    </div>
  );
};
