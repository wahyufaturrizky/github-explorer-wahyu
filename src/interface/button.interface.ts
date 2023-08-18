type ButtonType = "button" | "submit" | "reset";

export interface ButtonInterface {
  type?: ButtonType;
  className?: string;
  label?: string;
}
