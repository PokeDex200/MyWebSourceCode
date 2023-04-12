window.onscroll = (() => {
    let scrolled = document.documentElement.scrollTop
    document.querySelectorAll(".hidden").forEach((el) => {
        if (scrolled >= (el.offsetTop - window.innerHeight/1.5)) {
            el.classList.add("show")
        } else {
            el.classList.remove("show")
        }
        console.log("height:"+window.innerHeight)
        console.log("scrolled:"+scrolled)
        console.log("top:"+el.offsetTop)
    })
})