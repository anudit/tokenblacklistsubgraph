import {
    AddressFrozen,
    AddressUnfrozen,
  } from "../generated/BusdToken/BusdToken"
  import { Blacklist } from "../generated/schema"

  export function handleAddressFrozen(event: AddressFrozen): void {
    let entity = Blacklist.load(event.params.addr.toHexString());
    if (!entity) {
      entity = new Blacklist(event.params.addr.toHexString());
      entity.usdt = false;
      entity.usdc = false;
      entity.busd = false;
      entity.tusd = false;
    }

    entity.busd = true;

    entity.save();
  }

  export function handleAddressUnfrozen(event: AddressUnfrozen): void {
    let entity = Blacklist.load(event.params.addr.toHexString());
    if (entity) {
      entity.busd = false;
      entity.save();
    }
  }
