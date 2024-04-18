"use server";

import { redirect } from "next/navigation";

export async function handleForm(prevState: any, formData: FormData) {
  console.log("prevState", prevState);
  console.log("formData", formData);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(formData.get("test"));
  redirect("/");

  return { ok: true };
}
