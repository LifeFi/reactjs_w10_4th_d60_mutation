"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

export default function FormButton({
  name,
  text,
  ...rest
}: {
  name: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <button
      name={name}
      disabled={pending}
      {...rest}
      className={`${rest.className}
        bg-gray-100 text-black disabled:bg-gray-400  disabled:text-white disabled:cursor-not-allowed w-72 p-3 rounded-md my-3 mx-1.5`}
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
