import {
    Card,
    CardBody,
    Center,
    Checkbox,
    IconButton,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react"
import { Items } from "../../../interfaces/items"
import { HamburgerIcon } from "@chakra-ui/icons"

export function ShowItemsTable({ items }: { items: Items }) {
    return (
        <Card variant={"outline"}>
            <CardBody>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>
                                    <Center>Seleccionar</Center>
                                </Th>
                                <Th>
                                    <Center>Nombre</Center>
                                </Th>
                                <Th>
                                    <Center>Código</Center>
                                </Th>
                                <Th>
                                    <Center>Ancho</Center>
                                </Th>
                                <Th>
                                    <Center>Alto</Center>
                                </Th>
                                <Th>
                                    <Center>Profundidad</Center>
                                </Th>
                                <Th>
                                    <Center>Acciones</Center>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {items.map((item, i) => (
                                <Tr key={i}>
                                    <Th>
                                        <Center>
                                            <Checkbox></Checkbox>
                                        </Center>
                                    </Th>
                                    <Th>
                                        <Center>{item.name}</Center>
                                    </Th>
                                    <Th>
                                        <Center>{item.code}</Center>
                                    </Th>
                                    <Th>
                                        <Center>{item.width}</Center>
                                    </Th>
                                    <Th>
                                        <Center>{item.height}</Center>
                                    </Th>
                                    <Th>
                                        <Center>{item.depth}</Center>
                                    </Th>
                                    <Th>
                                        <Center>
                                            <IconButton
                                                variant="outline"
                                                colorScheme="teal"
                                                aria-label="edit"
                                                icon={<HamburgerIcon />}
                                            ></IconButton>
                                        </Center>
                                    </Th>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </CardBody>
        </Card>
    )
}
