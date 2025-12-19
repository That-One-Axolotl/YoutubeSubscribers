let subs;
let createdImgs = 0;
let lastUpdated;

const container = document.getElementById("container");
const images = [
    "./images/basic.png",
    "https://that-one-axolotl.github.io/share/images/axo-build.png",
    "https://that-one-axolotl.github.io/share/images/axo-hi.png",
    "https://that-one-axolotl.github.io/share/images/axo-lolipop.png",
    "https://that-one-axolotl.github.io/share/images/axolute-cinema.png",
    "https://that-one-axolotl.github.io/share/images/code-alotl.png",
    "https://that-one-axolotl.github.io/share/images/draw-a-lotl.png"
]

fetch("./subCount.json", { cache: 'no-store' })
.then(res => res.json())
.then((data) => {
    subs = data.subs
    lastUpdated = data.lastUpdated;
    document.getElementById("lastUpdated").textContent = `Last Updated: ${Math.floor((Date.now() - new Date(lastUpdated)) / 3600000)} Hours Ago`;
    
    
    createImages(subs);
})



function createImages(elementsToCreate){
    for(let i = 0; i < elementsToCreate; i ++){
        if(createdImgs < subs){
        const img = document.createElement("img");
        const src = images[Math.floor(Math.random() * images.length)];
        img.src = src;
        img.style.transform = 'rotate(' + ((Math.random() * 180) - 90) + 'deg)';
        img.width = 250;
        container.appendChild(img)
        console.log(src);

        scrollObvserver.unobserve(scrollWatcher);
        scrollObvserver.observe(scrollWatcher);
        createdImgs ++;
        }
    }
}

const scrollObvserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            if (entry.isIntersecting && createdImgs < subs) {
                createImages(5);
            }
        });
    }, {
        rootMargin: '200px'
})
const scrollWatcher = document.getElementById("scrollWatcher");
scrollObvserver.observe(scrollWatcher);
