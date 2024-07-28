import Stacks from "@/app/(root-components)/stacks";
import { myName } from "@/lib/utils";
import { Metadata } from "next";
import Persona from "./(root-components)/persona";

export const metadata: Metadata = {
  title: `${myName} - My smart portFolio`,
};
export default function Home() {
  return (
    <main className="flex-col">
      {/* <div className="size-[800px]  rounded-full bg-gradient-radial from-primary/30 to-70%" />
      <div className="size-[800px]  bg-gradient-half-radial from-primary/30 to-50%  " /> */}
      <Persona />
      <Stacks />
    </main>
  );
}
