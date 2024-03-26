import { EditIcon } from "@chakra-ui/icons"
import { ComponentDialog } from "../../utils/componentDialog"
import { PrimaryButton } from "../../utils/customButton"

export function EditItems() {
    return (
        <ComponentDialog
            buttonCallback={(_, setOpen) => (
                    <PrimaryButton leftIcon={<EditIcon/>} onClick={setOpen}>
                        Editar Seleccionados
                    </PrimaryButton>
            )}
        ></ComponentDialog>
    )
}
