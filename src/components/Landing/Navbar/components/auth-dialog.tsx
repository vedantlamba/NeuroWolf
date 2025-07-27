"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { authClient } from "@/lib/auth-client";
import { IconBrandGoogle } from "@tabler/icons-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function AuthDialog() {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
    console.log(data.data);
  };

  return (
    <Dialog>
      <div className="flex items-center gap-2 pr-1 md:pr-0">
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="text-sm cursor-pointer">
            Sign In
          </Button>
        </DialogTrigger>

        <DialogTrigger asChild>
          <Button size="sm" className="text-sm cursor-pointer">
            Get Started For Free
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent className="rounded-xl p-6">
        <DialogTitle />
        <DialogHeader className="space-y-4">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-3 justify-center flex-col">
            <img src="/logo.png" alt="Neurowolf Logo" className="w-10 h-10" />
            <h2 className="text-xl font-bold text-violet-500">
              Welcome to NeuroWolf.AI
            </h2>
          </div>

          <p className="text-muted-foreground text-center text-sm">
            Smarter automation starts now. Sign in to continue.
          </p>
        </DialogHeader>

        {/* Google Sign-In Button */}
        <div className="mt-6 flex justify-center">
          <RainbowButton>
            <FcGoogle />
            <span className="text-sm font-medium" onClick={signIn}>
              Continue with Google
            </span>
          </RainbowButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
