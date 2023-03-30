class InterfaceUI {

    constructor( simpleGrid ) {
        this.layout = document.querySelector('html');
        this.portalGrid = document.querySelector('.portal-grid');
        this.workspaceEditButton = document.querySelector(".setup__button");
        this.simpleGrid = simpleGrid;

        this.interfaceEditButtonClickHandler();
    }

    // обработчик нажатия на кнопку редактирования интерфейса
    interfaceEditButtonClickHandler() {
        this.workspaceEditButton.addEventListener("click", (event) => {
            this.prepareEditEnvironment();
        });
    }

    // подготовливает среду для редактирования рабочего места
    prepareEditEnvironment() {
        if( !(this.layout.classList.contains('html__editable')) ) {
            this.layout.classList.add('html__editable');
            this.portalGrid.classList.add('portal-grid_editable');
        } else {
            this.layout.classList.remove('html__editable');
            this.portalGrid.classList.remove('portal-grid_editable');
        }

        this.addGridStackItemCloser();
    }

    // добавление кнопки удаления к grid-stack-item
    addGridStackItemCloser() {
        let gridStackItems = this.portalGrid.querySelectorAll(".grid-stack-item ");
        gridStackItems.forEach((gridStackItem) => {
            let currentGridStackCloser = document.createElement("div");
            currentGridStackCloser.classList.add("grid-stack-item-closer");
            gridStackItem.appendChild(currentGridStackCloser);


            // изменение стиля текущего grid-stack-item
            this.changeStylesOfGridStackItem(gridStackItem);
        });
    }

    // изменить стили grid-stack-item при редактировании
    changeStylesOfGridStackItem( gridStackItem ) {
        gridStackItem.classList.add('grid-stack-item_edit-mode');
    }

}