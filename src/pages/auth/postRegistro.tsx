import CustomInput from "@components/utils/customInput";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/dist/query";
import { MutationActionCreatorResult } from "@reduxjs/toolkit/dist/query/core/buildInitiate";
import { ChangeEvent, FC } from "react";
import css from "./postRegistro.module.css";
///////////////////////////////////////////
type TPostRegister = {
  code: string;
  register: (
    arg: any
  ) => MutationActionCreatorResult<
    MutationDefinition<
      any,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      "allProducts" | "login",
      any,
      "ecomerdeMercadoFreeApi"
    >
  >;
  registerState: TRegisterState;
};
//-----------------------------------
type TRegisterState = {
  email: string;
  cel: string;
  password: string;
  confirmPassword: string;
};
///////////////////////////////////////////////////////////////////////////////////////
export const PostRegistro: FC<TPostRegister> = ({ code, register, registerState }) => {
  const handleCode = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (name === code && code === value) {
      register(registerState);
    }
  };
  return (
    <div className={`${css.contentCode}`}>
      <CustomInput code={true} type="text" name="code" onChange={handleCode} />
    </div>
  );
};
