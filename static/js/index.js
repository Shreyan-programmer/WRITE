light_mode = document.getElementById('light_mode')
dark_mode = document.getElementById('dark_mode')
navigation_bar = document.getElementsByTagName('nav')[0]

dark_mode.onclick = function() {
    setTimeout(function() {
        light_mode.style.display = 'inline-flex'
        dark_mode.style.display = 'none'
        navigation_bar.style.filter = 'invert(1)'
    }, 180)
}

light_mode.onclick = function() {
    setTimeout(function() {
        light_mode.style.display = 'none'
        dark_mode.style.display = 'inline-block'
        navigation_bar.style.filter = 'invert(0)'
    }, 180)
}