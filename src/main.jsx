import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // Global CSS
import './background.css'; // Ensure this is correctly imported
import  {JwtProvider} from '../context/jwt.jsx'
import { LikedProvider } from '../context/Liked_context.jsx';
import { CounterProvider } from '../context/context.jsx';
import { FilterContextProvider } from '../context/filtercontest.jsx';
import { TrendingProvider} from '../context/trendingcontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>< JwtProvider>
    <CounterProvider>
      <FilterContextProvider>
        <LikedProvider>
          < TrendingProvider>
            <div className="wrapper"> {/* Ensure className is correct */}
            <ToastContainer  /><App />
            </div>
          </TrendingProvider>
        </LikedProvider>
      </FilterContextProvider>
    </CounterProvider></JwtProvider>
  </React.StrictMode>
);





