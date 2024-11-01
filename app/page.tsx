import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Image from "next/image";

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
            <Button size="lg" variant="secondary">get started</Button>
            {/* <button className="text-blue-500 underline text-lg font-semibold hover:text-blue-600 transition">
              I Already Have an Account
            </button> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
