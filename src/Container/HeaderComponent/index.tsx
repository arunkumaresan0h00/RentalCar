import { Button } from "semantic-ui-react";
import Flex from "../../Features/Flex";
import { headerDetails } from "../../Store";
import rental_car from '../../assets/rental_car.jpg'
import '../style.css'
export default function HeaderComponent() {
 
    return (
      <>
    <div className="header-contaiiner flex-fixed">
      <img src={rental_car} alt="rental car" />
      <Flex groupDetails={headerDetails}/>
      <span>&#128222;<>(406) 555 - 0120</></span>
      <Button color='red' width='50px'>Sign In</Button>
    </div>
      </>
  )
}
