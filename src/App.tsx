import { Box, Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { MenuActions } from "./components/navBar/menuActions"

function App() {
    return (
        <Box bg="#eff6ee" h={"100dvh"} w={"100dvw"}>
            <MenuActions></MenuActions>
            <Outlet />
        </Box>
    )
}

export default App
