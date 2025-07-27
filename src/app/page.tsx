"use client";

import { HeroSkeleton } from "@/components/Landing/Hero/hero-skeleton";
import LandingPage from "@/components/Landing/landing-page";
import { NavbarSkeleton } from "@/components/Landing/Navbar/components/navbar-skeleton";
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
      <div className="flex flex-col gap-6 items-center w-full pt-6">
        <NavbarSkeleton />
        <HeroSkeleton />
      </div>
    );
  }

  return <div>{!session && <LandingPage />}</div>;
}

export default HomePage;
