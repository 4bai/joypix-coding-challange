export interface Discussion {
    id: number;
    created_at: string;
    title: string;
    content: string;
    user: {
      id: number;
      username: string
    }
  }