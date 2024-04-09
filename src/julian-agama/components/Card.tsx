import { IUser } from "../interface/User";

interface Props {
  user: IUser;
  selectedCard: string;
  setSelectedCard: (id: string) => void;
}

const Card = ({ user, selectedCard, setSelectedCard }: Props) => {
  return (
    <article
      className={`${
        selectedCard == user.id && "border-blue-500"
      } p-4 rounded-3xl shadow-md border flex gap-4 cursor-pointer`}
      onClick={() => setSelectedCard(user.id)}
    >
      <img
        src={`/images/${user.image}`}
        onError={(e) => (e.currentTarget.src = "/src/assets/defaultUser.jpg")}
        alt={user.name}
        className="w-24 h-24 object-cover rounded-full"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-xl">{user.name}</h4>
          {user.role && (
            <span className="text-sm font-bold text-blue-500 w-fit">
              {user.role}
            </span>
          )}
          {!user.role && (
            <span className="text-sm font-medium italic text-gray-500 w-fit">
              Rol no registrado
            </span>
          )}
        </div>
        {user.email && (
          <p className="font-medium text-gray-500">{user.email}</p>
        )}
        {!user.email && (
          <span className="font-medium italic text-gray-400">
            Correo no registrado
          </span>
        )}
      </div>
    </article>
  );
};

export default Card;
