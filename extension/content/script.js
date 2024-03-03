setTimeout(() => {
	const hook = document.querySelector("#owner");
	const button = document.createElement("a");

	button.innerHTML = "Auf Insiflix ansehen";
	button.id = "insi-button";
	const url = window.location.href;
	button.href = `https://insiflix.com/youtuberedirect?url=${url}`;
	if (hook) {
		hook.appendChild(button);
	}
}, 1000);
