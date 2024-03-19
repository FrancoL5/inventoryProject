import { Button, chakra } from "@chakra-ui/react"

export const ActionButton = chakra(Button, {
    baseStyle: {
        bg: "transparent",
        color: "#eff6ee",
        _hover: { bg: "#5a5e6e", borderColor: "white" },
        _focus: {
            boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        },
    },
})
export const PrimaryButton = chakra(Button, {
    baseStyle: {
        bg: "#f02d3a",
        color: "black",
        _hover: { bg: "#d92935", borderColor: "white" },
    },
})
