const $ = (x) => document.querySelector(x);

// PANELS //

$('#img-button').addEventListener('click', () => {
    $('#aside-container').style.display = 'flex';
    $('#img-panel-control').classList.remove('hidden');
    $('#text-panel-control').classList.add('hidden');
});

$('#text-button').addEventListener('click', () => {
    $('#aside-container').style.display = 'flex';
    $('#text-panel-control').classList.remove('hidden');
    $('#img-panel-control').classList.add('hidden');
});

// THEMES //

$('#dark-theme-button').addEventListener('click', () => {
    $('#light-theme-button').classList.remove('hidden');
    $('#dark-theme-button').classList.add('hidden');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
})

$('#light-theme-button').addEventListener('click', () => {
    $('#light-theme-button').classList.add('hidden');
    $('#dark-theme-button').classList.remove('hidden');
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
});

// OPEN/CLOSE BUTTON

$('#open-close-button').addEventListener('click', () => {
    if ($('#open-close-button').checked) {
            $('#open-close-button-icon').classList.add('rotate-open');
            $('#open-close-button-icon').classList.remove('rotate-close');
            $('#aside-container').classList.add('aside-translate-close');
            $('#aside-container').classList.remove('aside-translate-open');
            $('#main-container').classList.add('main-translate-close');
            $('#main-container').classList.remove('main-translate-open');
    } else {
            $('#open-close-button-icon').classList.remove('rotate-open');
            $('#open-close-button-icon').classList.add('rotate-close');
            $('#aside-container').classList.remove('aside-translate-close');
            $('#aside-container').classList.add('aside-translate-open');
            $('#main-container').classList.remove('main-translate-close');
            $('#main-container').classList.add('main-translate-open');
}});

// DOWNLOAD BUTTON

$('#download-meme-button').addEventListener('click', () => {
        domtoimage.toBlob($('#canvas-meme'))
        .then(function (blob) {
            window.saveAs(blob, 'meme.png')
        });
});

// IMG URL 

$('#url-img-input').addEventListener('input', () => {
    $('#canvas-meme').style.backgroundImage = `url("${$('#url-img-input').value}")`;
    $('#canvas-meme').style.backgroundPosition = 'center';
    $('#canvas-meme').style.backgroundRepeat = 'no-repeat';
});

window.addEventListener('resize', () => {
    $('#canvas-meme').style.height = `${$('#canvas-meme').getBoundingClientRect().width}px`;
}) ; 

// BACKGROUND BLEND MODE COLOR

$('#blend-mode-color-input').addEventListener('input', () => {
    $('#blend-mode-color').innerText = $('#blend-mode-color-input').value.toUpperCase();
    $('#canvas-meme').style.backgroundColor = $('#blend-mode-color-input').value;
});

// BACKGROUND BLEND MODE SELECT

$('#blend-mode-select').addEventListener('change', () => {
    $('#canvas-meme').style.backgroundBlendMode = $('#blend-mode-select').value;
});

// FILTERS

$('#canvas-meme').addEventListener('change', () => {
    $('#canvas-meme').style.filter =
    `brightness(${$('#brightness-slider').value})
     opacity(${$('#opacity-slider').value})
     blur(${$('#blur-slider').value}px)
     contrast(${$('#contrast-slider').value}%)
     contrast(${$('#contrast-slider').value}%)
     grayscale(${$('#grayscale-slider').value}%)
     hue-rotate(${$('#hue-rotate').value}deg)
     sepia(${$('#sepia-slider').value}%)
     saturate(${$('#saturation-slider').value}%)
     invert(${$('#invert-slider').value})`
})


// const filters = () => {
//     const brightness = $('#brightness-slider').value
//     const opacity = $('#opacity-slider').value
//     const blur = $('#blur-slider').value
//     const contrast = $('#contrast-slider').value
//     const grayscale = $('#grayscale-slider').value
//     const hue = $('#hue-rotate').value
//     const sepia = $('#sepia-slider').value
//     const saturation = $('#saturation-slider').value
//     const invert = $('#invert-slider').value
  
//     $('#canvas-meme').style.filter = 
//     `brightness(${brightness})
//     opacity(${opacity})
//     blur(${blur}px)
//     contrast(${contrast}%)
//     grayscale(${grayscale}%)
//     hue${hue}deg)
//     sepia(${sepia}%)
//     saturation(${saturation}%)
//     invert(${invert})`
// }

// $('#brightness-slider').addEventListener('change', filters)

// $('#opacity-slider').addEventListener('change', filters)

// $('#blur-slider').addEventListener('change', filters)

// $('#contrast-slider').addEventListener('change', filters)

// $('#grayscale-slider').addEventListener('change', filters)

// $('#hue-rotate').addEventListener('change', filters)

// $('#sepia-slider').addEventListener('change', filters)

// $('#saturation-slider').addEventListener('change', filters)

// $('#invert-slider').addEventListener('change', filters)




// DEFAULT FILTERS BUTTON 

$('#default-filters-button').addEventListener('click', () => {
    $('#brightness-slider').value = 1
    $('#opacity-slider').value = 1
    $('#blur-slider').value = 0
    $('#contrast-slider').value = 100
    $('#grayscale-slider').value = 0
    $('#sepia-slider').value = 0
    $('#hue-rotate').value = 0
    $('#saturation-slider').value = 100
    $('#invert-slider').value = 0
});

// TEXT TOOLS //

// TEXT INPUT

$('#top-text-input').addEventListener('keyup', () => {
    $('#top-text').innerText = $('#top-text-input').value;
});

$('#bottom-text-input').addEventListener('keyup', () => {
    $('#bottom-text').innerText = $('#bottom-text-input').value;
});

// NO TEXT CHECKBOXES 

$('#no-top-text-checkbox').addEventListener('change', () => {
    if ($('#no-top-text-checkbox').checked) {
        $('#top-text').classList.add('hidden');
    } else {
        $('#top-text').classList.remove('hidden');
}});

$('#no-bottom-text-checkbox').addEventListener('change', () => {
    if ($('#no-bottom-text-checkbox').checked) {
        $('#bottom-text').classList.add('hidden')
    } else {
        $('#bottom-text').classList.remove('hidden')
}});

// FONT FAMILY

$('#text-font-select').addEventListener('change', () => {
    $('#top-text').style.fontFamily =  $('#text-font-select').value;
    $('#bottom-text').style.fontFamily = $('#text-font-select').value;
});

// TEXT RESIZE

$('#text-size-input').addEventListener('input', () => {
    $('#top-text').style.fontSize = `${$('#text-size-input').value}px`;
    $('#bottom-text').style.fontSize = `${$('#text-size-input').value}px`;
})  ;

//  TEXT ALIGN

$('#button-text-align-left').addEventListener('click', () => {
    $('#top-text').style.textAlign = 'left';
    $('#bottom-text').style.textAlign = 'left';
});

$('#button-text-align-center').addEventListener('click', () => {
    $('#top-text').style.textAlign = 'center';
    $('#bottom-text').style.textAlign = 'center';
});

$('#button-text-align-right').addEventListener('click', () => {
    $('#top-text').style.textAlign = 'right';
    $('#bottom-text').style.textAlign = 'right';
});

// TEXT COLOR

$('#text-color-input').addEventListener('input', () => {
    const color = $('#text-color-input').value.toUpperCase();

    $('#text-color').innerText = color;
    $('#top-text').style.color = color;
    $('#bottom-text').style.color = color;
})

// TEXT BACKGROUND COLOR

$('#text-background-color-input').addEventListener('input', () => {
    const color = $('#text-background-color-input').value.toUpperCase();

    $('#text-background-color').innerText = color;
    $('#top-text').style.backgroundColor = color;
    $('#bottom-text').style.backgroundColor = color;
});

// NO BACKGROUND COLOR CHECKBOX

$('#no-background-text-checkbox').addEventListener('change', () => {
    if ($('#no-background-text-checkbox').checked) {
        $('#top-text').style.backgroundColor = 'transparent';
        $('#bottom-text').style.backgroundColor = 'transparent';
} else {
    $('#top-text').style.backgroundColor = $('#text-background-color-input').value.toUpperCase();
    $('#bottom-text').style.backgroundColor = $('#text-background-color-input').value.toUpperCase();
}});

// LETTER STROKE

$('#no-outline-button').addEventListener('click', () => {
   $('#top-text').style.webkitTextStroke  = 'transparent';
   $('#bottom-text').style.webkitTextStroke = 'transparent';
});

$('#light-outline-button').addEventListener('click', () => {
    $('#top-text').style.webkitTextStroke  = '1px white';
    $('#bottom-text').style.webkitTextStroke = '1px white';
});

$('#dark-outline-button').addEventListener('click', () => {
    $('#top-text').style.webkitTextStroke  = '3px black';
    $('#bottom-text').style.webkitTextStroke = '3px black';
});

// LETTER SPACING

$('#letter-spacing-input').addEventListener('change', () => {
    $('#top-text').style.letterSpacing = `${$('#letter-spacing-input').value}px`;
    $('#bottom-text').style.letterSpacing = `${$('#letter-spacing-input').value}px`;
});

// LINE HEIGHT

$('#line-height-input').addEventListener('change', () => {
    $('#top-text').style.lineHeight = $('#line-height-input').value;
    $('#bottom-text').style.lineHeight = $('#line-height-input').value;
});