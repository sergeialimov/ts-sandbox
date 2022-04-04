function outputMessages(...messages: any) {
  console.log('...message', messages);
  messages.forEach((message: any) => console.log(message));
}

outputMessages(1, 2, 3);
