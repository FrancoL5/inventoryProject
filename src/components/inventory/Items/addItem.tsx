import {
    Button,
    Center,
    Heading,
    Input,
    SimpleGrid,
    Tooltip,
} from "@chakra-ui/react"
import { ComponentDialog } from "../../utils/componentDialog"
import { useForm } from "react-hook-form"
import { Item } from "../../../interfaces/items"
import { useAppDispatch } from "../../../store"
import { addItem } from "../../../store/inventarioSlice"
import { PrimaryButton } from "../../utils/customButton"
import { useState } from "react"

export function AddItem() {
    const [addResult, setAddResult] = useState<{ addedId: string }>({
        addedId: "",
    })
    const dispatch = useAppDispatch()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Item>()
    return (
        <ComponentDialog
            buttonCallback={(_, onOpen) => (
                <PrimaryButton variant="solid" onClick={onOpen}>
                    Agregar Item
                </PrimaryButton>
            )}
            header={
                <Center gap={2} flexDirection="column">
                    <Heading fontSize={"xl"}>Agregar Item</Heading>
                    {addResult.addedId && (
                        <Heading fontSize={"lg"}>
                            Item '{addResult.addedId}' Añadido
                        </Heading>
                    )}
                </Center>
            }
            body={
                <form
                    onSubmit={handleSubmit((data) => {
                        dispatch(addItem(data))
                        setAddResult((prev) => ({
                            ...prev,
                            addedId: data.code,
                        }))
                        reset()
                    })}
                >
                    <SimpleGrid spacing={"1rem"} columns={[1, 2]}>
                        <Tooltip
                            isDisabled={!errors.name}
                            label="El nombre es requerido"
                        >
                            <Input
                                {...register("name", { required: true })}
                                isInvalid={!!errors.name}
                                placeholder="Nombre"
                            ></Input>
                        </Tooltip>
                        <Tooltip
                            isDisabled={!errors.width}
                            label="El Ancho es requerido"
                        >
                            <Input
                                {...register("width", { required: true })}
                                type="number"
                                isInvalid={!!errors.width}
                                placeholder="Ancho"
                            ></Input>
                        </Tooltip>

                        <Tooltip
                            isDisabled={!errors.height}
                            label="El Alto es requerido"
                        >
                            <Input
                                {...register("height", { required: true })}
                                isInvalid={!!errors.height}
                                type="number"
                                placeholder="Alto"
                            ></Input>
                        </Tooltip>
                        <Tooltip
                            isDisabled={!errors.depth}
                            label="La Profundidad es requerida"
                        >
                            <Input
                                {...register("depth", { required: true })}
                                isInvalid={!!errors.depth}
                                type="number"
                                placeholder="Profundidad"
                            ></Input>
                        </Tooltip>
                        <Tooltip
                            isDisabled={!errors.code}
                            label="El Código es requerida"
                        >
                            <Input
                                {...register("code", { required: true })}
                                isInvalid={!!errors.code}
                                placeholder="Código"
                            ></Input>
                        </Tooltip>
                    </SimpleGrid>
                    <PrimaryButton
                        sx={{ mt: "15px" }}
                        width={"100%"}
                        type="submit"
                    >
                        Añadir
                    </PrimaryButton>
                </form>
            }
        ></ComponentDialog>
    )
}
