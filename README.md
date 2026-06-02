# Kamadenu Goushala - Astro + Sanity CMS

A dynamic website for Kamadenu Goushala built with **Astro** and **Sanity CMS**. All content is managed through Sanity Studio and served dynamically at build time.

## Tech Stack

- **Frontend**: Astro v5 (SSG)
- **CMS**: Sanity v3
- **Deployment**: Vercel
- **Language**: TypeScript
- **Rich Text**: astro-portabletext

## Project Structure

```
src/
  lib/
    sanityClient.ts   # Sanity client + urlFor + sanityFetch
    queries.ts        # GROQ queries for all content types
    types.ts          # TypeScript interfaces
  sanity/
    schemas/          # Sanity schema definitions
  pages/             # All dynamic Astro pages
sanity.config.ts     # Sanity Studio configuration
```

## Environment Variables

Create a `.env` file in the project root:

```env
PUBLIC_SANITY_PROJECT_ID=x568r82t
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token_here
```

> Get your API token from: https://sanity.io/manage > your project > API > Tokens

For Vercel deployment, add these same variables in **Vercel Dashboard > Settings > Environment Variables**.

## Local Development

```bash
# Install dependencies
npm install

# Run Astro dev server
npm run dev

# Run Sanity Studio (in a separate terminal)
npm run sanity
```

- Astro site: http://localhost:4321
- Sanity Studio: http://localhost:3333

## Content Management

Access the Sanity Studio to manage all content:

| Content Type | Description |
|---|---|
| **Blog Posts** | News and articles |
| **Events** | Upcoming and past events |
| **Gallery** | Photo albums by category |
| **Cow Profiles** | Indigenous breed information |
| **Products** | Gau products for sale |
| **Testimonials** | Featured community testimonials |
| **Announcements** | Site-wide announcements/banners |
| **Site Settings** | Hero, stats, contact info |

## Sanity Schemas

All schemas are in `src/sanity/schemas/`:

- `blogPost.ts` - Blog/News articles
- `event.ts` - Events with registration links
- `gallery.ts` - Gallery albums with image arrays
- `cowProfile.ts` - Indigenous cow breed profiles
- `product.ts` - Gau products
- `testimonial.ts` - Donor/devotee testimonials
- `announcement.ts` - Active site announcements
- `siteSettings.ts` - Global site configuration

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set the environment variables in Vercel Dashboard
3. Set build command: `npm run build`
4. Vercel auto-deploys on every push to `main`

### CORS Configuration

Add your Vercel deployment URL to Sanity CORS origins:
1. Go to https://sanity.io/manage
2. Select your project
3. API > CORS Origins
4. Add your production URL (e.g. `https://kamadenu-goushala.vercel.app`)

## Adding Content

1. Run `npm run sanity` to open Sanity Studio
2. Navigate to the content type you want to add
3. Create and publish your content
4. Rebuild or redeploy the Astro site to reflect changes

## Pages Overview

| Page | Source | Data Source |
|---|---|---|
| `/` | `index.astro` | Featured events + breeds from Sanity |
| `/events` | `events.astro` | All events from Sanity |
| `/events/[slug]` | `events/[slug].astro` | Single event from Sanity |
| `/news` | `news.astro` | All blog posts from Sanity |
| `/news/[slug]` | `news/[slug].astro` | Single post from Sanity |
| `/blog` | `blog/index.astro` | All blog posts from Sanity |
| `/blog/[slug]` | `blog/[slug].astro` | Single post from Sanity |
| `/gallery` | `gallery.astro` | All gallery albums from Sanity |
| `/cows` | `cows.astro` | All cow profiles from Sanity |
| `/cows/[slug]` | `cows/[slug].astro` | Single breed from Sanity |
| `/products` | `products.astro` | All products from Sanity |

## License

Private project for Kamadenu Goushala.
