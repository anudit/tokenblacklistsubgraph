import {
  Blacklisted,
  UnBlacklisted,
} from "../generated/UsdcToken/UsdcToken"
import { Blacklist } from "../generated/schema"

export function handleBlacklisted(event: Blacklisted): void {
  let entity = Blacklist.load(event.params._account.toHexString());
  if (!entity) {
    entity = new Blacklist(event.params._account.toHexString());
    entity.usdt = false;
    entity.usdc = false;
    entity.busd = false;
    entity.tusd = false;
    entity.euroc = false;
    entity.eurt = false;
  }

  entity.usdc = true;

  entity.save();
}

export function handleUnBlacklisted(event: UnBlacklisted): void {
  let entity = Blacklist.load(event.params._account.toHexString());
  if (entity) {
    entity.usdc = false;
    entity.save();
  }
}
