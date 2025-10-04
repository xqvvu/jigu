import { createWebKy } from "@jigu/ky/web";

export const ky = createWebKy(process.env.NEXT_PUBLIC_API_BASE_URL);
