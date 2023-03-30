class InterfaceUI {

    constructor( simpleGrid ) {
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
        this.simpleGrid.opts.disableDrag = false;
        this.simpleGrid.opts.disableResize = false;
    }

}