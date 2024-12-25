import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation(); // Correct variable name

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) {
        setMessages([]); // Clear messages when no conversation is selected
        return; // Exit early if there's no selected conversation
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/messages/${selectedConversation._id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setMessages(data); // Update the messages for the selected conversation
      } catch (error) {
        toast.error(error.message || "An error occurred while fetching messages");
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]); // Fetch messages when selectedConversation changes

  return { messages, loading };
};

export default useGetMessages;
 


// import { useEffect, useState } from "react";
// import useConversation from "../zustand/useConversation";
// import toast from "react-hot-toast";

// const useGetMessages = () => {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversations } = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!selectedConversations?._id) {
//         return;  // Return early if there's no selected conversation ID
//       }

//       setLoading(true);
//       try {
//         const res = await fetch(`/api/messages/${selectedConversations._id}`);
//         const data = await res.json();
//         if (data.error) throw new Error(data.error);
//         setMessages(data);
//       } catch (error) {
//         toast.error(error.message);  // Use error.message instead of error.messages
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMessages();
//   }, [selectedConversations?._id, setMessages]);  // Dependency array

//   return { messages, loading };
// };

// export default useGetMessages;




// import { useEffect, useState } from "react"
// import useConversation from "../zustand/useConversation";
// import toast from "react-hot-toast";


// const useGetMessages = () => {
//   const [loading, setLoading] = useState(false);
//   const {messages, setMessages, selectedConversations} = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch(`/api/messages/${selectedConversations._id}`);
//             const data = await res.json();
//             if(data.error) throw new Error(data.error)
//             setMessages(data);
//         }catch(error) {
//             toast.error(error.messages)
//         }finally{
//             setLoading(false);
//         }
//     }

//     if(selectedConversations._id)getMessages();

//     }, [selectedConversations?._id, setMessages])
//     return {messages, loading}
// }

// export default useGetMessages
