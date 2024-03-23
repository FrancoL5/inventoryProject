import { Card, CardBody, Heading, Stack } from "@chakra-ui/react"
import { useAppSelector } from "../../store"
import { selectItems } from "../../store/inventarioSlice"
import { ShowItemsTable } from "./Items/itemsShow"
import { AddItem } from "./Items/addItem"

export function ShowInventory() {
    const items = useAppSelector(selectItems)
    return (
        <Card>
            <CardBody>
                <Stack bg="white" py={5} gap={5}>
                    <Heading>Tabla de Items</Heading>
                    <Stack direction="row">
                        <AddItem></AddItem>
                    </Stack>
                    <ShowItemsTable items={items}></ShowItemsTable>
                </Stack>
            </CardBody>
        </Card>
    )
}
