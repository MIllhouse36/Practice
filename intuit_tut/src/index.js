const tabs = document.querySelectorAll("[data-tab-target]");
const tabitems = document.querySelectorAll(".tab__item");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabitems.forEach((tabItem) => {
      tabItem.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
