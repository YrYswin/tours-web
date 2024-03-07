import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TourPage from './pages/TourPage'
import ContactPage from './pages/ContactPage'
import Layout from './components/Layout/Layout'
import SearchResults from './components/SearcherTour/SearchResults/SearchResults';
import PurchasePage from './pages/PurchasePage';

import TourInfo from './pages/TourInfoPage';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<HomePage />} />
               <Route path='/about' element={<AboutPage />} />
               <Route path='/tour' element={<TourPage />} />
               <Route path='/contact' element={<ContactPage />} />

               <Route path='/find-tour' element={<SearchResults />} />
               <Route path='/tour/:id' element={<TourInfo />} />
               <Route path='/tour/:id/purchase' element={<PurchasePage />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
