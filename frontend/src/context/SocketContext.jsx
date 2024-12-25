import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

// Create a context
export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:8080", {
        query: {
          userId: authUser._id,
        }
      }); // Initialize socket connection
      setSocket(socket);



      //socket.on is used to lsiten to the events, can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      })

      // newSocket.on("online-users", (users) => {
      //   setOnlineUsers(users); // Handle online users update
      // });

      return () => {
        socket.disconnect(); // Cleanup socket connection on unmount
      };
    } else {
      if (socket) {
        socket.disconnect();
        setSocket(null); // Clear socket state if the user logs out
      }
    }
  }, [authUser]); // Add `authUser` as a dependency

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};





// import { createContext, useEffect, useState } from "react"
// import { useAuthContext } from "./AuthContext";
// import io from 'socket.io-client'

// export const SocketContext = createContext
// export const SocketContextProvider = ({children}) => {
//     const [socket, setSocket] = useState(null);
//     const [onlineUsers, setOnlineUsers] = useState([])
//     const {authUser} = useAuthContext();

//     useEffect(() => {
//         if(authUser) {
//             const socket = io("http://localhost:8080");
//             setSocket(socket);

//             return () =>  socket.close();
            
//         } else {
//             if(socket) {
//                 socket.close();
//                 setSocket(null);
//             }
            
//         }
//     })
//     return (
//         <SocketContext.Provider value={{socket, onlineUsers}}>
//             {children}
//         </SocketContext.Provider>
//     )
// }