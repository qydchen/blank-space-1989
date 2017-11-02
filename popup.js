function makeSentence(array) {
  let string = "";
  array.forEach((word, index) => {
    if (index !== array.length - 1) {
      string = string.concat(word + ", ");
    } else {
      string = string.concat("and " + word);
    }
  });
  return string;
}

// function commonValues(arr1, arr2) {
//   return arr1.filter(function(value) {
//     return arr2.indexOf(value) > -1;
//   });
// }

// let mySkills = [
//   "Javascript",
//   "Ruby on Rails",
//   "Ruby",
//   "Cascading Style Sheet (CSS)",
//   "React.js",
//   "React/Redux",
//   "HTML",
//   "SCSS",
//   "SASS",
//   "SQL",
//   "React Native",
//   "Python",
//   "TDD"
// ];

const createMessage = (founder, title) => {

  return (
    "Hello " +
    founder +
    "," +
    "\nI'm a web developer with experience in Javascript, Ruby, and Python, and a background in investment management and equity research. I am interested in the " +
    title +
    " position. My skills across the full stack, including a variety of languages and frameworks that are displayed in my most recent project, SafeHavn. The single-page web app is built using React-Redux front end, and a Rails backend. My project emphasizes an interactive experience, particularly when implementing the Google Maps API and designing home show pages. \nI desire to find a position in which I can add new technologies to my toolbox and refine my skills. I invite you to visit my LinkedIn, portfolio sites and my github (https://github.com/qydchen). Do reach out at 917 957 0711. Thank you for your time and I look forward to hearing from your team. \nBest,\nDavid Chen"
  );
};

const apply = index => {
  if ($(".add-note-button > a.g-button.blue:visible").length == 0) {
    $(".browse_startups_table_row:visible")
      .first()
      .click();
  }
  $(".add-note-button > a.g-button.blue:visible")
    .first()
    .click();
  let founder = $("textarea.interested-note")[index].placeholder.split(" ")[4];
  let title = $("div.title a")[index].text;
  let company = $("a.startup-link")[index].text;
  let jobTags = $.trim($("div.tags")[index].textContent).split(" · ");
  $(".interested-note:visible")
    .first()
    .val(createMessage(founder, title, company, jobTags));
  $("a.g-button.blue.interested-with-note-button:visible")
    .first()
    .click();

  $(".js-done").click();
  $("html, body").animate({
    scrollTop: $(document).height() - $(window).height()
  });
  index += 1;
  setTimeout(() => apply(index), 2000);
};

const $button = $("<input>");
$button.attr({
  type: "button",
  id: "applyAll",
  value: "Apply to All The Jobs!!!"
});
$button.addClass("g-button blue interested-button");
$button.on("click", () => {
  apply(0);
});

const insertApplyButton = () => {
  let oldButton = $("a.js-try-quiz-button");
  if (oldButton.length > 0) {
    return oldButton.replaceWith($button);
  } else {
    console.log("retrying");
    setTimeout(insertApplyButton, 500);
  }
};

let currentPage = window.location.href;
if (currentPage === "https://angel.co/jobs") {
  insertApplyButton();
}
