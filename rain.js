console.clear()
function rainCalculation(nums) {
    if (nums.length < 2) return
    let min = Math.min(...nums)
    let index = nums.indexOf(min)
    let temp = []
    let l = index - 1
    let r = index + 1
    // let i = 1
    while ((l > 0 && nums[l] < nums[l - 1]) || r < nums.length) {
        // if (nums[index] < nums[index + i]) {
        //     temp.push()
        // }
        if (nums[index] > nums[r] && nums[index] < nums[l])
        // console.log(nums[l])
        // console.log(r)
        // console.log('****')
        // l > 0 && nums[l] < nums[l - 1] ? l-- : null
        // r < nums.length ? r++ : null
    }
    // console.log(index)
}

// rainCalculation([4, 2, 3, 4, 2, 6, 2]) // 3
rainCalculation([4, 2, 0, 3, 2, 5]) // 9
// rainCalculation([3, 0, 2, 4, 0]) // 4
// rainCalculation([6, 0, 2, 4, 0]) // 6
// rainCalculation([0, 4, 3, 1, 4, 3])
