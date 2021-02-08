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

// const actualizarFiltros = () => {
//     $('#canvas-meme').style.filter = `${$('#brightness-slider').value}`;
//     $('#canvas-meme').style.filter = `${$('#opacity-slider').value}`;
//     $('#canvas-meme').style.filter = `${$('#blur-slider').value}px`;
//     $('#canvas-meme').style.filter = `${$('#contrast-slider').value}%`;
//     $('#canvas-meme').style.filter = `${$('#grayscale-slider').value}%`;
//     $('#canvas-meme').style.filter = `${$('#hue-rotate').value}deg`;
//     $('#canvas-meme').style.filter = `${$('#sepia-slider').value}%`;
//     $('#canvas-meme').style.filter = `${$('#saturate-slider').value}%`;
//     $('#canvas-meme').style.filter = `${$('#invert-slider').value}`;
// };

// const imgFilters = () => {
//     $('#brightness').addEventListener('change', actualizarFiltros);
//     $('#opacity').addEventListener('change', actualizarFiltros);
//     $('#blur').addEventListener('change', actualizarFiltros);
//     $('#contrast').addEventListener('change', actualizarFiltros);
//     $('#grayscale-slider').addEventListener('change', actualizarFiltros);
//     $('#sepia-slider').addEventListener('change', actualizarFiltros);
//     $('#hue-rotate').addEventListener('change', actualizarFiltros);
//     $('#saturate-slider').addEventListener('change', actualizarFiltros);
//     $('#invert-slider').addEventListener('change', actualizarFiltros);
// };
// imgFilters();

// $('#canvas-meme').addEventListener('change', () => {
//     if (){

//     }
// })

// DEFAULT FILTERS BUTTON 

$('#default-filters-button').addEventListener('click', () => {
    $('#brightness').value = 1
    $('#opacity').value = 1
    $('#blur').value = 0
    $('#contrast').value = 100
    $('#grayscale').value = 0
    $('#sepia').value = 0
    $('#hue').value = 0
    $('#saturation').value = 100
    $('#invert').value = 0
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