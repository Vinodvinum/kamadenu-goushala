import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cowProfile',
  title: 'Cow Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'breedName',
      title: 'Breed Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'breedName', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'characteristics',
      title: 'Characteristics',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'milkYield',
      title: 'Milk Yield',
      type: 'string',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Breed',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mapBreedName',
      title: 'Map Breed Name (for content mapping)',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'breedName', media: 'heroImage', subtitle: 'origin' },
  },
})
