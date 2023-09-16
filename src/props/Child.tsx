import { ChildProps } from "../types/Childs"
import "./child.css"

const Child = (props: ChildProps) => {
    const { username, password } = props

    return (
        <div className="child">
            <p className="child__title">This is childrent component</p>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
        </div>
    )
}

export default Child