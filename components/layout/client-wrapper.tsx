"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "../ui/toaster"

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient({})
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
    </QueryClientProvider>
  )
}
