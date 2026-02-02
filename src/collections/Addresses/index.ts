import type { CollectionConfig } from 'payload'

export const Addresses: CollectionConfig = {
  slug: 'addresses',
  admin: {
    group: 'Ecommerce',
  },
  fields: [
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    { name: 'street', type: 'text', required: true },
    { name: 'city', type: 'text', required: true },
    { name: 'state', type: 'text' },
    { name: 'zipCode', type: 'text' },
  ],
}