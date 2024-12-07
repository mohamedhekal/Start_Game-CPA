export interface User {
  id: string;
  email: string;
  username: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  acceptTerms: boolean;
}

export interface RegisterCredentials {
  email: string;
  company: string;
  phone: string;
  firstName: string;
  lastName: string;
  photo: File | null;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}