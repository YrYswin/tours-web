import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TourPage from './pages/TourPage'
import ContactPage from './pages/ContactPage'
import Layout from './components/Layout/Layout'

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<HomePage />} />
               <Route path='/about' element={<AboutPage />} />
               <Route path='/tour' element={<TourPage />} />
               <Route path='/contact' element={<ContactPage />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
