import img from '../../assets/rental_car.jpg';
export default function FooterComponent() {
  return (
    <>
    <div className="footer-style">
      <div className="first-container">
        <img src={img} alt="rental-car" />
        <p>it is long established fact that <br/>a reader will be distracted by<br/> the readble content</p>
      </div>
      <div className="second-container">
        <ul style={{listStyleType:'none'}}>
            <li><h5>QUICK LINKS</h5></li>
            <li>Home</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Vehicle</li>
        </ul>

      </div>
      <div className="third-container">
      <ul style={{listStyleType:'disc'}}>
            <h5>TOP SEARCHED CITY</h5>
            <li>New York</li>
            <li>Atlanta</li>
            <li>Denver</li>
            <li>Queens</li>
            <li>Chennai</li>
        </ul>
        
      </div>
      <div className="fourth-component">
        <ul style={{listStyleType:'none'}}>
            <li><h5>LEGAL</h5></li>
            <li>Terms & Contition</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Feedback</li>
        </ul></div>
      <div className="fifth-component">
        <ul style={{listStyleType:'none'}}>
            <li><h5>CONTACT</h5></li>
            <li>82 New street. NY 10013</li>
            <li>Ginlove@gmail.com</li>
            <li>(406) 555 - 0120</li>
        </ul></div>
    </div>
    <hr/>
    <div style={{backgroundColor: 'hsl(228.39deg 59.62% 20.39%)',fontSize:'16px',padding:'20px'}}>Copyright © 2023 by Salman Rahman, All Rights Reserved.</div>
    </>
  )
}
