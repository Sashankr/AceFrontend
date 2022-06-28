// Check your browser console

function showDropdown(e) {
    console.log('clicked');
    const isDropdownActive = e.target.getAttribute('data-showDropdown');
    console.log(isDropdownActive)
    if (isDropdownActive === 'false') {
        e.target.setAttribute('data-showDropdown', true)
    }
    else {
        e.target.setAttribute('data-showDropdown', false)
    }

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            e.target.setAttribute('data-showDropdown', false)
        })
    })
}