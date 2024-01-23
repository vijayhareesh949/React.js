
import Listcompents from './components/listcomponents/list'
import Form from"./components/formscomponents/forms"
import Button from "./components/button/button"
import { Image } from "./components/imagecomponents/image";
// import {Images} from "./components/listcomponents/list"
import { Jsx, Jsxarray } from './components/jsxcomponents/jsx';

import Counter from './components/counter/counter';
import Childern from './components/childcomponents/child';
import Bootstrap from './components/bootstrapcomponents/bootstrap';
import { Card } from 'react-bootstrap';
import UseStateExample, { Increment } from './components/UseState/usestate';
import Seconds from './components/UseState/usestate';


function App(){
  return(
<div>
{/* <Listcompents/>
    <Form/>
   
    <Image/> */}
    {/* <Images/> */}
    {/* {<Jsx/>} */}
    {/* {<Jsxarray/>} */}
    {/* <Childern/> */}
    {/* <Button/> */}
    {/* <Counter/> */}
  {/* <Bootstrap/>
  <Card></Card> */}
  <Seconds/>
  <Increment/>
   
    </div>
  )
}
  export default App