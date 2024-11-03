"use client"
import { Button } from "./ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";


export function Header() {
  return (
    <header className="flex items-center justify-between p-8 border-b h-20">
      <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
        Duolingo
      </h1>
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="lg" variant="ghost">Login</Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
      {/* <div className="flex items-center gap-4">
        <Button variant="secondary">Login</Button>
      </div> */}
    </header>
  );
}
