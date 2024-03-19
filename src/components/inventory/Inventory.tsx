import { MenuActions } from "./menuAcciones/menuActions"
import { ShowInventory } from "./showInventory"

export function Inventory() {
    console.log()
    return (
        <>
            <MenuActions></MenuActions>
            <ShowInventory></ShowInventory>
        </>
    )
}
