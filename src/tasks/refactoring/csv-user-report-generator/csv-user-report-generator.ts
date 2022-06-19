import fs from 'fs';
import { User, UserRegistrationInfo } from './types';
import DbService from './db.service';

export default class CsvUserReportGenerator {
  static async exportUsersToCSV(filePath: string, nameFilter: string) {
    fs.writeFileSync(filePath, await this.getUsersCsv(nameFilter));
  }

  static async getUsersCsv(nameFilter: string) {
    let result = '';

    const users = await DbService.getUsersFromDB(nameFilter);

    const usersIds = users.map((user) => user.id);

    const registrationInfo = await DbService.getUsersRegistrationInfo(usersIds);

    users.forEach((user) => {
      result += user.name;
      result += ';';
      result += registrationInfo.find((r) => r.userId === user.id).registrationDate;
      result += '\n';
    });

    return result;
  }
}

CsvUserReportGenerator.exportUsersToCSV('path', 'name');
