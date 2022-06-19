import { User, UserRegistrationInfo } from './types';

// where is a connection to the db?

export default class DbService {
  static async getUsersFromDB(nameFilter: string) : Promise<User[]> {
    // const nameRegex = new RegExp(nameFilter);
    // repace with orm param or sql query – .filter((u) => nameRegex.test(u.name));
    // stub, gets users from DB
    return [];
  }

  static async getUsersRegistrationInfo(userIds: string[]) : Promise<UserRegistrationInfo[]> {
    // stub, gets users registration info from external service
    return [];
  }
}
