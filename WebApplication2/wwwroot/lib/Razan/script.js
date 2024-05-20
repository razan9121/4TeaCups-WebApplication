window.onload = function () {
  const container = document.querySelector(".greet");

  function updateTime() {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;

    let greeting, additionalMessage;

    if (hours >= 5 && hours < 12) {
      greeting = "Good morning!";
      additionalMessage = "Have a great start to your day!";
    } else if (hours >= 12 && hours < 18) {
      greeting = "Good afternoon!";
      additionalMessage = "Enjoy your afternoon!";
    } else if (hours >= 18 && hours < 22) {
      greeting = "Good evening!";
      additionalMessage = "Wishing you a pleasant evening!";
    } else {
      greeting = "Good night!";
      additionalMessage = "Sweet dreams and rest well!";
    }

    container.innerHTML = `
  <p class="time">${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}</p>
  <p class="say">${greeting}</p>
  <p>${additionalMessage}</p>
  `;
  }

  updateTime();
  setInterval(updateTime, 1000);
}
const socialLinks = document.querySelectorAll('.social a');
socialLinks.forEach(link => {
  link.onclick = function () {
    window.open(this.href, '_blank');
    return false;
  }
});