export type Contact = {
    name: string;
    phone: string;
    email: string;
  }
  
export type Person = {
    id?: number;
    name: string;
    sinNumber: number;
    birthDate: string;
    contacts: Contact[];
  }