import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(); // For auto-scrolling to the latest message

  useEffect(() => {
    // Scroll to the last message whenever the messages array changes
    if (messages?.length > 0) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* Show skeleton loaders while loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Fallback message for empty conversation */}
      {!loading && messages?.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {/* Render messages */}
      {!loading &&
        messages?.length > 0 &&
        messages.map((message, idx) => (
          <div
            key={message._id}
            ref={idx === messages.length - 1 ? lastMessageRef : null} // Ref for the last message
          >
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;



// import { useEffect, useRef } from "react";
// import useGetMessages from "../../hooks/useGetMessages"
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message"

// const Messages = () => {
//   // const {messages, loading}=useGetMessages();
//   // const lastMessageRef = useRef();

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
//   //   }, 100)
//   // }, [messages])

//   const { messages, loading } = useGetMessages();
//   const lastMessageRef = useRef(); // For auto-scrolling to the latest message

//   useEffect(() => {
//     // Scroll to the last message whenever the messages array changes
//     if (messages.length > 0) {
//       setTimeout(() => {
//         lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     }
//   }, [messages]);

//   return (

   
//     <div className="px-4 flex-1 overflow-auto">
//       {/* If loading, show skeleton loaders */}
//       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

//       {/* If no messages and not loading, show a fallback message */}
//       {!loading && messages.length === 0 && (
//         <p className="text-center">Send a message to start the conversation</p>
//       )}

//       {/* If there are messages, render them */}
//       {!loading &&
//         messages.length > 0 &&
//         messages.map((message, idx) => (
//           <div
//             key={message._id}
//             ref={idx === messages.length - 1 ? lastMessageRef : null} // Ref for the last message
//           >
//             <Message message={message} />
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Messages





 // <div className="px-4 flex-1 overflow-auto">
    //   {!loading && 
    //   messages.length >0 &&
    //    messages.map((message) =>  (
    //     <div key={message._id}
    //         ref={lastMessageRef}
    //       >
    //       <Message message={message} />
    //     </div>
    //    ) )}
    //   {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/> )}
    //   {!loading && messages.length === 0 && (<p className="text-center ">Send a message to start the conversation</p>)}
    // </div>
