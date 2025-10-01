import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// Alias of Icons
export default function Icon(props: Props) {
  return <div {...props} />;
}
