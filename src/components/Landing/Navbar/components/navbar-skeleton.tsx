import { Skeleton } from "@/components/ui/skeleton";

export function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 w-full  border-b bg-white/50 backdrop-blur-md">
      <div className="max-w-6xl flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex items-center gap-4 flex-1">
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-6 w-12 rounded-md" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
        <Skeleton className="h-8 w-24 rounded-md" />
      </div>
    </div>
  );
}
