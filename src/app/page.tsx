"use client";
import { useFormState } from "react-dom";
import { IGetDogState, getDog } from "./actions";
import FormButton from "./components/form-button";
import { useEffect } from "react";

const initialState: IGetDogState = {
  url: "",
  isLiked: false,
};

export default function Home() {
  const [state, dispatch] = useFormState<IGetDogState>(getDog, initialState);

  useEffect(() => {
    dispatch();
  }, [dispatch]);

  console.log("state:", state);
  return (
    <div className="w-full h-full  flex flex-col items-center">
      <h1 className="w-full max-w-2xl text-2xl font-semibold mb-10">Woof.tv</h1>
      <div className="w-full max-w-2xl bg-gray-800 py-4 flex flex-col items-center">
        <div className="flex-1">
          {state ? (
            <video
              src={state.url}
              className="h-5/6"
              loop
              controls
              muted
              autoPlay
            ></video>
          ) : null}
        </div>
        <form action={dispatch} className="flex justify-center">
          <FormButton name="new-dog" text="New Dog!" />
          <FormButton
            name="toggle-like"
            text={state.isLiked ? "Unlike" : "Like"}
            className="bg-[#008DC4] text-white"
          />
        </form>
      </div>
    </div>
  );
}
