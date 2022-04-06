export {};

type Comment = {
  comment: string,
  email: string,
};

const comm: Comment = {
  comment: 'test',
  // email: 'tes',
};

comm.comment = 'ww';

console.log(comm);
