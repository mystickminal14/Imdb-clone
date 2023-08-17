
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Global from './Components/Global';
import Home from './Components/Home';

import List from './Components/List';
import MoviesDetails from './Components/MoviesDetails';
function App() {
  return (
<>

<Routes>
  <Route path="/" element={<Global/>}>
  <Route index  element={<Home/>}/>
  <Route path="/movies/:type" element={<List />} />
<Route path="/movies/:id" element={<MoviesDetails/>}/>
    <Route path="/*" element={<h1>404 error</h1>}/>
 

  </Route>
</Routes>
</>
  );
}

export default App;
