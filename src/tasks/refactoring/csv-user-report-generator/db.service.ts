import { User, UserRegistrationInfo } from './types';

// where is a connection to the db?

export default class DbService {
  static async getUsersIdsFromDB(nameFilter: string) : User[] {
    // const nameRegex = new RegExp(nameFilter);
    // repace with orm param or sql query – .filter((u) => nameRegex.test(u.name));
    // stub, gets users from DB
    // return ids
    return [];
  }

  static async getUsersRegistrationInfo(userIds: string[]) : UserRegistrationInfo[] {
    // stub, gets users registration info from external service
    return [];
  }
}
