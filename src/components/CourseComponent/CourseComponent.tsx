import type {ICours} from "../../models/courseModels-task1.4.ts";
import {ModulesComponent} from "../ModulesComponent/ModulesComponent.tsx";

export interface CourseComponentProps {
    item:ICours
}

export const CourseComponent = ({item}: CourseComponentProps) => {
    return (
        <div className=" border-2 border-red-500 bg-red-50 p-6">
            <p> title:{item.title}</p>
            <p>monthDuration:{item.monthDuration}</p>
            <p>hourDuration:{item.hourDuration}</p>
            <h2>Modules:</h2>
            <ModulesComponent modules={item.modules}/>
           <p>logo:{item.logo}</p>
            <p> price:{item.price}</p>
            <p>rating:{item.rating}</p>
            <p>avgResult:{item.avgResult}</p>
        </div>
    );
};
