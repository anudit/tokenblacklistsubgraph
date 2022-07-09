import {
  AddedBlackList,
  RemovedBlackList,
} from "../generated/TetherToken/TetherToken"
import { initializeBlacklist } from "./utils";

export function handleAddedBlackList(event: AddedBlackList): void {
  let entity = initializeBlacklist(event.params._user, event.block.timestamp);
  entity.usdt = true;
  entity.lastUpdated = event.block.timestamp;
  entity.save();
}

export function handleRemovedBlackList(event: RemovedBlackList): void {
  let entity = initializeBlacklist(event.params._user, event.block.timestamp);
  entity.usdt = false;
  entity.lastUpdated = event.block.timestamp;
  entity.save();
}
