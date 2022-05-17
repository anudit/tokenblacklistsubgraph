import {
  Blacklisted,
  UnBlacklisted,
} from "../generated/UsdcToken/UsdcToken"
import { Blacklist } from "../generated/schema"

export function handleBlacklisted(event: Blacklisted): void {
  let entity = Blacklist.load(event.params._account.toHex());
  if (!entity) {
    entity = new Blacklist(event.params._account.toHex());
    entity.usdt = false;
    entity.usdc = false;
    entity.busd = false;
  }

  entity.usdc = true;

  entity.save();
}

export function handleUnBlacklisted(event: UnBlacklisted): void {
  let entity = Blacklist.load(event.params._account.toHex());
  if (entity) {
    entity.usdc = false;
    entity.save();
  }
}
