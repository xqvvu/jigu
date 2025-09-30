import { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// Alias of Icons
export function Icon(props: Props) {
  return <div {...props}></div>;
}
