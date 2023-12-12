

document.getElementById("good-day").addEventListener("click", function() {
	alert("У вас сегодня будет замечательный день!")
});

const send_messageBtn = document.querySelector("#send-message");

send_messageBtn.addEventListener("click", () => {
	alert("Сообщение отправлено");
	send_messageBtn.classList.toggle("active")

})