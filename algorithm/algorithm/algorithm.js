var bigInt = require('big-integer')

// Basic eculid
const gcd = ( a,  b) => {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

// Extends eculid
function gcdExtended(a, b, x, y) {
    // truong hop dung
    if (a == 0)
    {
        x = 0;
        y = 1;
        return b;
    }
    // goi de quy
    let gcd = gcdExtended(b % a,
                       a, x, y);
    // cap nhat x,y dua tren de quy
    x = y - (b / a) * x;
    y = x;
    return gcd;
}

// Modular exponentiation 
const modPow = (e, n) => {
    e = parseValue(e);
    n = parseValue(n);
    if (n.isZero()) throw new Error("Khong the tinh module voi 0");
    var r = Integer[1],
        base = this.mod(n);
    if (e.isNegative()) {
        e = exp.multiply(Integer[-1]);
        base = base.modInv(n);
    }
    while (e.isPositive()) {
        if (base.isZero()) return Integer[0];
        if (e.isOdd()) r = r.multiply(base).mod(n);
        e = e.divide(2);
        base = base.square().mod(n);
    }
    return r;
}

// Modular Inverse
modInv =  (n) => {
    var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
    while (!newR.isZero()) {
        q = r.divide(newR);
        lastT = t;
        lastR = r;
        t = newT;
        r = newR;
        newT = lastT.subtract(q.multiply(newT));
        newR = lastR.subtract(q.multiply(newR));
    }
    if (!r.isUnit()) throw new Error(this.toString() + " va " + n.toString() + " khong la so nguyen to cung nhau");
    if (t.compare(0) === -1) {
        t = t.add(n);
    }
    if (this.isNegative()) {
        return t.negate();
    }
    return t;
};
