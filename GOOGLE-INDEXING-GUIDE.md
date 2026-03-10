# Google Indexing – Step-by-Step Guide for DRB (www.drbipl.com)

Follow these steps in order. You need a **Google account** (Gmail).

---

## Step 1: Open Google Search Console

1. Open your browser (Chrome, Safari, etc.).
2. Go to: **https://search.google.com/search-console**
3. Sign in with your Google account if asked.

---

## Step 2: Add Your Website (Property)

1. On the Search Console home page, look for **“Add property”** (or a similar button to add a new site).
2. Click **“Add property”**.
3. You will see two options:
   - **Domain** (e.g. drbipl.com) – needs DNS setup.
   - **URL prefix** (e.g. https://www.drbipl.com) – **choose this one**, it’s easier.
4. In the box, type exactly:  
   **`https://www.drbipl.com`**
5. Click **“Continue”**.

---

## Step 3: Prove You Own the Website (Verification)

Google will show you several ways to verify. Use **one** of these.

### Option A: HTML tag (recommended if you can edit the site)

1. Select **“HTML tag”** as the verification method.
2. You will see a line like:
   ```html
   <meta name="google-site-verification" content="ABC123xyz..." />
   ```
3. Copy **only the code inside `content="..."`** (e.g. `ABC123xyz...`).
4. In your project, open the file: **`src/app/layout.tsx`**.
5. Find this part:
   ```ts
   verification: {
     // Add your Google Search Console verification code when you have it:
     // google: "your-google-verification-code",
   },
   ```
6. Replace `"your-google-verification-code"` with the code you copied. It should look like:
   ```ts
   verification: {
     google: "ABC123xyz...",
   },
   ```
7. Save the file, then **deploy your site again** (push to GitHub if you use Vercel/Netlify, or build and upload).
8. Back in Search Console, click **“Verify”**.

### Option B: DNS (if you manage your domain)

1. Select **“Domain name provider”** or **“DNS”**.
2. Google will give you a **TXT record** to add (e.g. `google-site-verification=ABC123...`).
3. Log in to where your domain is managed (GoDaddy, Namecheap, etc.).
4. Add the TXT record exactly as Google shows.
5. Wait 5–10 minutes, then in Search Console click **“Verify”**.

---

## Step 4: Submit Your Sitemap (So Google Knows All Your Pages)

1. After verification, you are in your property’s dashboard.
2. In the **left sidebar**, click **“Sitemaps”** (under “Indexing” or similar).
3. You will see a box: **“Add a new sitemap”**.
4. In the box, type:  
   **`sitemap.xml`**  
   (Do **not** type the full URL; just `sitemap.xml`.)
5. Click **“Submit”**.
6. After a few minutes or hours, status may show “Success” or “Couldn’t fetch”. If it couldn’t fetch, wait 24 hours and check again (site might still be deploying).

---

## Step 5: Request Indexing for Your Homepage (Optional but Useful)

1. In the **left sidebar**, click **“URL Inspection”** (or “Inspect any URL” at the top).
2. In the URL box at the top, type:  
   **`https://www.drbipl.com/`**
3. Press Enter.
4. Wait until Google finishes checking the URL.
5. If you see **“Request indexing”**, click it. This asks Google to crawl your homepage soon.

You can repeat Step 5 for other important URLs, for example:

- `https://www.drbipl.com/contact`
- `https://www.drbipl.com/projects`
- `https://www.drbipl.com/expertise`

---

## What Happens Next?

- **Indexing is not instant.** It can take a few days to a few weeks.
- In Search Console you can check **“Pages”** in the left menu to see how many URLs are indexed.
- To see if your site appears in Google search, search: **`site:www.drbipl.com`** in Google. Results will show only pages from your site (and only ones already indexed).

---

## Quick Checklist

- [ ] Step 1: Opened search.google.com/search-console
- [ ] Step 2: Added property with URL: `https://www.drbipl.com`
- [ ] Step 3: Verified using HTML tag or DNS
- [ ] Step 4: Submitted sitemap: `sitemap.xml`
- [ ] Step 5: Requested indexing for `https://www.drbipl.com/`

If you get stuck, note which step number and what you see on the screen (or any error message), and you can share that for more specific help.
