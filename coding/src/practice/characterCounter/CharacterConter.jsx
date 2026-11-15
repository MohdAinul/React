import React, { useState } from "react";

const CharacterConter = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        maxLength={20}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>live Count: {text.length}/20</h2>
    </div>
  );
};

export default CharacterConter;
