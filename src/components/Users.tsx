import { useEffect, useState } from "react"
import { Users } from "types/Users";

export default function UsersPage() {
    const [users, setUsers] = useState<Users>()

    console.log("users", users);


    useEffect(() => {
        window.fetch("https://reqres.in/api/users").then(function (response: any) {
            response.json().then(function (data: Users) {
                setUsers(data)
            })

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