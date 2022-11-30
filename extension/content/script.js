let token = localStorage.getItem("token");
let username = localStorage.getItem("username");

chrome.runtime.onMessage.addListener((msg, sender, response) => {
	token = msg.command.split(":")[0];
	username = msg.command.split(":")[1];
	chrome.storage.sync.set({ username });
	chrome.storage.sync.set({ arsch: token });
});

setTimeout(() => {
	const hook = document.querySelector("#owner");
	const w2gBuddne = document.createElement("button");
	const glogge = document.querySelector("#notification-preference-button");
	toggleMargins();

	function callback(mutationList) {
		mutationList.forEach(() => {
			toggleMargins();
		});
	}

	const observer = new MutationObserver(callback);
	if (glogge) {
		observer.observe(glogge, {
			attributeFilter: ["hidden"],
			attributeOldValue: true,
			subtree: true,
		});
	}
	function toggleMargins() {
		if (glogge) {
			!glogge.hasAttribute("hidden")
				? (w2gBuddne.style.marginLeft = "0px")
				: (w2gBuddne.style.marginLeft = "0.8rem");
		}
	}

	w2gBuddne.innerHTML = "W2G";
	w2gBuddne.id = "w2gBuddne";
	if (hook) {
		hook.appendChild(w2gBuddne);
		document.querySelector("#w2gBuddne").addEventListener("click", () => {
			fetch(`https://miimii-api.obama-prism.com/w2g`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					url: window.location.href,
					username,
				}),
			}).then(res =>
				res
					.json()
					.then(res => {
						window.open(res.data.url, "_blank").focus();
					})
					.catch(error => {
						88;
						console.log(error);
					})
			);
		});
	}
}, 1000);
