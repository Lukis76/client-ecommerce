import { useRegisterMutation } from "@api/userSlice";
import { FC, useState } from "react";
import { Layout } from "../../components/layout/auth";
import css from "./styles/loginAndRegister.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorPost from "@components/utils/errorPost";
import CustomInput from "@components/utils/customInput";
import type { TChangeInput, TStateRegLog, TSubmitForm } from "@types";
///////////////////////////////////////////////////////
export const Register: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const [registerState, setRegisterState] = useState<TStateRegLog>({
    email: "",
    cel: "",
    password: "",
    confirmPassword: "",
  });

  const [
    register,
    {
      data: registerData,
      error: registerError,
      isError: registerIsError,
      isLoading: registerIsLoading,
    },
  ] = useRegisterMutation();

  const handleChange = ({ target: { name, value } }: TChangeInput): void => {
    setButtonStatus(!!value.length);

    setRegisterState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: TSubmitForm): void => {
    e.preventDefault();
    register(registerState);
  };

  if (!!localStorage.getItem("User")) {
    return <Navigate to={"/"} />;
  } else if (registerData) {
    return <Navigate to={"/login"} />;
  } else if (registerIsLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Layout>
        <section className={`${css.section}`}>
          <h2>ingresa el email con el que te registraste en mercado free</h2>
          <div>
            <form onSubmit={handleSubmit} className={`${css.form}`}>
              <CustomInput index={true} name="email" type="email" onChange={handleChange} />
              <CustomInput name="cel" type="tel" onChange={handleChange} />
              <CustomInput name="password" type="password" onChange={handleChange} />
              <CustomInput name="confiermPassword" type="password" onChange={handleChange} />

              {/* ////////////////////////////////////////////////////////////////////////////// */}
              {/*  TODO: in corporacion de autenticaciond e codigo llegado por whatsapp antes de registarte en db  */}
              {/*  para menor seguridad ante hacks --- future incorporacion */}
              {/*  <CustomInput code={true} name="code" type="text" onChange={handleChange} /> */}
              {/* ////////////////////////////////////////////////////////////////////////////// */}

              <div className={`${css.boxBtn}`}>
                <button disabled={!buttonStatus} type="submit">
                  Crear cuenta
                </button>
                <button onClick={() => navigate("/login")}>Ya tengo una cuenta</button>
              </div>
              {registerIsError && <ErrorPost err={registerError} />}
            </form>
          </div>
        </section>
      </Layout>
    );
  }
};






