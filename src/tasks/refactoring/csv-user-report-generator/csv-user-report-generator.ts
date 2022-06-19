import fs from 'fs';
import { User, UserRegistrationInfo } from './types';
import DbService from './db.service';
import ExternalService from './external.service';

export default class CsvUserReportGenerator {
  static async exportUsersToCSV(filePath: string, nameFilter: string) {
    fs.writeFileSync(filePath, await this.getUsersCsv(nameFilter));
  }

  static async getUsersCsv(nameFilter: string) {
    let result = '';

    const users = await DbService.getUsersFromDB(nameFilter);

    const usersIds = users.map((user) => user.id);

    const registrationInfo = await ExternalService.getUsersRegistrationInfo(usersIds);

    users.forEach((user) => {
      result += user.name;
      result += ';';
      result += registrationInfo.find((r) => r.userId === user.id).registrationDate;
      result += '\n';
    });

    return result;
  }
}

// Test invokation
CsvUserReportGenerator.exportUsersToCSV('path', 'name');
