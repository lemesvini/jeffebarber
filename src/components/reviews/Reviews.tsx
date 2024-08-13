import React from "react";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <>
      <div className="bg-[#191919] text-white rounded p-2 drop-shadow flex flex-col w-full laptop:h-[calc(100vh-350px)] overflow-y-auto no-scrollbar">
        <span className="font-bold w-full justify-center flex w-full p-2">Avaliações</span>
        <div className="mt-2">
          <ReviewCard />
        </div>  
      </div>
    </>
  );
}
export default Reviews;