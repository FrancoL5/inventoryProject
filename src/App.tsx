import { Box, Container } from "@chakra-ui/react"
import { MenuActions } from "./components/inventory/menuAcciones/menuActions"
import { Outlet } from "react-router-dom"

function App() {
    return (
        <Box bg="#eff6ee" h={"100dvh"} w={"100dvw"}>
            <Container centerContent>
                <MenuActions></MenuActions>
                <Outlet />
            </Container>
        </Box>
    )
}

export default App
