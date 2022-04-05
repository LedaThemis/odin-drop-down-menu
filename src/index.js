import './styles.css';

const DropdownMenu = (id, mode) => {
  const validModes = ['click', 'mouseover'];
  if (!validModes.includes(mode)) {
    throw `Valid modes are ${validModes}`;
  }

  if (!document.querySelector(`#dropdown-menu-${id}`)) {
    throw `A dropdown menu with id ${id} doesn't exist in HTML`;
  }

  const DOMHandlers = (() => {
    const toggleDropdownMenu = (dropdownMenu) => {
      if (dropdownMenu.style.display) {
        dropdownMenu.style.display = '';
      } else {
        dropdownMenu.style.display = 'none';
      }
    };

    const handleDropDownButtonClick = (e, id) => {
      const dropdownMenu = document.querySelector(`#dropdown-items-${id}`);
      toggleDropdownMenu(dropdownMenu);
    };

    const handleDropDownDivMouseOver = (e, id) => {
      const dropdownMenu = document.querySelector(`#dropdown-items-${id}`);
      dropdownMenu.style.display = '';
    };
    const handleDropDownDivMouseLeave = (e, id) => {
      const dropdownMenu = document.querySelector(`#dropdown-items-${id}`);
      dropdownMenu.style.display = 'none';
    };

    return {
      handleDropDownButtonClick,
      handleDropDownDivMouseOver,
      handleDropDownDivMouseLeave,
    };
  })();

  const DOM = (() => {
    if (mode === 'click') {
      const dropdownButton = document.querySelector(`#dropdown-button-${id}`);
      dropdownButton.addEventListener('click', (e) => DOMHandlers.handleDropDownButtonClick(e, id));
    } else if (mode === 'mouseover') {
      const dropdownDiv = document.querySelector(`#dropdown-menu-${id}`);
      dropdownDiv.addEventListener('mouseover', (e) => DOMHandlers.handleDropDownDivMouseOver(e, id));
      dropdownDiv.addEventListener('mouseleave', (e) => DOMHandlers.handleDropDownDivMouseLeave(e, id));
    }
  })();
};

DropdownMenu(1, 'click');
DropdownMenu(2, 'mouseover');
