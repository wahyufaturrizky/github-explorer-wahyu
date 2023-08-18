import { UseFormRegister } from "react-hook-form";

export type Inputs = {
  userName: string;
  isSearch: boolean;
};

export interface InputInterface {
  type?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<Inputs>;
}
