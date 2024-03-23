import { Box, Stack, StackDivider } from "@chakra-ui/react"
import { SettingsIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { ActionButton } from "../utils/customButton"

export function MenuActions() {
    const navigate = useNavigate()
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
                <ActionButton onClick={() => navigate("/")}>
                    Menú Principal
                </ActionButton>
                <ActionButton
                    leftIcon={<SettingsIcon />}
                    onClick={() => navigate("./manageInventory")}
                >
                    Manejo de Items
                </ActionButton>
                <ActionButton>Agregar Item</ActionButton>
                <ActionButton>Agregar Item</ActionButton>
            </Stack>
        </Box>
    )
}
