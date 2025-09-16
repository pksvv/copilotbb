export const USER_PERMISSIONS = {
  ADMIN: {
    canRegisterWidgets: true,
    canApproveWidgets: true,
    canViewAllWidgets: true,
    canManageUsers: true,
    canAccessAdminPanel: true
  },
  ANALYST: {
    canRegisterWidgets: true,
    canApproveWidgets: false,
    canViewAllWidgets: true,
    canManageUsers: false,
    canAccessAdminPanel: false
  },
  GUEST: {
    canRegisterWidgets: false,
    canApproveWidgets: false,
    canViewAllWidgets: false,
    canManageUsers: false,
    canAccessAdminPanel: false
  }
};

export const ROLE_HIERARCHY = ['GUEST', 'ANALYST', 'ADMIN'];