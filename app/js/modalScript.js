let playButton = document.querySelector(".play-button")
let closeModalButton = document.querySelector(".modal__close")
let modal = document.querySelector(".modal")
let video = document.querySelector("#video")

playButton.addEventListener('click', showModal)
closeModalButton.addEventListener('click', closeModal)
window.addEventListener('click', (e) => {
	if (e.target == modal || e.target == document.querySelector('.modal__inner')) closeModal()
})

function showModal() {
	modal.style.display = "block"
}

function closeModal() {
	let videoSrc = video.src
	modal.style.display = "none"
	video.src = ""
	video.src = videoSrc
}