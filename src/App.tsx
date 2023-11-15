import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";
import { getAllSubs } from "./services/getAllSubs";

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  const [newSubsNumber, setNewSubsNumber] =
  useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);
  
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subscriptores</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
