class InterfaceUI {

    constructor( simpleGrid ) {
        this.layout = document.querySelector('html');
        this.portalGrid = document.querySelector('.portal-grid');
        this.workspaceEditButton = document.querySelector(".setup__button");
        this.simpleGrid = simpleGrid;

        this.interfaceEditButtonClickHandler();
        this.closeEditEnvironment();
    }

    // обработчик нажатия на кнопку редактирования интерфейса
    interfaceEditButtonClickHandler() {
        this.workspaceEditButton.addEventListener("click", (event) => {
            this.openCloseEditEnveronment();
        });
    }

    // открытие/закрытие режима редактирования
    openCloseEditEnveronment() {
        if( !(this.layout.classList.contains('html__editable')) ) {
            this.layout.classList.add('html__editable');
            this.portalGrid.classList.add('portal-grid_editable');
        } else {
            this.layout.classList.remove('html__editable');
            this.portalGrid.classList.remove('portal-grid_editable');
        }
        this.changeGridStackItems();
    }

    // закрытие режима реадктирования
    closeEditEnvironment() {
        document.addEventListener("click",(e) => {
           if( e.target.classList.contains("portal-grid_editable") ) {
               this.openCloseEditEnveronment();
               this.changeGridStackItem();
           }
        });
    }

    // изменение grid-stack-item
    changeGridStackItems() {

        let gridStackItems = this.portalGrid.querySelectorAll(".grid-stack-item ");
        gridStackItems.forEach((gridStackItem) => {

            // добавление кнопки удаления текущему grid-stack-item
            this.addRemoveGridStackItemCloser(gridStackItem);


            // изменение стиля текущего grid-stack-item
            this.changeStylesOfGridStackItem(gridStackItem);
        });
    }

    // добавление кнопки удаления к grid-stack-item
    addRemoveGridStackItemCloser(gridStackItem) {
        debugger;
        if( gridStackItem.querySelector(".grid-stack-item-closer") ) {
            gridStackItem.removeChild(gridStackItem.querySelector(".grid-stack-item-closer"));
        } else {
            let currentGridStackCloser = document.createElement("div");
            currentGridStackCloser.classList.add("grid-stack-item-closer");
            gridStackItem.appendChild(currentGridStackCloser);
        }
    }

    // изменить стили grid-stack-item при редактировании
    changeStylesOfGridStackItem( gridStackItem ) {
        if( !(gridStackItem.classList.contains("")) ) {
            gridStackItem.classList.add('grid-stack-item_edit-mode');
        } else {
            gridStackItem.classList.remove('grid-stack-item_edit-mode');
        }
    }

}