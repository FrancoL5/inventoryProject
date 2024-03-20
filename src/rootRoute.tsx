import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { Inventory } from "./components/inventory/Inventory"
import { MainPage } from "./components/mainPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {index:true, element:<MainPage></MainPage>},
            { path: "/manageInventory", element: <Inventory></Inventory> },
        ],
    },
])
