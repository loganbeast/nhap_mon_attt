var bigInt = require('big-integer')
// ma hoa : γ = alpha^k mod p
gamma =  (alpha, k, p) => {
    if (alpha && k && p) {
        return bigInt(alpha).modPow(k, p).toString()
    } else return undefined
}
// ma hoa: delta = x * beta ^ k mod p =
delta = (beta, k , p, x) => {
    if (beta && k && p && x) {
        return bigInt(beta).modPow(k, p).multiply(bigInt(x).modPow(1, p)).modPow(1, p).toString()
    } else return undefined
}
// => nhan duoc ban ma (gamma, delta)


// xu ly chu ky
mod = (x, y) => {
    return x - y * Math.floor(x / y);
}
gamma =  (alpha, k, p) => {
    if (alpha && k && p) {
        return bigInt(alpha).modPow(k, p).toString()
    } else return undefined
}
delta = (alpha, k, p, x, a) => {
    r =  bigInt(alpha).modPow(k, p).toString()
    if (r && k && p) {
        return bigInt(k).modInv(p - 1).multiply(mod(x - a * r, p - 1).toString()).mod(p - 1).toString()
    } else return undefined
}
// => chu ky se co dang (gamma, delta)

// kiem tra chu ky
VT = (beta, p, gamma, delta) => {
    if (beta && p && gamma && delta) {
        return bigInt(beta).modPow(gamma, p).multiply(bigInt(gamma).modPow(delta, p)).mod(p).toString()
    } else return undefined
}
VP = (alpha, p, x) => {
    if (alpha && p && x) {
        return bigInt(alpha).modPow(x, p).toString()
    } else return undefined
},
signature_verify = (VT, VP) => {
    if (VT && VP) {
        return VP === VT
    } else return undefined
}
// ---------------------------------------------------- Xay dung he mat elgamal
// tinh beta
beta = (alpha, a, p) => {
    if (alpha && a && p) {
        return bigInt(alpha).modPow(a, p).toString()
    } else return undefined
}
// ma hoa (gamma, delta)
gamma = (alpha, k , p) => {
    if (alpha && k && p) {
        return bigInt(alpha).modPow(k, p).toString()
    } else return undefined
}
delta = (btea, k, x, p) => {
    if (beta && k && x && p) {
        return bigInt(beta).modPow(k, p).multiply(x).mod(p).toString()
    } else return undefined
}
// giai ma
decrypted = (a, delta, p, gamma) => {
    if ( a  && delta && p) {
        return bigInt(bigInt(gamma).modPow(p - a - 1, p).toString() * delta).mod(p).toString()
    } else return undefined
}