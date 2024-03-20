import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

interface Password {
  id: number;
  password: string;
  show: boolean;
  website: string;
}

interface NewPasswordInput {
  password: string;
  website: string;
}

const App: React.FC = () => {
  const [list, setList] = useState<Password[]>([
    { id: 1, password: "Item 1", show: false, website: "Melvin.com" },
    { id: 2, password: "Item 2", show: true, website: "Max.com" },
    { id: 3, password: "Item 3", show: true, website: "www.google.com" },
  ]);
  const [newPassword, setNewPassword] = useState<NewPasswordInput>({
    password: "",
    website: "",
  });
  const [search, setSearch] = useState<string>("");

  const generatorUUID = (): number => Math.floor(Math.random() * 1000);

  const onDelete = (id: number): void => {
    setList(list.filter((item) => item.id !== id));
  };

  const onShow = (id: number): void => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item,
      ),
    );
  };

  const addNewPassword = (): void => {
    if (!newPassword.password || !newPassword.website) return;
    const newPasswordWithId: Password = {
      ...newPassword,
      id: generatorUUID(),
      show: false,
    };
    setList(list.concat(newPasswordWithId));
    setNewPassword({ password: "", website: "" });
  };

  const filteredList = list.filter((item) =>
    item.website.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Input type="text" value={newPassword.password} onChange={(e) => setNewPassword({ ...newPassword, password: e.target.value })} placeholder="Enter password" />
      <Input type="text" value={newPassword.website} onChange={(e) => setNewPassword({ ...newPassword, website: e.target.value })} placeholder="Enter website" />
      <Button onClick={addNewPassword} text="Add" />
      
      <h1>List of Items</h1>
      <input
        type="text"
        placeholder="Search website"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List list={filteredList} onShow={onShow} onDelete={onDelete} />
    </>
  );
};

export default App;
