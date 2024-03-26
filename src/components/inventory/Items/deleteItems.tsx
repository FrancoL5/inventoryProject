import { Button } from "@chakra-ui/react"
import { ComponentDialog } from "../../utils/componentDialog"
import { DeleteIcon } from "@chakra-ui/icons"

export function DeleteItems() {
    return (
        <ComponentDialog
            buttonCallback={(_, setOpen) => (
                <Button leftIcon={<DeleteIcon/>} colorScheme="red" onClick={setOpen}>Eliminar Seleccionados</Button>
            )}
        ></ComponentDialog>
    )
}