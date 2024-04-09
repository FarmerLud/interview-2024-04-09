import { UseSearcher } from "./hook/useSearcher";

interface Props {
  filterSearcher: UseSearcher;
}

const Searcher = ({ filterSearcher }: Props) => {
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterSearcher.onChangeSearchValue(e.target.value);
  };
  return (
    <label
      htmlFor="searcher"
      className="relative col-span-1 md:col-span-2 xl:col-span-3"
    >
      <input
        type="text"
        name="searcher"
        id="searcher"
        onChange={handleValue}
        placeholder="Buscar un usuario..."
        className="p-4 rounded-lg shadow-md border-2 w-full focus:border-blue-500 duration-200 outline-none  mb-6"
      />
      <img
        src={"/src/assets/searchGray1.svg"}
        className="absolute top-5 right-4 w-5 h-5"
        alt=""
      />
    </label>
  );
};

export default Searcher;
