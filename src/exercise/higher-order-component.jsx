// HOC for cursor movement

import { useEffect, useState } from "react";

const HOC = (WrappedCompomnent) => {
  return (props) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedCompomnent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;

  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) return null;

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = HOC(PanelMouseLogger);
const PointMouseTracker = HOC(PointMouseLogger);

const HOCComponent = () => {
  return (
    <div className="App">
      <header className="Header">HOC Logger APP</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
};

export default HOCComponent;
