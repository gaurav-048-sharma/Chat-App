import { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        if (!message.trim()) return;  // Prevent sending empty messages

        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }), // Ensure you're sending the right structure
            });

            // Handle response based on status
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to send message");
            }

            const data = await res.json();
            setMessages([...messages, data]);  // Update messages state

        } catch (error) {
            toast.error(error.message || "Something went wrong");
        } finally {
            setLoading(false);  // Set loading to false regardless of success/failure
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;



// import { useState } from "react"
// import useConversation from "../zustand/useConversation.js"
// // import useConversation from "../../zustand/useConversation";
// import toast from "react-hot-toast";

// const useSendMessage = () => {
//     const [loading, setLoading] = useState();
//     const {messages, setMessages, selectedConversation} = useConversation();

//     const sendMessage = async (message) => {
//         setLoading(true);
//         try {
//             const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(message),
//             });
//             const data = await res.json();
//             if(data.error) {
//                 throw new Error(data.error)
//             }
//             setMessages([...messages, data]);
//         } catch (error) {
//             toast.error(error.message)
//         } finally {
//             setLoading(false);
//         }
//     };
//     return { sendMessage, loading }

// }

// export default useSendMessage
