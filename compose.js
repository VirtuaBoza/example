export default function compose(...funcs) {
  return funcs.reduce((acc, cur) => (...args) => acc(cur(...args)));
}
