import type {ICharacter} from "../../models/simpsonsModel.ts";
import type {ReactNode} from "react";
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
            <div className='my-10 border-2'>
        <h3 className='text-2xl'>{item.name} {item.surname}</h3>
        <p>{children}</p>
        <img src={item.photo}  alt={item.name}/>
    </div>
    );
};

export default CharacterComponent;
