type Email = {
  emailAddress: string;
};

type Name = {
  name: string;
};

type PhoneNumber = {
  phoneNumber: number;
};

type Contact = Name & PhoneNumber & Email;

const contact: Contact = {
  emailAddress: 'emailAddress',
  name: 'name',
  phoneNumber: 123,
};

console.log(contact);
