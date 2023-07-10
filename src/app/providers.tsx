"use client";

import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/config/createEmotionCache";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/config/theme";

function Providers({ children }: React.PropsWithChildren) {
  const clientSideEmotionCache = createEmotionCache();

  return (
    <>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default Providers;
