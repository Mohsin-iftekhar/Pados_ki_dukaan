import logo from './logo.svg';
import './App.css';
import { Front } from './components/Front';
import { BrowserRouter, Route,useRouteMatch,useParams,Routes,Link } from 'react-router-dom';
import { Vegetable } from './components/Vegetable';
import { Fashion } from './components/Fashion';
import { Grocery } from './components/Grocery';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Front/>} />
    <Route path='/Vegetable' element={<Vegetable/>} />
    <Route path='/fashion' element={<Fashion/>}/>
    <Route path='grocery' element={<Grocery/>}/>
    <Route path='fashion/grocstore' element={
      <Home/>
      }/>
      <Route path='Vegetable/grocstore' element={
        <Home/>
        }/>
        <Route path='grocery/grocstore' element={
          <Home/>
          }/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
