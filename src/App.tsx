import { Box, Container } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { MenuActions } from "./components/navBar/menuActions"

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
