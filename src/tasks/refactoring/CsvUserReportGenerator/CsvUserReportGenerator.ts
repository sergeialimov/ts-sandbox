import fs = require('fs');

type User = {
  id: string,
  name: string
};

type UserRegistrationInfo = {
  userId: string,
  registrationDate: Date
};

export default class CsvUserReportGenerator {
  static exportUsersToCSV(filePath: string, nameFilter: string) {
    fs.writeFileSync(filePath, this.getUsersCsv(nameFilter));
  }

  static getUsersCsv(nameFilter: string) {
    let result = '';

    const nameRegex = new RegExp(nameFilter);

    const users = await this.getUsersFromDB()
      .filter((u) => nameRegex.test(u.name));

    const userIds = users
      .map((u) => u.id);

    const registrationInfo = this.getUsersRegistrationInfo(userIds);

    for (const user of users) {
      result += user.name;
      result += ';';
      // result += registrationInfo.find((r) => r.userId === user.id).registrationDate;
      result += '\n';
    }

    return result;
  }

  static async getUsersFromDB() : User[] {
    // stub, gets users from DB
    return [];
  }

  static async getUsersRegistrationInfo(userIds: string[]) : UserRegistrationInfo[] {
    // stub, gets users registration info from external service
    return [];
  }
}
