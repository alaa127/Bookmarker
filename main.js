var nameInput = document.getElementById("name");
var urlInput = document.getElementById("websiteURL");
var submitBtn= document.getElementById("submitBtn");
var tableInput = document.getElementById("tableContent");

var bookMarks=[];
 
submitBtn.onclick = function(){
    var bookMarks ={ 
        url: urlInput,
        name: nameInput.Value

    }
    bookMarks.push(bookMarks);
    console.log(bookMarks);
    localStorage.setItem("bookMarks",JSON.stringify(bookMarks))
}


function addWebsite() {
    if (vaildateInput(nameInput.value, url.value)) {
        var site = {
            name: nameInput.value,
            url: url.value
        }
        allSites.push(site);
        localStorage.setItem('allSites', JSON.stringify(allSites));
        displaySites();
        clearForm();
    } 
}

function deleteWesite(index) {
    allSites.splice(index, 1);
    localStorage.setItem('allSites', JSON.stringify(allSites));
    displaySites();
}
function addOrUpdateButton() {
    if (document.getElementById('submitBtn').innerHTML == 'Update') {
        updateInArray();
        document.getElementById('submitBtn').innerHTML = 'Submit';
        clearForm();
    } else {
        addWebsite();
    }
    
}
function clearForm() {
    nameInput.value ='';
    url.value = '';
}
function displaySites() {
    var content = '';
    for (var i = 0; i < allSites.length; i++) {
        content += `<tr> 
        <td> ${i}</td>
        <td> ${allSites[i].name}</td>
        <td> 
            <button onclick='goToUrl(${i})' class="btn btn-success" data-index="0">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
            </button>
        </td>
        <td> 
            <button onclick='updateWebsite(${i})' class="btn btn-success" data-index="0">
                    <i class="fa-solid fa-pen pe-2"></i>Update
            </button>
        </td>
        <td> 
        <button onclick='deleteWesite(${i})' class="btn btn-danger pe-2 delete-btn" data-index="0">
            <i class="fa-solid fa-trash-can"></i>
                Delete
        </button>
        </td>
        </tr>`;
    }
    table.innerHTML = content;
}


