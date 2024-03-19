import { Card, CardBody, Heading, Stack } from "@chakra-ui/react"
import { useAppSelector } from "../../store"
import { selectItems } from "../../store/inventarioSlice"
import { ShowItemsTable } from "./Items/itemsShow"

export function ShowInventory() {
    const items = useAppSelector(selectItems)
    return (
        <Card>
            <CardBody>
                <Stack bg="white" py={5} gap={5}>
                    <Heading>Tabla De Inventario</Heading>
                    <ShowItemsTable items={items}></ShowItemsTable>
                </Stack>
            </CardBody>
        </Card>
    )
}
