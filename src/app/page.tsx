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
        I&apos;m Pierre-Marie, a student at HEC Paris and a founder at heart. You&apos;ll find more about me in the About section.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        This website showcases the projects I&apos;ve explored over the past four months in search of my next startup — testing key assumptions as fast as possible, trying to build something people truly want.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        As you&apos;ll see, many of these projects are driven by a core focus: rethinking how we discover new software and innovative players — in a world where traditional sales channels are saturated, marketing is often biased, and word of mouth tends to favor incumbents.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Even if these projects didn&apos;t succeed, they taught me a lot about the mechanics of software sales — especially how to build trust as a new player. Insights I&apos;ll carry into the go-to-market strategy of my next startup.
      </Paragraph>
      
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Projects I&apos;ve been exploring over the past 4 months
      </Heading>
      
      <Products />
      <TechStack />
    </Container>
  );
}
