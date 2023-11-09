import { Button, Rating } from "semantic-ui-react";
import CarComponent from "../../Features/Car_component";
import { GroupDetails } from "../../Store";
import img from '../../assets/OIP.jpg'
export default function ArticleComponent() {
  return (
    <div>
      <br /><br /><br /><br />
      <div className="flex">
        <div>
          <h3>our vehicle</h3>
          <h2>EXPLORE OUR TOP DEAL</h2>
        </div>
        <div>
        <Button color='red' width='50px'>See All Vehicle</Button>
        </div>
      </div>  

     <CarComponent GroupDetails={GroupDetails} />



     <div style={{display:'flex',gap:'30px',margin:'30px 150px'}}>
      <div style={{width:'33%'}}>
        <h6 style={{color:'red'}}> Testimonial</h6>
        <h2>WHAT PEOPLE SAY ABOUT OUR COMPANY</h2>
        <p>PropTypes.array,PropTypes.any,PropTypes.array,PropTypes.any,<br/>PropTypes.array,PropTypes.any,PropTypes.array,PropTypes.<br/>any,PropTypes.array,PropTypes.any,</p>
     <button style={{backgroundColor:'white',color:'black',border:'1.5px solid black',marginRight:'10px'}}>←</button><button style={{backgroundColor:'red'}}>→</button>
      </div>
     
        <div>
        <div className="card">
          <div className="">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore autem eaque, saepe deserunt, magni expedita tempore porro natus obcaecati ex consectetur facere tempora aut ipsa ab dolorum ius
          ore porro natus obcaecati ex consectetur facere tempora aut ipsa ab dolorum iusto illo.</div>
          <Rating icon='star' maxRating={4} />
        </div>
        <div style={{display:'flex'}}>
        <span>
          <br/>
        <img src={img} width={55} height={55}
        alt="img" /></span>

           <span style={{margin:'30px'}}>arun<br/>artist</span>
        </div>
          </div>     



        <div>

        <div className="card">
        <div className="">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore autem eaque, saepe deserunt, magni expedita tempore porro natus obcaecati ex consectetur facere tempora aut ipsa ab dolorum ius
          ore porro natus obcaecati ex consectetur facere tempora aut ipsa ab dolorum iusto illo.</div><Rating icon='star' maxRating={4} />
        </div>
        <div style={{display:'flex'}}>
        <span>
          <br/>
        <img src={img} width={55} height={55}
        alt="img" /></span>

           <span style={{margin:'30px'}}>arun<br/>artist</span>
        </div>
          
        </div>

        </div>
    </div>
  )
}
