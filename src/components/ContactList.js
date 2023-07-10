import React from 'react'
import ContactCard from "./ContactCard"

const ContactList = (props) => {
    // console.log(props.contacts)
    const deleteConactHandler = (id) => {
      props.getContactId(id);
    };
    const renderContactList = props.contacts.map((eachperson) => {

        return (
          <ContactCard
            contact={eachperson}
            clickHander={deleteConactHandler}
            key={eachperson.id}
          />
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )

}

export default ContactList