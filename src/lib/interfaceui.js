class InterfaceUI {

    constructor( simpleGrid ) {
        this.workspaceEditButton = document.querySelector(".setup__button");
        this.simpleGrid = simpleGrid;

        this.interfaceEditButtonHandler();
    }

    // обработчик нажатия на кнопку редактирования интерфейса
    interfaceEditButtonHandler() {
        this.workspaceEditButton.addEventListener("click", () => {
            debugger;
        })
    }

}