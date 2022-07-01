import {
    Blacklisted,
  } from "../generated/TusdToken/TusdToken"
  import { Blacklist } from "../generated/schema"

  export function handleAddressBlacklisted(event: Blacklisted): void {
    let entity = Blacklist.load(event.params.account.toHexString());
    if (!entity) {
      entity = new Blacklist(event.params.account.toHexString());
      entity.usdt = false;
      entity.usdc = false;
      entity.busd = false;
      entity.tusd = false;
      entity.euroc = false;
      entity.eurt = false;
    }

    entity.tusd = true;

    entity.save();
}
