"use client";

import LandingPage from "@/components/Landing/landing-page";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function HomePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending) {
      if (session) {
        router.replace("/dashboard");
      }
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return <div>{!session && <LandingPage />}</div>;
}

export default HomePage;
