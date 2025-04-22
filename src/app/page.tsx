// Next-Auth Login Authentication Tutorial with Next.js App Directory

import UserCard from "@/components/UserCard";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
// import { UserCard } from "@/components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="font-bold text-center text-5xl mt-10">
          {/* You shall not pass! */}
          Please log in to view this content.
        </h1>
      )}
    </>
  );
}
