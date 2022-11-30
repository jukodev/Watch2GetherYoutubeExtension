document.querySelector("#hagebuddne").addEventListener("click", () => {
		if(!document.querySelector("#token").value || !document.querySelector("#namensdiebstahl").value){
			setTimeout(() => shake(), 0);
			return;
		}
		chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
		var active = tabs[0];
		let token = document.querySelector("#token").value;
		let username = document.querySelector("#namensdiebstahl").value;
		setTimeout(() => spin(), 0); 
		localStorage.setItem("token", token);
		localStorage.setItem("username", username);
		chrome.tabs.sendMessage(active.id, {
			command: token + ":" + username,
		});
	});
});

function spinBot() {
	document.querySelector("#buddnewrapper").classList.add("obama");
	setTimeout(() => {
		document.querySelector("#buddnewrapper").classList.remove("obama");
	},800);
}
function shakeItOff() {
	document.querySelector("#buddnewrapper").classList.add("shakeitoff");
	setTimeout(() => {
		document.querySelector("#buddnewrapper").classList.remove("shakeitoff");
	},800);
}

Function.prototype.callAgainOnlyAfter = function(wait) {
	let nextCallAllowed = 0,
		debouncedFunc = this;
 
	function debounceCore() {
	   let now = Date.now();
	   if (now > nextCallAllowed) {
		  debouncedFunc.apply(this, arguments);
	   }
	   nextCallAllowed = now + wait;
	}
	debounceCore.forceNext = function() {
	   nextCallAllowed = 0;
	}
	return debounceCore;
 };

  const spin = spinBot.callAgainOnlyAfter(800);
  const shake = shakeItOff.callAgainOnlyAfter(800);

let token = localStorage.getItem("token");
let username = localStorage.getItem("username");
if (token) {
	document.querySelector("#token").value = token;
}
if (username) {
	document.querySelector("#namensdiebstahl").value = username;
}
