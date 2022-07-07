import { BigNumber, ethers } from "ethers";
import { useStore } from "../../store";
import { ChampionNFTAddress } from "../../utils/conctract/SomeAddress";
import { ChampionNFT } from "../../../../contract/src/types/contracts/ChampionNFT";
import { ChampionNFT__factory } from "../../../../contract/src/types/factories/contracts/ChampionNFT__factory";

const store = useStore();

export interface ChampionInformation {
  tokenId: BigNumber;
  num: string;
  name: string;
  title: string;
  img: string;
  uri: string;
}

export async function getChampionInformation(
  tokenId: BigNumber
): Promise<ChampionInformation | null> {
  if (store.provider && store.signer) {
    const championNFTContract = new ethers.Contract(
      ChampionNFTAddress,
      ChampionNFT__factory.abi,
      store.signer
    ) as ChampionNFT;
    const uri = await championNFTContract.tokenURI(tokenId);
    
    console.log("prizePool");
    return null;
  } else {
    console.log("Please connect MetaMask!");
    return null;
  }
}
