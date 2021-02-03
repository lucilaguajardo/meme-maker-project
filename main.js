const $ = (x) => document.querySelector(x)

// PANELS //

$('#img-button').addEventListener('click', () => {
    $('#aside-container').style.display = 'flex';
    $('#img-panel-control').classList.remove('hidden');
    $('#text-panel-control').classList.add('hidden');
})

$('#text-button').addEventListener('click', () => {
    $('#aside-container').style.display = 'flex';
    $('#text-panel-control').classList.remove('hidden');
    $('#img-panel-control').classList.add('hidden');
})

// THEMES //

$('#dark-theme-button').addEventListener('click', () => {
    $('#light-theme-button').classList.remove('hidden')
    $('#dark-theme-button').classList.add('hidden')
    document.body.classList.add('dark-theme')
    document.body.classList.remove('light-theme')
})

$('#light-theme-button').addEventListener('click', () => {
    $('#light-theme-button').classList.add('hidden')
    $('#dark-theme-button').classList.remove('hidden')
    document.body.classList.add('light-theme')
    document.body.classList.remove('dark-theme')
})

// TEXT INPUT //

$('#top-text-input').addEventListener ('keyup', () => {
    $('#top-text').innerText = $('#top-text-input').value;
})

$('#bottom-text-input').addEventListener ('keyup', () => {
    $('#bottom-text').innerText = $('#bottom-text-input').value;
})

// IMG URL //

$('#url-img-input').addEventListener ('keyup', () => {
    $('#img-meme').style.backgroundImage = $('url-img-input').value;
    $('#img-meme').style.backgroundPosition = 'center';
});

// NO TEXT CHECKBOXES //

$('#no-top-text-checkbox').addEventListener('change', () => {
    if ($('#no-top-text-checkbox').checked) {
        $('#top-text').classList.add('hidden')
    } else {
        $('#top-text').classList.remove('hidden')
}})

$('#no-bottom-text-checkbox').addEventListener('change', () => {
    if ($('#no-bottom-text-checkbox').checked) {
        $('#bottom-text').classList.add('hidden')
    } else {
        $('#bottom-text').classList.remove('hidden')
}})

// TEXT RESIZE

$('#text-size-input').addEventListener('input', () => {
    $('#top-text').style.fontSize = `${$('#text-size-input').value}px`;
    $('#bottom-text').style.fontSize = `${$('#text-size-input').value}px`;
})  

//  TEXT ALIGN

$('#button-text-align-left').addEventListener ('click', () => {
    $('#top-text').style.textAlign = 'left'
    $('#bottom-text').style.textAlign = 'left'
})

$('#button-text-align-center').addEventListener ('click', () => {
    $('#top-text').style.textAlign = 'center'
    $('#bottom-text').style.textAlign = 'center'
})

$('#button-text-align-right').addEventListener ('click', () => {
    $('#top-text').style.textAlign = 'right'
    $('#bottom-text').style.textAlign = 'right'
})

// TEXT COLOR

$('#text-color-input').addEventListener('input', () => {
    const color = $('#text-color-input').value.toUpperCase();

    $('#text-color').innerText = color;
    $('#top-text').style.color = color;
    $('#bottom-text').style.color = color;
})
  
// DOWNLOAD BUTTON 

$('#download-meme-button').addEventListener('click', () => {
    domtoimage.toBlob(document.getElementById('canvas-meme'))
    .then(function (blob) {
        window.saveAs(blob, 'meme.png')})
})


// DEPENDENCIAS EN README




// $('#text-background-color-input').addEventListener('input', () => {
//     if ($('#text-no-background-checkbox').checked) {
//     const color = $('#text-background-color-input').value
      
//     $('#text-background-color').innerText = color.toUpperCase()
//     $('#top-text').style.backgroundColor = color
//     $('#bottom-text').style.backgroundColor = color
// } else {
//     $('#top-text').style.backgroundColor = 'transparent'
//     $('#bottom-text').style.backgroundColor = 'transparent'
// }})

// noFontBackground.addEventListener('change', (e) => {
//     e.preventDefault();
//     if (noFontBackground.checked) {
//         imageTopTextContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
//         imageBottomTextContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
//         imageTopTextContainer.style.position = 'absolute';
//         imageTopTextContainer.style.top = '0';
//         imageTopTextContainer.style.left = '0';
//         imageBottomTextContainer.style.position = 'absolute';
//         imageBottomTextContainer.style.bottom = '0';
//         imageBottomTextContainer.style.left = '0';
//         imagePerSe.style.backgroundSize = 'cover';
//     } else{
//         imageTopTextContainer.style.backgroundColor = 'white';
//         imageBottomTextContainer.style.backgroundColor = 'white';
//         imageTopTextContainer.style.position = 'static';
//         imageBottomTextContainer.style.position = 'static';
//         imagePerSe.style.backgroundSize = '38em, 100%';

//     }