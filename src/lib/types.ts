// TypeScript types for Sanity CMS documents

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  caption?: string
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: SanitySlug
  date: string
  excerpt?: string
  author?: string
  category?: string
  coverImage?: SanityImage
  content?: any[]
  published: boolean
}

export interface Event {
  _id: string
  title: string
  slug: SanitySlug
  date: string
  location?: string
  description?: string
  coverImage?: SanityImage
  content?: any[]
  isFeatured: boolean
  registrationLink?: string
}

export interface GalleryAlbum {
  _id: string
  title: string
  slug: SanitySlug
  description?: string
  coverImage?: SanityImage
  images?: SanityImage[]
  category?: string
  date?: string
}

export interface CowProfile {
  _id: string
  breedName: string
  slug: SanitySlug
  heroImage?: SanityImage
  origin?: string
  description?: string
  characteristics?: string[]
  milkYield?: string
  gallery?: SanityImage[]
  isFeatured: boolean
  mapBreedName?: string
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  photo?: SanityImage
  quote: string
  rating?: number
  isFeatured: boolean
}

export interface Announcement {
  _id: string
  title: string
  message: string
  type?: 'info' | 'warning' | 'success' | 'event'
  startDate?: string
  endDate?: string
  isActive: boolean
  link?: string
  linkText?: string
}

export interface Product {
  _id: string
  name: string
  slug: SanitySlug
  image?: SanityImage
  description?: string
  price?: number
  category?: string
  inStock: boolean
  isFeatured: boolean
  orderLink?: string
}

export interface SiteSettings {
  siteName: string
  tagline?: string
  logo?: SanityImage
  heroTitle?: string
  heroSubtitle?: string
  heroImage?: SanityImage
  stats?: { label: string; value: string }[]
  contactEmail?: string
  contactPhone?: string
  address?: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    youtube?: string
    twitter?: string
  }
  donationUpiId?: string
  donationQrCode?: SanityImage
}
