"use client"; 
import { CourseHeader } from "@/components/courseHeader";

// const course = {
//   id: 1,
//   title: "Unit 1",
//   description: "Learn the basics of Spanish",
//   courseId: 1,
//   order: 1,
//   lessons: [
//     {
//       id: 1,
//       title: "Nouns",
//       unitId: 1,
//       order: 1,
//       challenges: [
//         {
//           id: 1,
//           lessonId: 1,
//           type: "SELECT",
//           question: 'Which one of these is "the man"?',
//           order: 1,
//           challengeProgress: [],
//         },
//       ],
//       completed: false,
//     },
//     {
//       id: 2,
//       title: "Verbs",
//       unitId: 1,
//       order: 2,
//       challenges: [
//         {
//           id: 2,
//           lessonId: 2,
//           type: "TRANSLATE",
//           question: 'Translate "I eat" into Spanish.',
//           order: 1,
//           challengeProgress: [],
//         },
//         {
//           id: 3,
//           lessonId: 2,
//           type: "MATCH",
//           question: "Match the verbs with their meanings.",
//           order: 2,
//           challengeProgress: [],
//         },
//       ],
//       completed: false,
//     },
//     {
//       id: 3,
//       title: "Adjectives",
//       unitId: 1,
//       order: 3,
//       challenges: [
//         {
//           id: 4,
//           lessonId: 3,
//           type: "FILL_IN_THE_BLANK",
//           question: 'Complete the sentence: "El gato es ____." (The cat is cute)',
//           order: 1,
//           challengeProgress: [],
//         },
//       ],
//       completed: false,
//     },
//     {
//       id: 3,
//       title: "Adjectives",
//       unitId: 1,
//       order: 3,
//       challenges: [
//         {
//           id: 4,
//           lessonId: 3,
//           type: "FILL_IN_THE_BLANK",
//           question: 'Complete the sentence: "El gato es ____." (The cat is cute)',
//           order: 1,
//           challengeProgress: [],
//         },
//       ],
//       completed: false,
//     },
//   ],
// };

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
        <CourseHeader />
      </div>
    </div>
  );
}
