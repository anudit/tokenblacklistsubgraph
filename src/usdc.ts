import {
  Blacklisted,
  UnBlacklisted,
} from "../generated/UsdcToken/UsdcToken"
import { initializeBlacklist } from "./utils";

export function handleBlacklisted(event: Blacklisted): void {
  let entity = initializeBlacklist(event.params._account, event.block.timestamp);
  entity.usdc = true;
  entity.lastUpdated = event.block.timestamp;
  entity.save();
}

export function handleUnBlacklisted(event: UnBlacklisted): void {
  let entity = initializeBlacklist(event.params._account, event.block.timestamp);
  entity.usdc = false;
  entity.lastUpdated = event.block.timestamp;
  entity.save();
}
