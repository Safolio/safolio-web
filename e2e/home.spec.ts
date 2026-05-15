import { test, expect } from "@playwright/test";

test.describe("Safolio landing — golden path", () => {
  test("root redirects to /en (default locale)", async ({ page }) => {
    const res = await page.goto("/");
    expect(page.url()).toMatch(/\/en$/);
    expect(res?.ok()).toBeTruthy();
  });

  test("/en renders English hero", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Invest with/i);
    await expect(page).toHaveTitle(/Safolio — Invest with insight/);
  });

  test("/tr renders Turkish hero", async ({ page }) => {
    await page.goto("/tr");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/İçgörüyle/);
  });

  test("hero email form shows success after valid submit", async ({ page }) => {
    await page.goto("/en");
    await page.getByPlaceholder("you@email.com").fill("test@example.com");
    await page.getByRole("button", { name: "Sign up early" }).first().click();
    await expect(page.getByText(/You're on the list/i)).toBeVisible();
  });

  test("legal pages return 200 in both locales", async ({ page }) => {
    for (const locale of ["en", "tr"]) {
      for (const route of [
        "/privacy-policy",
        "/cookie-policy",
        "/terms-and-conditions",
        "/acceptable-use-policy",
        "/eula",
      ]) {
        const res = await page.goto(`/${locale}${route}`);
        expect(res?.status(), `${locale}${route}`).toBe(200);
      }
    }
  });

  test("sitemap returns 200 and lists 12 URLs", async ({ page }) => {
    const res = await page.goto("/sitemap.xml");
    expect(res?.status()).toBe(200);
    const xml = await page.content();
    const matches = xml.match(/<loc>/g) || [];
    expect(matches.length).toBe(12);
  });
});
