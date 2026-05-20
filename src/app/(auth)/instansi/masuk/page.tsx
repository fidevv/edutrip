"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

import { INSTITUTION_AUTH_CONTENT } from "@/constants/instansi-auth";
import { Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  detectRoleFromEmail,
  ROLE_DASHBOARD_ROUTES,
  ROLE_LABELS,
} from "@/lib/auth";

import {
  FormField,
  InstitutionAuthShell,
  PasswordField,
} from "@/components/Auth/Instansi";

export default function InstitutionSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const detectedRole = useMemo(() => {
    if (!email.includes("@")) return null
    return detectRoleFromEmail(email)
  }, [email])

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (detectedRole) {
      router.push(ROLE_DASHBOARD_ROUTES[detectedRole]);
    }
  };

  return (
    <InstitutionAuthShell
      title={INSTITUTION_AUTH_CONTENT.signInTitle}
      description={INSTITUTION_AUTH_CONTENT.signInDescription}
      icon={LogIn}
    >
      <form onSubmit={handleSignIn} className="w-full">
        <Stack gap="md" className="text-left">
          <FormField
            id="signin-email"
            label="Email"
            type="email"
            placeholder="email@instansi.go.id"
            value={email}
            autoComplete="email"
            onChange={setEmail}
          />

          {detectedRole && (
            <Badge variant="outline" className="w-fit rounded-full">
              Terdaftar sebagai: {ROLE_LABELS[detectedRole]}
            </Badge>
          )}

          <PasswordField
            id="signin-password"
            label="Password"
            placeholder="Masukkan password"
            value={password}
            showPassword={showPassword}
            autoComplete="current-password"
            onTogglePassword={() => setShowPassword((prev) => !prev)}
            onChange={setPassword}
          />

          <Button type="submit" className="w-full">
            Masuk
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Belum punya akun?{" "}
            <Link href="/instansi/daftar" className="underline hover:text-foreground">
              Hubungi admin
            </Link>
          </p>
        </Stack>
      </form>
    </InstitutionAuthShell>
  );
}
