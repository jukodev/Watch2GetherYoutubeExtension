
setTimeout(() => {
    let r = document.querySelector(":root");
    const hook = document.querySelector("#owner");
    const w2gBuddne = document.createElement("button");
    w2gBuddne.innerHTML = "W2G";
    w2gBuddne.id = "w2gBuddne";
    w2gBuddne.addEventListener("onclick", () => {
        fetch(`localhost:4000/rooms?url=${window.location.href}`)
    })
    hook.appendChild(w2gBuddne);
    console.log("schwanz");
}, 50)

