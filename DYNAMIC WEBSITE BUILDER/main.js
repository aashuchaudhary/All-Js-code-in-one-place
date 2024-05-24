function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "k";
  }
  let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views .${monthsOld} months </p>
            </div>
        </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
createCard(
  "Introduction to Backend | Sigma Web Dev video #02 ",
  "CodewithHarry",
  778000,
  7,
  "31:04",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);
