import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from './../Catalog/Catalog.js'
import Head from './../Head/Head.js'
import Schedule from './../Schedule/Shedule.js'
import Reservation from "../Reservation/Reservation.js";
import Sucess from "../Sucess/Sucess.js";

import './../App/App.css';
import './../Head/Head.css';


function App() {
  return (
    <>
      <Head />
      <BrowserRouter>
		  	<Routes>
			  	<Route path="/" element={<Catalog />} />
          <Route path="/filmes/:idFilmes" element={<Schedule />}></Route>
          <Route path="/assentos/:idSessao" element={<Reservation />}></Route>
          <Route path="/sucess" element={<Sucess />}></Route>
			  </Routes>
		  </BrowserRouter>
    </> 
  );
}

export default App;
//<Route path="/contato" element={<Contato />} />