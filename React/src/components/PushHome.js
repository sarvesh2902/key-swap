import React, { useEffect, useState, useRef } from "react";
// import Chat from "./PushChat";
import  useEthersWalletClient  from "../hooks/useEthersWalletClient";
import WalletNotConnected from "./WalletNotConnected";
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";


//import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";





export default function Home({PEER_ADDRESS}) {

  const { data, isLoading } = useEthersWalletClient();

  //const PEER_ADDRESS = "0x6ea5CB879208496D27aCfc6319eCD3Dad31fd717";
  //const PEER_ADDRESS = "0x6e6D45D28eF482CC32aF178FeFD4a9eCD55b0eEc"
  const [messages, setMessages] = useState(null);
  const convRef = useRef(null);
  const clientRef = useRef(null);
  console.log(data)
  const { account } = data;
  const signer = data



  const isConnected = !!account;

  // useEffect(() => {
  //   if (primaryWallet && !signer) {
  //     getAndSetSigner();
  //   }
  // }, [primaryWallet]);

  // const [isOnNetwork, setIsOnNetwork] = useState(false);

  // Function to load the existing messages in a conversation
  // const newConversation = async function (xmtp_client, addressTo) {
  //   //Creates a new conversation with the address
  //   if (await xmtp_client?.canMessage(PEER_ADDRESS)) {
  //     const conversation = await xmtp_client.conversations.newConversation(
  //       addressTo
  //     );
  //     convRef.current = conversation;
  //     //Loads the messages of the conversation
  //     const messages = await conversation.messages();
  //     setMessages(messages);
  //   } else {
  //     console.log("cant message because is not on the network.");
  //     //cant message because is not on the network.
  //   }
  // };

  // Function to initialize the XMTP client
  // const initXmtp = async function () {
  //   // Create the XMTP client
  //   const xmtp = await Client.create(signer, { env: "production" });
  //   //Create or load conversation with Gm bot
  //   newConversation(xmtp, PEER_ADDRESS);
  //   // Set the XMTP client in state for later use
  //   setIsOnNetwork(!!xmtp.address);
  //   //Set the client in the ref
  //   clientRef.current = xmtp;
  // };

  // useEffect(() => {
  //   if (isOnNetwork && convRef.current) {
  //     // Function to stream new messages in the conversation
  //     const streamMessages = async () => {
  //       const newStream = await convRef.current.streamMessages();
  //       for await (const msg of newStream) {
  //         const exists = messages.find((m) => m.id === msg.id);
  //         if (!exists) {
  //           setMessages((prevMessages) => {
  //             const msgsnew = [...prevMessages, msg];
  //             return msgsnew;
  //           });
  //         }
  //       }
  //     };
  //     streamMessages();
  //   }
  // }, [messages, isOnNetwork]);

  useEffect(() =>{
   const fetchHistory = async() =>{
    const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });

    const aliceChatHistoryWithBob = await userAlice.chat.history(PEER_ADDRESS);

    console.log(aliceChatHistoryWithBob);
   }

   fetchHistory();
  },[signer]);

  return (
    <div >
      {/* Display the ConnectWallet component if not connected */}
      {!isConnected && (
        <div >
          <WalletNotConnected/>
          { /*<DynamicWidget />*/}
        </div>
      )}

      {/* Render the Chat component if connected, initialized, and messages exist */}
      {/* {isConnected && messages && (
        <div className="text-black">
        <Chat
          client={PEER_ADDRESS}
          messageHistory={messages}
          signer={signer}
        />
        </div>
      )} */}
    </div>
  );
}
