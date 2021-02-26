let avatars = document.querySelectorAll('.avatars__item')
let commentField = document.querySelector('.people__comment')
let nameField = document.querySelector('.people__info__name')
let positionField = document.querySelector('.people__info__position')
let comments = [
		{
			name: "Selena Gomez",
			position: "Singer",
			comment: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit."
		},
		{
			name: "Elon Musk",
			position: "Cool Guy",
			comment: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
		},
		{
			name: "Jane Galadriel",
			position: "CEO Tengkurep",
			comment: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit."
		},
		{
			name: "Miley Cyrus",
			position: "Singer",
			comment: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
		},
		{
			name: "Albert Einstein",
			position: "Scientist",
			comment: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit."
		}
	]

avatars.forEach((item, i) => item.addEventListener('click', () => {
	//change the comment
	commentField.innerHTML = ""
	commentField.append(comments[i].comment)

	nameField.innerHTML = ""
	nameField.append(comments[i].name)

	positionField.innerHTML = ""
	positionField.append(comments[i].position)
	
	//enlarge the avatar
	document.querySelector('.avatars__item_selected').classList.remove('avatars__item_selected')
	item.classList.add('avatars__item_selected')
}))
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
let navButton = document.querySelector(".header__mobile-nav-button")
console.log(navButton)
navButton.addEventListener('click', () => {
	
})