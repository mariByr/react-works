
import { createRoot } from 'react-dom/client'
import './index.css'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/router.tsx";


 const queryClient= new QueryClient()   //---------створення квері клаєнта- сховище (кеш) запитів і стану,
// дані сюди записуються і витягуються звідси кверями які єми перетворили в юзхуки


createRoot(document.getElementById('root')!).render(<QueryClientProvider client={queryClient}>
 <RouterProvider router={routes}/>
</QueryClientProvider>


)
;
