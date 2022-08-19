import {
  SetBlacklistCall
} from "../generated/AlusdToken/AlusdToken"
import { initializeBlacklist } from "./utils";

export function handleSetBlacklist(functionCall: SetBlacklistCall): void {
  let entity = initializeBlacklist(functionCall.inputs._toBlacklist, functionCall.block.timestamp);
  entity.alusd = true;
  entity.lastUpdated = functionCall.block.timestamp;
  entity.save();
}
