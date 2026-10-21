z# MASTER PROMPT: LEXLEAD LEGAL SOLUTIONS
## Premium Glassmorphic Law Firm Website — Next.js

### 1. Your Role

Act as a world-class digital product designer, premium brand strategist, senior Next.js engineer, and UI/UX specialist.

Design and develop a visually exceptional, production-ready website for **Lexlead Legal Solutions — Advocates**, based in Thiruvananthapuram, Kerala, India.

The website must combine:

- Premium glassmorphism
- Luxury legal branding
- Editorial typography
- Deep navy and champagne-gold colours
- Refined motion and micro-interactions
- Conversion-focused user experience
- Accessible, responsive implementation

The final result should resemble a bespoke digital experience for a premium legal practice, not a generic law firm template.

**Core design principle:** Glassmorphism should enhance the experience, not overpower it. Use translucent surfaces selectively, maintain strong text contrast, and preserve the authority and seriousness expected of a professional legal brand.

---

### 2. Technology Stack

Use:

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Lucide React icons
- CSS-based glassmorphism and animations
- Next.js Image and Font optimization
- Server Components by default
- Client Components only for interactive functionality
- React Hook Form and Zod for forms where appropriate

First inspect the existing repository, framework versions, installed dependencies, assets, routes, and components. Extend the existing project rather than unnecessarily rebuilding its foundation.

Do not introduce a heavy animation library when CSS or native browser features are sufficient.

---

### 3. Brand Identity

Business: Lexlead Legal Solutions

Descriptor: Advocates

Location: Thiruvananthapuram, Kerala, India

Use the supplied horizontal Lexlead logo. Preserve the original proportions, colours, and typography. Do not recreate it with ordinary text or distort the asset.

#### Colour system

| Token | Colour | Purpose |
|---|---|---|
| Midnight Navy | `#0B1728` | Main background |
| Brand Navy | `#10253D` | Logo and primary elements |
| Champagne Gold | `#C6A15B` | Premium highlights |
| Antique Gold | `#92703B` | Borders and secondary accents |
| Ivory | `#F7F5F0` | Light surfaces |
| Glass White | `rgba(255,255,255,0.08)` | Translucent panels |
| Glass Border | `rgba(255,255,255,0.16)` | Panel outlines |
| Muted Text | `#AAB4C3` | Secondary text on dark backgrounds |

Maintain a deliberate contrast between dark sections, illuminated gold accents, and glass surfaces.

Use gold sparingly for key actions, fine dividers, icons, and selected typography.

---

### 4. Art Direction

Create a premium, cinematic legal brand.

Visual references should combine luxury editorial websites, sophisticated financial advisory brands, and modern glassmorphic digital interfaces.

#### Glassmorphic surfaces

Implement reusable glass styles with:

- `backdrop-filter: blur(18px)` or an appropriate responsive value
- Semi-transparent navy or white backgrounds
- Fine, low-opacity borders
- Restrained inner highlights
- Soft, natural shadows
- Carefully controlled corner radii
- Subtle hover transitions

Use different glass treatments for the navigation, floating information panels, selected service cards, and consultation interface.

Avoid making every element a glass card. Large content sections should remain spacious and editorial.

#### Background treatment

Use a rich midnight-navy canvas with carefully composed visual depth:

- Soft radial gradients
- Diffused gold light
- Subtle geometric lines
- Very restrained atmospheric texture
- Large architectural photography or a premium legal-office image
- Gentle light falloff around the hero

Avoid excessive glowing effects, neon colours, distracting particles, and generic animated backgrounds.

#### Typography

Use an elegant editorial serif for major headings, such as Cormorant Garamond or an equivalent refined serif.

Use a clean sans-serif for body copy, navigation, labels, and forms, such as Manrope or Inter.

Use `next/font` where possible to optimize loading.

Headlines should feel confident and spacious. Body copy should remain readable and concise.

---

### 5. Homepage Design

Build the homepage as a carefully art-directed sequence of sections.

#### Section A: Floating glass navigation

Create a refined header with a translucent dark-glass surface.

Desktop layout:

- Lexlead logo on the left
- Navigation links in the centre or right
- Gold-accented consultation CTA on the right

Navigation:
- Home
- About
- Practice Areas
- Our Approach
- Contact

Design details:

- Fine translucent border
- Subtle background blur
- Soft shadow
- Elegant hover underline
- Smooth transition when scrolling
- Responsive mobile navigation
- Accessible focus states

The header should feel lightweight rather than like a large dashboard panel.

Use the actual logo file from `public/images/` and preserve its aspect ratio.

#### Section B: Cinematic hero

Create a full-width hero with a deep navy background, premium legal imagery, and subtle gold illumination.

Use a split composition:

Left:
- Small eyebrow label: `LEXLEAD LEGAL SOLUTIONS`
- Large editorial headline
- Concise supporting paragraph
- Primary and secondary CTAs
- Minimal trust-oriented supporting details

Right:
- High-quality architectural or legal-office photography
- Optional floating translucent glass panel
- Fine gold frame accents
- Restrained depth and lighting

Suggested headline:

**“Clarity in Law. Confidence in Every Decision.”**

Supporting copy:

“Thoughtful legal guidance, clear communication, and a considered approach to the matters that matter to you.”

Primary CTA: `Request a Consultation`

Secondary CTA: `Explore Our Practice Areas`

Treat this as proposed marketing copy. Confirm the firm's services and claims before publication.

Use cinematic lighting and a premium editorial crop rather than an obvious stock-photo collage.

The hero should look impressive at 1440px desktop width and remain equally intentional on mobile.

#### Section C: Floating trust indicators

Below the hero, introduce a slim glassmorphic panel containing three or four concise principles:

- Client-focused communication
- Careful legal assessment
- Professional approach
- Clear next steps

These are intended as brand principles, not independently verified credentials.

Use fine dividers, subtle icons, and restrained gold accents.

Do not invent awards, client numbers, success rates, or years of experience.

#### Section D: Practice areas

Headline:

**“Legal Support, Considered From Every Angle.”**

Supporting text should communicate the firm's approach without making unsupported claims.

Display a refined grid of legal practice areas using alternating dark-glass and lightly illuminated surfaces.

Potential categories, pending confirmation:

- Civil Litigation
- Criminal Law
- Family and Matrimonial Matters
- Property and Real Estate
- Corporate and Commercial Law
- Contract and Documentation Support

Each card should contain:

- A minimalist line icon
- Practice area name
- Short plain-English description
- Small arrow or “Explore” link
- Subtle border and background transition on hover

Interactions:

- Border becomes slightly warmer on hover
- Icon shifts subtly
- Arrow moves a few pixels
- No exaggerated scale or bounce effects

Do not publish a practice area until the firm confirms it provides that service.

#### Section E: Editorial introduction

Create a split-layout section with a light ivory background or a carefully contrasting navy surface.

Headline:

**“A More Thoughtful Approach to Legal Matters.”**

Include a premium photograph on one side and concise content on the other.

Communicate:

- The importance of understanding the client's circumstances
- Clear explanations of available options
- Professional communication
- Careful consideration of next steps

Keep the language factual and measured.

Do not invent the firm's history, advocate biographies, professional qualifications, or case experience.

#### Section F: The process

Headline:

**“From First Conversation to Clear Next Steps.”**

Show a four-stage process with elegant numbered markers and fine connecting lines:

01 — Initial Enquiry

Understand the general nature of the matter.

02 — Initial Assessment

Identify the information required to understand the situation.

03 — Discuss Available Options

Explain relevant considerations and possible next steps.

04 — Agree on the Next Step

Clarify what happens next, subject to the nature of the matter.

Use a responsive horizontal timeline on desktop and a vertical timeline on mobile.

Clarify that actual procedures depend on the legal matter and applicable requirements.

#### Section G: Consultation feature

Create a visually striking dark section with a subtle radial gold glow.

Use a large serif heading:

**“Every Important Decision Deserves Clarity.”**

Supporting copy:

“Start a conversation about your legal requirements and the next steps you may wish to consider.”

CTA: `Contact Lexlead`

Place the CTA inside a refined glass panel or beside a thin gold divider.

Do not promise outcomes or imply that submitting an enquiry establishes an advocate-client relationship.

#### Section H: Location and contact

Create a premium contact section featuring:

- Verified office address
- Approved phone number
- Approved business email
- Business hours, once confirmed
- Google Maps link or embed
- Contact form

Use a two-column layout, with contact information on one side and a glassmorphic form on the other.

Do not invent missing contact details.

#### Section I: Footer

Use a deep navy footer with:

- Logo
- Short approved firm description
- Navigation
- Approved practice areas
- Contact information
- Privacy Policy
- Terms of Use
- Legal Disclaimer
- Copyright notice

Use subtle gold dividers and clean typography.

Keep the footer elegant and uncluttered.

---

### 6. Glassmorphic Contact Form

Build a functional, accessible enquiry form with:

- Full name
- Email address
- Phone number
- Practice area
- Brief enquiry
- Privacy acknowledgement

Use:

- Transparent input backgrounds
- Thin borders
- Visible focus states
- Clear labels
- Appropriate validation messages
- Loading, success, and error states
- Keyboard accessibility

Use Zod for validation on the server and client where appropriate.

Protect the endpoint with server-side validation, rate limiting, and spam prevention.

Never store sensitive legal details unnecessarily. Do not request confidential documents or extensive case information through the initial form.

A submission must not display a false success message. Integrate a real delivery mechanism or clearly identify the backend configuration required.

---

### 7. Motion and Micro-interactions

Use restrained, intentional animation.

Implement:

- Smooth colour transitions
- Subtle card hover effects
- Gentle reveal animations for selected sections
- Small icon and arrow movements
- A refined mobile menu transition
- A subtle header transition on scroll

Requirements:

- Prefer CSS transitions and animations.
- Avoid scroll-jacking.
- Avoid excessive blur animations that harm performance.
- Respect `prefers-reduced-motion`.
- Do not hide essential content until animations complete.
- Keep the experience smooth on mid-range mobile devices.

The interface should feel composed, not animated for its own sake.

---

### 8. Responsive Design

Design deliberately for:

- 360px mobile
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop
- Large desktop displays

Mobile requirements:

- Compact logo
- Functional navigation menu
- Stacked hero layout
- Readable headline sizes
- Full-width primary CTA where appropriate
- Practice cards in a single-column layout where necessary
- No horizontal overflow
- Reduced background effects where they improve performance
- Touch-friendly controls

Ensure all glass surfaces maintain adequate contrast against their backgrounds.

Provide solid-background fallbacks when `backdrop-filter` is unsupported.

---

### 9. Technical Architecture

Use a maintainable component structure, adapting to the existing repository:

- `components/layout/Header.tsx`
- `components/layout/MobileNavigation.tsx`
- `components/layout/Footer.tsx`
- `components/home/Hero.tsx`
- `components/home/TrustPrinciples.tsx`
- `components/home/PracticeAreas.tsx`
- `components/home/Approach.tsx`
- `components/home/ConsultationCTA.tsx`
- `components/contact/ContactForm.tsx`
- `components/ui/GlassPanel.tsx`
- `components/ui/Button.tsx`
- `components/ui/SectionHeading.tsx`

Centralize design tokens and reusable glass styles.

Use semantic HTML, strict TypeScript, and reusable components.

Do not use `any` unnecessarily. Avoid duplicating styling logic and creating oversized client components.

---

### 10. SEO and Performance

Implement:

- Page titles and meta descriptions
- Open Graph metadata
- Sitemap
- `robots.txt`
- Semantic headings
- Accessible image descriptions
- Internal links
- Appropriate local SEO for Thiruvananthapuram, Kerala
- Structured data only for verified business information

Optimize:

- Images
- Font loading
- Component rendering
- Core Web Vitals
- Layout stability
- Caching where appropriate

Do not allow glass effects, oversized imagery, or animation to compromise performance.

Use `next/image` for appropriate raster assets and configure remote image sources explicitly.

---

### 11. Security and Legal Accuracy

- Never expose secrets in client-side code.
- Validate all server inputs.
- Add rate limiting to public endpoints.
- Use environment variables for credentials.
- Include an approved privacy policy and legal disclaimer.
- Do not fabricate advocates, qualifications, awards, testimonials, ratings, case results, or business information.
- Mark unconfirmed content clearly for review.
- Do not guarantee legal outcomes.
- Ensure all buttons and navigation links work.

---

### 12. Implementation Workflow

Follow this sequence:

1. Inspect the existing repository and installed dependencies.
2. Locate the supplied Lexlead logo and other usable assets.
3. Establish the design tokens, typography, and glassmorphic surface styles.
4. Build the header and hero first.
5. Implement the homepage sections and responsive layouts.
6. Build the About, Practice Areas, and Contact pages.
7. Implement form validation and real submission handling.
8. Add SEO metadata and legal pages.
9. Test accessibility and responsive behaviour.
10. Run linting, type checking, and the production build.
11. Fix implementation errors.
12. Report any incomplete integrations and business details that still require confirmation.

Do not stop after generating a design mockup. Implement the actual website in the existing project.

### Final quality target

The finished website should feel like a bespoke, premium legal brand: cinematic midnight-navy backgrounds, refined champagne-gold accents, beautifully controlled glassmorphism, elegant editorial typography, and a highly usable responsive interface.

**Prioritize sophistication, trust, legibility, accessibility, performance, and real functionality over decorative effects.**