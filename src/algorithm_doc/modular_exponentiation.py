#calculate : (x^y) % p
def powmod(a: int, e: int, n: int) -> int:
    accum: int = 1
    apow2: int = a
    while e > 0:
        if e & 1:
            accum = (accum * apow2) % n
        apow2 = (apow2 * apow2) % n
        e = e >> 1
    return accum