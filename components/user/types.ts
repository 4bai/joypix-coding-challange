export interface linktype {
  linkvariant?: 'button' | 'text'
}

export interface User {
  id: string
  email: string
  [key: string]: any
  user_metadata: {
    username: string
    [key: string]: any
  }
}
