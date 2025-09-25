# STAR Test-case: 2.15 — Lazy loading (Success Criterion)
**Group:** Adrian, Christine
**Date:** 2025-09-25  

## 1) WSG criterion (exact quote)
**Guideline:** 2.15 Optimize images for sustainability  
**Success Criterion:** Lazy loading  
> Include lazy loading to ensure images only load when they are required.

**Source:** [WSG 2.15 Lazy Loading](https://w3c.github.io/sustainableweb-wsg/#lazy-loading)

## 2) Plain-language summary
Images that are not initially visible on the page should only be loaded when the user scrolls near them, saving bandwidth and improving page load performance.

## 3) Why it matters
- **Performance:** Reduces initial page load, better responsiveness, and lower CPU/memory use. 
- **CO₂ / Energy:** Less data transferred reduces emissions per page view.  
- **UX:** Improved user experience, inclusivity, especially for people who do not have access to higher-end devices, and usability.

## 4) Machine-testable? (yes / partly)
- **Automatable:** Check `loading="lazy"` attribute, monitor network requests to confirm offscreen images aren’t loaded immediately.  
- **Manual required:** Confirm visual correctness when scrolling, ensure lazy-loading does not break layout or accessibility.

## 5) Signals to check
- Offscreen images have `loading="lazy"` attribute.  
- Initial `transferSize` for offscreen images is 0.  
- Network requests for offscreen images only trigger when scrolling near the image.  
- No layout shifts or broken visuals.

## 6) Pass / Fail rules
- **PASS** if all offscreen images defer loading until they are near the viewport AND have `loading="lazy"`.  
- **FAIL** if any offscreen image loads immediately or lacks the `loading="lazy"` attribute.

## 7) Exact test steps (reproducible)
1. Serve demo site locally:
   ```
   cd demo/broken
   npx http-server . -p 8000
   ```

2. Do something here.
3. Profit!!!

## 8) Evidence required
- `demo/broken/index.html`, `demo/fixed/index.html` + image files
- `demo/README.md` (with run steps)
- evidence/(insert images here I guess)

## 9) Automation hints (optional)
- Use Lighthouse audits to detect large images that are not lazy-loaded and quantify potential savings.
- Combine network HAR and Lighthouse JSON analysis to programmatically confirm offscreen images load only when required.

## 10) Assumptions & notes
- CO₂ model: SWDM v4 default for all runs.
- Throttling: Lighthouse simulated default.
- Evidence compares a “broken” version (without lazy-loading) and a “fixed” version (with lazy-loading and properly optimized images) to demonstrate improvements in performance, bandwidth, and emissions.

