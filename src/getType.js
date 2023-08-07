export const getType = () => {
  const activeTab = document.querySelector(".active");
  return activeTab.id;
};
