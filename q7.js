const array = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const object = () => {
    let count = array.reduce((a, el, i) => {
        a[el] == undefined ? a[el] = 1 : a[el]++;
        return a
    }, {})
    console.log(count)
}
object()