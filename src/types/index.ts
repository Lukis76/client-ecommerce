import { ChangeEvent, FormEvent } from "react";
///////////////////////////////////////////////
export type TStateRegLog = {
  email: string | undefined;
  cel?: string | undefined;
  password: string | undefined;
  confirmPassword?: string | undefined;
};
//////////////////////////////////////////////////////////
export type TChangeInput = ChangeEvent<HTMLInputElement>;
/////////////////////////////////////////////////////////
export type TSubmitForm = FormEvent<HTMLFormElement>;
/////////////////////////////////////////////////////
