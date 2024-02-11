import { List } from "../../components/List";
import { AddListForm } from "../../components/AddListForm";
import { data } from "../../../data";
import { useState } from "react";
//import { supabase } from "../../../supabaseClient";

export const HomePage = () => {
  const [lists, setLists] = useState(data); // []
console.log(lists)

  // přidání z lokálních dat
  const handleAddList = (title, cards) => {
    const newList = {
      id: Math.random(),
      title,
      cards,
    }

    const nextLists = [...lists, newList]
    setLists(nextLists)
    console.log(nextLists)
  }

  return (
    <div className="container">
      <main className="flex min-h-screen w-screen bg-yellow-300">
        <div className="sm:flex items-start w-screen p-10 overflow-x-auto">
          {console.log(lists)}
          {lists.map(({id, title, cards}) => {
            return <List key={id} title={title} cards={cards} />
          })}
          <AddListForm handleAddList={handleAddList}/>
        </div>
      </main>
    </div>
  );
};

