"use client";
import { useRouter } from "next/navigation";

export const Redirect = ({ params }: { params: string }) => {
  useRouter().push("/projects");
};
