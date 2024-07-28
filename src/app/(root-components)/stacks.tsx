import { H1, HeadingWide } from "@/components/ui/heading";
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  CircleFadingPlusIcon,
  Dot,
} from "lucide-react";
export default function stacks() {
  const stacks: { type: string; competence: string }[] = [
    { type: "Front-end", competence: "Fluent" },
    { type: "Back-end", competence: "Very-Fluent" },
    { type: ">79.99%", competence: "Competence" },
  ];
  return (
    <section className="relative hidden min-h-[600px] flex-col justify-end md:flex ">
      <section className="absolute  flex h-full w-full flex-col items-center justify-start bg-gradient-radial from-primary/30 to-100% pt-20">
        <HeadingWide className=' pt-28 text-center text-primary/35 opacity-50 md:pt-0  xl:after:content-["eloper"]'>
          Full Stack Dev
        </HeadingWide>
      </section>
      <section className="relative flex min-h-[450px] flex-col items-center justify-end  gap-6 bg-[url('/globe.png')] bg-contain bg-center bg-no-repeat  pb-12">
        <div className="relative z-10  flex w-full  justify-evenly gap-6 rounded-full bg-foreground/5 p-6 backdrop-blur-sm  md:w-3/4 xl:w-7/12">
          {stacks.map((stack) => (
            <div
              key={stack.type}
              className="flex flex-col items-center uppercase"
            >
              <H1 className="text-primary">{stack.type}</H1>
              <span className="font-thin tracking-widest text-foreground/75">
                {stack.competence}
              </span>
            </div>
          ))}
        </div>
        <div className="group relative z-10 flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-green-800/20">
          <BriefcaseIcon className="animate-pulse text-green-800  group-hover:text-green-100" />
          <span className='underline after:content-["Ready_To_work"] group-hover:text-green-50 group-hover:no-underline after:group-hover:content-["Assign_Me_a_Gig_🤩"]' />
        </div>
      </section>
      <div
        className="absolute inset-0 h-full w-full  
         bg-gradient-to-b from-background/95 via-transparent to-background/95 to-95%"
      />
    </section>
  );
}
