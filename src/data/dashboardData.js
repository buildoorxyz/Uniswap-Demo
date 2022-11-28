import {
  CaretUpOutlined,
  CheckCircleOutlined,
  FlagOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import { imageDataHelper } from "../utils/helpers";

export const data = {
  sideBar: {
    tabs: [
      {
        key: "Uniswap",
        label: "Uniswap",
        innerContent: {
          card: {
            upperText: "Use Uniswap with Buildoor and earn upto",
            lowerText:
              "Claim reputation, merch and exclusive offers with these XPs.",
            xps: `500 XPs`,
          },
          collapse: {
            key: "Uniswap",
            heading: "Why use Buildoor for Uniswap?",
            innerText:
              "Web3 ecosystem currently does not have a unified solution to onboard and acquire users via Layovers. Buildoor takes advantage of the layovers (a concept widely used in every web2 product). We combine the most engaging aspects of web2 (layovers) and web3 (incentives) under one roof to deliver an unmatched user onboarding, engagement, and retention magnet",
          },
          info: {
            wallet: "0xpo133.....kahr1231ifbd",
            metrics: [
              {
                key: "1",
                heading: "Total transactions on Uniswap",
                value: "20",
              },
              {
                key: "2",
                heading: "Total XPs earned",
                value: "120",
              },
              {
                key: "3",
                heading: "Some Metric",
                value: "120",
              },
              {
                key: "4",
                heading: "Some Metric",
                value: "120",
              },
              {
                key: "5",
                heading: "Some Metric",
                value: "120",
              },
            ],
          },
        },
      },
      {
        key: "Milestones",
        label: "Milestones",
        innerContent: {
          timeline: [
            {
              key: "1",
              icon: (
                // <div style={{ background: 'black',height:'150%' }}>

                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
                // </div>
              ),
              heading: "Connect your web3 wallet",
              innerText:
                "A non-custodial web3 wallet serves as a gateway to use dApps. It is your web3 identity, pro tip: never share your private keys.",
            },
            {
              key: "2",
              icon: (
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Select primary token",
              innerText:
                "A token that you want to give up for another token.",
            },
            {
              key: "3",
              icon: (
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Token you want",
              innerText:
                "Select the token that you want against the primary token.",
            },
            {
              key: "4",
              icon: (
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Check the Paperwork ",
              innerText:
                "Expected tokens show the number of tokens your wallet will receive after a successful swap. ",
            },
            {
              key: "5",
              icon: (
                // <FlagOutlined
                //   style={{
                //     background: "#C916C2",
                //     color: "white",
                //     fontSize: "30px",
                //     borderRadius: "50%",
                //     border: "0",
                //     padding: "5px",
                //   }}
                // />
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Magical transformation of tokens",
              innerText:
                " After you click on swap, the primary token gets converted to the token you want. Don’t forget to confirm the transaction on your connected wallet.",
            },
            {
              key: "6",
              icon: (
                // <FlagOutlined
                //   style={{
                //     background: "#C916C2",
                //     color: "white",
                //     fontSize: "30px",
                //     borderRadius: "50%",
                //     border: "0",
                //     padding: "5px",
                //   }}
                // />
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Check Transaction",
              innerText:
                "This modal gives you the information about the state of your wallet at any given moment, including Balance history and other settings",
            },
            {
              key: "7",
              icon: (
                // <FlagOutlined
                //   style={{
                //     background: "#C916C2",
                //     color: "white",
                //     fontSize: "30px",
                //     borderRadius: "50%",
                //     border: "0",
                //     padding: "5px",
                //   }}
                // />
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Swap History",
              innerText:
                "This space shows all your successful and pending transactions. Clicking on any transaction will take you to a scanner that shows detailed status of the swap.",
            },
          ],
        },
      },
      {
        key: "Activity",
        label: "Activity",
        innerContent: {
          activites: [
            {
              key: 1,
              heading: "Completed onboarding  🎉",
              xp: "+500 XP",
              image: imageDataHelper("uniswap"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 2,
              heading: "Daily Login ✅",
              xp: "+10 XP",
              image: imageDataHelper("uniswap"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 3,
              heading: "Completed onboarding  🎉",
              xp: "+500 XP",
              image: imageDataHelper("unilend"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
          ],
        },
      },
      {
        key: "Help",
        label: "Help",
        innerContent: {
          queries: [
            {
              key: 1,
              question:
                "What is Uniswap Protocol?",
              answer:
                "The Uniswap Protocol is an open-source protocol for providing liquidity and trading ERC20 tokens on Ethereum. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for safe, accessible, and efficient exchange activity. The protocol is non-upgradable and designed to be censorship resistant.",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: false,
              isDownVoted: false,
            },
            {
              key: 2,
              question:
                "How do I use the Uniswap Protocol?",
              answer:
                "To create a new liquidity pool, provide liquidity, swap tokens, or vote on governance proposals, head over to the Uniswap Interface and connect a Web3 wallet. Remember, each transaction on Ethereum costs Ether (ETH).",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: true,
              isDownVoted: false,
            },
            {
              key: 3,
              question:
                "How does Uniswap Protocol work?",
              answer:
                "Uniswap is an automated market maker. In practical terms, it is a collection of smart contracts that define a standard way to create liquidity pools, provide liquidity, and swap assets.",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: true,
              isDownVoted: false,
            },
          ],
        },
      },
    ],
  },
  tutorial: {
    steps: [
      // {
      //   id: 1,
      //   step: "Step 1",
      //   heading: "Heading the step",
      //   info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      //   icon: (
      //     <CaretUpOutlined
      //       style={{
      //         position: "absolute",
      //         top: '-41%',
      //         right: '204%',
      //         color: "white",
      //         fontSize: "4rem",
      //       }}
      //     />
      //   ),
      //   cardStyles: {
      //     border: '0px',
      //     position: 'relative',
      //     borderRadius: '0.75rem',
      //     width: '24vw',
      //     /* top: 28%; */
      //     right: '136%',
      //   },
      //   highlightStyles: {
      //     background: "transparent",
      //     border: "7px solid #D9D9D9",
      //     borderRadius: "5px",
      //     opacity: "40%",
      //     position: "absolute",
      //     height: "10px",
      //     width: "60px",
      //     top: '-56%',
      //     right: '200%',
      //     boxShadow: "0 0 0 10px rgba(217, 217, 217, .2)",
      //     padding: ".9rem 2rem",
      //   },
      // },
      {
        id: 1,
        step: "Step 1",
        heading: "Connect your web3 wallet",
        info: "A non-custodial web3 wallet serves as a gateway to use dApps. It is your web3 identity, pro tip: never share your private keys.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "43%",
              bottom: "29%",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "12%",
          top: "37px",
          borderRadius: ".75rem",
          width: "24vw",
        },
        highlightStyles: {
          background: "transparent",
          border: "25px solid #D9D9D9",
          borderRadius: "15px",
          opacity: "40%",
          position: "relative",
          height: "10px",
          width: "60px",
          // top: "115px",
          top: '-1rem',
          left: "-4%",
          boxShadow: "0 0 0 30px rgba(217, 217, 217, .2)",
          padding: "9.65rem 14.5rem",
        },
      },
      {
        id: 2,
        step: "Step 2",
        heading: "Select primary token",
        info: "A token that you want to give up for another token.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "-8%",
              top: "29%",
              color: "white",
              fontSize: "4rem",
              transform: 'rotate(90deg)',
            }}
          />
        ),

        cardStyles: {
          border: 0,
          position: "relative",
          left: "-105%",
          // top: "120px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 3,
        step: "Step 3",
        heading: "Token you want",
        info: "Select the token that you want against the primary token. ",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "-8%",
              top: "75%",
              color: "white",
              fontSize: "4rem",
              transform: 'rotate(90deg)',

            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "-105%",
          top: '5rem',
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 4,
        step: "Step 4",
        heading: "Check the Paperwork",
        info: "Expected tokens show the number of tokens your wallet will receive after a successful swap.Price Impact is the change in token price directly caused by your trade, make sure to not move the market. Network fee is also known as gas fees. It’s the amount of fees you pay for your transaction success.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "97%",
              top: "95%",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "17%",
          top: "15.5rem",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 5,
        step: "Step 5",
        heading: "Magical transformation of tokens  ",
        info: "After you click on swap, the primary token gets converted to the token you want. Don’t forget to confirm the transaction on your connected wallet.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "-17%",
              top: "121%",
              color: "white",
              fontSize: "4rem",
              transform: 'rotate(90deg)',
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "-113%",
          top: "10rem",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 6,
        step: "Step 6",
        heading: "Check Transaction",
        info: "This modal gives you the information about the state of your wallet at any given moment, including Balance history and other settings",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              right: "-127%",
              top: "123%",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "159%",
          top: "19.5rem",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 7,
        step: "Step 7",
        heading: "Swap History",
        info: "This space shows all your successful and pending transactions. Clicking on any transaction will take you to a scanner that shows detailed status of the swap. ",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "164%",
              top: "-28%",
              color: "white",
              fontSize: "4rem",
              transform: 'rotate(90deg)'
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "68%",
          top: "-4rem",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
    ],
  },
};
