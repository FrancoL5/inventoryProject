import { Card, CardBody, Heading, ScaleFade, Stack } from "@chakra-ui/react"
import { useAppSelector } from "../../store"
import { selectItems, selectMarkItems } from "../../store/inventarioSlice"
import { ShowItemsTable } from "./Items/itemsShow"
import { AddItem } from "./Items/addItem"
import { EditItems } from "./Items/editItems"
import { DeleteItems } from "./Items/deleteItems"

export function ShowInventory() {
    const items = useAppSelector(selectItems)
    const checkedItems = useAppSelector(selectMarkItems)
    return (
        <Card>
            <CardBody>
                <Stack bg="white" py={5} gap={5}>
                    <Heading>Tabla de Items</Heading>
                    <Stack direction="row">
                        <AddItem></AddItem>
                        <ScaleFade unmountOnExit in={!!checkedItems.length}>
                            <Stack direction="row">
                                <EditItems></EditItems>
                                <DeleteItems></DeleteItems>
                            </Stack>
                        </ScaleFade>
                    </Stack>
                    <ShowItemsTable items={items}></ShowItemsTable>
                </Stack>
            </CardBody>
        </Card>
    )
}
