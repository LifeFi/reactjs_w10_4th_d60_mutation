"use server";

export interface IGetDogState {
  url: string;
  isLiked: boolean;
}

export async function getDog(prevState: IGetDogState, data?: FormData) {
  console.log("getDog FormData:", data);
  const isToggleLike = data?.get("toggle-like") === "";
  if (!isToggleLike) {
    const res = await fetch("https://dogs-api.nomadcoders.workers.dev", {
      method: "GET",
      cache: "no-cache",
    });
    const result = await res.json();
    console.log(result);
    return result;
  } else {
    // Mutate API 가 명확하게 제공되지 않은 것 같아 Fake 처리.
    const fakeResponse = {
      ...prevState,
      isLiked: !prevState.isLiked,
    };
    console.log(fakeResponse);
    return fakeResponse;
  }
}
