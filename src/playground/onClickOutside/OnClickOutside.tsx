import { useRef, useState } from "react";
import "./OnClickOutside.css";
import { useOnClickOutside } from "../../main/useOnClickOutside";

export const OnClickOutside = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const flashMessage = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 1_000);
  };

  useOnClickOutside(elementRef, flashMessage);

  return (
    <>
      <div ref={elementRef} className="square">
        <h1>click outside</h1>
      </div>
      {visible && <p className="message">clicked outside!</p>}
    </>
  );
};
