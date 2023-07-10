import React,{useState} from 'react'

const AddContact = (props) => {
    const [name,setname] = useState("")
    const [email, setemail] = useState("")
    const state = {
        name: name,
        email:email
    }
    
    const Add = (e) => {
        e.preventDefault()
        if (name === "" || email === "") {
            alert("input fields are empty enter the details")
            return 
        }
        props.addContactHandler(state)
        setemail("")
        setname("")

        // console.log(state)
        
    }
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={Add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
}
export default AddContact;