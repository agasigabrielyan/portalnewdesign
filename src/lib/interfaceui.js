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
    }

}