import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyles';
import AppRoutes from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <AppRoutes />
  </>
);