import { Heading, Stack } from "@chakra-ui/react"
import { useAppSelector } from "../../store"
import { selectItems } from "../../store/inventarioSlice"
import { ShowItemsTable } from "./Items/itemsShow"

export function ShowInventory() {
    const items = useAppSelector(selectItems)
    return (
        <Stack py="3rem">
            <Heading>Tabla De Inventario</Heading>
            <ShowItemsTable items={items}></ShowItemsTable>
        </Stack>
    )
}
