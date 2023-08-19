import { KeyboardEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

export type Inputs = {
  userName: string;
  search: string;
  isSearch: boolean;
};

export interface InputInterface {
  type?: string;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  className?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<Inputs>;
}
