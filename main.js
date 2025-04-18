
// to fetch comments
fetch("http://192.168.1.11/api/comments")
  .then(res => res.json())
  .then(data => {
    document.getElementById("comments").innerHTML = data.map(c => `<p>${c.text}</p>`).join("");
  });
