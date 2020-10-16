import React, { useContext } from "react";
import compose from "../compose";

/**
 * Takes a context map (ex. { configStore: ConfigStoreContext })
 * and returns a HOC which is supplied with props
 * with the map's keys and respective Context values.
 */
export default function withContext(contextMap) {
  return (component) =>
    compose(
      ...Object.entries(contextMap).map(([key, Context]) => {
        return (Component) => {
          return React.forwardRef((props, ref) => {
            const contextValue = useContext(Context);
            const contextProp = { [key]: contextValue };
            return <Component ref={ref} {...contextProp} {...props} />;
          });
        };
      })
    )(component);
}

// TS
// export default function withContext<
//   OuterProps = {},
//   ContextProps extends Record<string, any> = {}
// >(
//   contextMap: { [P in keyof ContextProps]: React.Context<ContextProps[P]> }
// ): (
//   component: ComponentType<OuterProps & ContextProps>
// ) => ComponentType<OuterProps> {
//   return (component) => {
//     return compose(
//       ...Object.entries(contextMap).map(([key, Context]) => {
//         return (Component) => {
//           return React.forwardRef((props, ref) => {
//             const contextValue = useContext(Context);
//             const contextProp = { [key]: contextValue };
//             return <Component ref={ref} {...contextProp} {...props} />;
//           });
//         };
//       })
//     )(component);
//   };
// }
