import Image from "next/image";
import { StartButton } from "@/components/StartButton";
export default function Home() {
  return (
    <div>
      <StartButton path="/pages/game" />
    </div>
  );
}
