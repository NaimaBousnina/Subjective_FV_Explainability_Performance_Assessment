const max_it = 5000;

module.exports = {
    get_order: function (pairs_ref) {
        var res = try_get_order(pairs_ref);
        while (res.length == 0) {
            res = try_get_order(pairs_ref)
        }
        //console.log('res', res);
        return res;
    }
}

function try_get_order(pairs_ref) {
    var items = Array.from({ length: pairs_ref.length }, (_, i) => i);
    random_order = [],
        items_length = items.length,
        j = 0;

    while (items_length--) {
        j = Math.floor(Math.random() * (items_length + 1));
        random_order.push(items[j]);
        items.splice(j, 1);
    }
    return random_order
}