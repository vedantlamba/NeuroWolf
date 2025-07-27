import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="flex justify-center items-center md:pt-32 pt-28">
      <div className="flex justify-center items-center flex-col px-4 space-y-6">
        
        {/* Announcement Badge */}
        <Skeleton className="h-8 w-64 rounded-full" />

        {/* Main Heading */}
        <Skeleton className="h-12 w-full md:w-3/4 rounded-lg" />
        <Skeleton className="h-12 w-5/6 md:w-2/3 rounded-lg" />

        {/* Subtext (hidden on mobile) */}
        <div className="hidden md:block w-full text-center space-y-2">
          <Skeleton className="h-4 w-2/3 mx-auto" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>

        {/* Announcement Paragraph */}
        <Skeleton className="h-6 w-80 rounded-lg" />

        {/* Button */}
        <Skeleton className="h-10 w-48 rounded-lg" />

        {/* Trial Info */}
        <Skeleton className="h-4 w-40 rounded-lg" />
      </div>
    </div>
  );
}
