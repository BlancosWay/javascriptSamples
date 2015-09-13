function deepComparision(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
            b == null || typeof b != "object")
        return false;

    var countPropsinA = 0, countPropsinB = 0;

    for (var prop in a)
        countPropsinA += 1;

    for (var prop in b) {
        countPropsB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return countPropsinA == countPropsinB;
}
