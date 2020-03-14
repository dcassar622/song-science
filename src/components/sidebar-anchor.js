export const setupAnchorListener = (iconId, pageElementId) => {
  // setup sidebar anchor listeners
  const icon = document.getElementById(iconId);
  const element = document.getElementById(pageElementId);
  console.log("setting up", icon, element);
  icon.addEventListener("click", () => {
    let elementPosition = element.offsetTop;
    window.scrollTo(0, elementPosition);
  });
};
