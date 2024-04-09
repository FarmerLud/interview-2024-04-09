import { useEffect, useState } from "react";
import { Header } from "./components";
import { User } from "./types/users";
import { users } from "../users";
import ContentUsers from "./components/ContentUsers";
import iconSearch from "../assets/searchGray1.svg"

const App = () => {
  const [data, setData] = useState<User[]>([]);
  const [keyboards, setKeyboards] = useState<string>('');

  useEffect(() => {
    const filterUser = () => {
      if (keyboards.trim() === "") {
        setData(users);
        return;
      }
      const keyB = keyboards.toLowerCase().split(" ");
      const newList = data.filter((user) => {
        /*for (let index = 0; index < keyB.length; index++) {
          return user.name.toLowerCase().includes(keyB[index])
        }*/
         return keyB.some( element => user.name.toLowerCase().includes(element) )
      });
      setData(newList);
    };
    filterUser();
  }, [keyboards,data]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-2">
        <div className="relative border rounded-2xl overflow-hidden shadow w-max bg-white py-2 px-3">
          <label htmlFor="search">
            <img className="absolute top-3 left-2" src={iconSearch} alt="Search icon" />
          </label>
          <input
            className=" py-1 px-4 text-lg ml-5 outline-none font-bold text-gray-800"
            placeholder="Search user for name"
            type="text"
            id="search"
            onChange={(element) => setKeyboards(element.target.value)}
          />
        </div>

        
        <section className="">
          <ContentUsers users={data} />
        </section>
      </div>
    </>
  );
};

export default App;
