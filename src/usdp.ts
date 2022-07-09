import {
    AddressFrozen,
    AddressUnfrozen,
} from "../generated/UsdpToken/UsdpToken"
import { initializeBlacklist } from "./utils";

export function handleAddressFrozen(event: AddressFrozen): void {
    let entity = initializeBlacklist(event.params.addr, event.block.timestamp);
    entity.usdp = true;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
}

export function handleAddressUnfrozen(event: AddressUnfrozen): void {
    let entity = initializeBlacklist(event.params.addr, event.block.timestamp);
    entity.usdp = false;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
}
