import { useCallback, useState } from "react";

const TestComponents = ({ title, desc = "dddd", image, price }) => {
  const [open, setOpen] = useState(false);
  const openCard = useCallback(() => setOpen(true), [open]);
  const closeCard = useCallback(() => setOpen(false), [open]);

  return (
    <>
      {open ? (
        <div className="Container">
          {!!image && <img src={image} className="App-logo" alt="logo" />}
          <div>{title}</div>
          <p className="description">{desc}</p>
          <div>{price}</div>
          <br />
          <button onClick={closeCard}>CLOSE</button>
        </div>
      ) : (
        <div onClick={openCard}>
          <img src={image} className="App-logo-small" alt="logo" />
          small description + image
        </div>
        // <button onClick={openCard}>OPEN</button>
      )}
    </>
  );
};

export default TestComponents;
