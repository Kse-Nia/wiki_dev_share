export interface FilteredUser {
    id: string;
    name: string;
    email: string;
    role: string;
    posts: string[];
    badges: string[];
    Comments: string[];
    WikiArticle: string[];
    verified: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface UserResponse {
    status: string;
    data: {
      user: FilteredUser;
    };
  }
  
  export interface UserLoginResponse {
    status: string;
    token: string;
  }
  