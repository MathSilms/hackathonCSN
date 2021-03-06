import Session from '../entities/Session';
import Transaction from '../entities/Transaction';

export interface TokenDTO {
  args1: string;
  args2: string;
}

export interface ICreateUserDTO {
  name: string;
  login: string;
  password_hash: string;
}

export interface TransactionDTO {
  transaction: Transaction;
}

export interface SessionDTO {
  session: Session;
  token: string;
}

