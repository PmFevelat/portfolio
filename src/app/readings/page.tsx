import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Readings } from "@/components/Readings";

export default function ReadingsPage() {
  return (
    <Container>
      <span className="text-4xl">📚</span>
      <Heading className="font-black pb-4">What I read</Heading>
      <Readings />
    </Container>
  );
} 