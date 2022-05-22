(() => {
  let studentsArr = [
    {name: 'Борис', surname: 'Годунов', middlename: 'Федорович', dateOfBirth: new Date('1995.02.07'), startOfStudy: '2010', faculty: 'Ядерной физики'},
    {name: 'Иван', surname: 'Яковлев', middlename: 'Иванович', dateOfBirth: new Date('1989.10.31'), startOfStudy: '2017', faculty: 'Архитектурный'},
    {name: 'Сидор', surname: 'Александров', middlename: 'Сидорович', dateOfBirth: new Date('1992.04.29'), startOfStudy: '2018', faculty: 'Исторический'},
    {name: 'Александр', surname: 'Кузьмин', middlename: 'Васильевич', dateOfBirth: new Date('2009.07.06'), startOfStudy: '2020', faculty: 'Психологии'},
    {name: 'Алла', surname: 'Пугачева', middlename: 'Борисовна', dateOfBirth: new Date('1967.03.28'), startOfStudy: '2006', faculty: 'Менеджмент'}
  ];


  //СОЗДАНИЕ ФОРМЫ И ТАБЛИЦЫ

  function createFilterForm() {
    const filterSection = document.querySelector('.filter__container');
    const inputGroupFilter = document.createElement('div');
    const sectionTitle = document.createElement('h2');
    const inputFullnameFilter = document.createElement('input');
    const inputFacultyFilter = document.createElement('input');
    const inputStartStudyFilter = document.createElement('input');
    const inputEndStudyFilter = document.createElement('input');

    sectionTitle.textContent = 'Фильтр:';
    inputFullnameFilter.placeholder = 'По фамилии, имени и отчеству';
    inputFacultyFilter.placeholder = 'По наименованию факультета';
    inputStartStudyFilter.placeholder = 'По году начала обучения';
    inputEndStudyFilter.placeholder = 'По году окончания обучения';

    sectionTitle.classList.add('section__title');
    inputGroupFilter.classList.add('input-group', 'input-group-filter');
    inputFullnameFilter.classList.add('form-control', 'col-3', 'filter__input');
    inputFacultyFilter.classList.add('form-control', 'col-3', 'filter__input');
    inputStartStudyFilter.classList.add('form-control', 'col-3', 'filter__input');
    inputEndStudyFilter.classList.add('form-control', 'col-3', 'filter__input');

    inputFullnameFilter.type = 'text';
    inputFacultyFilter.type = 'text';
    inputStartStudyFilter.type = 'number';
    inputEndStudyFilter.type = 'number';

    inputFullnameFilter.id = 'filter-fullname';
    inputFacultyFilter.id = 'filter-faculty';
    inputStartStudyFilter.id = 'filter-startstudy';
    inputEndStudyFilter.id = 'filter-endstudy';

    inputGroupFilter.append(inputFullnameFilter);
    inputGroupFilter.append(inputFacultyFilter );
    inputGroupFilter.append(inputStartStudyFilter);
    inputGroupFilter.append(inputEndStudyFilter);
    filterSection.append(sectionTitle);
    filterSection.append(inputGroupFilter);

  }
  createFilterForm();

  function createAddStudentForm() {

    const formSection = document.querySelector('.form__container');
    const form = document.createElement('form');
    const inputGroup1 = document.createElement('div');
    const inputGroup2 = document.createElement('div');
    const inputGroup3 = document.createElement('div');
    const inputGroup4 = document.createElement('div');
    const inputGroup5 = document.createElement('div');
    const inputGroup6 = document.createElement('div');
    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputMiddlename = document.createElement('input');
    const inputBirthday = document.createElement('input');
    const inputStudy = document.createElement('input');
    const inputFaculty = document.createElement('input');
    const button = document.createElement('button');

    const labelName = document.createElement('label');
    const labelSurname = document.createElement('label');
    const labelMiddlename = document.createElement('label');
    const labelBirthday = document.createElement('label');
    const labelStudy = document.createElement('label');
    const labelFaculty = document.createElement('label');


    button.setAttribute('aria-label', 'Добавить студента');

    labelName.textContent = 'Имя';
    labelSurname.textContent = 'Фамилия';
    labelMiddlename.textContent = 'Отчество';
    labelBirthday.textContent = 'Дата рождения';
    labelStudy.textContent = 'Год начала обучения';
    labelFaculty.textContent = 'Факультет';
    button.textContent = 'Добавить студента';

    inputName.placeholder = 'Введите имя';
    inputSurname.placeholder = 'Введите фамилию';
    inputMiddlename.placeholder = 'Введите отчество';
    inputFaculty.placeholder = 'Введите название факультета';

    inputName.type = 'text';
    inputSurname.type = 'text';
    inputMiddlename.type = 'text';
    inputBirthday.type = 'date';
    inputStudy.type = 'number';
    button.type = 'submit';

    form.classList.add('d-flex', 'flex-wrap');
    inputGroup1.classList.add('col-4');
    inputGroup2.classList.add('col-4');
    inputGroup3.classList.add('col-4');
    inputGroup4.classList.add('col-4');
    inputGroup5.classList.add('col-4');
    inputGroup6.classList.add('col-4');
    inputName.classList.add('form-control', 'form__input-name', 'form__input-text');
    inputSurname.classList.add('form-control', 'form__input-surname', 'form__input-text');
    inputMiddlename.classList.add('form-control', 'form__input-middlename', 'form__input-text');
    inputBirthday.classList.add('form-control', 'form__input-date');
    inputStudy.classList.add('form-control', 'form__input-number');
    inputFaculty.classList.add('form-control', 'form__input-faculty', 'form__input-text');
    button.classList.add('btn', 'btn-primary');

    labelName.append(inputName);
    labelSurname.append(inputSurname);
    labelMiddlename.append(inputMiddlename);
    labelBirthday.append(inputBirthday);
    labelStudy.append(inputStudy);
    labelFaculty.append(inputFaculty);
    inputGroup1.append(labelName);
    inputGroup2.append(labelSurname);
    inputGroup3.append(labelMiddlename);
    inputGroup4.append(labelBirthday);
    inputGroup5.append(labelStudy);
    inputGroup6.append(labelFaculty);
    form.append(inputGroup1);
    form.append(inputGroup2);
    form.append(inputGroup3);
    form.append(inputGroup4);
    form.append(inputGroup5);
    form.append(inputGroup6);
    form.append(button);
    formSection.append(form);

    return { form, inputName, inputSurname, inputMiddlename, inputBirthday, inputStudy, inputFaculty, button }
  }
  createAddStudentForm();

  function createTableHeader() {
    const tableSection = document.querySelector('.table__container');
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const trHeader = document.createElement('tr');
    const thHeader1 = document.createElement('th');
    const thHeader2 = document.createElement('th');
    const thHeader3 = document.createElement('th');
    const thHeader4 = document.createElement('th');
    const btnHeader1 = document.createElement('button');
    const btnHeader2 = document.createElement('button');
    const btnHeader3 = document.createElement('button');
    const btnHeader4 = document.createElement('button');

    table.classList.add('table');
    trHeader.classList.add('row', 'justify-content-center');
    thHeader1.classList.add('col', 'table__header');
    thHeader2.classList.add('col', 'table__header');
    thHeader3.classList.add('col', 'table__header');
    thHeader4.classList.add('col', 'table__header');
    btnHeader1.classList.add('btn', 'btn-light', 'table__btn', 'table__btn--1');
    btnHeader2.classList.add('btn', 'btn-light', 'table__btn', 'table__btn--2');
    btnHeader3.classList.add('btn', 'btn-light', 'table__btn', 'table__btn--3');
    btnHeader4.classList.add('btn', 'btn-light', 'table__btn', 'table__btn--4');
    btnHeader1.dataset.column = 'fullname';
    btnHeader2.dataset.column = 'faculty';
    btnHeader3.dataset.column = 'birthday';
    btnHeader4.dataset.column = 'study';

    btnHeader1.textContent = 'Фамилия Имя Отчество';
    btnHeader2.textContent = 'Факультет';
    btnHeader3.textContent = 'Дата рождения (возраст)';
    btnHeader4.textContent = 'Годы обучения';

    thHeader1.append(btnHeader1);
    thHeader2.append(btnHeader2);
    thHeader3.append(btnHeader3);
    thHeader4.append(btnHeader4);
    trHeader.append(thHeader1);
    trHeader.append(thHeader2);
    trHeader.append(thHeader3);
    trHeader.append(thHeader4);
    tableHead.append(trHeader);
    table.append(tableHead);
    tableSection.append(table);


    return {
      table,
      trHeader,
      thHeader1,
      thHeader2,
      thHeader3,
      thHeader4,
      btnHeader1,
      btnHeader2,
      btnHeader3,
      btnHeader4
    };
  }
  createTableHeader();

  function createTableContent(arr) {

    if (document.querySelector('tbody')) {
      document.querySelector('tbody').remove();
    }

    const tableBody = document.createElement('tbody');
    tableBody.id = 'tableBody';

    for (item of arr) {
      const tableBodyRow = document.createElement('tr');
      const tableBodyTd1 = document.createElement('td');
      const tableBodyTd2 = document.createElement('td');
      const tableBodyTd3 = document.createElement('td');
      const tableBodyTd4 = document.createElement('td');

      tableBodyRow.classList.add('row', 'justify-content-center');
      tableBodyTd1.classList.add('col');
      tableBodyTd2.classList.add('col');
      tableBodyTd3.classList.add('col');
      tableBodyTd4.classList.add('col');

      tableBodyTd1.dataset.td = 'fullname';
      tableBodyTd2.dataset.td = 'faculty';
      tableBodyTd3.dataset.td = 'birthday';
      tableBodyTd4.dataset.td = 'study';

      tableBody.append(tableBodyRow);
      tableBodyRow.append(tableBodyTd1);
      tableBodyRow.append(tableBodyTd2);
      tableBodyRow.append(tableBodyTd3);
      tableBodyRow.append(tableBodyTd4);

      function getFullname(item) {
        return item.surname + ' ' + item.name + ' ' + item.middlename;
      }

      tableBodyTd1.textContent = getFullname(item);
      tableBodyTd2.textContent = item.faculty;

      let now = new Date();
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      //РАСЧЕТ ВОЗРАСТА СТУДЕНТА
      let birthday = new Date(item.dateOfBirth);
      let birthdayInThisYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
      let age = today.getFullYear() - birthday.getFullYear();

      if (today < birthdayInThisYear) {
        age = age - 1;
      }

      tableBodyTd3.textContent = `${birthday.toLocaleDateString()} (${age} лет)`

      // РАСЧЕТ СРОКА ОБУЧЕНИЯ
      let startOfStudy = new Date(item.startOfStudy);
      let startOfStudyYear = startOfStudy.getFullYear();

      let endOfStudy = new Date(startOfStudy.setFullYear(startOfStudyYear + 4));
      let endOfStudyYear = endOfStudy.getFullYear();

      let diff = Math.floor(now.getTime() - startOfStudy.getTime());
      const day = 1000 * 60 * 60 * 24;
      let days = Math.floor(diff/day);
      let month = Math.floor(days/31);
      let years = Math.floor(month/12)

      if (years > 0) {
        tableBodyTd4.textContent = `${startOfStudyYear}-${endOfStudyYear} (Закончил)`;
      } else {
        tableBodyTd4.textContent = `${startOfStudyYear}-${endOfStudyYear}`;
      }

    }

    document.querySelector('.table').append(tableBody);

    return tableBody;
  }

  // СОРТИРОВКА И ФИЛЬТРАЦИЯ

  const tableBtnFullname = document.querySelector('.table__btn--1');
  const tableBtnFaculty = document.querySelector('.table__btn--2');
  const tableBtnBirthday = document.querySelector('.table__btn--3');
  const tableBtnStudy = document.querySelector('.table__btn--4');
  const inputFilterFaculty = document.getElementById('filter-faculty');
  const inputFilterFullname = document.getElementById('filter-fullname');
  const inputFilterStartStudy = document.getElementById('filter-startstudy');
  const inputFilterEndStudy = document.getElementById('filter-endstudy');
  const inputFilters = document.querySelector('.input-group-filter');

  function render(arr) {
    //копия исходного массива
    let studentsCopy = [...arr];//

    // прослушивание событий клик для сортировки
    tableBtnFullname.addEventListener('click', () => {
      sortFullname(studentsCopy);
      createTableContent(studentsCopy);
    })

    tableBtnFaculty.addEventListener('click', () => {
      sortFaculty(studentsCopy);
      createTableContent(studentsCopy);
    })

    tableBtnBirthday.addEventListener('click', () => {
      sortDateOfBirth(studentsCopy);
      createTableContent(studentsCopy);
    })

    tableBtnStudy.addEventListener('click', () => {
      sortDateOfStudy(studentsCopy);
      createTableContent(studentsCopy);
    })

    //ФИЛЬТРАЦИЯ
    document.querySelector('.input-group-filter').addEventListener('keyup', () => {
      let str = '';
      studentsCopy = [...arr];
      if (str = inputFilterFullname.value.trim().toLowerCase()) {
        studentsCopy = studentsCopy.filter(item => (item.name + item.surname + item.middlename).toLowerCase().includes(str));
      }
      if (str = inputFilterFaculty.value.trim().toLowerCase()) {
        studentsCopy = studentsCopy.filter(item => item.faculty.toLowerCase().includes(str))
      }
      if (str = inputFilterStartStudy.value.trim()) {
        studentsCopy = studentsCopy.filter(item => item.startOfStudy.includes(str));
      }
      if (str = inputFilterEndStudy.value.trim()) {
        studentsCopy = studentsCopy.filter(({startOfStudy}) => +startOfStudy + 4 == str)
      }
      createTableContent(studentsCopy);
    })
  }
  // СОРТИРОВКА

  function sortFullname(arr) {
    arr.sort((a, b) => {
      let fullnameA = `${a.surname.toLowerCase()}${a.name.toLowerCase()}${a.middlename.toLowerCase()}`;
      let fullnameB = `${b.surname.toLowerCase()}${b.name.toLowerCase()}${b.middlename.toLowerCase()}`;
      if (fullnameA < fullnameB) {
        return -1;
      }
    });
  }

  function sortFaculty(arr) {
    arr.sort((a, b) => {
      if (a.faculty.toLowerCase() < b.faculty.toLowerCase()) {
        return -1;
      }
    })
  }

  function sortDateOfBirth(arr) {
    arr.sort((a, b) => {
      return new Date(b.dateOfBirth) - new Date(a.dateOfBirth);
    })
  }

  function sortDateOfStudy(arr) {
    arr.sort((a, b) => {
      return new Date(a.startOfStudy) - new Date(b.startOfStudy);
    })
  };

  //ВАЛИДАЦИЯ ФОРМЫ
  const form = document.querySelector('form');
  let inputsText = document.querySelectorAll('.form__input-text');
  let inputName = document.querySelector('.form__input-name');
  let inputSurname = document.querySelector('.form__input-surname');
  let inputMiddlename = document.querySelector('.form__input-middlename');
  let inputBirthday = document.querySelector('.form__input-date');
  let inputStudy = document.querySelector('.form__input-number');
  let inputFaculty = document.querySelector('.form__input-faculty');
  let inputs = form.querySelectorAll('.form-control');
  let button = form.querySelector('.btn-primary');
  let date = new Date();
  //удалить лишнюю валидацию
  function removeValidation() {
    let errors = document.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
  }
  //создание сообщения об ошибке
  let generateErrorMessage = function (text) {
    let error = document.createElement('div');
    error.classList.add('error', 'col-12');
    error.style.color = 'red';
    error.textContent = text;
    return error;
  }

  function checkAndShowErrors(arr, error) {
    arr.push(error);
    if (arr.length > 0 && arr.length < 2) {
      form.insertBefore(error, button);
    } else {
      error.remove();
    }
  }

  function validationForm() {
    //ДЛЯ ПУСТЫХ ПОЛЕЙ
    let emptyErrorArr = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
        let error = generateErrorMessage('Все поля обязательны для заполнения');
        inputs[i].classList.add('is-invalid');//
        checkAndShowErrors(emptyErrorArr, error);
      }
    }
    // ВАЛИДАЦИЯ ПО ДЛИНЕ СТРОКИ И ПО НАЛИЧИЮ ЦИФР И АНГЛ БУКВ В ТЕКСТОВОМ ПОЛЕ
    let lengthErrorArr = [];
    let letters = /[А-Яа-яЁё ]+/;
    let textErrorArr = [];
    for (let i = 0; i < inputsText.length; i++) {
      if ((inputsText[i].value.trim().length >= 1) && (inputsText[i].value.trim().length < 2)) {
        let error = generateErrorMessage('Минимальная длина 2 символа');
        inputsText[i].classList.add('is-invalid');//
        checkAndShowErrors(lengthErrorArr, error);
      }
      if (!inputsText[i].value.match(letters)) {
        let error = generateErrorMessage('Поле должно содержать только буквы кириллицы');
        inputsText[i].classList.add('is-invalid');//
        checkAndShowErrors(textErrorArr, error);
      }
    }
    //ВАЛИДАЦИЯ ДАТЫ РОЖДЕНИЯ
    if ((inputBirthday.valueAsDate < new Date('01.01.1900')) || (inputBirthday.valueAsDate > date)) {
      let error = generateErrorMessage('Введите дату рождения в диапазоне от 01.01.1900г. до сегодняшней даты');
      form.insertBefore(error, button);
    }
    //ВАЛИДАЦИЯ ГОДА НАЧАЛА ОБУЧЕНИЯ
    if ((inputStudy.value < 2000) || (inputStudy.value > date.getFullYear())) {
      let error = generateErrorMessage('Введите год начала обучения в диапазоне от 2000-го года до текущего года');
      form.insertBefore(error, button);
    }
  }

  function createNewStudent(arr) {

    let student = {};

    student.name = inputName.value;
    student.surname = inputSurname.value;
    student.middlename = inputMiddlename.value;
    student.dateOfBirth = inputBirthday.valueAsDate;
    student.startOfStudy = inputStudy.value;
    student.faculty = inputFaculty.value;

    arr.push(student);

    return arr;
  }

  // СОБЫТИЕ - ОТПРАВКА ФОРМЫ
  form.addEventListener('submit', function (event) {

    event.preventDefault();

    removeValidation();
    validationForm();

    let errors = form.querySelectorAll('.error');
    if (errors.length === 0) {

      form.classList.add('was-validated');

      createNewStudent(studentsArr);
      createTableContent(studentsArr);//
      render(studentsArr);

      //очищаю поле после отправки формы
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
      }
    }
  })

  createTableContent(studentsArr);
  render(studentsArr);


})();
