setTimeout(() => {
	const hook = document.querySelector("#owner");
	const button = document.createElement("button");

	button.innerHTML = "Auf Insiflix ansehen";
	button.id = "insi-button";
	if (hook) {
		hook.appendChild(button);
		document.querySelector("#insi-button").addEventListener("click", () => {
			const url = window.location.href;
			window.location = `https://insiflix.com/youtuberedirect?url=${url}`;
		});
	}
}, 1000);
