"use client";

import { usePersonality } from "@/context/usePersonality";
import { useRouter } from "next/navigation";
import { FC, useRef } from "react";

const InstagramResultPage: FC = () => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const { personality } = usePersonality();

  if (personality?.match === "") {
    router.push("/questions");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 text-gray-700">
      <div className="max-w-md w-full mb-8">
        <p className="text-center text-gray-600 mb-6">
          Screenshot and share your results on Instagram!
        </p>

        <div
          ref={cardRef}
          // aspect-[9/16]
          className="relative w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl  flex flex-col"
        >
          {/* Header */}
          <div className="px-6 pt-4 text-white">
            <h2 className="text-xl font-bold font-raleway">Personality Card</h2>
            {/* <p className=" opacity-90">Discover what makes me unique</p> */}
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white/90 m-2 rounded-2xl p-4 flex flex-col gap-2">
            <div className="text-center leading-none">
              <p className="text-sm font-raleway">I&apos;m an</p>
              <div className="text-3xl font-bold text-purple-600">
                {personality?.mbti.type}
              </div>
              <div className="text-gray-700">
                Enneagram {personality?.enneagram.type}
              </div>
            </div>

            <div className="text-xs indent-4 text-justify font-raleway ">
              {personality?.mbti.description.split(".")[0]}
            </div>

            <div className="flex flex-col gap-2">
              <p className="">Key traits</p>
              <div className="flex-1 bg-white px-4 py-2 rounded-lg">
                <p className=" text-purple-600">Strengths</p>
                <div className="text-xs font-raleway">
                  {personality?.strengths.split(".")[0]}
                </div>
              </div>
              <div className="flex-1 bg-white px-4 py-2 rounded-lg">
                <p className=" text-emerald-600">Areas for Growth</p>
                <div className="text-xs font-raleway">
                  {personality?.weaknesses.split(".")[0]}
                </div>
              </div>
            </div>

            <p>Relationships</p>
            <div className="bg-white px-4 py-2 rounded-lg border-l-2 border-pink-600">
              <p className=" text-pink-600">🩷 Love</p>
              <div className="text-xs text-justify font-raleway">
                {personality?.relation.love.split(".")[0]}
              </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-lg border-l-2 border-blue-600">
              <p className=" text-blue-600">👥 Friendship</p>
              <div className="text-xs text-justify font-raleway">
                {personality?.relation.friendship.split(".")[0]}
              </div>
            </div>

            <div className="bg-white px-4 py-2 rounded-lg border-l-2 border-amber-600">
              <p className=" text-amber-600">💼 Business</p>
              <div className="text-xs text-justify font-raleway">
                {personality?.relation.business.split(".")[0]}
              </div>
            </div>

            {/* Footer */}
            <div className="text-sm text-gray-600 mt-auto pt-2 border-t border-gray-200 text-center font-raleway">
              <p className="text-xs">Take the test at</p>
              <span className="font-bold tracking-wide">
                i-ferson.vercel.app
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramResultPage;
