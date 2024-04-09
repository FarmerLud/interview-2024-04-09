import { User } from "../types/users";
import imgUser from "../../assets/defaultUser.jpg"
import { useState } from "react";

interface Props {
  user: User;
}

const Profile = ({ user }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <article onClick={() => setActive(!active)} className={`flex items-center gap-3 p-3 bg-white border-2 rounded-3xl ${active ? 'border-indigo-500': 'border-gray-300'} shadow transition-all`}>
      <picture className="">
        <img className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover object-center max-w-60 max-h-60" src={user.image ? `/images/${user.image  }` : imgUser} alt={user.name} />
      </picture>
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl sm:text-3xl font-bold text-gray-700">{user.name}</h3>
          <p className="text-indigo-900 font-bold text-xs sm:text-lg">{user.role || 'Sin rol'}</p>
        </div>
        <p className="text-gray-600 text-xs sm:text-lg">{user.email || 'Sin email'}</p>
      </div>
    </article>
  );
};

export default Profile;
