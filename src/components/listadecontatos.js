import React,{ useEffect,useState }from "react";
import axios from "axios";
import Api from "../services/API";
import CardContact from "./CardContact"
import { Container, Row } from "react-bootstrap";


    
const ListaDeContatos = () => {
      
  const [state, setState] = useState([])
    
  

  
  useEffect(async() => {
      Api.get('/contatos')
      .then((response) => {
      setState(response.data);
      })
  }, [])

    return(
       <Container className="mb-5">
        <Row> 
      {
        state.map((contatos,index) => {
            return(
               <CardContact
                 key={index}
                 contatos={contatos}
               />


            )
        
        }
        )
      }
         </Row>
        
       </Container>
    )
}
export default  ListaDeContatos;