import { useLoginMutation } from "@api/userSlice";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Layout } from "../../components/layout/auth";
import css from "./styles/loginAndRegister.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorPost from "@components/utils/errorPost";
import CustomInput from "@components/utils/customInput";
import { useAppDispatch } from "@app/hook";
import { addUserStorage } from "@app/features/user/slice";
import { TChangeInput, TStateRegLog, TSubmitForm } from "@types";
///////////////////////////////////////////////////////
export const Login: FC = (): JSX.Element => {
  if (!!localStorage.getItem("User")) {
    return <Navigate to={"/"} />;
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<TStateRegLog>({
    email: "",
    password: "",
  });

  const [
    login,
    {
      data: loginData,
      error: loginError,
      isError: loginIsError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginMutation();

  const handleChange = ({ target: { name, value } }: TChangeInput): void => {
    setButtonStatus(!!value.length);

    setLoginState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: TSubmitForm): Promise<void> => {
    e.preventDefault();
    try {
      const user = await login(loginState).unwrap();
      dispatch(addUserStorage(user));
      navigate("/login");
    } catch (error) {}
  };

  if (loginIsLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Layout>
        <section className={`${css.section}`}>
          <h2>ingresa el email con el que te registraste en mercado free</h2>
          <div>
            <form onSubmit={handleSubmit} className={`${css.form}`}>
              <CustomInput name="email" type="text" onChange={handleChange} />
              <CustomInput name="password" type="text" onChange={handleChange} />

              <div className={`${css.boxBtn}`}>
                <button disabled={!buttonStatus} type="submit">
                  Continuar
                </button>
                <button onClick={() => navigate("/register")}>Crear cuenta</button>
              </div>
              {loginIsError && <ErrorPost err={loginError} />}
            </form>
          </div>
        </section>
      </Layout>
    );
  }
};
