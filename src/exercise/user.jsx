import { useEffect, useState } from "react"

export const UserProfiles = ( ) => {
    const [users, setUsers] = useState([])

    const fetchUsers = async ( ) => {
        const _users = await fetch("https://randomuser.me/api/?results=10")
        const res = await _users.json()
        setUsers(res.results)
    }

    useEffect(()=>{
        fetchUsers()
    }, [])

    return users.length > 0 ? <div>
        {users.map((user)=><div key={user.email}>
            <h3>{user.name.first} {user.name.first}</h3>
            <p>{user.email}</p>
        </div>)}
    </div>: <div>
        Pending...
    </div>
}