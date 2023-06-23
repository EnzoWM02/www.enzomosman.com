import ReactDOM from 'react-dom/client'
import './index.css'
import './utils/vars.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./components/ui/PageLayout.tsx";
import Home from "./components/pages/home/Home.tsx";
import './i18n/i18n.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
