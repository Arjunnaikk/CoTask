'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

    export function ProvidersQuery({ children }) {
        return  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  }