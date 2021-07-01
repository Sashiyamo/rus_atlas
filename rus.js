// ==UserScript==
// @name        Русификатор
// @description Перевод Apache Atlas
// @author      Денисов Александр
// @include	**
// @version    1.0
// @grant       none
// @namespace qwerty
// ==/UserScript==
//
//function & interpretation
var main_transcript = function () {

	//all words
	let all_tr = {

		//a
		' Search' : ' Поиск',
		' Classification' : ' Классификация',
		' Glossary' : ' Глоссарий',
		'  Back To Results' : '  Вернуться к результату',
		'About' : 'Подробнее',
		'Logout' : 'Выйти',
		' create new entity ' : ' создать новую сущность ',
		' create new entity' : ' создать новую сущность',
		' Assign Tag' : ' Назначить тег',
		'Properties' : 'Свойства',
		'Relationships' : 'Связи',
		'Audits' : 'События',
		'Tables' : 'Таблицы',
		'Schema' : 'План',
		'Lineage' : 'Происхождение',
		'   More sample queries and use-cases' : '   Больше примеров запросов и условий',
		'Create Sub-classification' : 'Создать подклассификацию',
		'Delete Classification' : 'Удалить классификацию',
		'Entities' : 'Сущности',
		'Related Terms' : 'Связанные термины',
		'Licensed under the Apache License Version 2.0' : 'Лицензия от Apache License Version 2.0',
		'Search ' : 'Искать ',
		'Rename' : 'Переименовать',
		'Create Term' : 'Создать термин',
		'Delete Glossary' : 'Удалить глоссарий',
		'Delete Term' : 'Удалить термин',
		'Create Category' : 'Создать категорию',
		'Create Sub-Category' : 'Создать подкатегорию',
		'Delete Category' : 'Удалить категорию',
		'0' : '0',


		//span
		'Flat' : 'Список',
		'Tree' : 'Дерево',
		'Search Classification' : 'Поиск классификации',
		'Basic' : 'Базовый',
		'Advanced' : 'Продвинутый',
		'Search By Type' : 'Поиск по типу',
		'Select Type' : 'Выбрать тип',
		'Select Classification' : 'Выбрать классификацию',
		'Search By Classification' : 'Поиск по классификации',
		'Search By Term' : 'Поиск по термину',
		'Search Term' : 'Выбрать термин',
		'Search By Text' : 'Поиск по тексту',
		'Favorite Searches' : 'Избранное',
		"You don't have any favorite search." : 'У вас нет избранных запросов.',
		'Terms' : 'Термины',
		'Category' : 'Категория',
		'Results for: ' : 'Результат по: ',
		'Classification:' : 'Классификация:',
		'Showing ' : 'Показано ',
		'No Record found!' : 'Записи не найдены!',
		'Page Limit :' : 'Лимит страниц',
		'Select' : 'Выбрать',
		'Name' : 'Имя',
		'Owner' : 'Владелец',
		'Description' : 'Описание',
		'Type' : 'Тип',
		'Classifications' : 'Классификации',
		'Term' : 'Термины',
		'Short Description: ' : 'Краткое описание:\u00A0',
		'Long Description: ' : 'Полное описание:\u00A0',
		'Search By Query' : 'Поиск по запросу',
		'Classifications:' : 'Классификации:',
		'Term:' : 'Термины:',
		'Current Entity' : 'Текущая сущность',
		'Impact' : 'Влияние',
		'No records found!' : 'Записи не найдены!',
		'Required' : 'Спец',
		'All' : 'Все',
		'--Select entity-type--' : '--Выбрать тип сущности--',
		'Categories:' : 'Категории:',
		'Query:' : 'Запрос:',
		'Terms:' : 'Термины:',
		'QualifiedName' : 'Специальное имя',
		'Column_family' : 'Семейство колонок',
		'-- Select a Classification from the dropdown list --' : '-- Выберите классификацию из выпадающего списка --',
		'Type:' : 'Тип:',
		'current step: ' : 'текущий шаг: ',
		' Select Term' : 'Выбор термина',
		' Attributes' : 'Атрибуты',
		'0' : '0',


		//buttons
		'Clear' : 'Очистить',
		'Search' : 'Поиск',
		'Save' : 'Сохранить',
		'Save As' : 'Сохранить как',
		'Go!' : 'Вперед!',
		'Columns ' : 'Колонки ',
		'Cancel' : 'Отмена',
		'Create' : 'Создать',
		'Add New Attribute' : 'Добавить атрибут',
		' Add New Attributes' : ' Добавить атрибут',
		'Tag Attribute Filter' : 'Фильтр тегов атрибута',
		'Update' : 'Изменить',
		'Add Category' : 'Добавить категорию',
		'Assign' : 'Назначить',
		'Add' : 'Добавить',
		'Apply' : 'Подтвердить',
		' Delete       ' : ' Удалить       ',
		' Add filter       ' : ' Добавить фильтр       ',
		' Add filter group         ' : ' Добавить группу фильтров         ',
		'Remove' : 'Удалить',
		'0' : '0',


		//p
		'Search Atlas for existing entities or\n                        ' : 'Найти в Atlas имеющиеся сущности или ',
		'If you do not find the entity in search result below then you can' : 'Если вы не нашли сущность после поиска вы можете',
		'Attributes define additional properties for the classification' : 'Атрибуты определяют дополнительные свойства для классификации',
		'Get involved!' : 'Присоединяйтесь!',
		'Classification Attributes(optional)' : 'Классификация атрибутов(опционально)',
		'Add attribute values for this classification' : 'Добавить значения атрибутов для этой классификации',
		'0' : '0',


		//b
		'Show historical entities' : 'Показать исторические сущности',
		'Exclude sub-classifications' : 'Исключить подклассификации',
		'Exclude sub-types' : 'Исключить подтипы',
		'Basic Search' : 'Базовый поиск',
		'Advanced Search' : 'Продвинутый поиск',
		'Single Query' : 'Простой запрос',
		'GROUPBY' : 'GROUPBY',
		'ORDERBY' : 'ORDERBY',
		'LIMIT' : 'Запрос с лимитом',
		'Version : ' : 'Версия : ',
		'0' : '0',


		//th
		'Table Name' : 'Имя таблицы',
		'Date Created' : 'Дата создания',
		'Users' : 'Пользователи',
		'Timestamp' : 'Метка времени',
		'Actions' : 'Действия',
		'Tools' : 'Инструменты',
		'Action' : 'Действие',
		'Attributes' : 'Атрибуты',
		'Classification' : 'Классификация',
		'Value' : 'Значение',
		'Key' : 'Ключ',
		'New Value' : 'Новое значение',
		'name' : 'Имя',
		'owner' : 'Владелец',
		'type' : 'Тип',
		'Tags' : 'Теги',
		'Relation Types' : 'Тип связи',
		'0' : '0',


		//input
		'Search by text' : 'Поиск текста',
		'Search By Query eg. where name="sales_fact"' : 'Запрос, например: where name="sales_fact"',
		'Search Glossary, Term' : 'Искать глоссарий, термин',
		'Name(required)' : 'Имя(обязательно)',
		'Long Description' : 'Полное описание',
		'Attribute name' : 'Имя атрибута',
		'Search Glossary, Category' : 'Поиск глоссария, категории',
		'qualifiedName' : 'Специальное имя',
		'Search Catalog' : 'Искать каталог',
		'Username' : 'Логин',
		'Password' : 'Пароль',
		'0' : '0',

		//label
		'Direct sub-classifications:' : 'Управляемые подклассификации:',
		'Attributes:' : 'Атрибуты:',
		' Show Propagated Classifications' : ' Показывать наследственные классификации',
		'Direct super-classifications:' : 'Управляемы супер-классификации',
		'Short Description' : 'Краткое описание',
		'Long Description' : 'Полное описание',
		'Select classification to inherit attributes(optional)' : 'Выбрать классификацию для наследование атрибутов(опционально)',
		'Attributes(optional)' : 'Атрибуты(опционально)',
		' Propagate' : ' Наследовать',
		' Remove propagation on entity delete' : ' Удалить наследство при удалении сущности',
		' Apply Validity Period' : ' Применить срок действия',
		'description' : 'Описание',
		'expression' : 'Выражение',
		'steward' : 'Стюарт',
		'source' : 'Источник',
		'Hide Process' : 'Скрыть процесс',
		'Hide Deleted Entity' : 'Скрыть удаленную сущность',
		'Depth:' : 'Глубина:',
		'0' : '0',


		//li
		'Please enter 1 or more characters' : 'Пожалуйста, введите ещё 1 значение',
		'0' : '0',


		//h
		'\n                    \n                        Create entity\n                      \n                ' : 'Создание сущности',
		'\n                    \n                        Advanced Search Queries\n                      \n                ' : 'Запросы продвинутого поиска',
		'\n                    \n                        Edit Classification\n                      \n                ' : 'Редактирование классификации',
		'\n                    \n                        Update Glossary\n                      \n                ' : 'Обновление глоссария',
		'\n                    \n                        Create Glossary\n                      \n                ' : 'Создание глоссария',
		'\n                    \n                        Create a new classification\n                      \n                ' : 'Создание новой классификации',
		'\n                    \n                        Update Term\n                      \n                ' : 'Обновление термина',
		'\n                    \n                        Entity Created\n                      \n                ' : 'Сущность создана',
		'\n                    \n                        Create your favorite search \n                      \n                ' : 'Создание избранного запроса',
		'\n                    \n                        Update your favorite search name\n                      \n                ' : 'Изменение имени избранного запроса',
		'\n                    \n                        Create Category\n                      \n                ' : 'Создание категории',
		'\n                    \n                        Term Added\n                      \n                ' : 'Термин добавлен',
		'\n                    \n                        Classification Added\n                      \n                ' : 'Классификация добавлена',
		'\n                    \n                        Create Term\n                      \n                ' : 'Создание термина',
		'\n                    \n                        Entity Updated\n                      \n                ' : 'Сущность обновлена',
		'\n                    \n                        Update Category\n                      \n                ' : 'Обновление категории',
		'\n                    \n                        Assign term to Category\n                      \n                ' : 'Назначить термин в категорию',
		'\n                    \n                        Assign Category to term\n                      \n                ' : 'Назначить категорию термину',
		'\n                    \n                        Add Classification\n                      \n                ' : 'Добавить классификацию',
		'\n                    \n                        Attribute Filter\n                      \n                ' : 'Фильтр атрибутов',
		'\n                    \n                        Assign term to entity\n                      \n                ' : 'Назначить термин сущности',
		'\n                    \n                        Assign term to seeAlso\n                      \n                ' : 'Назначение термина для функции "Смотрите Также"',
		'\n                    \n                        Add Attribute\n                      \n                ' : 'Добавление атрибута',
		'\n                    \n                        Term Deleted\n                      \n                ' : 'Термин удален',
		'\n                    \n                        Classification Deleted\n                      \n                ' : 'Классификация удалена',
		'\n                    \n                        Classification Updated\n                      \n                ' : 'Классификация обновлена',
		'0' : '0',
		'Remove Term Assignment' : 'Удаление назначенного термина',
		'Remove Classification Assignment' : 'Удаление назначенной классификации',
		'Please select one/more column to see the data' : 'Пожалуйста, выберите одну/больше колонок, чтобы увидеть информацию',
		'Use DSL (Domain Specific Language) to build queries' : 'Используйте DSL (Domain Specific Language) для создания запросов',
		'Name: ' : 'Имя: ',
		'Confirmation' : 'Подтверждение',
		'Filters' : 'Фильтры',
		'0' : '0',


		//div
		'Detail' : 'Детали',
		'Are you sure you want to delete the Glossary' : 'Вы уверены, что хотите удалить глоссарий',
		'Are you sure you want to delete the Term' : 'Вы уверены, что хотите удалить термин',
		'Are you sure you want to delete the classification' : 'Вы уверены, что хотите удалить классификацию',
		'Are you sure you want to delete the Category' : 'Вы уверены, что хотите удалить категорию',
		'Are you sure you want to delete ' : 'Вы уверены, что хотите удалить запрос ',
		'Do you want to overwrite  ' : 'Вы хотите перезаписать запрос ',
		'Remove: ' : 'Удаление: ',
		' assignment from ' : ' назначенную в ',
		'Term association is removed successfully' : 'Успешное удаление зависимости терминов',
		'Term is associated successfully ' : 'Успешная привязка термина',
		'Classification TEST_1 has been added to entity' : '0',
		'Category is associated successfully ' : 'Успешная установка зависимости категории',
		'Category association is removed successfully' : 'Успешное удаление зависимости категории',
		'Please fill the attributes or delete the input box' : 'Пожалуйста, заполните все поля атрибутов или удалите ненужные',
		'0' : '0',


		//title
		'Delete' : 'Удалить',
		'Edit' : 'Изменить',
		'Add Classification' : ' Добавить классификацию',
		'Remove Tag' : 'Удалить тег',
		'Add Term' : 'Добавить термин',
		'Remove Term' : 'Удалить термин',
		'Entity Attribute Filter' : 'Фильтр атрибутов сущности',
		'Next' : 'Дальше',
		'Previous' : 'Назад',
		'Refresh' : 'Обновить',
		'Zoom In' : 'Приблизить',
		'Zoom Out' : 'Отдалить',
		'0' : '0',


		//option
		'--Select Attribute--' : '--Выбрать атрибут--',
		'--Select true or false--' : '--Выбрать true или false--',
		'0' : '0',


		'0' : '0'
	}

	var stop = 0;
	var main_rec_mass = ["==>", "==>", "==>"];

	//translator
	let translator = function () {

		//block interpretator
		let interpret = function (mas, tr) {

			if (stop != mas.length) {

				stop = mas.length;

				for (let i = 0; i < mas.length; i++) {

					if (mas[i].childNodes[0] !== undefined && mas[i].childNodes[0].nodeName == "#text" && Object.keys(tr).indexOf(mas[i].childNodes[0].textContent) != -1) {
						mas[i].childNodes[0].textContent = tr[mas[i].childNodes[0].textContent];
					} else if (mas[i].childNodes[1] !== undefined && mas[i].childNodes[1].nodeName == "#text" && Object.keys(tr).indexOf(mas[i].childNodes[1].textContent) != -1) {
						mas[i].childNodes[1].textContent = tr[mas[i].childNodes[1].textContent];
					} else if (mas[i].childNodes[2] !== undefined && mas[i].childNodes[2].nodeName == "#text" && Object.keys(tr).indexOf(mas[i].childNodes[2].textContent) != -1) {
						mas[i].childNodes[2].textContent = tr[mas[i].childNodes[2].textContent];
					} else if(Object.keys(tr).indexOf(mas[i].placeholder) != -1) {
						mas[i].placeholder = tr[mas[i].placeholder];
					} else if (Object.keys(tr).indexOf(mas[i].title) != -1) {
						mas[i].title = tr[mas[i].title];
					} else if (mas[i].childNodes[0] !== undefined && mas[i].childNodes[0].nodeName == "#text" && Object.keys(tr).indexOf(mas[i].childNodes[0].textContent) == -1) {
						//not_in_tr.push(Object.keys(tr).indexOf(mas[i].childNodes[0].textContent));
					}
				};

			}
		};

		let all_mas = document.querySelectorAll('a,span,button,p,b,th,input,label,li,div,i,h4,textarea,option');
		interpret(all_mas, all_tr);


		//nav panel styles
		if (document.querySelectorAll('.tabs li.tab a')[0] !== undefined && document.querySelectorAll('button.btn.btn-action.btn-sm')[3] !== undefined) {
			//head nav
			document.querySelectorAll('.tabs li.tab a')[0].style.fontSize = "12px";
			document.querySelectorAll('.tabs li.tab a')[1].style.fontSize = "12px";
			document.querySelectorAll('.tabs li.tab a')[2].style.fontSize = "12px";

			//search(head)
			document.querySelector('div.col-sm-9').style.width = "85%";
			document.querySelector('div.col-sm-3').style.width = "15%";

			//classification(head)
			document.querySelectorAll('div.col-sm-6')[0].style.width = "70%";
			document.querySelectorAll('div.col-sm-6')[1].style.width = "30%";

			//glossary(head)
			document.querySelector('div.col-sm-8').style.width = "70%";
			document.querySelector('div.col-sm-4').style.width = "30%";

			//favorites
			document.querySelectorAll('button.btn.btn-action.btn-sm')[0].style.fontSize = "11px";
			document.querySelectorAll('button.btn.btn-action.btn-sm')[1].style.fontSize = "11px";
			document.querySelectorAll('button.btn.btn-action.btn-sm')[2].style.fontSize = "11px";
			document.querySelectorAll('button.btn.btn-action.btn-sm')[3].style.fontSize = "11px";
		}


		//records count
		let sklon = function (c) {
			if (c % 10 == 1) {
				return "запись";
			} else if (c % 10 == 2 || c % 10 == 3 || c % 10 == 4) {
				return "записи";
			} return "записей";
		};

		for (let i = 0; i < document.querySelectorAll('span.labelShowRecord.pull-left').length; i++) {
			let tem = document.querySelectorAll('span.labelShowRecord.pull-left')[i];
			if (tem !== undefined && tem && tem.innerHTML != " " && tem.innerHTML != "" && tem.innerHTML != main_rec_mass[i]) {
				main_rec_mass[i] = tem.innerHTML;

				let temp = tem.innerHTML.split(" ");
				temp[0] = "Показано"
				temp[3] = sklon(+temp[2][temp[2].length - 1]) + "</u>";
				temp[4] = "из";
				document.querySelectorAll('span.labelShowRecord.pull-left')[i].innerHTML = temp.join(" ");
			};
		};

		if (document.querySelectorAll('h5').length != 0) {
			for (let i = 0; i < document.querySelectorAll('h5').length; i++) {
				let temp = document.querySelectorAll('h5')[i].textContent.split(" ");
				temp[0] = "Показано";
				document.querySelectorAll('h5')[i].textContent = temp.join(" ");
			};
		};

	};
	translator();

	document.body.addEventListener('DOMSubtreeModified', () => {
		translator();
	});

};


//button in head
let eventer = () => {
    document.querySelector("#rus").addEventListener("click", function () {
        if (localStorage.rus == "0") {
            document.querySelector("#rus span.userName").textContent = "ENG";
            localStorage.rus = "1";
            main_transcript();
        } else if (localStorage.rus == "1") {
            localStorage.rus = "0";
            location.reload();
        };
    });
};


let start = function () {
	if (localStorage.rus === undefined) {
        localStorage.setItem('rus', "0");
    };
    document.body.addEventListener('DOMSubtreeModified', () => {
        if (localStorage.rus == "1" && document.querySelector("#rus") === null && document.querySelector("div.btn-group.pull-right.header-menu") !== null) {
            document.querySelector("div.btn-group.pull-right.header-menu").insertAdjacentHTML('afterbegin', '<a target="_blank" id="rus"><i class="fa fa-globe" aria-hidden="true"></i><span class="userName">ENG</span></a>');
            main_transcript();
            eventer();
        } else if (localStorage.rus == "0" && document.querySelector("#rus") === null && document.querySelector("div.btn-group.pull-right.header-menu") !== null) {
            document.querySelector("div.btn-group.pull-right.header-menu").insertAdjacentHTML('afterbegin', '<a target="_blank" id="rus"><i class="fa fa-globe" aria-hidden="true"></i><span class="userName">RUS</span></a>');
            eventer();
        };
    });
};
start();