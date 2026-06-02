// GROQ Queries for Kamadenu Goushala Sanity CMS

// --- Blog Posts ---
export const ALL_POSTS_QUERY = `
  *[_type == "blogPost" && published == true] | order(date desc) {
    _id,
    title,
    slug,
    date,
    excerpt,
    author,
    category,
    coverImage,
    published
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    excerpt,
    author,
    category,
    coverImage,
    content,
    published
  }
`

// --- Events ---
export const ALL_EVENTS_QUERY = `
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    slug,
    date,
    location,
    description,
    coverImage,
    isFeatured,
    registrationLink
  }
`

export const FEATURED_EVENTS_QUERY = `
  *[_type == "event" && isFeatured == true] | order(date desc)[0...3] {
    _id,
    title,
    slug,
    date,
    location,
    description,
    coverImage
  }
`

export const EVENT_BY_SLUG_QUERY = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    location,
    description,
    content,
    coverImage,
    registrationLink
  }
`

// --- Gallery ---
export const ALL_GALLERY_QUERY = `
  *[_type == "gallery"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    images,
    category,
    date
  }
`

export const GALLERY_BY_CATEGORY_QUERY = `
  *[_type == "gallery" && category == $category] | order(date desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    images,
    category
  }
`

// --- Cow Profiles ---
export const ALL_COWS_QUERY = `
  *[_type == "cowProfile"] | order(breedName asc) {
    _id,
    breedName,
    slug,
    origin,
    description,
    heroImage,
    characteristics,
    milkYield,
    isFeatured,
    mapBreedName
  }
`

export const FEATURED_COWS_QUERY = `
  *[_type == "cowProfile" && isFeatured == true] | order(breedName asc) {
    _id,
    breedName,
    slug,
    origin,
    heroImage
  }
`

export const COW_BY_SLUG_QUERY = `
  *[_type == "cowProfile" && slug.current == $slug][0] {
    _id,
    breedName,
    slug,
    origin,
    description,
    heroImage,
    characteristics,
    milkYield,
    gallery
  }
`

// --- Testimonials ---
export const ALL_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && isFeatured == true] {
    _id,
    name,
    role,
    photo,
    quote,
    rating
  }
`

// --- Announcements ---
export const ACTIVE_ANNOUNCEMENTS_QUERY = `
  *[_type == "announcement" && isActive == true] | order(_createdAt desc) {
    _id,
    title,
    message,
    type,
    startDate,
    endDate,
    link,
    linkText
  }
`

// --- Products ---
export const ALL_PRODUCTS_QUERY = `
  *[_type == "product"] | order(name asc) {
    _id,
    name,
    slug,
    image,
    description,
    price,
    category,
    inStock,
    isFeatured,
    orderLink
  }
`

export const FEATURED_PRODUCTS_QUERY = `
  *[_type == "product" && isFeatured == true] | order(name asc) {
    _id,
    name,
    slug,
    image,
    description,
    price,
    category,
    inStock
  }
`

// --- Site Settings ---
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    logo,
    heroTitle,
    heroSubtitle,
    heroImage,
    stats,
    contactEmail,
    contactPhone,
    address,
    socialLinks,
    donationUpiId,
    donationQrCode
  }
`
