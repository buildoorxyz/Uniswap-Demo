import { imageDataHelper } from "../utils/helpers";

export const data = {
  heading: `Begin your Web3 journey!`,
  subHeading: `Select a DApp from the option given below`,
  dApps: [
    {
      id: "balancer",
      image: imageDataHelper("balancer"),
    },
    {
      id: "uniswap",
      image: imageDataHelper("uniswap"),
    },
    {
      id: "unilend",
      image: imageDataHelper("unilend"),
    },
    {
      id: "binance",
      image: imageDataHelper("binance"),
    },
  ],
};
