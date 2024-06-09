import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server';


import CommitTable from "~/app/_components/table";
import CommitCalendar from "~/app/_components/calendar";
import Menu from "~/app/_components/menu";
import Image from "next/image";

export const dynamic = "force-dynamic";



export default async function HomePage() {
  const user = await currentUser();

  return (
    <main className="grid grid-cols-10 gap-4">
      <div className="col-start-5 col-span-4">
      <SignedOut>
        <div className="flex w-full h-full justify-center items-center text-2xl font-semibold">
          Please sign in above
        </div>
      </SignedOut>
      
      test</div>

      <div className="col-start-3 col-span-2">
        <Image 
          src={user?.imageUrl}
          width={600}
          height={600}
          alt={user?.fullName}
          className="rounded-full"
        />
      
      
      </div>
    </main>

    // <main className="flex flex-col">
    // <SignedIn>
    //     <div className="flex flex-col justify-center items-center">
    //       <div className="relative h-42 w-[580px] text-[48px] font-semibold pt-16">
    //         Hi, {user?.firstName}
    //       </div>

    //       <div className="flex items-stretch space-x-2">
    //         <Menu userId={user?.id}/>

    //         <div className="flex h-80 flex-col overflow-y-scroll">
    //           <CommitCalendar />
    //         </div>

    //       </div>

    //       <div className="flex h-64 flex-col overflow-y-scroll">
    //         <CommitTable />
    //       </div>

    //       <div className="pt-16"></div>

    //     </div>
    //   </SignedIn>
    // </main>
  );
}
