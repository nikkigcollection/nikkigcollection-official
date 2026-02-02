import type { CollectionConfig } from 'payload'

export const Carts: CollectionConfig = {
	slug: 'carts',
	admin: {
		group: 'Ecommerce',
	},
	fields: [
		{
			name: 'customer',
			type: 'relationship',
			relationTo: 'users',
			required: true,
			unique: true, // One cart per user
		},
		{
			name: 'items',
			type: 'array',
			fields: [
				{ name: 'product', type: 'relationship', relationTo: 'products' }, // Ensure you have a 'products' collection
				{ name: 'quantity', type: 'number', defaultValue: 1 },
			],
		},
	],
}