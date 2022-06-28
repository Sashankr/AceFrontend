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
}