import {useData} from "../hooks/useData.tsx";

interface User {
    id:number,
    name:string,
    age:number
}

const UserPage = () => {
    const users=useData<User[]>('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            {
                users&& users.map((user) => (
                    <div key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default UserPage;
