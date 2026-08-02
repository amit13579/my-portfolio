/* Responsive check across real Android/iOS device profiles.
   Expects http://localhost:8931/my-portfolio/ to be live. */
import { chromium, devices } from "playwright";

const BASE = "http://localhost:8931/my-portfolio/";
const profiles = [
  "Galaxy S9+",          // 320px-class narrow Android
  "Pixel 7",             // common Android
  "iPhone SE",           // small iOS
  "iPhone 14 Pro Max",   // large iOS
  "iPad Mini",           // small tablet
  "iPad Pro 11 landscape", // tablet landscape
];
const desktops = [
  ["laptop-1280", { width: 1280, height: 800 }],
  ["desktop-1920", { width: 1920, height: 1080 }],
];

const issues = [];
const browser = await chromium.launch();

async function audit(name, contextOpts, screenshot) {
  const ctx = await browser.newContext(contextOpts);
  const page = await ctx.newPage();
  page.on("pageerror", (e) => issues.push(`[${name}] pageerror: ${e.message}`));
  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(1300);

  const vw = await page.evaluate(() => document.documentElement.clientWidth);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  if (overflow > 1) issues.push(`[${name}] horizontal overflow: ${overflow}px (vw=${vw})`);

  // hero content visible
  for (const sel of ["h1", "img[alt='Amit Kumar Gupta']"]) {
    const vis = await page.locator(sel).first().isVisible();
    if (!vis) issues.push(`[${name}] not visible: ${sel}`);
  }

  // text not clipped: h1 fits inside viewport
  const h1 = await page.locator("h1").boundingBox();
  if (h1 && h1.x + h1.width > vw + 1) issues.push(`[${name}] h1 clipped horizontally`);

  // mobile nav toggle works where the desktop menu is hidden
  const toggleVisible = await page.locator("button[aria-label='Toggle menu']").isVisible();
  if (toggleVisible) {
    await page.locator("button[aria-label='Toggle menu']").click();
    await page.waitForTimeout(350);
    const menuOpen = await page.locator("a[href='#contact']").last().isVisible();
    if (!menuOpen) issues.push(`[${name}] mobile menu did not open`);
    await page.locator("button[aria-label='Toggle menu']").click();
  }

  // tap targets: CTA buttons at least 40px tall
  const cta = await page.locator("main a[href='#about'], header a[href='#about']").first().boundingBox();
  if (cta && cta.height < 40) issues.push(`[${name}] CTA tap target too small: ${Math.round(cta.height)}px`);

  if (screenshot) {
    await page.screenshot({ path: `e2e-shots/${screenshot}.png`, fullPage: false });
  }
  console.log(`${name}: vw=${vw} overflow=${overflow}px ✓`);
  await ctx.close();
}

for (const d of profiles) {
  await audit(d, { ...devices[d] }, d.replaceAll(" ", "-").toLowerCase());
}
for (const [name, viewport] of desktops) {
  await audit(name, { viewport }, name);
}

await browser.close();
console.log("\n=== ISSUES ===");
console.log(issues.length ? issues.join("\n") : "none — all devices clean");
process.exit(issues.length ? 1 : 0);
