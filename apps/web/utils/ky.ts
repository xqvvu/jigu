import { createKyClient } from "@jigu/ky/client";

export const ky = createKyClient(process.env.NEXT_PUBLIC_BASE_API);
