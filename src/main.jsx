import { Provider } from 'react-redux';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import App from './components/App.jsx';
import 'modern-normalize';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
