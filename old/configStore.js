import { observable } from "mobx";

/**
 * This is a mutable observable store object which is created and exported (singleton)
 */
const configStore = observable({
  provider: "ProviderOne",
  component: {
    reloadEnabled: true,
  },
  darkMode: false,
});

export default configStore;
