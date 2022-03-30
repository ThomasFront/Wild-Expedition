const burgerBtn = document.querySelector('.hamburger')
const burgerBox = document.querySelector('.hamburger-box')
const navItems = document.querySelector('.nav-mobile__items')
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav-mobile__item')

const handleNav = () => {
	burgerBox.classList.toggle('is-active')
	navItems.classList.toggle('nav-mobile__items-active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			burgerBox.classList.remove('is-active')
			navItems.classList.remove('nav-mobile__items-active')
		})
	})
}

burgerBtn.addEventListener('click', handleNav)

document.addEventListener('DOMContentLoaded', function () {
	const navDesktop = document.querySelector('.nav-desktop')

	function addShadow() {
		if (window.scrollY >= 200) {
			navDesktop.classList.add('shadow-bg')
		} else {
			navDesktop.classList.remove('shadow-bg')
		}
	}
	window.addEventListener('scroll', addShadow)
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
