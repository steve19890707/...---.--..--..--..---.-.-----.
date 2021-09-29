const decode = (value) => {
  let combiner = "%";
  value.reverse().map((v) => (combiner += v));
  return combiner;
};
const d = ["4", "A", "%", "E", "A", "%", "5", "E"];
const w = ["C", "9", "%", "6", "E"];
const a = ["0", "B", "%", "D", "A"];
const s = ["8", "E", "%", "3", "8"];
const wsad = `${decode(w)}${decode(s)}${decode(a)}${decode(d)}`;

export const decodeX = () => {
  return decodeURIComponent(`A${wsad}`);
};
export const decodeS = () => {
  return decodeURIComponent(`a${wsad}`);
};
