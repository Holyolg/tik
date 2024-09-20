"use client";
import { useRouter } from "next/navigation";

export default function Redirect({ params }: { params: string }) {
  useRouter().push("/projects");
}
