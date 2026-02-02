import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    group: 'Ecommerce',
    useAsTitle: 'id',
  },
  fields: [
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
    },
    {
      name: 'total',
      type: 'number',
      required: true,
    },
    {
      name: 'items',
      type: 'json', // Or an array of relationships to products
    },
  ],
}