import Message1 from "components/Message1"
import Message3 from "components/Message3"
import { useState } from "react"

/**
 * const [name, setName] = useState()
 */

export default function ReduxComponent() {

    const [username, setUsername] = useState<string>("đào tuấn anh")

    function handleChangeUsername() {
        setUsername("chu bán tuấn")
    }

    return (
        <div>
            <h1>Redux Flows</h1>
            <Message1 username={username} handleChange={handleChangeUsername} />
            <Message3 />
        </div>
    )
}