import ReactDOM from 'react-dom/client'
import './index.css'
import './utils/vars.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./components/ui/PageLayout.tsx";
import HomePage from "./components/pages/home/HomePage.tsx";
import './i18n/i18n.tsx';
import SkillsPage from "./components/pages/skills/SkillsPage.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<PageLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"/skills"} element={<SkillsPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
)
