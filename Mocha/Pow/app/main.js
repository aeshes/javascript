function pow(base, exp)
{
    if (exp < 0) return NaN;
    if (Math.round(exp) != exp) return NaN;
    
    var result = 1;
    while (exp)
    {
        if (exp & 1)
            result *= base;
        base *= base;
        exp >>= 1;
    }
    return result;
}

module.exports = pow;