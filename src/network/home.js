import { param } from "jquery";
import { request } from "./request";
export function getHomeMultdata() {
    return request({
            url: 'http://123.207.32.32:8000/home/multidata',
          })
}
export function getHomegoods(type,page) {
    const $ = require('jquery')
    return $.getJSON('https://list.mogu.com/search?callback=?&sort='+type+'&page='+page)
}
    