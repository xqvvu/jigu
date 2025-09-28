"use client";

import { useEffect } from "react";
import { ky } from "@/utils/ky";

export default function Home() {
  useEffect(() => {
    ky("users");
  }, []);

  return <div>ky</div>;
}
