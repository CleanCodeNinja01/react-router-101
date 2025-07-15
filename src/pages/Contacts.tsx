import { Link, useLoaderData } from "react-router-dom";
import { CONTACTS } from "../data/contacts";
import { Contact, getAllContacts } from "../api/contacts";

// route load hone wala hoga tou api call karega
export const contactsLoader = async () => {
  const contacts = await getAllContacts();
  return {
    contacts,
  };
};

function ContactsPage() {
  //Promise ko await krhe hain
  const { contacts } = useLoaderData() as Awaited<
    ReturnType<typeof contactsLoader>
  >;
  return (
    <>
      <div>
        This is the ContactsPage Page!!
        {contacts.map((contact) => {
          return (
            <li>
              <Link to={`/contact/${contact.login.uuid}`}>
                {contact.name.first} {contact.name.last}
              </Link>
              {/* <a href={`/contact/${contact.id}`}>{contact.name}</a> */}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default ContactsPage;
