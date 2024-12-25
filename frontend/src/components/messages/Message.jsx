import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation(); // Corrected typo
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic || "/path/to/default-avatar.png"} alt="Profile" /> {/* Fallback image */}
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;





// import { useAuthContext } from "../../context/AuthContext"
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";


// const Message = ({message}) => {
//   const {authUser} = useAuthContext();
//   const {selectedConverssation} = useConversation();
//   const fromeMe = message.senderId === authUser._id;
//   const chatClassName = fromeMe ? 'chat-end' : 'chat-start';
//   const formattedTime = extractTime(message.createdAt);
//   const profilePic = fromeMe ? authUser.profilePic : selectedConverssation?.profilePic;
//   const bubbleBgColor = fromeMe? 'bg-blue-500' : "";

//   return (
//     <div className={`chat ${chatClassName}`}>
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//             <img src={profilePic}/>
//         </div>
//       </div>
//        <div className={`chat-bubble text-white  ${bubbleBgColor}`}> 
//           {message.message}
//        </div>
//        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>

//     </div>
//   )
// }

// export default Message
