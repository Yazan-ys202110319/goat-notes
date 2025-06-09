import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const handleError = (error) => {
  if (error instanceof Error) {
    return { errorMessage: error.message };
  }

  else {
    return { errorMessage: "An error occurred" };
  }

}