import axios from "axios";
import { useEffect, useState } from "react"
import { Users } from "types/Users";

export default function UsersAxiosPage() {
    const [users, setUsers] = useState<Users>()

    useEffect(() => {
        axios.get("https://reqres.in/api/users").then(function (response: any) {
            setUsers(response.data)
        }, function (reason: any) {
            console.log("reason", reason);

        })
    }, [])



    return (
        <div>
            <h1>List users</h1>
            <ul>
                {
                    users?.data?.map((user, index) => {
                        return <li key={index}>
                            <p>ID: {user.id}</p>
                            <p>Email: {user.email}</p>
                            <p>Fullname: {`${user.first_name} ${user.last_name}`}</p>
                            <p>Avar URL: {user.avatar}</p>
                            <p>
                                Avatar: <img src={user.avatar} alt="" />
                            </p>
                        </li>
                    })
                }
            </ul>
            <p>Support text: {users?.support.text}</p>
            <p>Support URL: {users?.support.url}</p>
        </div>
    )
}