import {
    AddressFrozen,
    AddressUnfrozen,
  } from "../generated/BusdToken/BusdToken"
  import { Blacklist } from "../generated/schema"

  export function handleAddressFrozen(event: AddressFrozen): void {
    let entity = Blacklist.load(event.params.addr.toHex());
    if (!entity) {
      entity = new Blacklist(event.params.addr.toHex());
      entity.usdt = false;
      entity.usdc = false;
      entity.busd = false;
    }

    entity.busd = true;

    entity.save();
  }

  export function handleAddressUnfrozen(event: AddressUnfrozen): void {
    let entity = Blacklist.load(event.params.addr.toHex());
    if (entity) {
      entity.busd = false;
      entity.save();
    }
  }
