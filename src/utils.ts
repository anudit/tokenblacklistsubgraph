import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Blacklist } from "../generated/schema";

export function initializeBlacklist(address: Address, now: BigInt): Blacklist {
    let entity = Blacklist.load(address.toHexString());
    if (!entity) {
      entity = new Blacklist(address.toHexString());
      entity.usdt = false;
      entity.usdc = false;
      entity.busd = false;
      entity.tusd = false;
      entity.euroc = false;
      entity.eurt = false;
      entity.usdp = false;
      entity.husd = false;
      entity.alusd = false;
      entity.lastUpdated = now;
    }
    entity.save();

    return entity;

  }
