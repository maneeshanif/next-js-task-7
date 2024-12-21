import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-primary h-[500px] w-[400px] p-4">
    <Skeleton className="w-full h-1/2 mb-4 bg-slate-400" />

    <div className="w-full h-1/2 flex flex-col bg-white justify-around">
      <Skeleton className="h-6 w-3/4 mb-2 bg-slate-200"  />
      <Skeleton className="h-6 w-1/2 mb-2  bg-slate-200" />
      <Skeleton className="h-4 w-1/2 mb-2  bg-slate-200" />
      <Skeleton className="h-4 w-1/4  bg-slate-200" />
      <Skeleton className="h-10 w-[90%] p-2   bg-slate-200" />
    </div>
  </div>
  )
}
