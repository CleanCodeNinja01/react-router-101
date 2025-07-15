const apiUrl = "https://api.randomuser.me/";
const seed = "1";
const results = 10;

export interface Contact {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
}

export const getAllContacts = async () => {
  const url = `${apiUrl}?seed=${seed}&results=${results}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.results as Contact[];
};

export const getAllContactsById = async (id: string) => {
  const url = `${apiUrl}?seed=${seed}&results=${results}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const contact: Contact = jsonResponse.find((contactItem: Contact) => {
    return contactItem.login.uuid == id;
  });
  return contact;
};
