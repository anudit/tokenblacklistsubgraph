import {
    AddressFrozen,
    AddressUnfrozen,
  } from "../generated/BusdToken/BusdToken";
import { initializeBlacklist } from "./utils";

  export function handleAddressFrozen(event: AddressFrozen): void {
    let entity = initializeBlacklist(event.params.addr, event.block.timestamp);
    entity.busd = true;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
  }

  export function handleAddressUnfrozen(event: AddressUnfrozen): void {
    let entity = initializeBlacklist(event.params.addr, event.block.timestamp);
    entity.busd = false;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
  }
