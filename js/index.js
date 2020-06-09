let arrGroupOne = [
  { id: 1, name: 'Student 1.1' },
  { id: 2, name: 'Student 1.2' },
  { id: 3, name: 'Student 1.3' },
  { id: 4, name: 'Student 1.4' },
  { id: 5, name: 'Student 1.5' },
];

let arrGroupTwo = [
  { id: 1, name: 'Student 2.1' },
  { id: 2, name: 'Student 2.2' },
  { id: 3, name: 'Student 2.3' },
];

let arrGroupThree = [
  { id: 1, name: 'Student 3.1' },
  { id: 2, name: 'Student 3.2' },
  { id: 3, name: 'Student 3.3' },
  { id: 4, name: 'Student 3.4' },
];

let arrGroupOneLessonOne = [];

let arrGroupTwoLessonOne = [];

let arrGroupThreeLessonOne = [];

let arrGroupOneLessonTwo = [];

let arrGroupTwoLessonTwo = [];

let arrGroupThreeLessonTwo = [];

let arrGroupOneLessonThree = [];

let arrGroupTwoLessonThree = [];

let arrGroupThreeLessonThree = [];

function clickSelect() {
  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    if (arrGroupOneLessonOne.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    if (arrGroupOneLessonTwo.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    if (arrGroupOneLessonThree.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    if (arrGroupTwoLessonOne.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    if (arrGroupTwoLessonTwo.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    if (arrGroupTwoLessonThree.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    if (arrGroupThreeLessonOne.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    if (arrGroupThreeLessonTwo.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    if (arrGroupThreeLessonThree.length === 0) {
      getHtml();
    } else {
      getHtmlSave();
    }
  }
}

function getHtmlSave() {
  let element = document.getElementById('chouseForm');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let tmpArray = [];
  let tempArray = [];

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    tmpArray = arrGroupOneLessonOne.slice();
    tempArray = arrGroupOne.slice();
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    tmpArray = arrGroupOneLessonTwo.slice();
    tempArray = arrGroupOne.slice();
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    tmpArray = arrGroupOneLessonThree.slice();
    tempArray = arrGroupOne.slice();
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    tmpArray = arrGroupTwoLessonOne.slice();
    tempArray = arrGroupTwo.slice();
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    tmpArray = arrGroupTwoLessonTwo.slice();
    tempArray = arrGroupTwo.slice();
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    tmpArray = arrGroupTwoLessonThree.slice();
    tempArray = arrGroupTwo.slice();
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    tmpArray = arrGroupThreeLessonOne.slice();
    tempArray = arrGroupThree.slice();
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    tmpArray = arrGroupThreeLessonTwo.slice();
    tempArray = arrGroupThree.slice();
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    tmpArray = arrGroupThreeLessonThree.slice();
    tempArray = arrGroupThree.slice();
  }

  let createElTopic = document.createElement('div');
  createElTopic.setAttribute('id', 'topicText');
  createElTopic.setAttribute('style', 'font-size: larger;');
  createElTopic.innerHTML = `Topic: ${tmpArray[0]}`;
  chouseForm.appendChild(createElTopic);

  let createChSt = document.createElement('div');
  createChSt.setAttribute('class', 'chouseStudent');

  let createRowTitle = document.createElement('div');
  createRowTitle.classList.add('rowTitle');

  let createSt = document.createElement('div');
  createSt.classList.add('student');
  createSt.innerHTML = 'Name';

  let createIsPresent = document.createElement('div');
  createIsPresent.classList.add('isPresent');
  createIsPresent.innerHTML = 'Is present';

  createRowTitle.appendChild(createSt);
  createRowTitle.appendChild(createIsPresent);

  chouseForm.appendChild(createRowTitle);

  for (let i = 0; i < tempArray.length; i++) {
    let createElementMain = document.createElement('div');
    createElementMain.classList.add('rowTitle');

    let createElementSt = document.createElement('div');
    createElementSt.classList.add('student');
    createElementSt.innerHTML = tempArray[i].name;

    let createElementPr = document.createElement('div');
    createElementPr.classList.add('isPresent');

    if (tmpArray[i + 1] === true) {
      createElementPr.innerHTML = 'present';
    }

    createElementMain.appendChild(createElementSt);
    createElementMain.appendChild(createElementPr);

    chouseForm.appendChild(createElementMain);
  }

  tmpArray = [];
  tempArray = [];
}

function getHtml() {
  let element = document.getElementById('chouseForm');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let createTopic = document.createElement('div');
  createTopic.setAttribute('id', 'topic');

  let createLabel = document.createElement('label');
  createLabel.setAttribute('for', 'topicText');

  let createB = document.createElement('b');
  createB.innerHTML = 'Topic:';

  let createInputLabel = document.createElement('input');
  createInputLabel.setAttribute('type', 'text');
  createInputLabel.setAttribute('id', 'topicText');

  let createBtn = document.createElement('button');
  createBtn.setAttribute('id', 'saveBtn');
  createBtn.setAttribute('onclick', 'mySave()');
  createBtn.innerHTML = 'SAVE';

  let createChouseTop = document.createElement('div');
  createChouseTop.setAttribute('id', 'chouseStudent');

  let createRowTop = document.createElement('div');
  createRowTop.setAttribute('class', 'rowTitle');

  let createStTop = document.createElement('div');
  createStTop.setAttribute('class', 'student');
  createStTop.innerHTML = 'Name';

  let createPrTop = document.createElement('div');
  createPrTop.setAttribute('class', 'isPresent');
  createPrTop.innerHTML = 'Is present';

  createRowTop.appendChild(createStTop);
  createRowTop.appendChild(createPrTop);

  createChouseTop.appendChild(createRowTop);

  createLabel.appendChild(createB);
  createTopic.appendChild(createLabel);
  createTopic.appendChild(createInputLabel);

  chouseForm.appendChild(createTopic);
  chouseForm.appendChild(createChouseTop);

  let tmpArr = [];

  if (selectOptionGroup.value === 'group1') {
    tmpArr = arrGroupOne.slice();
  } else if (selectOptionGroup.value === 'group2') {
    tmpArr = arrGroupTwo.slice();
  } else if (selectOptionGroup.value === 'group3') {
    tmpArr = arrGroupThree.slice();
  }

  for (let i = 0; i < tmpArr.length; i++) {
    let createElementMain = document.createElement('div');
    createElementMain.classList.add('rowTitle');

    let createElementSt = document.createElement('div');
    createElementSt.classList.add('student');
    createElementSt.innerHTML = tmpArr[i].name;

    let createElementPr = document.createElement('div');
    createElementPr.classList.add('isPresent');

    let createElementCheck = document.createElement('input');
    createElementCheck.classList.add('check');
    createElementCheck.setAttribute('type', 'checkbox');

    createElementPr.appendChild(createElementCheck);
    createElementMain.appendChild(createElementSt);
    createElementMain.appendChild(createElementPr);
    chouseForm.appendChild(createElementMain);
  }

  chouseForm.appendChild(createBtn);

  tmpArr = [];
}

function mySave() {
  if (topicText.value.length === 0) {
    topicText.style.border = 'red solid';
    return false;
  }

  let test = document.getElementsByClassName('check');

  let tmp = [];

  tmp.push(topicText.value);

  for (let i = 0; i < test.length; i++) {
    tmp.push(test[i].checked);
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    arrGroupOneLessonOne = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    arrGroupOneLessonTwo = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group1' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    arrGroupOneLessonThree = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    arrGroupTwoLessonOne = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    arrGroupTwoLessonTwo = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group2' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    arrGroupTwoLessonThree = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson1'
  ) {
    arrGroupThreeLessonOne = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson2'
  ) {
    arrGroupThreeLessonTwo = tmp.slice();
  }

  if (
    selectOptionGroup.value === 'group3' &&
    selectOptionLesson.value === 'lesson3'
  ) {
    arrGroupThreeLessonThree = tmp.slice();
  }

  let element = document.getElementById('chouseForm');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  tmp = [];
}
