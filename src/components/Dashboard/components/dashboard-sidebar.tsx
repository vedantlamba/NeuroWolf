"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DashboardUserButton from "./dashboard-user-button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AuroraText } from "@/components/magicui/aurora-text";

const firstSection = [
  {
    icon: VideoIcon,
    label: "Meetings",
    href: "/meetings",
  },
  {
    icon: BotIcon,
    label: "Agents",
    href: "/agents",
  },
];
const secondSection = [
  {
    icon: StarIcon,
    label: "Upgrade to Pro",
    href: "/upgrade",
  },
];

function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground px-2">
        <Link href="/dashboard" className="flex items-center  gap-2 px-2 pt-4">
          <img src="/logo-white.png" alt="logo" className="w-9 h-9" />
        </Link>
      </SidebarHeader>
      <div className=" py-2">
        <Separator className="opacity-30" />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-white hover:text-black transition-all"
                    )}
                  >
                    <Link href={item.href}>
                      <item.icon size="5" />
                      <span className="text-base tracking-tight font-medium">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className=" py-2">
          <Separator className="opacity-30" />
        </div>
        <SidebarGroup>
          <SidebarGroupContent className="relative p-4 rounded-md">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            <div className="px-3 py-2">
              <h4 className="text-xs font-semibold text-[--sidebar-accent-foreground] uppercase tracking-wider">
                More
              </h4>
              <p className="text-xs text-muted-foreground py-1">
                Build as many agents as you want, automate meetings, and elevate
                your outreach.
              </p>
            </div>

            <SidebarMenu className="rounded-md  bg-white/5 backdrop-blur-sm ">
              {secondSection.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "group flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150",
                      "hover:bg-white hover:text-black"
                    )}
                  >
                    <Link
                      href={item.href}
                      className="flex justify-center items-center bg-white"
                    >
                      <AuroraText>
                        <span className="text-sm font-medium tracking-wide">
                          {item.label}
                        </span>
                      </AuroraText>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
}

export default DashboardSidebar;
