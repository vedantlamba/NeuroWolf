"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { authClient } from "@/lib/auth-client";
import { ChevronDown, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

function DashboardUserButton() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const isMobile = useIsMobile();

  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  if (isPending || !session?.user) {
    return <Skeleton className="h-[60px] w-full rounded-md" />;
  }

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between overflow-hidden">
          {session?.user.image && (
            <Avatar>
              <AvatarImage src={session.user.image} />
            </Avatar>
          )}
          {!session?.user.image && (
            <Avatar>
              <AvatarImage src="suna-avatar.jpg" />
            </Avatar>
          )}
          <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0 px-3">
            <p className="text-sm truncate w-full">{session?.user?.name}</p>
            <p className="text-xs text-gray-400 truncate w-full">
              {session?.user?.email}
            </p>
          </div>
          <ChevronDown className="size-4 shrink-0 font-light" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{session.user.name}</DrawerTitle>
            <DrawerDescription>{session.user.email}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>
              Billing
              <CreditCard />
            </Button>
            <RainbowButton onClick={onSignOut}>Sign Out</RainbowButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between overflow-hidden">
        {session?.user.image && (
          <Avatar>
            <AvatarImage src={session.user.image} />
          </Avatar>
        )}
        {!session?.user.image && (
          <Avatar>
            <AvatarImage src="suna-avatar.jpg" />
          </Avatar>
        )}
        <div className="flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0 px-3">
          <p className="text-sm truncate w-full">{session?.user?.name}</p>
          <p className="text-xs text-gray-400 truncate w-full">
            {session?.user?.email}
          </p>
        </div>
        <ChevronDown className="size-4 shrink-0 font-light" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-72 ">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="font-medium truncate">{session.user.name}</span>
            <span className="text-sm font-light truncate text-muted-foreground">
              {session.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-base cursor-pointer flex items-center justify-between">
          Billing
          <CreditCard />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-center items-center">
          <RainbowButton onClick={onSignOut}>Sign Out</RainbowButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DashboardUserButton;
