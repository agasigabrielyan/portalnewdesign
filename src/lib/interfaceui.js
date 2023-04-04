class InterfaceUI {

    constructor( simpleGrid ) {
        this.layout = document.querySelector('html');
        this.hat = document.querySelector(".hat");
        this.footer = document.querySelector(".footer");
        this.portalGrid = document.querySelector('.portal-grid');
        this.workspaceEditButton = document.querySelector(".setup__button");
        this.simpleGrid = simpleGrid;
        this.elementsNotToBeBlured = ['hat', 'portal-grid', 'footer'];
        this.widgetItems = [
            'Погода',
            'Часы',
            'Библиотека',
            'Чат',
            'Заменить картридж',
        ];
        this.menuOutPosition = "90px";
        this.menuInPosition = "-3000px";

        this.interfaceEditButtonClickHandler();
        this.closeEditEnvironment();
        this.deleteWidget();
        this.removeConfirmOverflow();
        this.showSubmenuByAddWidgetButton();
        this.removeWidget();

        document.addEventListener("click", (e) => {
            if(e.target.classList.contains('base-block')) {
                this.addGridItem(this.simpleGrid, e.target.innerText);
            }
        });
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
            this.simpleGrid.enable();

        } else {
            this.layout.classList.remove('html__editable');
            this.hat.classList.remove('hat_editable');
            this.footer.classList.remove('footer_editable')
            this.portalGrid.classList.remove('portal-grid_editable');

            this.simpleGrid.disable();
        }
        this.changeGridStackItems();
        this.createRemoveWidgetHandleButtons();
        this.blurUnblurElements();
    }

    // обработка нажатия на пустом участке во время режима редактирования == закрытие режима редактирования
    closeEditEnvironment() {
        document.addEventListener("click",(e) => {
           if( e.target.classList.contains("portal-grid_editable") ) {
               this.openCloseEditEnveronment();
           }
        });
    }

    // заблюрить все элементы, кроме нужных
    blurUnblurElements() {
        let allFirstChildElements = (document.querySelector('body')).children;
        if( !(this.layout.classList.contains('html__editable')) ) {
            for( let i=0; i<allFirstChildElements.length; i++ ) {
                allFirstChildElements[i].style.filter = "none";
            }

        } else {
            for( let i=0; i<allFirstChildElements.length; i++ ) {
                let classListArray = allFirstChildElements[i].classList;
                if( !(this.elementsNotToBeBlured.includes(classListArray[0])) ) {
                    allFirstChildElements[i].style.filter = "blur(5px)";
                }
            }
        }
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
            this.addRemoveShakingForGridStackItem(gridStackItem);
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
        setTimeout(
            this.openWidgetMenuWithTimeout,
            1000
        )
    }

    openWidgetMenuWithTimeout() {
        if( document.querySelector('body').scrollTop === 0 ) {
            let hatWidgetHeading = document.querySelector('.hat__widget-heading');
            hatWidgetHeading.click();
        }
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

        let widgetListItemsHtml = "<ul>";
            this.widgetItems.forEach((litem)=>{
                let litemHmlt = this.createSubmenuSingleItem(litem);
                widgetListItemsHtml += litemHmlt;
            });
        widgetListItemsHtml += '</ul>';
        widgetListItemsHtml += "<div class='widget-search'><input placeholder='Найти виджет' type='text' /></div>";

        widgetSubMenu.innerHTML = widgetListItemsHtml;

        return widgetSubMenu;
    }

    // создание одного элемента
    createSubmenuSingleItem(litem) {
        let litemHtml = "";

            litemHtml += `<div class='base-block__wrapper'>
                            <li class='base-block'>${litem}</li>
                            <div class='base-block__description'><span>${litem}</span></div>
                          </div>`;

        return litemHtml;
    }

    showSubmenuByAddWidgetButton() {
        window.addEventListener('click', (e) => {
            if( e.target.classList.contains('hat__widget-heading') ) {
                if( document.querySelector('.hat__widget-submenu').style.top === this.menuOutPosition ) {
                    document.querySelector('.hat__widget-submenu').style.top = this.menuInPosition;
                    e.target.innerText = '+ Добавить виджет';
                } else {
                    e.target.innerText = 'Скрыть виджеты';
                    document.querySelector('.hat__widget-submenu').style.top = this.menuOutPosition;
                }
            }
        });
    }

    // создание дрожания для grid-stack-item
    addRemoveShakingForGridStackItem(gridStackItem) {
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
            if( event.target.classList.contains("confirm__no") === true ) {
                document.querySelector(".delete-widget__overflow").remove();
            }
        });
    }

    // добавление нового виджета
    addGridItem(simpleGrid, info) {
        let gridStackItem =  this.simpleGrid.addWidget({
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            content: '<div><div>' + (simpleGrid.engine.nodes.length+1) + '</div><div>' + info + '</div></div>'
        });
        // добавление кнопки удаления текущему grid-stack-item
        this.addRemoveGridStackItemCloser(gridStackItem);
        // изменение стиля текущего grid-stack-item
        this.changeStylesOfGridStackItem(gridStackItem);
        // добавление дрожания текущего grid-stack-item
        this.addRemoveShakingForGridStackItem(gridStackItem);

        this.updatedObjectOfElements( gridStackItem, 'add' );
    }


    // обновление объекта элементов
    updatedObjectOfElements( itemAddedRemoved, action ) {
        if( action === 'add' ) {
        } else if( action === 'remove' ) {
            alert('Собираемся удалить элемент из списка');
        }
    }

    // удаление виджета
    removeWidget(gridstackItem) {
        window.addEventListener('click', (e) => {
            if( e.target.classList.contains('confirm__yes') ) {
                
            }
        })
    }

}