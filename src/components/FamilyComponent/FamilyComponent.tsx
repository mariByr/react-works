import {simpsons} from "../../assets/data/data.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
import type {ICharacter} from "../../models/simpsonsModel.ts";
//import type {ICharacter} from "../../models/simpsonsModel.ts";


export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value:ICharacter,index:number) => <CharacterComponent key={index} item={value}>{ value.info} </CharacterComponent>)
            }
        </div>
    );
};
