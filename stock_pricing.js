function max_profits(stock_prices) {

    let minimum = stock_prices[0]
    let highest_profit = 0

    for(let i = 1; i < stock_prices.length; i++) {
        if(minimum > stock_prices[i]) {
            minimum = stock_prices[i]
        }
        else if(highest_profit < stock_prices[i] - minimum) {
            highest_profit = stock_prices[i] - minimum
        }

    }

    return highest_profit

}

const profit = max_profits([5,2,7,3,20,9]);

console.log("The highest profit obtained is " + profit);