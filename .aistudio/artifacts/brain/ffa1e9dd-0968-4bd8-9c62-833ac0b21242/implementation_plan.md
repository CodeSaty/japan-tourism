# Kage Japan Regional Tourism Experience — Implementation & Content Plan

An interactive regional tourism showcase for Japan built on the authored **Kage** full-document Three.js landing-page template (`/landing-pages/kage.html`), pairing sacred temple and shrine heritage across Japan's regions with verified facts from official Japanese tourism authorities.

---

## User Review & Critical Decisions

> [!WARNING]
> **Blocker — `kage.html` Source File & Missing Binary Assets (`secret-pathways-assets/`)**
> 1. **`kage.html` is not yet in the project workspace.** Per your strict guardrail (*"Do NOT recreate, approximate or 'write a similar' version of kage.html, its shaders, geometry or assets"*), no code or copy edits will be executed until you paste or upload your `kage.html` file.
> 2. **Missing Binary Assets (`I only have kage.html without the binary assets`)**: Because `kage.html` loads local dependencies from `/landing-pages/secret-pathways-assets/` (`fonts.css`, `three.min.js`, and 14 `.webp` scene layers), running `kage.html` without those files will result in failed network requests and blank textures unless resolved. Once you provide `kage.html`, I will extract the exact asset manifest referenced in the file and ask you to confirm whether to:
>    - **(Option A)** Supply the original `secret-pathways-assets/` directory, or
>    - **(Option B)** Explicitly authorize generating/provisioning matching local assets at the exact relative paths (`fonts.css`, local `three.min.js`, and 14 temple-layer `.webp` textures matching the exact filenames and layer dimensions expected by `kage.html`'s shaders).

> [!IMPORTANT]
> **Confirmed Decisions (from Phase 1 Questionnaire) & Recommended Defaults for Remaining Questions**

- **Confirmed — Source Files Status**: You have `kage.html` only (without binary assets). Next step: please paste or upload `kage.html` so I can produce the complete **Step 0 Written Inventory** (every scroll scene, every visible text string with character counts, split-text/fixed-width length constraints, and any remaining audio references).
- **Confirmed — Scene Imagery (Question 4)**: Keep the temple-style visual theme so all regional Japan copy aligns authentically with sacred mountains, Shinto shrines, Buddhist temples, and heritage pathways.
- **Confirmed — Language (Question 3)**: **English only** (`lang="en"`).
- **Confirmed — Style Parameters (Question 7)**: Proposed within the Kage Behavior Contract:
  - `headingFont`: `Instrument Serif` (`headingWeight`: `400`)
  - `bodyFont`: `Onest` (`bodyWeight`: `400`)
  - `primaryColor`: `#C83E2B` (Traditional Torii Vermilion / *Shu-iro*, driving the vermilion accent and ember tint)
  - `typography`: Heading size ceiling `56px` (within the `30–72px` range), body size `16px`, heading tracking `-0.02em`.
- **Recommended Default — Brand Name & Operator (Question 1)**: **"KAGE // NIHON"** (or **"Kage Paths Japan"**), operated as an independent editorial cultural travel guide (with an explicit footer disclosure stating no affiliation with JNTO, MLIT, or any government body). *Please let me know if you prefer a specific brand name or operator entity.*
- **Recommended Default — Target Audience (Question 2)**: International cultural and heritage travelers (English-speaking visitors from North America, Europe, and Oceania) seeking historic temples, shrines, and regional pilgrimage routes beyond a single-city itinerary.
- **Recommended Default — Primary CTA (Question 5)**: `"Plan at Official JNTO Guide"` linking directly to `https://www.japan.travel/en/plan/` (with `rel="noopener noreferrer"`), plus secondary regional destination links to `https://www.japan.travel/en/destinations/`.
- **Recommended Default — Hosting & Stack (Question 8)**: Keep the existing **Next.js 15 (App Router)** workspace, lazy-loading a dedicated `KageLandingPage` / `LandingPageFrame` host component that mounts `/landing-pages/kage.html` inside a full-viewport sandboxed `<iframe>` (`w-screen h-screen overflow-hidden`).
- **Recommended Default — Legal & Compliance Text (Question 9)**: Include an explicit non-affiliation and verification notice in the footer/modal:
  > *"Independent cultural travel guide. Not affiliated with or endorsed by the Japan National Tourism Organization (JNTO), the Japan Tourism Agency (MLIT), or any government entity. Transport schedules, admission fees, and seasonal access change—always check official sources at japan.travel before travel."*

---

## 1. Overview & Core Concept

- **What It Does**: Preserves the complete authored **Kage** 3D temple scroll experience inside a full-viewport React iframe host while adapting only the permitted text copy, document metadata, and typography/color tokens to showcase Japan's regional sacred heritage.
- **Target Audience / Persona**: International English-speaking travelers researching Japan's regions through its iconic temples, shrines, mountain sanctuaries, and pilgrimage routes.
- **Key Value**: Combines the atmospheric WebGL/Three.js depth of the authored Kage temple world with zero-hallucination, source-verified regional travel highlights and direct links to official Japanese tourism planning resources.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Step 0 Pre-Flight & Inventory State (Before `kage.html` is supplied, or during verification)**: If `/landing-pages/kage.html` is not yet present on disk, the host displays a clean, non-intrusive **Kage Source Inspector & Inventory Utility** where you can paste or drop your `kage.html` file to immediately inspect the automated **Step 0 Inventory** (scene list, string table with character limits, audio reference audit, and SHA-256 checksum) and preview the live iframe once mounted.
  2. **Immersive Scroll Experience (Once `kage.html` is placed at `/public/landing-pages/kage.html`)**: Full-viewport (`100vw × 100vh`) iframe host rendering `/landing-pages/kage.html` with all original pointer, keyboard, scroll scenes, and navigation interactions intact.
  3. **Regional Navigation & Official Outbound Links**: Users scroll through the temple scenes mapped to Japan's regional highlights and use the primary CTA to open official planning resources on `japan.travel`.

- **Visual Identity & Theme (Within Kage's Authored Parameters)**:
  - *Aesthetic Direction*: Sacred architectural minimalism—shadowed cedar, stone lanterns, mountain mist, and warm vermilion ember light.
  - *Color Palette & Mood*:
    - `--primary` (`primaryColor`): `#C83E2B` (Sacred Vermilion / *Shu-iro* accent and ember particle tint)
    - Dominant canvas & atmospheric depth preserved verbatim from `kage.html`'s authored shaders and styles.
  - *Typography & Hierarchy*:
    - **Headings (`headingFont`)**: `Instrument Serif`, weight `400`, ceiling `56px`, tracking `-0.02em`—evoking classic editorial travel monographs.
    - **Body & Navigation (`bodyFont`)**: `Onest`, weight `400` (with `500` for interactive labels), `16px` base size—ensuring crisp legibility over dark 3D viewport scenes.
  - *Component Styling & Layout*:
    - Outer host container uses a strict full-viewport, overflow-controlled boundary (`relative w-screen h-screen overflow-hidden bg-neutral-950`) with zero competing HUD clutter over the iframe.
  - *Interactive Feedback & Motion*:
    - All scroll choreography, pointer parallax, keyboard navigation, reduced-motion media queries, and WebGL context-loss handling remain 100% controlled by the untouched authored `kage.html` script.

---

## 3. Regional Grouping Verification & Proposed Content Mapping

### Official Source Comparison: How Japan's Regions Are Classified

Per your instructions, I verified the regional grouping across the three primary official sources (`web-japan.org`, `japan.travel`, and `mlit.go.jp/kankocho/en/`). Remember that **regions in Japan are informal geographic/cultural groupings, not official administrative units** (Japan's official sub-national administrative divisions are the **47 prefectures**):

| Official Source | Total Grouping Count | How Regions Are Listed | Key Discrepancies Found |
| :--- | :--- | :--- | :--- |
| **Web Japan** (`web-japan.org` Fact Sheet & Kids Web Japan) | **8 Regions** | `Hokkaido`, `Tohoku`, `Kanto`, `Chubu`, `Kinki` (also noted as Kansai), `Chugoku`, `Shikoku`, `Kyushu-Okinawa` | Groups **Okinawa Prefecture** together with **Kyushu** (`Kyushu-Okinawa`), and uses **Kinki** as the primary regional label for the Kyoto/Osaka/Nara area. |
| **JNTO** (`japan.travel/en/destinations/`) | **9 Destination Regions** | `Hokkaido`, `Tohoku`, `Kanto`, `Chubu`, `Kansai`, `Chugoku`, `Shikoku`, `Kyushu`, `Okinawa` | Separates **Okinawa** into a standalone 9th top-level destination rather than combining it with Kyushu, and uses **Kansai** instead of Kinki. |
| **Japan Tourism Agency / MLIT** (`mlit.go.jp/kankocho/en/`) | **10–11 Statistical Blocks** | Splits central Honshu into `Hokuriku-Shin'etsu` and `Tokai`/`Chubu`, and separates `Kyushu` and `Okinawa` | Uses administrative transport bureau blocks rather than the 8 cultural regions. |

### Adaptive Scene-to-Region Mapping Strategy

Because we must **fit the content to the exact number of scenes `kage.html` actually has** (and never force 8 regions into fewer scenes or alter the DOM structure):
- **If `kage.html` has 8 scene slots**: Map 1-to-1 using the 8-region grouping (`Hokkaido`, `Tohoku`, `Kanto`, `Chubu`, `Kansai [Kinki]`, `Chugoku`, `Shikoku`, `Kyushu & Okinawa`), explicitly noting Okinawa's distinct Ryukyu heritage alongside Kyushu.
- **If `kage.html` has fewer scene slots (e.g., Hero + 4 to 6 scroll chapters)**: Group the 8 regions into geographic arcs that match the exact scene count while keeping every copy block aligned with the temple/sacred-pathway visuals shown in the WebP layers:
  1. **Northern Sanctuaries (Hokkaido & Tohoku)** — Cedar-lined mountain shrines and golden halls (*Chuson-ji Konjikido* in Iwate, *Yamadera* in Yamagata, *Hokkaido Jingu* in Sapporo).
  2. **Eastern Capitals & Forest Shrines (Kanto)** — Ancient temples and UNESCO forest mausoleums (*Senso-ji* and *Meiji Jingu* in Tokyo, *Nikko Toshogu* in Tochigi, *Kotoku-in* in Kamakura).
  3. **Alpine Pilgrimage Routes (Chubu)** — Mountain passes of the Japanese Alps and historic pilgrimage halls (*Zenko-ji* in Nagano).
  4. **Ancient Capitals & Sacred Mountains (Kansai / Kinki)** — The cultural heartland of Buddhist and Shinto heritage (*Kiyomizu-dera* and *Fushimi Inari Taisha* in Kyoto, *Todai-ji* in Nara, *Koyasan* in Wakayama).
  5. **Inland Sea & Island Circuit (Chugoku & Shikoku)** — Coastal shrines and the 1,200 km island pilgrimage (*Itsukushima Shrine* in Hiroshima, *Izumo Taisha* in Shimane, and the *Shikoku 88-Temple Pilgrimage*).
  6. **Southern Myths & Sacred Groves (Kyushu & Okinawa)** — Volcanic gorges, ancient head shrines, and Ryukyu sacred sites (*Usa Jingu* in Oita, *Takachiho* in Miyazaki, and *Sefa-utaki* in Okinawa).

### Preliminary Verified Source Log (2026-10-27)

Every factual claim in the final copy will be restricted strictly to this verified log (expanded once `kage.html` scene slots and character limits are inventoried):

| Fact / Claim | Primary Official Source URL | Date Accessed |
| :--- | :--- | :--- |
| Japan consists of 47 prefectures traditionally grouped into 8 regions (`Hokkaido`, `Tohoku`, `Kanto`, `Chubu`, `Kinki/Kansai`, `Chugoku`, `Shikoku`, `Kyushu-Okinawa`). | `https://web-japan.org/kidsweb/explore/regions/` & `https://web-japan.org/factsheet/` | 2026-10-27 |
| JNTO organizes national destination guides across `Hokkaido`, `Tohoku`, `Kanto`, `Chubu`, `Kansai`, `Chugoku`, `Shikoku`, `Kyushu`, and `Okinawa`. | `https://www.japan.travel/en/destinations/` | 2026-10-27 |
| **Tohoku**: Chuson-ji Temple in Hiraizumi (Iwate Prefecture) features the gold-leaf-covered Konjikido (Golden Hall); Yamadera (Yamagata Prefecture) is a mountainside temple complex. | `https://www.japan.travel/en/destinations/tohoku/` | 2026-10-27 |
| **Kanto**: Senso-ji in Asakusa is Tokyo's oldest Buddhist temple; Meiji Jingu is a Shinto shrine set in a forested precinct in Shibuya; Nikko Toshogu (Tochigi Prefecture) is the mausoleum shrine of Tokugawa Ieyasu. | `https://www.japan.travel/en/destinations/kanto/` | 2026-10-27 |
| **Chubu**: Zenko-ji in Nagano Prefecture is one of Japan's major pilgrimage temples in the central mountain region. | `https://www.japan.travel/en/destinations/chubu/` | 2026-10-27 |
| **Kansai (Kinki)**: Kyoto, Nara, and Wakayama host historic temples and shrines including Kiyomizu-dera, Kinkaku-ji, Fushimi Inari Taisha, Todai-ji in Nara, and the Shingon Buddhist mountain sanctuary of Koyasan. | `https://www.japan.travel/en/destinations/kansai/` | 2026-10-27 |
| **Chugoku**: Itsukushima Shrine on Miyajima (Hiroshima Prefecture) is known for its torii gate standing in the tidal waters of the Seto Inland Sea; Izumo Taisha (Shimane Prefecture) is one of Japan's oldest Shinto shrines. | `https://www.japan.travel/en/destinations/chugoku/` | 2026-10-27 |
| **Shikoku**: The Shikoku 88-Temple Pilgrimage (*Henro*) is an approximately 1,200-kilometer circuit encompassing 88 Buddhist temples across Tokushima, Kochi, Ehime, and Kagawa prefectures. | `https://www.japan.travel/en/destinations/shikoku/` | 2026-10-27 |
| **Kyushu & Okinawa**: Kyushu features historic shrines such as Usa Jingu (Oita) and Takachiho Shrine (Miyazaki); Okinawa features sacred Ryukyu Kingdom sanctuaries (*utaki*) such as Sefa-utaki. | `https://www.japan.travel/en/destinations/kyushu/` & `https://www.japan.travel/en/destinations/okinawa/` | 2026-10-27 |

---

## 4. Technical Architecture & Execution Pipeline *(Technical Reference)*

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Next.js 15 App Router Host (`/app`)                  │
│   Lazy-loads `KageLandingPage` client boundary (no HTML in JS bundle)   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│             `<LandingPageFrame>` Full-Viewport Host Wrapper             │
│   • Sized, overflow-controlled parent (`w-screen h-screen overflow-hidden`)│
│   • Pre-check Inspector if `/landing-pages/kage.html` awaits upload     │
│   • Sandboxed `<iframe>` (`src="/landing-pages/kage.html"`) retaining   │
│     forms, modals, downloads, popups, scripts, and same-origin assets   │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                 `/public/landing-pages/kage.html`                       │
│   • Unmodified Three.js renderer, GLSL shaders, passes, & interactions  │
│   • Approved text/meta/alt replacements within exact character limits   │
│   • Allowed CSS custom properties (`headingFont`, `bodyFont`,           │
│     `primaryColor`, weights, and typography scale)                      │
└───────────────────────────────────┬─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│           `/public/landing-pages/secret-pathways-assets/`               │
│   • `fonts.css` + `three.min.js` + 14 WebP scene layers                 │
│   • Exact relative paths preserved as authored                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Strict Approval Gate Sequence

1. **Step 0 Inventory (Gate 1)**: As soon as you paste/provide `kage.html` (and let me know your preference for the remaining questions and binary assets), I will parse `kage.html` and present the complete **Step 0 Inventory** (every section in scroll order, every visible string with character count and animation/layout length constraints, the 14 WebP asset paths, and any audio references).
2. **Copy Map & Source Log Review (Gate 2)**: Map each template text slot to verified Japan regional copy that strictly fits the character count of the original slot, alongside the complete Source Log.
3. **Implementation & Diff Verification (Gate 3)**: Place `kage.html` at `/public/landing-pages/kage.html`, apply only the approved text and allowed style parameters, mount the lazy-loaded `<LandingPageFrame title="Kage" sourceUrl="/landing-pages/kage.html" />`, and produce a line-by-line diff confirming zero changes to shaders, geometry, or interaction logic.
