import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ChartColumnBigIcon } from "lucide-react"
import Link from "next/link"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import UserDropdown from "@/components/UserDropdown"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "My Precious Cash",
  description: "An app designed to manage your precious cash",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <nav className="flex bg-primary p-4 text-white h-20 items-center justify-between">
            <Link
              href="/"
              className="font-bold text-xl flex gap-1 items-center"
            >
              <ChartColumnBigIcon className="text-lime-600" /> Your Precious
              Cash
            </Link>
            <div>
              <SignedOut>
                <div className="flex items-center gap-2">
                  <Button
                    asChild
                    variant="link"
                    className="text-white cursor-pointer"
                  >
                    <SignInButton />
                  </Button>
                  <Button
                    asChild
                    variant="link"
                    className="text-white cursor-pointer"
                  >
                    <SignUpButton />
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <UserDropdown />
              </SignedIn>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
