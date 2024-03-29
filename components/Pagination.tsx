"use client";

import { formUrlQuery } from "@/lib/utils";
import { BottomGradient } from "./LoginForm";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

export default function Pagination({ pageNumber, isNext }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigation = (direction: string) => {
    const nextPageNumber =
      direction === "prev" ? pageNumber - 1 : pageNumber + 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });

    router.push(newUrl, { scroll: false });
  };
  return (
    <div className=" ml-5 flex items-center justify-center gap-3">
      <button
        disabled={pageNumber === 1}
        onClick={() => handleNavigation("prev")}
        className="group/btn relative  flex h-10 w-[100px] items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-background dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      >
        <p className=" text-neutral-700 dark:text-primary">Prev</p>
        <BottomGradient />
      </button>
      <div className="flex h-10 w-[100px] items-center justify-center rounded-md bg-gray-50 font-medium text-black shadow-input dark:bg-background dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
        <p className="text-lg text-primary">{pageNumber}</p>
      </div>
      <button
        disabled={!isNext}
        onClick={() => handleNavigation("next")}
        className="group/btn relative flex h-10 w-[100px] items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-background dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      >
        <p className="text-neutral-700 dark:bg-background dark:text-primary ">
          Next
        </p>
        <BottomGradient />
      </button>
    </div>
  );
}
