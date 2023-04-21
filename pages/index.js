import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className={"flex items-center justify-between gap-10 text-2xl mx-8"}>
        <p className={"font-medium"}>Hello, {session?.user?.name}</p>
        <div
          className={"flex items-center gap-2 bg-amber-400 rounded-l-full pr-4"}
        >
          <img
            src={session?.user?.image}
            alt=""
            className={"rounded-full w-12"}
          />
          <p className={"text-lg text-white uppercase font-bold"}>
            {session?.user?.name}
          </p>
        </div>
      </div>
    </Layout>
  );
}
