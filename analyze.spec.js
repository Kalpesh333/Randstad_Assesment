  
const {
    standardDeviation,
    sanitizeAmounts,
    roundToTwoDp,
    analysePayments
} = require('./analyze.js')
const test = require('ava')


test('check test with positve sanitizeamounts of users data' ,t => {
//Verifying for Expected second as First argument for t.is is Actual
  t.deepEqual(sanitizeAmounts([1000, 1500, 300.56, 121.67, 100]), 3022.23)
})


test('check test with some minus sanitizeamounts of users data' ,t => {
//Verifying for the Expected second as First argument for t.is is Actual
  t.deepEqual(sanitizeAmounts([1000, -600, 300.56, 121.67, -100]), 722.23)
  
  test('check test  with many minus sanitizeamounts of users data' ,t => {
//Verifying for Expected second as First argument for t.is is Actual
  t.deepEqual(sanitizeAmounts([1000, -600, -800, 121.67, -100]), -178.33)
  
 test('check test with 0 sanitizeamounts of users data' ,t => {
//Verifying for Expected second as First argument for t.is is Actual
  t.deepEqual(sanitizeAmounts([0, 0, 0, 0, 0]), 0)
})


test('Check Round of with positive sanitizeAmounts',t => {
//Verifying for Expected second as First argument for t.is is Actual
t.deepEqual(roundToTwoDp([3022.23]), 3022)

test('Check Round of with positive sanitizeAmounts',t => {
//Verifying for Expected second as First argument for t.is is Actual
t.deepEqual(roundToTwoDp([3022.68]), 3023)

test('Check Round of with negative sanitizeAmounts',t => {
//Verifying for Expected second as First argument for t.is is Actual
t.deepEqual(roundToTwoDp([-178.33]), 0)

test('Check Round of with 0 sanitizeAmounts',t => {
//Verifying for Expected second as First argument for t.is is Actual
t.deepEqual(roundToTwoDp([00.00]), 0)

test('Standard Deviation is correct for Basic Data', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(standardDeviation([1000, 1500, 300.56, 121.67, 100]), 554.6828045)
})

test('Standard Deviation is correct for Basic Data', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(standardDeviation([1000, -600, 300.56, 121.67, -100]), 523.6060863)
})


 test('Standard Deviation for incorrect', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(standardDeviation([1000, -600, -800, 121.67, -100]), 631.8507532)
})

 test('Standard Deviation for 0', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(standardDeviation([0,0,0,0,0]), 0)
})


 test('Standard Deviation is correct for Basic Data', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(standardDeviation([1, 2, 2, 2, 1, 1]), 0.5)
})

 test('Check mean are calculate correctly with positive TransactionInformation', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(analysePayments([{
            "Amount": 100,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2000,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 200,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 100,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 600,
        median: 2.5,
        min: 1,
        standardDeviation: 809.3207028,
    })
})

test('Check mean are calculate correctly with negative TransactionInformation', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(analysePayments([{
            "Amount": 100,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": -2000,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 200,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 100,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: -400,
        median: 2.5,
        min: 1,
        standardDeviation: -400,
    })
})

 test('Check Median with No TransactionInformation', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(analysePayments([{
           
        
    ]), {
        max: 0,
        mean: 0,
        median: 0.5,
        min: 0,
        standardDeviation: 0,
    })
})

 test('Check Median with 1 TransactionInformation', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(analysePayments([{
           
        {
            "Amount": 100,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 1,
        mean: 100,
        median: 1,
        min: 1,
        standardDeviation: 0,
    })
})


 test(' check Median with 1 TransactionInformation', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(analysePayments([{
            "Amount": 100,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2000,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 200,
            "TransactionInformation": "Payment Three"
        }
    ]), {
        max: 4,
        mean: 766.6666667,
        median: 2,
        min: 1,
        standardDeviation: 873.05339,
    })
})

test('Payments are analysed correctly', t => {
    //Verifying for Expected second as First argument for t.is is Actual
    t.deepEqual(analysePayments([{
            "Amount": 1,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 3,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 4,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 2.5,
        median: 2.5,
        min: 1,
        standardDeviation: 1.12,
    })
})
