import { Box, Heading } from "@chakra-ui/react"
import { MenuActions } from "./menuAcciones/menuActions"

export function Inventory() {
  return (
    <Box>
      <Heading size={"lg"}>Inventario</Heading>
      <MenuActions></MenuActions>
    </Box>
  )
}
