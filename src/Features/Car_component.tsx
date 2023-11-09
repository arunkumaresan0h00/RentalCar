import { Button, Rating } from 'semantic-ui-react';
interface Props {
    GroupDetails: any[];
}
export default function CarComponent({ GroupDetails }: Props) {



  const icon_element = <>  <Rating icon='star' defaultRating={3} maxRating={4} /></>;

    return (
        <div style={{margin:'auto'}}>
            <br/>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'50px'}}>
            {GroupDetails.map((item: any,index:number) => {
                return (
                    <div key={index} className='card'>
                        <img src={item.img} alt={item.img} />
                        <h3>{item.heading}</h3> 
                        <div>{item.rate}</div>
                        <div>{icon_element}</div>
                        <div>
                            <Button inverted color='red'>
                                Red
                            </Button>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    );
}
