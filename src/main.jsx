import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import "./locales/i18n";
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
  <BrowserRouter>
      <App />
  </BrowserRouter>,
    </I18nextProvider >,
)
