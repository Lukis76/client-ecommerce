import { ChangeEvent, FC } from "react";
import css from './customInput.module.css'


type TInput = {
  index?: boolean
  code?: boolean
  name: string
  type?: 'password'| 'url' | 'text' | 'email' | 'date' | 'time' | 'tel' | 'file' | 'image' | 'color' | 'radio' | 'range' | 'number' | 'search' | 'checkbox' | 'button' | 'submit'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}



const CustomInput: FC<TInput> = ({index=false, code=false, name, type, onChange}) => {
  return (
    <label className={`${css.customInput} ${code && css.code}`}>
      <span>{name}</span>
      <input autoFocus={index} type={type} name={name} onChange={onChange}  maxLength={code ? 5 : undefined} />
    </label>
  );
};

export default CustomInput;
