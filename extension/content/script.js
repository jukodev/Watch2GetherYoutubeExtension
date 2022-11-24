setTimeout(() => {
	let r = document.querySelector(":root");
	const hook = document.querySelector("#owner");
	const w2gBuddne = document.createElement("button");
	w2gBuddne.innerHTML = "W2G";
	w2gBuddne.id = "w2gBuddne";
	hook.appendChild(w2gBuddne);
	document.querySelector("#w2gBuddne").addEventListener("click", () => {
		console.log("jooo");
		fetch(`http://localhost:4000/rooms?url=${window.location.href}`);
	});
}, 500);
