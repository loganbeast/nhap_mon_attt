
//----------------------------------------------------------------------------RSA------------------------------------------------------------------

// tinh toan khoa cong khai va khoa bi mat
// input random e 
n = (p, q) => {
    if (p && q) {
        return new BigNumber(p).multipliedBy(q).toFixed()
    } else return undefined
}
d = (e, m) => {
    if (e && m) {
        return bigInt(e).modInv(m).toString()
    } else return undefined
}
// =>  Khoa cong khai (e,n) =
//     Khoa bi mat (d,n) 

// tinh m = (q-1)(p-1)
m = (p, q) => {
    if (p && q) {
        return new BigNumber(new BigNumber(p).minus(1)).multipliedBy(new BigNumber(q).minus(1)).toFixed()
    } else return undefined
}
g = (e, m) => {
    if (e && m) {
        return gcd(e, m)
    } else return undefined
}
// ma hoa: y = x ^ e mod n
y = (x, n, e) => {
    if (x && e && n) {
        return bigInt(x).modPow(e, n).toString()
    } else return undefined
}
// giai ma: x = y ^ d mod n =
de = (y, d, n) => {
    if (y && d && n) {
        return bigInt(this.y).modPow(d, n).toString()
    } else return undefined
}
