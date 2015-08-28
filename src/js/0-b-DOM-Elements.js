var logo = get('#', 'logo'),
    images = get('tag', 'img'),
    tri = get('#', 'logo-holder'),
    body = get('tag', 'body'),
    topArrow = get('#', 'top-arrow'),
    svgSchematics = get('.', 'cross'),
    header = get('#', 'top'),
    equilateral = equilateral(65, [50, 50], logo),
    mail = "<a href='#contact'>j<span>8</span></a>" +
    "<a href='#contact'><img src='visuals/icons/location.png' />" +
    "</a>protonmail.<span>c</span>h<cite>00000000</cite>";

window.switchState = {};
