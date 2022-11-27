setTimeout(() => {
	let r = document.querySelector(":root");
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
	  if(glogge){
		  observer.observe(glogge, {
			attributeFilter: [ "hidden"],
			attributeOldValue: true,
			subtree: true
		  });
	  }
	function toggleMargins() {
		if(glogge){
			!glogge.hasAttribute("hidden") ? w2gBuddne.style.marginLeft = "0px" : w2gBuddne.style.marginLeft = "0.8rem";
		}
	}

	w2gBuddne.innerHTML = "W2G";
	w2gBuddne.id = "w2gBuddne";
	if(hook){
		hook.appendChild(w2gBuddne);
	}
	document.querySelector("#w2gBuddne").addEventListener("click", () => {
		// console.log("Photoshop war ein Joke ich war da nicht mal hellwach Scheiß auf den Benz stepp in einem nagelneuen R8 woah Du hast hundert Likes mehr? Ich hab hundert Nike-Air Check mal dein Style dein Outfit ist nur ein Hundescheiß wert Ich habe so viele Sneaks Tret einmal drauf wir haben unnormal Beef Flow wie ein G Und die billigsten Sneaker in meinem Besitz sind dein Monatsverdienst Nikes im Haus breit gebaut Digga nenn mich Hercules Kid Bruder du wärst gerne wie ich Streck die Hand gen Himmel dass du Sterne erwischt Einen auf dem Benz Digga drei auf mein Hemd Ich hab Style und ne Gang du bist scheiße und wack Dicka meine Reime perfekt Bleibe der Chef Scheine und Cash Kauf mir kurz eben nen iPhone und Mac Dieser Mofucker macht noch Kleingeld mit Tracks Ja Bruder du bist neidisch und jetzt? Mir egal in welcher Scheiße du steckst Brauche keine Warnschüsse Bin ein so präziser Scharfschütze treffe deine Zahnlücke Ein falsches Wort ich komm mit Krappi dann und bang dich So fucking famous selbst der Taxifahrer kennt mich Everyday Saturday Everyday Saturday Everyday Saturday Everyday everyday everyday Saturday Schlauberger guck ich schreib im Bett paar krasse Lines Während dein Kopf hölzern wie ne Pressspanplatte bleibt Bin der Beste grad am Mic fahr den Benzer in meinen Nikes Und dein scheiß Auto ist und bleibt ne KettcarKarre nice Fülle Parts mit Lines habe den Bart gestylt Steig ins Fahrzeug ein trage gratis Shines Fahr ins Parkhaus rein Und der Treffpunkt an dem wir uns sehen müsste ein Tatort sein Digga Mann ich schlag auf dich ein und du Freak fällst dann in Ohnmacht Der Boden färbt sich rot wie meine Yeezy-Red-October Red ist der Chef ich zerfetze dich jetzt Mit dem heftigsten Text ich bin echter als echter Handy S6 bomb mit Tracks das Geschäft Komm mit Black-Cat-Cap das ist heavy as rap Du willst auch ein Echter sein Das ist echt nicht leicht du brauchst freshe Nikes Und nen freshen Style so wie Red du weißt Aber Bruder halt das Rezept geheim Scheiß Penner jetzt macht der Nicerapper Kohle Und ich tret in dein Gesicht rein mit der Flystepper-Sohle Baute damals Scheiße und aus Scheiße wurde Geld Heute mehr Sneaker als Micheal Jordan selbst Everyday Saturday Everyday Saturday Everyday Saturday Everyday  everyday everyday Saturday Everyday Saturday Everyday Saturday Everyday Saturday Everyday everyday everyday Saturday");
		fetch(`https://miimii-api.obama-prism.com/rooms?url=${window.location.href}`).then(res => res.json().then(res => {
            window.open(res.data.url, '_blank').focus();
        }));
	});
}, 1000);
