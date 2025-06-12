import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutter
      cacheTime: 1000 * 60 * 30, // 30 minutter
      refetchOnWindowFocus: false,
      retry: false,
    },
  }
})

export default queryClient