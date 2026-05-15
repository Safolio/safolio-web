"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createEmailSchema, type EmailFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

interface SignupFormProps {
  tone?: "on-light" | "on-dark";
}

export function SignupForm({ tone = "on-light" }: SignupFormProps) {
  const t = useTranslations("Form");
  const schema = createEmailSchema({
    required: t("errorRequired"),
    invalid: t("errorInvalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: EmailFormValues) => {
    void values;
    await new Promise((r) => setTimeout(r, 800));
    toast.success(t("successTitle"), { description: t("successMessage") });
    reset();
  };

  const onDark = tone === "on-dark";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-md"
      aria-label={t("submit")}
    >
      <div
        className={cn(
          "relative flex items-center rounded-input border",
          onDark ? "border-on-dark-border bg-white/10" : "border-input bg-card",
        )}
      >
        <Mail
          className={cn(
            "ml-3 h-4 w-4",
            onDark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
          aria-hidden
        />
        <Input
          type="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0",
            onDark && "text-white placeholder:text-on-dark-muted",
          )}
          {...register("email")}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="m-1 h-9 rounded-input bg-primary px-4 text-primary-foreground hover:bg-primary-hover"
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </div>
      {errors.email && (
        <p id="email-error" className="mt-2 text-sm text-red-500">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
