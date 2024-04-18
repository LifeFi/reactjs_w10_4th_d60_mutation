"use client";
import { use } from "react";
import { useFormStatus } from "react-dom";

export default function FormBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-red-400 size-20 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      전송
    </button>
  );
}
