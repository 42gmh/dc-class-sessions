const requiredFields = [
    { label: 'Animal',      id:'animal' },
    { label: 'Country',     id: 'country' },
    { label: 'Plural Noun', id: 'pluralNoun' },
    { label: 'Food',        id: 'food' },
    { label: 'Device',      id: 'device' },
    { label: 'Noun',        id: 'noun' },
    { label: 'Adjective',   id: 'adjective' }
];

const formElement = getElem("my-form");
const madLibStory = getElem("madLibStory");
const madLibForm = getElem("madLibForm");
const errs = getElem("errs");

addRequiredFields();

getElem("btn-submit").addEventListener('click', () => {
    hideElem(errs);

    let emptyFields = requiredFields.filter((afield) => !(getElem(afield.id).value)).map((aField) => aField.label);
    console.log(emptyFields);
    if(emptyFields.length){
        errs.textContent = "Please provide values for: " + emptyFields.toString();
        showElem(errs);
    }
    else{
        substituteText();
        showElem(madLibStory)
        hideElem(madLibForm);
    }
});

getElem("btn-clear").addEventListener('click', () => {
    madLibForm.reset();
    hideElem(errs);
});

getElem("btn-restart").addEventListener('click', () => {
    showElem(madLibForm)
    hideElem(madLibStory);
    madLibForm.reset();
});

function substituteText()
{
    requiredFields.forEach(field => {
        let spans = document.getElementsByClassName(field.id);
        for(let i = 0; i < spans.length; i++)
        {
            spans[i].textContent = getElem(field.id).value;
        }
    });
}

function showElem(element)
{
    element.style.display = 'block';
}

function hideElem(element)
{
    element.style.display = 'none';
}

function getElem(elementId)
{
    return document.getElementById(elementId);
}

function addRequiredFields() {
    for(let i = 0; i < requiredFields.length; i++)
    {
        let newLabel = document.createElement("label");
        newLabel.for = requiredFields[i].id;
        newLabel.textContent = requiredFields[i].label;
        formElement.appendChild(newLabel);

        formElement.appendChild(document.createElement("br"));

        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = requiredFields[i].id;
        newInput.id = requiredFields[i].id;
        formElement.appendChild(newInput);         

        formElement.appendChild(document.createElement("br"));
    }
}