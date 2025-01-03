import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const {selectedConversation,setSelectedConversation }=useConversation();
  const iselected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
           ${iselected ? "bg-sky-500": ""}
        `}
           onClick={() => setSelectedConversation(conversation)}
        >
          
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            {/* Render a specific property, such as `fullName`, instead of the entire object */}
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-x1">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// const Conversation = ({conversation,lastIdx, emoji}) => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//             <div className="w-12 rounded-full">
//                 <img src={conversation.profilePic} alt="user avatar"/>
//             </div>
//         </div>
//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200">{conversation.fullname}</p>
//                 <span className="text-x1">{emoji}</span>
//             </div>
//         </div>
//       </div>

//       {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
//     </>
  
//   )
// }

// export default Conversation





// const Conversation = () => {
//     return (
//       <>
//         <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//               <div className="w-12 rounded-full">
//                   <img src="https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?rs=1&pid=ImgDetMain" alt="user avatar"/>
//               </div>
//           </div>
//           <div className="flex flex-col flex-1">
//               <div className="flex gap-3 justify-between">
//                   <p className="font-bold text-gray-200"> John doe</p>
//                   <span className="text-x1">❤️</span>
//               </div>
//           </div>
//         </div>
  
//         <div className="divider my-0 py-0 h-1"></div>
//       </>
    
//     )
//   }
  
//   export default Conversation
