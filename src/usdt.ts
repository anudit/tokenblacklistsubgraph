import {
  AddedBlackList,
  RemovedBlackList,
} from "../generated/TetherToken/TetherToken"
import { Blacklist } from "../generated/schema"

export function handleAddedBlackList(event: AddedBlackList): void {
  let entity = Blacklist.load(event.params._user.toHex());
  if (!entity) {
    entity = new Blacklist(event.params._user.toHex());
    entity.usdt = false;
    entity.usdc = false;
    entity.busd = false;
  }

  entity.usdt = true;

  entity.save();
}

export function handleRemovedBlackList(event: RemovedBlackList): void {
  let entity = Blacklist.load(event.params._user.toHex());
  if (entity) {
    entity.usdt = false;
    entity.save();
  }
}