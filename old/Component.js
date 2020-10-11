import Service from "./Service";
import configStore from "./configStore";
import dataStore from "./dataStore";
import { observer } from "mobx-react";

const service = new Service();

/**
 * This is a component. It re-renders on changes to the global stores
 * because it is wrapped in the `observer` HOC.
 * It may have it's own "config" object passed in
 * via props and/or rely on other configStore values.
 */
class Component extends React.Component {
  componentDidMount() {
    service.fetchData();
  }

  handleReloadClick = () => {
    service.fetchData();
  };

  render() {
    const {
      config: { reloadEnabled },
    } = this.props;
    const { data } = dataStore;
    const { darkMode } = configStore;
    return (
      <div className={darkMode ? "dark" : "light"}>
        {reloadEnabled && (
          <button onClick={this.handleReloadClick}>Reload</button>
        )}
        {data.map((item) => (
          <div key={item.id} data-testid="item">
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default observer(Component);
