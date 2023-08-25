interface FirebaseUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string | null;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

export default FirebaseUser;
