import { observable } from "mobx";

/**
 * This is a mutable observable store object which is created and exported (singleton)
 */
const dataStore = observable({
  data: [],
  otherData: "",
});

export default dataStore;
