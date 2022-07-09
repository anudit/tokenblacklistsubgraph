import {
    Blacklisted,
  } from "../generated/TusdToken/TusdToken";
import { initializeBlacklist } from "./utils";

  export function handleAddressBlacklisted(event: Blacklisted): void {
    let entity = initializeBlacklist(event.params.account, event.block.timestamp);
    entity.tusd = true;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
}
