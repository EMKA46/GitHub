import React from "react";

const MessageItem = ({ sms, time }) => {
  return (
    <div style={styles.item}>
      {sms} ({time})
    </div>
  );
};

const styles = {
  item: {
    marginBottom: "5px",
    color: "red",
  },
};
export default MessageItem;
