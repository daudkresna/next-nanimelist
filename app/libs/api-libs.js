import React from "react";

export const getAnimesApi = async (endpoint, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}?${query}`
  );
  const data = await response.json();
  return data;
};
