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
      // const response = await fetch("https://project.prachsproste.eu/trullo");
      const data = await response.json();
      setLists(data.result);
    };
    fetchData();
  }, [lists]);


  const handleAddList = async (title) => {
    const response = await fetch('http://localhost:4000/api/data', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          cards: cards,
        }),
      }
    );
    if (!response.ok) {
      alert("Něco se pokazilo. Server neodpovídá..");
      return;
    }
    const data = await response.json();
    const newList = data.result;
    console.log('data 2', data.result);
    const nextLists = [...lists, newList]
    setLists(nextLists)
  };

  const handleDeleteList = async (id) => {
    const response = await fetch(`http://localhost:4000/api/data/${id}`, {
      method: "DELETE",
    })
    const data = await response.json();
    const newList = data.result;
    console.log('delete', data.result);
    const nextLists = [...lists, newList]
    setLists(nextLists)
  }


  if (lists === null) {
    return <div>Načítám...</div>;
  }

  return (
    <div className="container">
      <main className="flex min-h-screen w-screen bg-yellow-300">
        <div className="sm:flex items-start w-screen p-10 overflow-x-auto">
          {lists.map(({id, title, cards}) => {
            return <List key={id} title={title} cards={cards} handleDeleteList={handleDeleteList}/>
          })}
          <AddListForm handleAddList={handleAddList}/>
        </div>
      </main>
    </div>
  );
};

