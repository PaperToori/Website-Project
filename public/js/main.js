var imgbank = [
  {
    id: "GenshinTest",
    tag: "genshin",
  },
  {
    id: "bank",
    tag: "rob da?",
  },
  {
    id: "hello",
    tag: "hi",
  },
  {
    id: "world",
    tag: "bonjour",
  },
  {
    id: "hi",
    tag: "hello",
  },
];

function search(query) {
  for (let i = 0; i < imgbank.length; i++) {
    const item = imgbank[i];
    if (item.tag == query) {
      var img = document.createElement("img");
      img.src = "/public/images/" + item.id + ".png";
      document.querySelector("body").appendChild(img);
    }
  }
}
