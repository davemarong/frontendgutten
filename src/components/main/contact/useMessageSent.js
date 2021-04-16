import { useState } from "react";
export default function useMessageSent() {
  const [messageSent, setMessageSent] = useState();
  const handleSendMessage = () => {
    setMessageSent(
      "Your message is sent! I will get back to you as soon as I can"
    );
  };
  return { handleSendMessage, messageSent };
}
