import { MouseEventHandler } from "react";

export interface TextInterface {
  className?: string;
  label?: string;
  onClick?: MouseEventHandler<HTMLParagraphElement>;
}
