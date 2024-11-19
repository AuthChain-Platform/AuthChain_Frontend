import {getContract} from "thirdweb";
import {lisk} from "./chain";
import {client} from "./client";


export const userRoleAddress = "0x9b17d06296D01ab7BD42e2e55a517980fFFE9c61";

export const userRoleContract = getContract({
  client: client,
  chain: lisk,
  address: userRoleAddress,
});