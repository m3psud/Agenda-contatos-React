import React,{useState}from "react";
import { Container, FormControl, FormGroup } from "react-bootstrap";
import Api from "../services/API";



  const NewContact =() => { 
 
    const [data,setData] = useState({ nome:"" ,email:"", telefone:"", image:""})
     
    const handlechange = ({target}) => {
        setData({
            ...data,
            [target.name] : target.value
        })

    }
     const handleSubmit=(e) => {
        e.preventDefault()
        const response = Api.post('./contatos',data)
        console.log(response)
    }
    return (
       <Container>
        <h1 className= "text-center" > Adicione um novo Contato </h1>
        <form onSubmit={handleSubmit}
        >
            <FormGroup className="mb-3">
              <FormControl 
               type="text"
               name="nome"
               placeholder="Nome"
               value={data.nome}
               onChange={handlechange}
               required
              />

        
            </FormGroup>

            <FormGroup className="mb-3">
              <FormControl 
               type="text"
               name="email"
               placeholder ="email"
               value={data.email}
               onChange={handlechange}
               required
              />

        
            </FormGroup>

            <FormGroup className="mb-3">
              <FormControl 
               type="number"
               name="telefone"
               placeholder="telefone"
               value={data.telefone}
               onChange={handlechange}
               required
              />

        
            </FormGroup>

            <FormGroup className="mb-3">
              
              <FormControl 
               type="text"
               name="image"
               placeholder="URL da imagem"
               value={data.image}
               onChange={handlechange}
               required
              />

        
            </FormGroup>
            <button className="btn btn-success me-20"> Guardar</button>
        </form>
       </Container>
    )
}
 export default NewContact;