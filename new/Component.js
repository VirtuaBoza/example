import React from "react";
import { withService } from "./ServiceContext";
import { observer } from "mobx-react";
import { withDataStore } from "./dataStore";
import { withConfigStore } from "./configStore";
import compose from "../compose";

/**
 * This is a component. It re-renders on changes to the global stores
 * because it is wrapped in the `observer` HOC.
 * It may have it's own "config" object passed in
 * via props and/or rely on other configStore values.
 * It may also manipulate global store values.
 */
class Component extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { service } = this.props;
    service?.fetchData();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  handleIncrementClick = () => {
    const { dataStore } = this.props;
    dataStore.incrementCounter();
  };

  handleReloadClick = () => {
    const { service } = this.props;
    service.fetchData();
  };

  render() {
    console.log("rendered with props", this.props);
    const {
      config: { reloadEnabled },
      dataStore: { data, counter },
      configStore: { darkMode },
    } = this.props;

    return (
      <>
        <div className={darkMode ? "dark" : "light"}>
          <button onClick={this.handleIncrementClick}>Increment</button>
          <div data-testid="count">{counter}</div>
          {reloadEnabled && (
            <button onClick={this.handleReloadClick}>Reload</button>
          )}
          {data.map((item) => (
            <div key={item.id} data-testid="item">
              {item.name}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default compose(
  withService,
  withConfigStore,
  withDataStore,
  observer
)(Component);
