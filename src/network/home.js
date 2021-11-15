const $ = require('jquery')
export function getHomegoods(type,page) {
    return $.getJSON('https://list.mogu.com/search?callback=?&sort='+type+'&page='+page)
}
    