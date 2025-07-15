import { Link } from "react-router-dom";
import { CONTACTS } from "../data/contacts";

function ContactsPage() {
  return (
    <>
      <div>
        This is the ContactsPage Page!!
        {CONTACTS.map((contact) => {
          return (
            <li>
              <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
              {/* <a href={`/contact/${contact.id}`}>{contact.name}</a> */}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default ContactsPage;
