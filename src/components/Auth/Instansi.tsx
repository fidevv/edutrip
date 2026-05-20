"use client";

import { Eye, EyeOff, type LucideIcon } from "lucide-react";

import { Page, Container, Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InstitutionAuthShellProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function InstitutionAuthShell({
  title,
  description,
  icon: Icon,
  children,
}: InstitutionAuthShellProps) {
  return (
    <Page>
      <div className="flex min-h-screen items-center justify-center p-4">
        <Container size="xs">
          <Stack gap="lg" align="center" className="animate-in fade-in slide-in-from-bottom-2 duration-500 text-center">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
            {children}
          </Stack>
        </Container>
      </div>
    </Page>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}

export function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  autoComplete,
  onChange,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        required
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

interface PasswordFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  showPassword: boolean;
  autoComplete: string;
  onTogglePassword: () => void;
  onChange: (value: string) => void;
}

export function PasswordField({
  id,
  label,
  placeholder,
  value,
  showPassword,
  autoComplete,
  onTogglePassword,
  onChange,
}: PasswordFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <Input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          required
          minLength={8}
          onChange={(event) => onChange(event.target.value)}
          className="pr-10"
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onTogglePassword}
          className="absolute right-0 top-0 size-9 text-muted-foreground"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="size-4" />
          ) : (
            <Eye className="size-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
