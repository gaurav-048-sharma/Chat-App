const MessageSkeleton = () => {
  return (
    <>
      {/* Left Side - Incoming Message */}
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div> {/* Avatar */}
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div> {/* Text line 1 */}
          <div className="skeleton h-4 w-32"></div> {/* Text line 2 (shorter) */}
        </div>
      </div>

      {/* Right Side - Outgoing Message */}
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div> {/* Text line 1 */}
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div> {/* Avatar */}
      </div>
    </>
  );
};

export default MessageSkeleton;

