import { List } from "../../components/List";
import { AddListForm } from "../../components/AddListForm";
import { data } from "../../../data";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../../supabaseClient";

export const HomePage = () => {
  const [lists, setLists] = useState(data); // []

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    try {
      const { data, error } = await supabase
      .from("data")
      .select('*')
      .limit(10)
    if (error) throw error;
    if (data !== null) {
      console.log(data) 
      // setLists(data)
    }
    } catch (error) {
      alert('Error!')
    }
  }

  async function createList() {
    try {
      const { data, error } = await supabase
      .from("data")
      .insert({
        title: title,
        //cards: cards,
      })
      .single()

    if (error) throw error;
    window.location.reload();
    } catch (error) {
      alert('Error!')
    }
  }

  const handleAddList = (title, cards) => {
    const newList = {
      title,
      cards,
      id: Math.random()
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
          <AddListForm handleClick={createList}/>
        </div>
      </main>
    </div>
  );
};

