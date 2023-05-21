import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { persistor, Store } from './redux/Store';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename={'/goit-react-hw-08-phonebook'}>
              <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
