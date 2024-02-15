import { List } from "../../components/List/List";
import { AddListForm } from "../../components/AddListForm/AddListForm";
// import { data } from "../../../data";
import { useState } from "react";
import { useEffect } from "react";
//import { supabase } from "../../../supabaseClient";

export const HomePage = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/data");
      // const response = await fetch("https://trullo.prachsproste.eu/data_test");
      const data = await response.json();
      setLists(data.result);
    };
    fetchData();
  }, []);

  if (lists === null) {
    return <div>Načítám...</div>;
  }

  const handleAddList = (title, cards) => {
    const newList = {
      id: Math.random(),
      title,
      cards,
    }

    const nextLists = [...lists, newList]
    setLists(nextLists)
  }

  return (
    <div className="container">
      <main className="flex min-h-screen w-screen bg-yellow-300">
        <div className="sm:flex items-start w-screen p-10 overflow-x-auto">
          {lists.map(({id, title, cards}) => {
            return <List key={id} title={title} cards={cards} />
          })}
          <AddListForm handleAddList={handleAddList}/>
        </div>
      </main>
    </div>
  );
};

