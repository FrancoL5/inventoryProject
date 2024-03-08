import { Button } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { ComponentDialog } from "../../utils/componentDialog"

export function AddItem() {
    const dispatch = useDispatch()

    return (
        <ComponentDialog
            buttonCallback={(_, onOpen) => (
                <Button onClick={onOpen} colorScheme="blue">
                    Agregar Item
                </Button>
            )}
        ></ComponentDialog>
    )
}
