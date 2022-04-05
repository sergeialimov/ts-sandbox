type Email = {
  emailAddress: string;
};

type Name = {
  name: string | number;
  phoneNumber: boolean; // That would tranform type Contact = never
};

type PhoneNumber = {
  name: number;
  phoneNumber: number;
};
type Contact = Name & PhoneNumber & Email;

const contact: Contact = {
  emailAddress: 'emailAddress',
  name: 'name',
  phoneNumber: 133,
};

console.log(contact);
