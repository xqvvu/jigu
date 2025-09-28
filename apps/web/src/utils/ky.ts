import { createWebKy } from "@jigu/ky/web";

export const ky = createWebKy(process.env.NEXT_PUBLIC_BASE_API);
