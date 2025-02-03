import { Children, cloneElement } from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="row" style={{display:'flex'}}>
      {/* {children} */}

      {Children.map(children, (child, index) => {
        // return child
        return cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

export default function LiveOrders() {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "50px"
      }}
    >
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>Papa John</p>
      </Row>
      <div>{(()=>true)()}</div> 
    </div>
  );
}
