import { Box } from "@chakra-ui/react"
import { MenuActions } from "./menuAcciones/menuActions"
import { ShowInventory } from "./showInventory"

export function Inventory() {
    return (
        <Box>
            <MenuActions></MenuActions>
            <ShowInventory></ShowInventory>
        </Box>
    )
}
