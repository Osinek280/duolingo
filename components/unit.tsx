import Link from "next/link";
import { Button } from "./ui/button";
import { Crown, NotebookText } from "lucide-react";

export function Unit(course: any) {
  return (
    <div className="space-y-4">
      {/* unit banner */}
      <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">
            {course.title}
          </h3>
          <p className="text-lg">
            {course.description}
          </p>
        </div>
        <Link href="/lesson">
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
          <Link href="/lesson">
            <div
              className={`relative ${
                index % 3 === 0
                  ? ''
                  : index % 3 === 1
                  ? '-left-8'
                  : 'left-11'
              }`}
            >
              <div className="h-[102px] w-[102px] relative">
                {index === 0 ? (
                  <div
                    className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 
                    font-bold uppercase text-green-500 bg-white rounded-xl 
                    animate-bounce tracking-wide z-10"
                  >
                    Start
                    <div
                      className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 
                      border-x-transparent border-t-8 transform -translate-x-1/2"
                    />
                  </div>
                ) : null}
                <div className="absolute w-full h-full -mt-full flex flex-col justify-center items-center border-[8px] rounded-full border-green-500">
                  <Button
                    size="rounded"
                    variant="locked"
                    className="h-[70px] w-[70px] border-b-8"
                  >
                    {/* <Check/> */}
                    <Crown />
                    {/* <Star /> */}
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
