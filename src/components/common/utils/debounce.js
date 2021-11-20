let timer = null
export function debounce(func,delay) {
    if(timer) clearTimeout(timer)
    return (function(...args) {
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    })()
}