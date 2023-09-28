import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "stores/store"
import { fetchUsers } from "stores/users/userSlice"

export default function Message3() {

    const username = useSelector(function (state: RootState) {
        return state.users.username
    })
    const dispatch = useDispatch()

    useEffect(function () {
        dispatch(fetchUsers() as any)
    }, [])

    return (
        <div>
            <h4>Message 3</h4>
            {username}
        </div>
    )
}