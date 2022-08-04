import { Container as ContainerContent } from "semantic-ui-react"
//Los import los puedo traer usando alias despues de as

export default function Container({children}) {
  //children son los props a recibir, esto significa que el contenido de App.js lo vamos a recibir por children  
    return(
        <ContainerContent text>{children}</ContainerContent>
    )
};

