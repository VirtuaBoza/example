import React, { useContext } from "react";
import compose from "../compose";

// takes a context map and returns a function which takes a component and returns a component
export default function withContext(contextMap) {
  return (WrappedComponent) =>
    compose(
      ...Object.entries(contextMap).map(([key, Context]) => {
        return (InnerComponent) => {
          return React.forwardRef((props, ref) => {
            const context = useContext(Context);
            const contextProp = { [key]: context };
            return <InnerComponent ref={ref} {...contextProp} {...props} />;
          });
        };
      })
    )(WrappedComponent);
}
