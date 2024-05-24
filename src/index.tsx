import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider } from '@mui/styles';
import { lightTheme } from './assets/styles/theme';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
            <App />
        </ThemeProvider>
      </Provider>,
);

reportWebVitals();
