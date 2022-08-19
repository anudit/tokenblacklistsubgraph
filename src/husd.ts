import {
  BlacklistAdded,
  BlacklistRemoved,
} from "../generated/HusdToken/HusdToken"
import { initializeBlacklist } from "./utils";

export function handleBlacklistAdded(event: BlacklistAdded): void {
  let entity = initializeBlacklist(event.params.account, event.block.timestamp);
  entity.husd = true;
  entity.lastUpdated = event.block.timestamp;
  entity.save();
}

export function handleBlacklistRemoved(event: BlacklistRemoved): void {
  let entity = initializeBlacklist(event.params.account, event.block.timestamp);
  entity.husd = false;
  entity.lastUpdated = event.block.timestamp;
  entity.save();
}
