
// to fetch comments
fetch("http://localhost/api/comments")
  .then(res => res.json())
  .then(data => {
    document.getElementById("comments").innerHTML = data.map(c => `<p>${c.text}</p>`).join("");
  });
