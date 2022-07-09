import {
    Blacklisted,
    UnBlacklisted,
} from "../generated/EurocToken/EurocToken";
import { initializeBlacklist } from "./utils";

export function handleBlacklisted(event: Blacklisted): void {
    let entity = initializeBlacklist(event.params._account, event.block.timestamp);
    entity.euroc = true;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
}

export function handleUnBlacklisted(event: UnBlacklisted): void {
    let entity = initializeBlacklist(event.params._account, event.block.timestamp);
    entity.euroc = false;
    entity.lastUpdated = event.block.timestamp;
    entity.save();
}
