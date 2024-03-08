import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
} from "@chakra-ui/react"
import { useRef, useState } from "react"

export function ComponentDialog({
    buttonCallback,
    header,
    body,
}: {
    buttonCallback: (open: boolean, setOpen: () => void) => JSX.Element
    header?: JSX.Element
    body?: JSX.Element
}) {
    const [open, setOpen] = useState(false)
    const destructiveRef = useRef(null)

    return (
        <>
            {buttonCallback(open, () => setOpen(true))}
            <AlertDialog
                isOpen={open}
                leastDestructiveRef={destructiveRef}
                onClose={() => setOpen(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            {header}
                        </AlertDialogHeader>
                        <AlertDialogBody>{body}</AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}
