let img = document.querySelector(".img img");
let love = document.querySelector("#love")
let likes = document.querySelector(".likecount h1")
let counnt = 2750;
let heart = document.querySelector("#heart")

likes.innerHTML = `${counnt} likes`

img.addEventListener("dblclick", function () {
    if (counnt === 2750) {
        counnt = counnt + 1
    }
    love.style.transform = "translate(-50%, -50%) scale(1)"
    heart.innerHTML = `<i class="ri-heart-fill"></i>`
    love.style.opacity = 1
    heart.style.color = "red"
    likes.innerHTML = `${counnt} likes`
    setTimeout(function () {
        love.style.opacity = 0
    }, 1000)
    setTimeout(function () {
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000)
})


heart.addEventListener("click", function () {
    if (counnt === 2751) {
        counnt--
        likes.innerHTML = `${counnt} likes`
    }

    heart.innerHTML = ` <i  class="ri-heart-line"></i>`
    heart.style.color = "black"
    
})


