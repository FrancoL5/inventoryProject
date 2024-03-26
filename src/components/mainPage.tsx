import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react"

export function MainPage() {
    return (
        <Stack p="1rem">
            <Heading>Como Utilizar el inventario y sus funcionalidades</Heading>
            <SimpleGrid
                spacing={4}
                templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            >
                <Card variant="elevated">
                    <CardHeader>
                        <Heading size="lg">Módulo de Items</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack>
                            <Text>Posee las siguientes funcionalidades</Text>
                            <UnorderedList>
                                <ListItem>Agregar Items</ListItem>
                                <ListItem>Editarlos y eliminarlos</ListItem>
                                <ListItem>
                                    <em>TODO</em>: Edición masiva y eliminación
                                    masiva
                                </ListItem>
                                <ListItem>
                                    <em>TODO</em>: Importación de Items
                                </ListItem>
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
                <Card variant="elevated">
                    <CardHeader>
                        <Heading size="lg">Módulo de Inventario</Heading>
                    </CardHeader>
                    <CardBody>
                        <Stack>
                            <Text>Posee las siguientes funcionalidades</Text>
                            <UnorderedList>
                                <ListItem>
                                    <em>TODO</em>: Ingresar items al Stock
                                </ListItem>
                                <ListItem>
                                    <em>TODO</em>: Ordenarlos en base a un
                                    criterio
                                </ListItem>
                                <ListItem>
                                    <em>TODO</em>: Ubicarlos en ubicaciones
                                </ListItem>
                            </UnorderedList>
                        </Stack>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Stack>
    )
}
