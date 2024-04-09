import { useEffect, useState } from "react";
import { Header } from "./components";
import { User } from "./types/users";
import { users } from "../users";
import ContentUsers from "./components/ContentUsers";

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
        const final = keyB.some((keyword) => user.name.toLowerCase().includes(keyword));
        return final;
      });
      setData(newList);
    };
    filterUser();
  }, [keyboards,data]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-2">
        <form>
          <input
            className="border rounded-md shadow py-1 px-4 text-lg"
            placeholder="Search user for name"
            type="text"
            onChange={(element) => setKeyboards(element.target.value)}
          />
        </form>
        <section className="">
          <ContentUsers users={data} />
        </section>
      </div>
    </>
  );
};

export default App;
