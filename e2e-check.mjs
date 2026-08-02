/* One-shot end-to-end check of the built portfolio.
   Serves nothing itself — expects http://localhost:8931/my-portfolio/ to be live. */
import { chromium } from "playwright";

const BASE = "http://localhost:8931/my-portfolio/";
const SHOTS = process.env.SHOTS_DIR || "e2e-shots";
const errors = [];
const failed = [];

const browser = await chromium.launch();

async function checkViewport(name, viewport) {
  const page = await browser.newPage({ viewport });
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[${name}] console: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`[${name}] pageerror: ${e.message}`));
  page.on("requestfailed", (r) =>
    errors.push(`[${name}] request failed: ${r.url()} — ${r.failure()?.errorText}`)
  );
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`[${name}] HTTP ${r.status()}: ${r.url()}`);
  });

  const t0 = Date.now();
  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  const dcl = Date.now() - t0;
  await page.waitForLoadState("load");
  const loaded = Date.now() - t0;
  await page.waitForTimeout(1200); // let CSS entrance animations finish

  // All sections present
  for (const id of ["home", "about", "experience", "education", "projects", "skills", "certifications", "achievements", "contact"]) {
    if ((await page.locator(`#${id}`).count()) !== 1) failed.push(`[${name}] missing section #${id}`);
  }

  // Hero is visible immediately (the slow-first-paint fix)
  const heroOpacity = await page
    .locator("h1")
    .evaluate((el) => getComputedStyle(el).opacity);
  if (Number(heroOpacity) < 0.5) failed.push(`[${name}] hero h1 not visible after load (opacity=${heroOpacity})`);

  // No horizontal overflow
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  if (overflow > 1) failed.push(`[${name}] horizontal overflow: ${overflow}px`);

  // Form fields exist
  for (const sel of ["input[name=name]", "input[name=email]", "input[name=subject]", "textarea[name=message]"]) {
    if ((await page.locator(sel).count()) !== 1) failed.push(`[${name}] missing form field ${sel}`);
  }

  // Resume link resolves
  const resumeHref = await page.locator("a[download]").first().getAttribute("href");
  const resumeResp = await page.request.get(new URL(resumeHref, BASE).href);
  if (!resumeResp.ok()) failed.push(`[${name}] resume link broken: ${resumeHref}`);

  // Screenshots: top of page + full page
  await page.screenshot({ path: `${SHOTS}/${name}-viewport.png` });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1200); // let scroll reveals settle
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${SHOTS}/${name}-full.png`, fullPage: true });

  // Lightbox works
  await page.locator("#certifications .cursor-zoom-in").first().click();
  await page.waitForTimeout(500);
  const lbVisible = await page.locator("img[alt='Certificate — full size']").isVisible().catch(() => false);
  if (!lbVisible) failed.push(`[${name}] certificate lightbox did not open`);
  await page.keyboard.press("Escape").catch(() => {});
  await page.mouse.click(10, 10);

  console.log(`${name}: DOMContentLoaded ${dcl}ms · load ${loaded}ms`);
  await page.close();
}

await checkViewport("desktop", { width: 1440, height: 900 });
await checkViewport("mobile", { width: 390, height: 844 });

await browser.close();

console.log("\n=== FAILED CHECKS ===");
console.log(failed.length ? failed.join("\n") : "none");
console.log("\n=== PAGE ERRORS ===");
console.log(errors.length ? errors.join("\n") : "none");
process.exit(failed.length || errors.length ? 1 : 0);
