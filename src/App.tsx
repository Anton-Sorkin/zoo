import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { AllAnimals } from "./components/pages/AllAnimals";
import { SpecificAnimal } from "./components/pages/SpecificAnimal";

import { IAnimals } from "./models/IAnimals";

function App() {
  const [allAnimals, setAllAnimals] = useState<IAnimals[]>([]);

  useEffect(() => {
    let getList: string = localStorage.getItem("allAnimals") || "";
    if (getList === "") {
      axios
        .get<IAnimals[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          response.data[0].imageUrl = "https://via.placeholder.com/1337";
          response.data[1].imageUrl = "https://via.placeholder.com/1337";

          localStorage.setItem("allAnimals", JSON.stringify(response.data));
          setAllAnimals(response.data);
        });
    } else {
      let gotList: IAnimals[] = JSON.parse(getList);
      setAllAnimals(gotList);
    }
  }, []);

  const showAllAnimals = (allAnimals: IAnimals[]) => {
    setAllAnimals(allAnimals);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <AllAnimals animals={allAnimals} showAnimals={showAllAnimals} />
          }
        ></Route>
        <Route path="animals/:id" element={<SpecificAnimal />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
