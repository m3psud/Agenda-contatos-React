import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import  "./style/style.css";

const CardContact=({contatos})=>{
    return(
     <div className="col-4 mb-3">   
       <Container>
          <Card>
          <Card.Title className="text-center">{contatos.nome}</Card.Title>

            <img src={contatos.image} alt="FOTO" width="300" height="300"  className="card-img-top image-card" />
            <Card.Body>
            
                <ListGroup className="mb-2">
                    
                     <ListGroupItem> <strong> Email </strong> {contatos.email} </ListGroupItem>
                    <ListGroupItem> <strong> Telefone </strong> {contatos.telefone} </ListGroupItem>

                </ListGroup>
                <button className="btn btn-danger me-2">Apagar</button>
                <button className="btn btn-primary me-2">Editar</button>

            </Card.Body>
          </Card>
       </Container>
    </div>   
    )
}
export default  CardContact;