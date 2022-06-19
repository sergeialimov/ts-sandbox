import { UserRegistrationInfo } from './types';

// TODO: add a connection to external service

export default class ExternalService {
  static async getUsersRegistrationInfo(userIds: string[]) : Promise<UserRegistrationInfo[]> {
    // stub, gets users registration info from external service
    return [];
  }
}
