export interface User {
  userId: number;
  username: string;
  profileCode: number;
}

export interface CurrentUser extends User {
  email: string;
  createdAt: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  success: boolean;
  token?: string;
  message: string;
}
