PROJECTS = [
  {
    "title": "2048",
    "link": "https://gitlab.etude.cy-tech.fr/magic/2048",
    "image-url": "https://gitlab.etude.cy-tech.fr/magic/2048/-/raw/master/2048.gif",
    "tags": ["game", "c", "sdl", "ai", "minesweeper"]
  },
  {
    "title": "facial recognition",
    "link": "https://gitlab.etude.cy-tech.fr/magic/projet-s2",
    "image-url": "https://gitlab.etude.cy-tech.fr/magic/projet-s2/-/raw/main/avg_image.png",
    "tags": ["program", "ai", "facial", "recognition", "java"]
  },
  {
    "title": "Minesweeper",
    "link": "https://github.com/LAMagicx/Minesweeper",
    "image-url": "https://github.com/LAMagicx/Minesweeper/raw/main/minesweeper.gif?raw=true",
    "tags": ["game", "c", "ai", "ncurses", "minesweeper"]
  },
  {
    "title": "Wordle",
    "link": "https://github.com/LAMagicx/WordleSolver",
    "image-url": "https://github.com/LAMagicx/WordleSolver/raw/main/game.png?raw=true",
    "tags": ["python", "wordle", "script"]
  },
  {
    "title": "Theme Switcher",
    "link": "https://github.com/LAMagicx/theme-switcher",
    "image-url": "https://github.com/LAMagicx/theme-switcher/raw/master/switcher.gif?raw=true",
    "tags": ["script", "python", "alacritty", "vim", "color", "colour", "theme", "scheme"]
  },
  {
    "title": "Snow Store",
    "link": "https://github.com/LAMagicx/SnowSite",
    "image-url": "https://github.com/LAMagicx/SnowSite/raw/main/index.png?raw=true",
    "tags": ["website", "html", "js", "css", "php"]
  },
  {
    "title": "L-system",
    "link": "https://gitlab.etude.cy-tech.fr/magic/L-system",
    "image-url": "https://gitlab.etude.cy-tech.fr/magic/L-system/-/raw/master/Screenshots/cherry_blossom.png",
    "tags": ["program", "python", "pygame", "generative", "l-system"]
  }
];

function createElement(type, attributes) {
  var element = document.createElement(type);
  for (var key in attributes) {
    if (key == "class") {
      element.classList.add.apply(element.classList, attributes[key]); // add all classes at once
    } else {
      element[key] = attributes[key];
    }
  }
  return element;
}

function gotolink(ele) {
  url = ele.id;
  window.open(url, '_blank').focus();
}

function createCards(DATA) {
  let cards = document.getElementById("cards");
  cards.innerHTML = "";
  for (ele of DATA){
    let title = ele["title"];
    let link = ele["link"];
    let url = ele["image-url"];
    let tags = ele["tags"];
    let classes = tags.concat(["card"]);
    let c = createElement("div", {"class":classes, "onclick":"doLink(this)"});
    let cc = createElement("div", {"class": ["container"]})
    let i = createElement("img", {"src":url,"id":link});
    i.setAttribute("onclick", "gotolink(this)");
    let d = createElement("div", {});
    let h = createElement("h5", {});
    h.innerText = title;
    d.appendChild(h)
    cc.appendChild(d);
    cc.appendChild(i);
    c.appendChild(cc);
    cards.appendChild(c)
  }
}

function onLoad() {
  createCards(PROJECTS);
  
}
