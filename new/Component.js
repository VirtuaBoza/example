import React from "react";
import { observer } from "mobx-react";
import { ServiceContext } from "./Service";
import { DataStoreContext } from "./DataStore";
import { ConfigStoreContext } from "./ConfigStore";
import withContext from "./withContext";

/**
 * This is a component. It re-renders on changes to the global stores
 * because it is wrapped in the `observer` HOC.
 * It may have it's own "config" object passed in
 * via props and/or rely on other configStore values.
 * It may also manipulate global store values.
 */
class Component extends React.Component {
  componentDidMount() {
    const { service } = this.props;
    service.fetchData();
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
    const {
      config: { reloadEnabled },
      dataStore: { data, counter },
      configStore: { darkMode },
      service,
    } = this.props;

    return (
      <>
        {service && <div>service is defined</div>}
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

export default withContext({
  service: ServiceContext,
  dataStore: DataStoreContext,
  configStore: ConfigStoreContext,
})(observer(Component));
