"use client";
import { motion } from "framer-motion";
import { Listing } from "@/types/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/animated-button";
import { Badge } from "./ui/badge";

export default function Product({ data }: { data: Listing }) {
  const {
    title,
    description,
    price,
    category,
    short_description: shortDescription,
    image,
  } = data;

  return (
    <div className={cn("flex mx-auto bg-background p-4")}>
      <div className={cn("relative flex max-w-7xl")}>
        {/* Image */}
        <motion.div
          className={cn(
            "w-[550px] h-[500px] z-10 rounded-l-lg overflow-hidden"
          )}
          initial={{ y: "0", filter: "blur(8px)" }}
          animate={{ x: "-50%", filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt={title}
            fill={true}
            quality={60}
            objectFit="cover"
            className={cn("rounded-l-lg")}
          />
        </motion.div>

        {/* Animated product details */}
        <motion.div
          className={cn(
            "overflow-hidden rounded-br-lg rounded-tr-lg bg-card shadow-lg  dark:shadow-accent/[0.5] absolute left-0 right-0 p-4 min-w-[320px] max-w-full dark:hover:shadow-emerald-500/[0.15] ease-in-out duration-300 h-full"
          )}
          initial={{ y: "0", opacity: 0 }} // Start from above the image
          animate={{ x: "50%", opacity: 1 }} // Animate downwards towards the top of the image
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex size-full flex-col">
            <h1 className="text-3xl font-bold tracking-wide text-stone-800 dark:text-stone-300">
              {title}
            </h1>
            <Badge className="mt-3 inline-block">{category}</Badge>
            <p className="mt-5 text-2xl text-stone-600 dark:text-stone-300">
              {shortDescription}
            </p>

            <p className="mt-1 max-w-sm text-stone-600 dark:text-stone-300">
              {description}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-1 text-lg text-stone-500">$</span>
                <p className="text-3xl font-semibold text-stone-800 dark:text-stone-300">
                  {price}
                </p>
              </div>
              <Button className="border-border bg-background text-lg text-stone-800 dark:text-stone-300">
                Rent Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
