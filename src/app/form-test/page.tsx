"use client";

import { HeartIcon } from "@heroicons/react/16/solid";
import { handleForm } from "./actions";
import FormBtn from "./formBtn";
import { useFormState } from "react-dom";

export default function FormTest() {
  const [state, action] = useFormState(handleForm, null);
  console.log(state);
  return (
    <main className="bg-red-200 max-w-md mx-auto">
      <span>
        <HeartIcon className="w-4" />
      </span>
      <span>Home</span>
      <form action={action}>
        <div>
          <input type="text" placeholder="입력해 주세요" name="test" required />
          <FormBtn />
        </div>
      </form>
    </main>
  );
}
