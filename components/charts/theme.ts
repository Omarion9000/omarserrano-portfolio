export const C = {
  navy: "#12263F",
  navyMid: "#4F6D8F",
  navySoft: "#9AACC2",
  gold: "#A8834A",
  goldLight: "#C9A96E",
  slate: "#7A8696",
  grid: "#E7EAEF",
  axis: "#B7BFCA",
  text: "#556070",
  ink: "#0B1A2C",
};

export const grow = (active: boolean, delay = 0, origin = "bottom"): React.CSSProperties => ({
  transformBox: "fill-box",
  transformOrigin: origin,
  transform: active ? "scale(1)" : origin === "left" || origin === "right" ? "scaleX(0)" : "scaleY(0)",
  transition: `transform 0.8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
});

export const fade = (active: boolean, delay = 0): React.CSSProperties => ({
  opacity: active ? 1 : 0,
  transition: `opacity 0.5s ease ${delay}ms`,
});
