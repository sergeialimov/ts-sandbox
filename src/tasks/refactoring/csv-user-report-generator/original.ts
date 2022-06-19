import fs = require('fs');

type User = {
    id: string,
    name: string
}

type UserRegistrationInfo = {
    userId: string,
    registrationDate: Date
}

class CsvUserReportGenerator {

    static exportUsersToCSV(filePath: string, nameFilter: string) {
        fs.writeFileSync(filePath, this.getUsersCsv(nameFilter));
    }

    static getUsersCsv(nameFilter: string) {
        var result = "";

        var nameRegex = new RegExp(nameFilter);

        var users = this.getUsersFromDB()
            .filter(u => nameRegex.test(u.name));

        var userIds = users
            .map(u => u.id);

        var registrationInfo = this.getUsersRegistrationInfo(userIds);

        for (var user of users)
        {
            result += user.name;
            result += ";";
            result += registrationInfo.filter(r => r.userId === user.id)[0].registrationDate;
            result += "\n";
        }

        return result;
    }

    static getUsersFromDB() : User[] {
        // stub, gets users from DB
        return [];
    }

    static getUsersRegistrationInfo(userIds: string[]) : UserRegistrationInfo[] {
        // stub, gets users registration info from external service
        return [];
    }
}
