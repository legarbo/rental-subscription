// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Renters = {
  id: string;
  customer_id: string;
  first_name: string;
  last_name: string;
  email: string;
  image_url: string;
  phone: string;
  status: 'pending' | 'paid' | 'flagged';
  date: string;
  amount: number;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  // status: 'pending' | 'paid';
};

export type LatestRenters = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestRentersRaw = Omit<LatestRenters, 'amount'> & {
  amount: number;
};

export type RentersTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  status: 'pending' | 'paid' | 'flagged';
};

export type FormattedRentersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type RenterField = {
  id: string;
  name: string;
};

export type RenterForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid' | 'flagged';
};
