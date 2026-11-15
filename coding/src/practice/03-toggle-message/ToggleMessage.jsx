import { useState } from "react";

function ToggleMessage() {
  const [reveal, setReveal] = useState(false);
  return (
    <div>
      <h1>Toggle Message</h1>
      <button onClick={() => setReveal(!reveal)}>
        {reveal ? "Hide" : "Tap to reveal"}
      </button>
      {reveal && <p> your message</p>}
    </div>
  );
}

export default ToggleMessage;
