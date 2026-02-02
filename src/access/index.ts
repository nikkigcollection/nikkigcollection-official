import type { Access, FieldAccess } from 'payload'

import { adminOnlyFieldAccess } from './adminOnlyFieldAccess'
import { adminOrPublishedStatus } from './adminOrPublishedStatus'
import { isAdmin } from './isAdmin'
import { isDocumentOwner } from './isDocumentOwner'
import { checkRole } from './utilities'

export { adminOnlyFieldAccess, adminOrPublishedStatus, isAdmin, isDocumentOwner }

export const isAuthenticated: Access = ({ req: { user } }) => {
  return Boolean(user)
}

export const isCustomer: FieldAccess = ({ req: { user } }) => {
  if (user) return checkRole(['customer'], user)

  return false
}
