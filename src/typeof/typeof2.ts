/* eslint-disable @typescript-eslint/no-unused-vars */

// type ContactDetails = {
//   name: string;
//   email: string;
// };
const initialContactDetails = { name: '', email: '', age: 0 };

function saveContactDetails(details: typeof initialContactDetails) {
  console.log(details);
}
