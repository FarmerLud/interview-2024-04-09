import { useEffect, useMemo, useState } from "react";
import { IUser } from "../../../interface/User";

export interface UseSearcher {
  filterUsers: IUser[] | null;
  searchValue: string;
  onChangeSearchValue: (value: string) => void;
}

export const useSearcher = (users: IUser[]): UseSearcher => {
  const [searchValue, setSearchValue] = useState("");

  const filterUsers = useMemo(() => {
    if (searchValue.trim() == "") {
      return users;
    }

    return users.filter((user) => {
      const searchWords = searchValue.toLowerCase().split(" ");
      searchWords.some((word) => user.name.toLowerCase().includes(word));
    });

    // return users.filter((user) => {
    //   return user.name.toLowerCase().includes(searchValue);
    // });
  }, [users, searchValue]);

  useEffect(() => {});

  const onChangeSearchValue = (e: string) => {
    setSearchValue(e);
  };
  return {
    filterUsers,
    searchValue,
    onChangeSearchValue,
  };
};
