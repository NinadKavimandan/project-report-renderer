declare module 'project-reports/project-new' {
  export interface ProjectNewData {
    cardType: string
    daysAgo: number
    cards: Card[]
  }

  export interface Card {
    number: number
    title: string
    html_url: string
    closed_at: Date | null
    created_at: Date
    updated_at: Date
    assignee: Assignee | null
    assignees: Assignee[]
    labels: LabelElement[]
    comments: Comment[]
    events: Event[]
    project_proposed_at: Date
    project_accepted_at: Date
    project_in_progress_at: Date
    project_added_at: Date
    project_stage: string
    project_done_at?: Date
  }

  export interface Assignee {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  }

  export interface Comment {
    url: string
    html_url: string
    issue_url: string
    id: number
    node_id: string
    user: Assignee
    created_at: Date
    updated_at: Date
    author_association: string
    body: string
    reactions: Reactions
    performed_via_github_app: null
  }

  export interface Reactions {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }

  export interface Event {
    id: number
    node_id: string
    url: string
    actor: Assignee
    event: string
    commit_id: null
    commit_url: null
    created_at: Date
    project_card?: ProjectCard
    performed_via_github_app: null
    label?: EventLabel
    assignee?: Assignee
    assigner?: Assignee
  }

  export interface EventLabel {
    name: string
    color: string
  }

  export interface ProjectCard {
    id: number
    url: string
    project_id: number
    project_url: string
    column_name: string
    stage_name: string
    previous_column_name?: string
    previous_stage_name?: string
  }

  export interface LabelElement {
    id: number
    node_id: string
    url: string
    name: string
    color: string
    default: boolean
    description: string
  }
}
