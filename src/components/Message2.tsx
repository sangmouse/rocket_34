import { useDispatch, useSelector } from "react-redux"
import { increment } from "stores/counter/counterSlice"
import { RootState } from "stores/store"
import { changeUsername } from "stores/users/userSlice"

interface Message2Props {
    username: string
    handleChange: () => void
}

export default function Message2(props: Message2Props) {
    // const { username, handleChange } = props
    const dispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.counter.value)
    const username = useSelector((state: RootState) => state.users.username)

    function handleClick() {
        dispatch(increment())
    }

    return (
        <div>
            <p>{username}</p>
            <p><b>{counter}</b></p>
            <button onClick={handleClick}>Change counter</button>
            <button onClick={function () {
                dispatch(changeUsername())
            }}>Change username</button>
        </div>
    )
}