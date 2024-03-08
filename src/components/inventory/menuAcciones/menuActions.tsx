import { Box, Button, Stack, StackDivider } from "@chakra-ui/react"
import { AddItem } from "./addItem"

export function MenuActions() {
    return (
        <Box bg={"tomato"} as="span">
            <Stack
                py="1rem"
                divider={<StackDivider borderColor={"gray.200"}></StackDivider>}
                direction="row"
            >
                <AddItem></AddItem>
                <Button colorScheme="cyan">Agregar Item</Button>
                <Button colorScheme="cyan">Agregar Item</Button>
                <Button colorScheme="cyan">Agregar Item</Button>
            </Stack>
        </Box>
    )
}
