"use client";

import {
  ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from "next-themes";
import React from "react";

const ThemeProvider = (props: ThemeProviderProps) => {
  return <NextThemesProvider {...props} />;
};

export default ThemeProvider;
