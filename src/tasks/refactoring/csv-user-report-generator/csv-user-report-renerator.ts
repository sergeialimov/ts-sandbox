import fs from 'fs';
import { User, UserRegistrationInfo } from './types';
import DbService from './db.service';

export default class CsvUserReportGenerator {
  static async exportUsersToCSV(filePath: string, nameFilter: string) {
    fs.writeFileSync(filePath, await this.getUsersCsv(nameFilter));
  }

  async getUsersCsv(nameFilter: string) {
    let result = '';

    const nameRegex = new RegExp(nameFilter);

    const users = await DbService.getUsersIdsFromDB(nameRegex);

    const registrationInfo = await DbService.getUsersRegistrationInfo(userIds);

    users.forEach((user) => {
      result += user.name;
      result += ';';
      result += registrationInfo.find((r) => r.userId === user.id).registrationDate;
      result += '\n';
    });

    return result;
  }
}
