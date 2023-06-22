import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./components/ui/PageLayout.tsx";
import Home from "./components/pages/home/Home.tsx";
import '/utils/vars.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
