"use client";

import { ReactLenis } from "lenis/react";
import * as React from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const LenisScrollProvider: React.FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = React.useRef(null);
  return <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children}</ReactLenis>;
};

export default LenisScrollProvider;
