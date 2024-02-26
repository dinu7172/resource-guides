import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <main>
      <section>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </section>
    </main>
  )
}

export default loading