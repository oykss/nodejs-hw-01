import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    return (await readContacts()).length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
