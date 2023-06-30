export interface Tutor {
  name: string;
  gender: string;
  age: number;
  address: string;
  phone: string;
  avatar: string;
  email: string;
  password: string;
}

export interface TutorLogged {
    jwt: string;
    tutor: Omit<Tutor, 'password'>;
}