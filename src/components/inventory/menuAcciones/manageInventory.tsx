import { Link, useNavigate } from "react-router-dom"
import { ActionButton, PrimaryButton } from "./customButton"
import { SettingsIcon } from "@chakra-ui/icons"
export function ManageInventory() {
    const navigate = useNavigate()
    return (
        <ActionButton
            leftIcon={<SettingsIcon />}
            onClick={() => navigate("./manageInventory")}
            colorScheme="blue"
        >
            Manejo del Inventario
        </ActionButton>
    )
}
