// získání get parametrů

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// element s výsledky

const resultsElement = document.querySelector('#seznam');

// procházím parametry a jejich výpis

for (const entry of urlParams.entries()) {
    let listItemElement = document.createElement('li');
    listItemElement.innerHTML = `${entry[0]}: ${entry[1]} `;
    resultsElement.appendChild(listItemElement);

}