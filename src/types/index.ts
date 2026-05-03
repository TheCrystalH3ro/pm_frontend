export type OrgRole = 'OWNER' | 'ADMIN' | 'MEMBER';
export type Plan = 'FREE' | 'TRIAL' | 'PREMIUM';
export type ProjectStatus = 'ACTIVE' | 'ARCHIVED';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type SubscriptionStatus = 'ACTIVE' | 'CANCELLED' | 'PAST_DUE' | 'TRIALING';
export type AuditAction = 'CREATED' | 'UPDATED' | 'DELETED' | 'ASSIGNED' | 'UNASSIGNED';
export type EntityType = 'PROJECT' | 'TASK' | 'COLUMN' | 'MEMBER';

export type AuthUser = {
    username: string,
    role: OrgRole,
    hasOrganization: boolean
};

export type Organization = {
    id: number,
    name: string,
    slug: string,
    plan: Plan,
    trialEndsAt: string | null,
    memberCount: number
};

export type User = {
    id: number,
    username: string,
    email: string,
    orgRole: OrgRole
};

export type Project = {
    id: number,
    name: string,
    description: string | null,
    status: ProjectStatus,
    createdAt: string,
    createdBy: User,
    taskCount: number
};

export type Task = {
    id: number,
    title: string,
    description: string | null,
    priority: TaskPriority,
    position: number,
    dueDate: string | null,
    createdAt: string,
    columnId: number,
    createdBy: User,
    assignees: User[]
};

export type BoardColumn = {
    id: number,
    name: string,
    position: number,
    tasks: Task[]
};

export type Comment = {
    id: number,
    content: string,
    createdAt: string,
    author: User
};

export type AuditLog = {
    id: number,
    action: AuditAction,
    entityType: EntityType,
    entityId: number,
    details: string | null,
    createdAt: string,
    performedBy: User
};

export type Invitation = {
    id: number,
    email: string,
    role: OrgRole,
    accepted: boolean,
    expiresAt: string
};

export type Subscription = {
    plan: Plan,
    status: SubscriptionStatus,
    currentPeriodEnd: string | null,
    isTrialing: boolean,
    daysLeftInTrial: number
};

export type ApiError = {
    error: string
};