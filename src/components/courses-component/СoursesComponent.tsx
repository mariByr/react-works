import './CoursesComponent.css'
import {coursesAndDurationArray} from "../../arrays-2.ts";
import type {CourseModel} from "../../models/courseModel.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";
 export const CoursesComponent = () => {
    return (
        <ul>
            {
            coursesAndDurationArray.map((course:CourseModel,index:number) => {
                return <CourseComponent course ={course} key={index}/>
                }

            )
        }
        </ul>
    );
};
