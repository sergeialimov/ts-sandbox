type Email = {
  emailAddress: string;
};

type Name = {
  name: string | number;
  phoneNumber: boolean; // That would tranform type Contact = never
};

type PhoneNumber = {
  name: number;
  phoneNumber: number | boolean;
};
type Contact = Name & PhoneNumber & Email;

const contact: Contact = {
  emailAddress: 'emailAddress',
  name: 122,
  phoneNumber: true,
};

console.log(contact);
