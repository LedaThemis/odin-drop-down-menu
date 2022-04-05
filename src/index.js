import './styles.css';

const DropdownMenu = () => {
  const DOMHandlers = (() => {
    const toggleDropdownMenu = (dropdownMenu) => {
      if (dropdownMenu.style.display) {
        dropdownMenu.style.display = '';
      } else {
        dropdownMenu.style.display = 'none';
      }
    };

    const handleDropDownButtonClick = (e) => {
      let dropdownMenu;
      e.target.parentNode.childNodes.forEach((cn) => {
        if (cn.classList && cn.classList.contains('dropdown-items')) {
          dropdownMenu = cn;
        }
      });
      toggleDropdownMenu(dropdownMenu);
    };

    return {
      handleDropDownButtonClick,
    };
  })();

  const DOM = (() => {
    const dropdownButton = document.querySelector('#dropdown-button-1');
    dropdownButton.addEventListener('click', DOMHandlers.handleDropDownButtonClick);
  })();
};

DropdownMenu();
