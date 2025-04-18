
// to fetch comments
fetch("https://blogmine1234.netlify.app/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("comments").innerHTML = data.map(c => `<p>${c.text}</p>`).join("");
  });
