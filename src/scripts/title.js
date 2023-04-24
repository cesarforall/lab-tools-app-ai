const pageData = {
  title: "My Dynamic Page"
};

const setPageTitle = () => {
  document.title = pageData.title;
};

window.onload = setPageTitle;