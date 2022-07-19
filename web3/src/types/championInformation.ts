import { BigNumber, ethers } from "ethers";
import { ChampionNFT } from "../../../contract/src/types/contracts/ChampionNFT";
import { ChampionNFT__factory } from "../../../contract/src/types/factories/contracts/ChampionNFT__factory";
import superagent from "superagent";
import cheerio from "cheerio";
import { useStore } from "../store";
import { ChampionNFTAddress } from "../utils/conctract/SomeAddress";

const baseUrl = "https://www.ghostoact.com";

export interface ChampionInformation {
  tokenId: BigNumber;
  num: string;
  uri: string;
  name: string;
  title: string;
  img: string;
}

export async function getChampionInformation(
  tokenId: BigNumber
): Promise<ChampionInformation | null> {
  const store = useStore();
  if (store.provider && store.signer) {
    const championNFTContract = new ethers.Contract(
      ChampionNFTAddress,
      ChampionNFT__factory.abi,
      store.signer
    ) as ChampionNFT;
    console.log(`tokenId:${tokenId.toString()}`);
    const uri = await championNFTContract.tokenURI(tokenId);
    console.log(`tokenUri:${uri}`);

    let championInformation: ChampionInformation = {
      tokenId: tokenId,
      num: tokenId.toString(),
      uri: uri,
      name: "",
      title: "",
      img: "",
    };
    return reptile(championInformation);
  } else {
    console.log("Please connect MetaMask!");
    return null;
  }
}

async function reptile(
  championInformation: ChampionInformation
): Promise<ChampionInformation> {
  const result = await superagent.get(championInformation.uri);
  const text = result.text;
  const root = cheerio.load(text);
  const name = root(".mod-name").find("a").html();
  const title = root(".mod-title").find("a").html();
  const img = root(".sd-btn.splash-btn.menu-box").find("a").attr("href");
  if (typeof title === "string") {
    championInformation.title = title;
    console.log(championInformation.num+"title:"+championInformation.title);
  }
  if (typeof name === "string") {
    championInformation.name = name;
    console.log(championInformation.num+"name:"+championInformation.name);
  }
  if (typeof img === "string") {
    championInformation.img = baseUrl + img;
    console.log(championInformation.num+"img:"+championInformation.img);
  }

  return championInformation;
}
