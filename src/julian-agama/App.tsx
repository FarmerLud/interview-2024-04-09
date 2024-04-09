import { useState } from "react";
import Card from "./components/Card";
import Searcher from "./components/search/Searcher";
import { useSearcher } from "./components/search/hook/useSearcher";
import Content from "./layout/Content";
import { users } from "./seeds/users";

function App() {
  const filter = useSearcher(users);
  const [selectedCard, setSelectedCard] = useState("");
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-3xl mt-12">Usuarios</h1>
      <Content>
        <Searcher filterSearcher={filter} />
        {filter.filterUsers?.map((user) => (
          <Card
            user={user}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ))}
      </Content>
    </div>
  );
}

export default App;
