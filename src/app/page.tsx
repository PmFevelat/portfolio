import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there!</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m Pierre-Marie, a student at HEC Paris and a founder at heart. You&apos;ll find more about me in the About section. This website showcases the projects I&apos;ve explored over the past months in search of my next startup — testing key assumptions as fast as possible, trying to build something people truly want.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Before building anything, I wanted to understand how companies actually buy — how they're prospected, how trust is earned, and how new solutions break through. That led me to explore the mechanics of software sales in depth. Along the way, I ran experiments that turned into projects — rethinking how we discover new tools in a world where traditional sales channels are saturated, marketing is biased, and word of mouth favors incumbents.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        This exploration naturally led me deeper into the sales & marketing space. I've since worked across the entire value chain — from positioning and sales enablement to buyer intelligence and win-loss analysis. It&apos;s an industry I'm excited to keep building in.
      </Paragraph>
      
      <Products />
      <TechStack />
    </Container>
  );
}
