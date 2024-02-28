import { List } from "../../components/List/List";
import { AddListForm } from "../../components/AddListForm/AddListForm";
// import { data } from "../../../data";
import { useState, useEffect, useCallback } from "react";
//import { supabase } from "../../../supabaseClient";

export const HomePage = () => {
  const [lists, setLists] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      // const response = await fetch("http://localhost:4000/api/data");
      const response = await fetch("https://project.prachsproste.eu/trullo");
      const data = await response.json();
      setLists(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const handleAddList = async (title, cards) => {
    const response = await fetch('https://project.prachsproste.eu/trullo', {
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
    const newList = data;
    console.log('data 2', data);
    const nextLists = [...lists, newList]
    setLists(nextLists)
  };

  
  const handleDeleteList = async (id) => {
    try {
      const response = await fetch(`https://project.prachsproste.eu/trullo/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Smazaání listu se nepodařilo");
      }
  
      const updatedLists = lists.filter(list => list.id !== id);
      setLists(updatedLists);
  
    } catch (error) {
      console.error('Error deleting list:', error.message);
    }
  };

  const handleEditList = async (id, title) => {
    const response = await fetch(`https://project.prachsproste.eu/trullo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
      }),
    })
    const data = await response.json();
    const newList = data;
    console.log('put', data);
    const nextLists = [...lists, newList]
    setLists(nextLists)
    console.log('put', nextLists)
  }


  if (lists === null) {
    return <div>Načítám...</div>;
  }

  return (
    <div className="container">
      <main className="flex min-h-screen w-screen bg-yellow-300">
        <div className="sm:flex items-start w-screen p-10 overflow-x-auto">
          {lists && lists.map(({id, title, cards}) => {
            return <List id={id} key={id} title={title} cards={cards} handleDeleteList={handleDeleteList} handleEditList={handleEditList}/>
          })}
          <AddListForm handleAddList={handleAddList}/>
        </div>
      </main>
    </div>
  );
};

