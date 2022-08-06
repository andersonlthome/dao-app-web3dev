import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xc245bBDaC6017E519C4B38D24F7b129D0A12885B");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Pulseira PartyDAO",
        description: "Esse NFT vai te dar acesso ao PartyDAO!",
        image: readFileSync("scripts/assets/token.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()