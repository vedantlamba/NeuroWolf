import React from "react";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface props {
  name: string;
  classname?: string;
}

function GeneratedAvatar({ name, classname }: props) {
  const avatar = createAvatar(funEmoji, {
    seed: name,
  });

  return (
    <Avatar className={cn(classname)}>
      <AvatarImage src={avatar.toDataUri()} alt="avatar" />
      <AvatarFallback>
        <img src="logo.png" alt="logo" className="w-10 h-10 rounded-full" />
      </AvatarFallback>
    </Avatar>
  );
}

export default GeneratedAvatar;
