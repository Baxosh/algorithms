type ReturnTypeSum = (a: number, b: number) => number

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function memoized(): ReturnTypeSum {
    let cache = {}
    return (a, b) => {
        if (a in cache && b in cache) {
            return cache[a]
        }
        const res = sum(a, b)
        cache[a] = res
        cache[b] = res
        return res
    }
}

function sum(a: number, b: number): number {
    return a * b
}
const memoizedSum = memoized()

document.querySelector('button').addEventListener('click', (ev: MouseEvent) => {
    const a: number = +prompt('a number')
    console.time()
    const res = memoizedSum(a, 9999999)
    console.log(res)
    console.timeEnd()
})
