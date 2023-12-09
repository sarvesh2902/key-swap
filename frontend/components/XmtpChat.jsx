import React, { useState } from "react";
//import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

function Chat({ client, messageHistory, conversation }) {
  const { primaryWallet } = client;
  const address = primaryWallet?.address;
  const [inputValue, setInputValue] = useState("");
  const [viewMode, setViewMode] = useState(false);

  if (!viewMode) {
    return (
      <button
        onClick={() => setViewMode(true)}
        className="rounded bg-blue-500 p-2 text-black hover:bg-blue-600"
      >
        Open Chat
      </button>
    );
  }

  // Function to handle sending a message
  const handleSend = async () => {
    if (inputValue) {
      await onSendMessage(inputValue);
      setInputValue("");
    }
  };

  // Function to handle sending a text message
  const onSendMessage = async (value) => {
    return conversation.send(value);
  };

  // MessageList component to render the list of messages

  const MessageList = ({ messages }) => {
    // Filter messages by unique id
    messages = messages.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
    );

    return (
      <ul className="messageList border-black-200 z-50 w-80 rounded-lg border  bg-black p-6 shadow-xl">
        {messages.map((message, index) => (
          <li
            key={message.id}
            className="messageItem mb-4 cursor-pointer rounded-lg p-2 last:mb-0 hover:bg-gray-100"
            title="Click to log this message to the console"
          >
            <strong className="mr-2">
              {message.senderAddress === address ? "You" : "You"}:
            </strong>
            <span className="text-gray-700">{message.content}</span>
            <span className="date ml-2 text-sm text-gray-500">
              {" "}
              ({message.sent.toLocaleTimeString()})
            </span>
            <span
              className="eyes ml-2 text-xl"
              onClick={() => console.log(message)}
            >
              👀
            </span>
          </li>
        ))}
      </ul>
    );
  };

  // Function to handle input change (keypress or change event)
  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      handleSend();
    } else {
      setInputValue(event.target.value);
    }
  };
  return (
    <div className="w-96 rounded-lg bg-gray-100 p-4 shadow-2xl">
      <div className="max-h-60 overflow-y-auto rounded-lg bg-black p-4 shadow-md">
        <MessageList messages={messageHistory} />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="flex-grow rounded-l-lg border p-2 focus:border-indigo-500 focus:outline-none"
          onKeyPress={handleInputChange}
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Type your text here..."
        />
        <button
          className="rounded-r-lg bg-indigo-500 px-6 py-2 text-black transition duration-150 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none active:bg-indigo-700"
          onClick={handleSend}
        >
          &#128073;
        </button>
      </div>
    </div>
  );
}

export default Chat;
