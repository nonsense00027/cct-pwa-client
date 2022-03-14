import React from "react";

function NotificationItem({ date, message, seen }) {
  return (
    <div className="py-4 border-b">
      <p className={`text-sm ${seen && "opacity-70"}`}>{message}</p>
      <p
        className={`text-xs opacity-60 ${
          !seen && "text-blue-500 opacity-100"
        } font-semibold mt-2`}
      >
        {date}
      </p>
    </div>
  );
}

export default NotificationItem;
