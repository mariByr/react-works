
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersComponent} from "./components/UsersComponent.tsx";
import App from "./App.tsx";




createRoot(document.getElementById('root')!).render(<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<App/>}>
            <Route path={'users'} element={<UsersComponent/>}/>
            <Route path={'posts'} element={<div>posts</div>}/>
            <Route path={'comments'} element={<div>comments</div>}/>
            <Route path={'products'} element={<div>products</div>}/>

        </Route>
    </Routes>
    </BrowserRouter>
    )
