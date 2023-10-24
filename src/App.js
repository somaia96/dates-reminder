import React ,{useState} from "react";
import { Button ,Container,Row,Col} from "react-bootstrap";
import DatesList from "./components/DatesList";
import DatesCount from "./components/DatesCount";
import DatesAction from "./components/DatesAction"
import person from "./data";
const App=()=>{
  const [personData, setPersonData] = useState(person)
  const onDelete=()=>{
    setPersonData([])
  }
  const onShow=()=>{
    setPersonData(person)
  }
    return(
        <div className="font color-body">
          <Container className="py-5">
            <DatesCount person={personData}/>
            <DatesList person={personData}/>
            <DatesAction onShow={onShow} onDelete={onDelete}/>
          </Container>
          
        </div>
        )
    }

    export default App;