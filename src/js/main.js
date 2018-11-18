const SpinningIcon = document.querySelector('.layout__icon');
const OpenMobileMenu = document.getElementById('menuIcon');
const CloseMobileMenu = document.getElementById('mobileMenuExit');
SpinningIcon.addEventListener('click', spin);
OpenMobileMenu.addEventListener('click', toggleMobileMenu);
CloseMobileMenu.addEventListener('click', toggleMobileMenu);

let rotation = 0;
function spin() {
	// SpinningIcon.classList.toggle('clicked');
		rotation += 360;
		SpinningIcon.style.transform = 'rotate(' + rotation + 'deg)';
	}

function toggleMobileMenu() {
	document.querySelector('.nav__mobile').classList.toggle('active');
}