"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button onPress={() => setTheme("light")}>Light Mode</Button>
      <Button onPress={() => setTheme("dark")}>Dark Mode</Button>
    </div>
  );
}
