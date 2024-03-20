import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { Inventory } from "./components/inventory/Inventory"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            { path: "/manageInventory", element: <Inventory></Inventory> },
        ],
    },
])
