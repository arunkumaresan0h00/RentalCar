import '../Container/style.css'
interface Props {
    groupDetails: string[];
  }
  export default function Flex({ groupDetails }: Props) {
    return (
      <div>
        <div className="flex">
          {groupDetails.map((detail, index) => (
            <div key={index}>{detail}</div>
          ))}
        </div>
      </div>
    );
  }
    