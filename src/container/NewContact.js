import React from "react";
import axios from "axios";

const NewContact =() => {
  const URL = "http://localhost:3004/contatos"
    return(
       <div>
        <h1 className= "text-center" > Adicione um novo Contato</h1>
       </div>
    )
}
 export default NewContact;