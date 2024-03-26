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
import { ItemsWithID } from "../../../interfaces/items"
import { EditIcon } from "@chakra-ui/icons"
import { useAppDispatch, useAppSelector } from "../../../store"
import {
    markSelectAll,
    markSelectItem,
    selectMarkItems,
} from "../../../store/inventarioSlice"

export function ShowItemsTable({ items }: { items: ItemsWithID }) {
    const dispatch = useAppDispatch()
    const checkedItems = useAppSelector(selectMarkItems)
    const checkedAll = checkedItems.length === items.length && items.length > 0
    return (
        <Card variant={"outline"}>
            <CardBody>
                <TableContainer>
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>
                                    <Center >
                                        <Checkbox
                                            isChecked={checkedAll}
                                            isIndeterminate={!checkedAll && checkedItems.length > 0}
                                            onChange={(e) =>
                                                dispatch(markSelectAll(e.target.checked))
                                            }
                                            mr="0.75rem"
                                        ></Checkbox>
                                        Seleccionar
                                    </Center>
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
                        <Tbody >
                            {items.map((item, i) => (
                                <Tr key={i}>
                                    <Th >
                                        <Center >
                                            <Checkbox
                                                isChecked={item.selected}
                                                onChange={() => {
                                                    dispatch(
                                                        markSelectItem({
                                                            id: item.id,
                                                            select: !item.selected,
                                                        })
                                                    )
                                                }}
                                            ></Checkbox>
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
                                                colorScheme="black"
                                                aria-label="edit"
                                                icon={<EditIcon />}
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
