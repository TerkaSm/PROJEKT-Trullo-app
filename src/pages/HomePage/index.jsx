import { List } from "../../components/List";
import { AddForm } from "../../components/AddForm";

export const HomePage = () => {
  return (
    <div className="container">
      <main className="flex min-h-screen w-screen bg-yellow-300">
        <div className="sm:flex items-start w-screen p-10 overflow-x-auto">
          <List title="Dnešní plán" />
          <AddForm />
        </div>
      </main>
    </div>
  );
};
