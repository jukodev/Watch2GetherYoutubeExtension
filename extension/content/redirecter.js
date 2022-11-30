document.querySelector("#hagebuddne").addEventListener("click", () => {
	chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
		var active = tabs[0];
		let token = document.querySelector("#token").value;
		let username = document.querySelector("#namensdiebstahl").value;
		localStorage.setItem("token", token);
		localStorage.setItem("username", username);
		document.querySelector("#buddnewrapper").classList.toggle("obama");
		chrome.tabs.sendMessage(active.id, {
			command: token + ":" + username,
		});
	});
});

let token = localStorage.getItem("token");
let username = localStorage.getItem("username");
if (token) {
	document.querySelector("#token").value = token;
}
if (username) {
	document.querySelector("#namensdiebstahl").value = username;
}
