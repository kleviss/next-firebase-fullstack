interface User {
  customClaims: {
    accessLevel: number;
    hasPremium: boolean;
  };
  refreshTime: number;
  user: string;
}

interface UserMap {
  [key: string]: User;
}

export type { User, UserMap };
