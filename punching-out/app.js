const request = 'https://punsh-master.firebaseio.com/data/punshes.json';

function obtainData() {
   
    $.get(request)
        .then(attachPunshesEvents)
        .catch(ajaxError)
}

obtainData();

function obtainSecondTimeData() {
    $.get(request)
        .then(attachBackEvents)
        .catch(ajaxError)
}
                  
function renderAllPunshesInHTML(punshes) {
    let navBarItemsDiv = $('<div class="navbar-items">');

    for (let key in punshes) {
        let punsh = punshes[key];
        let h4 = $('<h4>'+ punsh['name'] +'</h4>')
        let navBarItem = $('<div class="navbar-item">')
            .append(h4);
        navBarItemsDiv
            .append(navBarItem);
    }  

    $('.navbar')
        .append(navBarItemsDiv)  
}

function renderSinglePunshInHTML(punshes, punshName) {
    let contentHeaderDiv = $('<div class="content-header">');
    let punshDataDiv = $('<div class="punsh-data">');
    $('.content')
        .append(contentHeaderDiv)
        .append(punshDataDiv)    
    
        for (let key in punshes) {
            let punsh = punshes[key];
            if (punshName === punsh['name']) {
                let contentHeadingDiv = $('<div class="content-heading">' + punsh['name'] + '</div>').css( 'cursor', 'pointer' );
                let punshTypeDiv = $('<div class="punsh-type">')
                    .append('<label>Type: </label>')
                    .append('<h6>'+ punsh['type'] +'</h6>');
                let punshContentsDiv = $('<div class="punsh-contents">')
                    .append('<label>Contents: </label>')
                    .append('<p>' + punsh['contents'] + '</p>');
                let punshDescriptionDiv = $('<div class="punsh-description">')
                    .append('<label>Description: </label>')
                    .append('<p>'+ punsh['description'] +'</p>');
            
                contentHeaderDiv
                    .append(contentHeadingDiv);
                punshDataDiv
                    .append(punshTypeDiv)
                    .append(punshContentsDiv)
                    .append(punshDescriptionDiv);        
            }
        }
}

function attachPunshesEvents(punshes) {
    renderAllPunshesInHTML(punshes)
    $(document).ready(function() {
        $('.navbar-item').click(function(event) {
            event.preventDefault()
            $('.navbar-items').remove();
            let clickedPunshName = $(this).text();
            renderSinglePunshInHTML(punshes, clickedPunshName);
            obtainSecondTimeData();
        });
    });  
}

function attachBackEvents(punshes) {
    console.log(punshes)
    $(document).ready(function() {
        $('.content-heading').click(function(event) {
            event.preventDefault()
            $('.content').empty();
            attachPunshesEvents(punshes);
        });  
    });
    
}

function ajaxError() {
    $('.content').text('Error Loading');
}