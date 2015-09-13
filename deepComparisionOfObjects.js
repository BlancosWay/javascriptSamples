function deepComparision(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
            b == null || typeof b != "object")
        return false;

    var countA = 0, countB = 0;

    for (var prop in a)
        countA += 1;

    for (var prop in b) {
        countB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return countA == countB;
}
