import Message2 from "components/Message2"
import { useSelector } from "react-redux"
import { RootState } from "stores/store"

interface Message1Props {
    username: string
    handleChange: () => void
}

export default function Message1(props: Message1Props) {
    const { username, handleChange } = props

    const users = useSelector(function (state: RootState) {
        return state.users.users;
    })

    return (
        <div>
            <Message2 username={username} handleChange={handleChange} />
            <ul>
                {
                    users.map(function (user) {
                        return <li style={{
                            marginBottom: "12px"
                        }} key={user.id}>{user.id} -- {user.name}</li>
                    })
                }
            </ul>

        </div>
    )
}