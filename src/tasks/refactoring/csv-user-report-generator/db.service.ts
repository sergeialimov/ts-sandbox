// where is a connection to the db?

export default class DbService {
  static async getUsersFromDB() : User[] {
    // stub, gets users from DB
    return [];
  }

  static async getUsersRegistrationInfo(userIds: string[]) : UserRegistrationInfo[] {
    // stub, gets users registration info from external service
    return [];
  }
}
