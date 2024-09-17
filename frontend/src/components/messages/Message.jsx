

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"/>
        </div>
      </div>
       <div className={`chat-bubble text-white bg-blue-500`}> 
          Hi! What is uupp?
       </div>
       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12.42</div>

    </div>
  )
}

export default Message
