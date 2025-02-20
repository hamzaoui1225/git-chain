import { ReactNode } from "react";

import { CFile } from "@/components/ui/code/FileContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <CFile>{children}</CFile>;
}
