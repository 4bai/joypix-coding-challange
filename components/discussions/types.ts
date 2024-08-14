import type { User } from '@/components/user/types'

export interface Discussion {
  id: number
  created_at: string
  title: string
  content: string
  user: User
}
