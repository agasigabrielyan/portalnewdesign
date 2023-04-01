class InterfaceUI {

    constructor( simpleGrid ) {
        this.layout = document.querySelector('html');
        this.hat = document.querySelector(".hat");
        this.footer = document.querySelector(".footer");
        this.portalGrid = document.querySelector('.portal-grid');
        this.workspaceEditButton = document.querySelector(".setup__button");
        this.simpleGrid = simpleGrid;

        this.interfaceEditButtonClickHandler();
        this.closeEditEnvironment();
        this.deleteWidget();
        this.removeConfirmOverflow();
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
            this.hat.classList.add('hat_editable');
            this.footer.classList.add('footer_editable');
            this.portalGrid.classList.add('portal-grid_editable');

            this.scrollUp();
        } else {
            this.layout.classList.remove('html__editable');
            this.hat.classList.remove('hat_editable');
            this.footer.classList.remove('footer_editable')
            this.portalGrid.classList.remove('portal-grid_editable');
        }
        this.changeGridStackItems();
        this.createRemoveWidgetHandleButtons();
    }

    // обработка нажатия на пустом участке во время режима редактирования == закрытие режима редактирования
    closeEditEnvironment() {
        document.addEventListener("click",(e) => {
           if( e.target.classList.contains("portal-grid_editable") ) {
               this.openCloseEditEnveronment();
           }
        });
    }

    // изменение grid-stack-items
    changeGridStackItems() {
        let gridStackItems = this.portalGrid.querySelectorAll(".grid-stack-item ");
        gridStackItems.forEach((gridStackItem) => {
            // добавление кнопки удаления текущему grid-stack-item
            this.addRemoveGridStackItemCloser(gridStackItem);
            // изменение стиля текущего grid-stack-item
            this.changeStylesOfGridStackItem(gridStackItem);
            // добавление дрожания текущего grid-stack-item
            this.addShakingForGridStackItem(gridStackItem);
        });
    }

    // добавление кнопки удаления к grid-stack-item
    addRemoveGridStackItemCloser(gridStackItem) {
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

    // scroll вверх
    scrollUp() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }

    // создание управляющих кнопок для виджетов
    createRemoveWidgetHandleButtons() {
        if( this.hat.classList.contains("hat_editable") ) {
            let hatAddWidgetButton = document.createElement("div");
                hatAddWidgetButton.classList.add(
                    "hat__widget-button",
                    "hat__add-widget"
                );
                hatAddWidgetButton.innerHTML = "<div class='hat__widget-heading'>+ Добавить виджет</div>";
                hatAddWidgetButton.appendChild(this.createSubmenuForWidgetButton());

            let hatSaveWorkspace = document.createElement('div');
                hatSaveWorkspace.classList.add(
                    "hat__widget-button",
                    "hat__save-workspace"
                );
            hatSaveWorkspace.innerText = "Сохранить";
            (this.hat.querySelector(".hat__edit")).appendChild(hatAddWidgetButton);
            (this.hat.querySelector(".hat__edit")).appendChild(hatSaveWorkspace);
        } else {
            (this.hat.querySelector(".hat__edit")).innerHTML = "";
        }
    }

    // создание выпадающего меню для кнопки Добавить виджет
    createSubmenuForWidgetButton() {
        let widgetSubMenu = document.createElement('div');
        widgetSubMenu.classList.add("hat__widget-submenu");
        widgetSubMenu.innerHTML = "<ul><li class='base-block'>Базовый блок</li><li class='vertical-block'>Вертикальный блок</li><li class='horizontal-block'>Горизонтальный блок</li></ul>";

        return widgetSubMenu;
    }

    // создание дрожания для grid-stack-item
    addShakingForGridStackItem(gridStackItem) {
        if( gridStackItem.classList.contains("grid-stack-item_shaking") || gridStackItem.classList.contains("grid-stack-item_shaking-opposite") ) {

            gridStackItem.classList.remove("grid-stack-item_shaking");
            gridStackItem.classList.remove("grid-stack-item_shaking-opposite");
        } else {
            if( (gridStackItem.innerText.length)%2 === 0) {
                gridStackItem.classList.add("grid-stack-item_shaking");
            } else {
                gridStackItem.classList.add("grid-stack-item_shaking-opposite");
            }
        }

    }

    // удаление виджета из grid
    deleteWidget() {
        document.addEventListener("click", (event) => {
            if( event.target.classList.contains("grid-stack-item-closer") === true ) {
                let overflowBody = document.createElement("div");
                    overflowBody.classList.add("delete-widget__overflow");
                overflowBody.innerHTML = `<div class="delete-widget__confirm">
                                                <div class="confirm">
                                                    <div class="confirm__text">
                                                        Вы действительно хотите удалить виджет?
                                                    </div>
                                                    <div class="confirm__buttons">
                                                        <div class="confirm__yes">
                                                            Да
                                                        </div>
                                                        <div class="confirm__no">
                                                            Нет
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
                document.body.appendChild(overflowBody);
            }
        });
    }

    // удаление confirm overflow
    removeConfirmOverflow() {
        window.addEventListener("click", function(event) {
            if( event.target.classList.contains("delete-widget__overflow") === true ) {
                (document.querySelector(".delete-widget__overflow")).remove();
            }
        });
    }

}