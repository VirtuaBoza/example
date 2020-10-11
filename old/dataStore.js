import { observable } from "mobx";

/**
 * This is a mutable observable store object which is created and exported (singleton)
 */
const dataStore = observable({
  data: [],
  counter: 0,
});

export default dataStore;
