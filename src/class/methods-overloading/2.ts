class Logger {
  static log(message: any): void
  static log(message: string, category: string): void
  static log(message: any, category?: string): void {
    console.log(message, category);
  }
}
Logger.log({ name: 'Bob' });
