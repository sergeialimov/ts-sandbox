interface Form<T> {
  values: T;
  // errors: { email: string };
  errors: { [K in keyof T]?: string };
}

const contactForm: Form<{ name: string; email: string, mobile: string }> = {
  values: {
    name: 'Bob',
    email: 'bob@someemail.com',
    mobile: '124',
  },
  errors: {
    // name: 'Invalid name', // no need because [K in keyof T]? – optional
    email: 'Invalid email address',
  },
};
console.log(contactForm);
