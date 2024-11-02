"use client"; // Ensure this line is at the top of your file
import { Button } from "@/components/ui/button";
import { ArrowLeft,  NotebookText,  } from "lucide-react";
import Link from "next/link";

const course = {
  id: 1,
  title: "Unit 1",
  description: "Learn the basics of Spanish",
  courseId: 1,
  order: 1,
  lessons: [
    {
      id: 1,
      title: "Nouns",
      unitId: 1,
      order: 1,
      challenges: [
        {
          id: 1,
          lessonId: 1,
          type: "SELECT",
          question: 'Which one of these is "the man"?',
          order: 1,
          challengeProgress: [],
        },
      ],
      completed: false,
    },
    {
      id: 2,
      title: "Verbs",
      unitId: 1,
      order: 2,
      challenges: [
        {
          id: 2,
          lessonId: 2,
          type: "TRANSLATE",
          question: 'Translate "I eat" into Spanish.',
          order: 1,
          challengeProgress: [],
        },
        {
          id: 3,
          lessonId: 2,
          type: "MATCH",
          question: "Match the verbs with their meanings.",
          order: 2,
          challengeProgress: [],
        },
      ],
      completed: false,
    },
    {
      id: 3,
      title: "Adjectives",
      unitId: 1,
      order: 3,
      challenges: [
        {
          id: 4,
          lessonId: 3,
          type: "FILL_IN_THE_BLANK",
          question: 'Complete the sentence: "El gato es ____." (The cat is cute)',
          order: 1,
          challengeProgress: [],
        },
      ],
      completed: false,
    },
  ],
};

export default function Learn() {

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <div className="hidden lg:block w-[368px] sticky self-end bottom-6">
        <div className="min-h-[calc(100vh -48px)] sticky top-6 flex flex-col gap-y-4">
          Sticky
        </div>
      </div>
      {/* all */}
      <div className="flex-1 relative top-0 pb-10">
        <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
          <Link href="/courses">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
            </Button>
          </Link>
          <h1 className="font-bold text-lg">Spanish</h1>
        </div>
        {/* unit container */}
        <div className="space-y-4">
          {/* unit baner */}
          <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
            <div className="space-y-2.5">
              <h3 className="text-2xl font-bold">
                {course.title}
              </h3>
              <p className="text-lg">
                {course.description}
              </p>
            </div>
            <Link href='/lesson'>
              <Button
                size="lg"
                variant="secondary"
                className="hidden lg:flex border-2 border-b-4 active:border-b-2"
              >
                <NotebookText className="mr-2" />
                Continue
              </Button>
            </Link>
          </div>
          {/* unit lessons */}
          {course.lessons.map((el, index) => (
            
              <div key={index} className="flex items-center flex-col relative">
                <Link href='/lesson'>
                  <div className={`relative ${index % 3 === 0 ? '' : index % 3 === 1 ? '-left-8' : 'left-11'}`}>
                    <div className="h-[102px] w-[102px] relative">
                      {index === 0 ? (
                        <div className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 
                        font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
                          Start
                          <div className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 
                          border-x-transparent border-t-8 transform -translate-x-1/2"/>
                        </div>
                      ): null}
                      
                    </div>
                  </div>
                </Link>
              </div>
            
          ))}

        </div>
      </div>
    </div>
  );
}
