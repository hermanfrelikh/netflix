import CssBaseline from '@mui/material/CssBaseline';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
);
