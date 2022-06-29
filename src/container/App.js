import React from "react";
import { Container } from "react-bootstrap";
import ListaDeContatos from  "../components/listadecontatos"

const App = () => {
    return (
      <Container fluid>
         <h1 className= "text-center" >Lista de Contatos</h1>
         <ListaDeContatos />
      </Container>
    )
}
export default App;