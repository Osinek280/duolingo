import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-row items-center justify-center p-8 sm:p-12 md:p-24 space-x-0">
        
        {/* Main Image with all characters */}
        <Image
          src="/hero.svg"
          alt="Characters and Main Icon"
          width={450}
          height={450}
          priority
        />

        <section className="flex flex-col items-center text-center space-y-6 max-w-md">
          {/* Title and Description */}
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Learn, practice, and master new languages with Lingo.
          </h1>
          {/* <p className="text-lg text-gray-700">
            Dive into engaging lessons and interactive challenges designed to make language learning fun and effective.
          </p> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button size="lg" variant="secondary">get started</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="lg" variant="primaryOutline" className="w-full">I already have an account</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button size="lg" variant="secondary">Continue Learning</Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
