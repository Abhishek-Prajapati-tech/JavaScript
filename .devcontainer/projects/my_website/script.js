const text = ["Frontend Developer", "Learner", "Coder"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    document.getElementById("typewriter").innerHTML = current;

    if (j === text[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 80 : 150);
  }
}

type();
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
window.onscroll = function () {
  let scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};
function validateForm() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Please enter your name");
    return false;
  }
  return true;
}
