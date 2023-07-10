import React from "react"
import user from "../images/user.png"
import bin from "../images/bin.png"

const ContactCard = (props) => {
    const {id,name, email } = props.contact;
    return (
      <div className="item" key={id}>
        <img className="ui avatar image" src={user} alt="userimg" />
        <div className="content">
          <div className="header">{name}</div>
          <div className="">{email}</div>
        </div>
            <img style={{width:"30px" ,marginLeft:"40px"}} src={bin} alt="delete" onClick={()=>props.clickHander(id)}/>
      </div>
    );
   
    
}

export default ContactCard;