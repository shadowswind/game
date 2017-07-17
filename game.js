function suijishu() {
    var arr = [];
    arr.length = 4;
    arr[0] = parseInt(Math.random() * 10);
    arr[1] = parseInt(Math.random() * 10);
    while (arr[1] === arr[0]) {
        arr[1] = parseInt(Math.random() * 10);
    }
    arr[2] = parseInt(Math.random() * 10);
    while (arr[2] === arr[0] || arr[2] === arr[1]) {
        arr[2] = parseInt(Math.random() * 10);
    }
    arr[3] = parseInt(Math.random() * 10);
    while (arr[3] === arr[0] || arr[3] === arr[1] || arr[3] === arr[2]) {
        arr[3] = parseInt(Math.random() * 10);
    }
    return arr;
}

    function guess(collction) {
    var A = 0;
    var B = 0;
    var arr = suijishu();
    for (var i = 0; i < 4; i++) {
        if (arr[i] === collction[i]) {
            A = A + 1;
        }
    }
    for (var i = 0; i < 4; i++) {
        if (collction.indexOf(arr[i]) > -1 && collction.indexOf(arr[i]) !== i) {
                B = B + 1;
        }
    }
    return "Random number is " + arr +" Your grade is "+ A + "A" + B + "B"
}
