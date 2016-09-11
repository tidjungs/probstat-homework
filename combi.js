import fact from './fact'

const combi = (n, r) => fact(n)/fact(n-r)/fact(r)

export default combi


