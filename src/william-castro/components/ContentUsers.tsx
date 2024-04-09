import { User } from "../types/users"
import Profile from "./Profile";

interface Props {
    users: User [];
}

const ContentUsers = ({ users }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
        {
            users.map( user => (
                <Profile key={`${user.id}`} user={user} />
            ) )
        }
    </div>
  )
}

export default ContentUsers