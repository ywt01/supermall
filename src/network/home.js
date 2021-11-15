const $ = require('jquery')
export function getHomeMultdata() {
    return $.getJSON('//123.207.32.32:8000/home/multidata')
}
export function getHomegoods(type,page) {
    return $.getJSON('//list.mogu.com/search?callback=?&sort='+type+'&page='+page)
}
    