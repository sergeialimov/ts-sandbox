import { User } from './types';

// TODO: add a connection to the db

export default class DbService {
  static async getUsersFromDB(nameFilter: string) : Promise<User[]> {
    // stub, gets users from DB by name
    return [];
  }
}
