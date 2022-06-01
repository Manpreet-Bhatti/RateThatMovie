import { useEffect, useState } from "react";

const useFetchHeaderSearch = (search) => {
  const [searchData, setSearchData] = useState(null);
  useEffect(() => {
    if (!search) return;
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/4/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      const data = await response.json();
      console.log(data);
      setSearchData(data);
    };
    fetchData();
  }, [search]);

  return { searchData };
};

export default useFetchHeaderSearch;
