import {
    Button,
    Center,
    Heading,
    Input,
    SimpleGrid,
    Tooltip,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { ComponentDialog } from "../../utils/componentDialog"
import { Item } from "../../../interfaces/items"
import { useForm } from "react-hook-form"
import { addItem } from "../../../store/inventarioSlice"
export function AddItem() {
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<Item>()
    return (
        <ComponentDialog
            buttonCallback={(_, onOpen) => (
                <Button onClick={onOpen} colorScheme="blue">
                    Agregar Item
                </Button>
            )}
            header={
                <Center>
                    <Heading fontSize={"xl"}>Agregar Item</Heading>
                </Center>
            }
            body={
                <form
                    onSubmit={handleSubmit((data) => {
                        dispatch(addItem(data))
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
                    <Button
                        variant="solid"
                        colorScheme={"teal"}
                        sx={{ mt: "15px" }}
                        width={"100%"}
                        type="submit"
                    >
                        Añadir
                    </Button>
                </form>
            }
        ></ComponentDialog>
    )
}
