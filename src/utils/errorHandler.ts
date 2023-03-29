import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

export const errorHandler = (error: FetchBaseQueryError | SerializedError | undefined) => {
  const { message, data } = error as { message?: string; data?: { message?: string } };

  if (data) {
    return data?.message;
  } else if (message) {
    return message;
  }
};

// FetchBaseQueryError | SerializedError | undefined

// const {message} = (loginError as FetchBaseQueryError).data as {message?: string}
