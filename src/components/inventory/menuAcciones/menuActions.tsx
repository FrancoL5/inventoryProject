import { Box,  Stack, StackDivider } from "@chakra-ui/react"
import { AddItem } from "./addItem"
import { ActionButton } from "./customButton"


export function MenuActions() {

    return (
        <Box>
            <Stack
                py="1rem"
                divider={<StackDivider borderColor={"gray.200"}></StackDivider>}
                direction="row"
                justifyContent={"center"}
                w="100dvw"
                bg="#273043"
                backdropFilter={"blur(5px)"}
            >
                <AddItem></AddItem>
                <ActionButton >Agregar Item</ActionButton>
                <ActionButton >Agregar Item</ActionButton>
                <ActionButton >Agregar Item</ActionButton>
            </Stack>
        </Box>
    )
}
