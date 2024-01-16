import { List } from "../../components/List";
import { AddForm } from "../../components/AddForm";
import { data } from "../../../data";

export const HomePage = () => {

  console.log(data)
  return (
    <div className="container">
      <main className="flex min-h-screen w-screen bg-yellow-300">
        <div className="sm:flex items-start w-screen p-10 overflow-x-auto">
          {data.map(list => {
            console.log(`ID: ${list.id}`);
            console.log(`Title: ${list.title}`);
            <List title={list.title} key={list.id}  cards={list.cards} />
          })}
          <AddForm />
        </div>
      </main>
    </div>
  );
};

