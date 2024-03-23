import { Button, chakra } from "@chakra-ui/react"

export const ActionButton = chakra(Button, {
    baseStyle: {
        bg: 0,
        variant: "outline",
        color: "#eff6ee",
        _hover: { bg: "#5a5e6e", borderColor: "white" },
        _focus: {
            colorScheme: "whiteAlpha",
            oxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            borderColor: "white",
            outline: 0,
        },
    },
})
export const PrimaryButton = chakra(Button, {
    baseStyle: {
        bg: "#008DD5",
        color: "white",
        transition: "0.25s",
        _hover: {
            transition: "0.25s",
            bg: "#008DD5",
            backgroundImage: "linear-gradient(rgb(0 0 0/30%) 0 0)",
            borderColor: "white",
        },
        _active: {
            bg: "#008DD5",
            backgroundImage: "linear-gradient(rgb(0 0 0/30%) 0 0)",
            borderColor: "white",
        },
    },
})
