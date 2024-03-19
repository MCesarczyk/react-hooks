import { useRef, useState } from "react";
import "./OnClickOutside.css";
import { useOnClickOutside } from "./useOnClickOutside";

export const OnClickOutside = () => {
  const squareRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const flashMessage = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 1_000);
  };

  useOnClickOutside(squareRef, flashMessage);

  return (
    <>
      <div ref={squareRef} className="square">
        <h1>click outside</h1>
      </div>
      {visible && <p className="message">clicked outside!</p>}
    </>
  );
};
