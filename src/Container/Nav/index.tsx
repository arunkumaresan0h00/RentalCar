import Car from '../../assets/best_car.jpg';
import bitmex from '../../assets/bitmex.png'
import blockspot from '../../assets/blockspot.webp';
import Lbank from '../../assets/Lbank.png'
import komodo from '../../assets/komodo.webp'
import satshot from '../../assets/satshot.png'
import binance from '../../assets/binance.png'
export default function NavComponent() {
  return (
    <div style={{position:'relative'}}>
         <br/>
      <div className="split-Container flex">
        <div className="split-one"><img src={Car} alt="car"  /></div>
        <div className="split-two">
          <div style={{color:'red'}}>about us</div>
          <h2><pre>OUR COMMITMENT TO YOUR <br/>
            COMFORT AND SATISFACTION</pre></h2>
          <p>our online car rental service offers a seamless booking experience for convenient and affendative vehicle .with a car</p>
        <div>
          <ul>
            <li style={{marginRight:'25%'}}>24/7 Online Booking</li>
            <li style={{marginRight:'10%'}}>Diverse Vehicle Selection</li>
            <li >Flexible Pick-up and Drop-off</li>
          </ul>
        </div>
        </div>
      </div>

      <div className="flex" style={{backgroundColor:'rgb(21 33 83)',padding:'3% 10%',gap:'30px'}}>
        <img src={bitmex} alt="bitmex" width='100px' height='20px'/>
        <img src={blockspot} alt="blockspot" width='100px' height='20px'/>
        <img src={Lbank} alt="Lbank" width='100px' height='20px'/> 
        <img src={komodo} alt="komodo" width='100px' height='20px'/>
        <img src={satshot} alt="satshot" width='100px' height='20px'/>
        <img src={binance} alt="binance" width='100px' height='20px'/>
      </div>
    </div>
  )
}
