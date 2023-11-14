import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>Subscriptores</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
