import fs from 'fs';
import { User, UserRegistrationInfo } from './types';
import DbService from './db.service';

export default class CsvUserReportGenerator {
  static exportUsersToCSV(filePath: string, nameFilter: string) {
    fs.writeFileSync(filePath, this.getUsersCsv(nameFilter));
  }

  static getUsersCsv(nameFilter: string) {
    let result = '';

    const nameRegex = new RegExp(nameFilter);

    const users = await DbService.getUsersFromDB()
      .filter((u) => nameRegex.test(u.name));

    const userIds = users
      .map((u) => u.id);

    const registrationInfo = await DbService.getUsersRegistrationInfo(userIds);

    for (const user of users) {
      result += user.name;
      result += ';';
      // result += registrationInfo.find((r) => r.userId === user.id).registrationDate;
      result += '\n';
    }

    return result;
  }
}
