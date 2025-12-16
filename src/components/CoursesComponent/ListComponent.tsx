
import {courses} from "../../data/data-cour.ts";
import {CourseComponent} from "../CourseComponent/CourseComponent.tsx";

export const ListComponent = () => {console.log("courses =", courses);
        return (

        <div className="grid grid-cols-3 gap-4 p-6">

            {
                courses.map((value, index) => (<CourseComponent item={value} key={index} />))
            }

        </div>
    );
};
