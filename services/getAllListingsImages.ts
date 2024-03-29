"use server";
import { supabase } from "@/lib/supabase";

export async function getAllListingsImages() {
  const { data, error } = await supabase.from("listings").select("*");

  //   https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/3913fd26-2001-40c0-b00e-a013421481e5/1b35e683-a87e-46c9-843e-d903d2dea0e3/download%20(2).jpeg

  // `https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/${listing.listing_by}/${listing.id}/${listing.name}`,

  const listings = data?.map((listing) => {
    return {
      image: `https://gmygxkvjdilaoerggioq.supabase.co/storage/v1/object/public/listing-images/${listing.listing_by}/${listing.id}/${listing.file_name}`,
    };
  });

  if (error) {
    console.error(error);
    throw new Error("Listing could not be loaded");
  }

  return listings;
}
