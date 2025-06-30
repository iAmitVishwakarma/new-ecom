import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from './store/Store.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

library.add(fas);



createRoot(document.getElementById('root')).render(
<Provider store={store} >
   <BrowserRouter>
        <HelmetProvider> {/* Wrap your app */}
          <App />
        </HelmetProvider>
      </BrowserRouter>
 </Provider>,
)
