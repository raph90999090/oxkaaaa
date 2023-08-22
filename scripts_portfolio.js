//Main pie chart initialization
var ctxMain = document.getElementById('portfolioChart').getContext('2d');



function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}




var labelsMain = [
    'Trading Intraweek', 'Yield Farming LR', 'Yield Farming HR', 
    'Options', 'Fonds de réserve', 'Spot Bag'
];
var dataMain = [520, 2000, 300, 150, 5030, 500];

var mainConfig = {
    type: 'doughnut',
    data: {
        labels: labelsMain,
        datasets: [{
            data: dataMain,
            backgroundColor: ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Interactive Portfolio Allocation'
            }
        }
    },
};

var mainChart = new Chart(ctxMain, mainConfig);

// Sub pie chart for Trading Intraweek
var ctxSubTradingIntraweek = document.getElementById('tradingIntraweekChart').getContext('2d');
var dataSubTradingIntraweek = [0, 500]; // Sample data. Adjust as needed.


var ctxSubyieldfarminglowrisk = document.getElementById('yieldfarminglowriskChart').getContext('2d');
var dataSubyieldfarminglowrisk = [0, 0, 0, 0, 0, 0]; // Sample data. Adjust as needed.


var ctxSubyieldfarminghighrisk = document.getElementById('yieldfarminghighriskChart').getContext('2d');
var dataSubyieldfarminghighrisk = [0, 0, 0, 0, 0, 0]; // Sample data. Adjust as needed.


var ctxSuboptions = document.getElementById('optionsChart').getContext('2d');
var dataSuboptions = [0, 0, 0, 0]; // Sample data. Adjust as needed.



var ctxSubfondsderéserve = document.getElementById('fondsderéserveChart').getContext('2d');
var dataSubfondsderéserve = [0, 0]; // Sample data. Adjust as needed.


var ctxSubspotbag = document.getElementById('spotbagChart').getContext('2d');
var dataSubspotbag = [0, 0]; // Sample data. Adjust as needed.





var labelsSubTradingIntraweek = ['BTC', 'USD'];
var labelsSubyieldfarminglowrisk = ['WBTC', 'WMATIC', 'WETH', 'USDT', 'USDC', 'DAI'];
var labelsSubyieldfarminghighrisk = ['SHITCOIN1', 'SHITCOIN2', 'SHITCOIN3', 'SHITCOIN4', 'SHITCOIN5', 'SHITCOIN6'];
var labelsSuboptions = ['BTC CALL', 'BTC PUT', 'ETH CALL', 'ETH PUT'];
var labelsSubfondsderéserve = ['MAKERDAO', 'AAVE'];
var labelsSubspotbag = ['ETH', 'PREMIA'];




var subTradingIntraweekConfig = {
    type: 'doughnut',
    data: {
        labels: labelsSubTradingIntraweek,
        datasets: [{
            data: dataSubTradingIntraweek,
            backgroundColor: [ '#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Trading Intraweek '
            }
        }
    },
};

var subTradingIntraweekChart = new Chart(ctxSubTradingIntraweek, subTradingIntraweekConfig);



var subyieldfarminglowriskConfig = {
    type: 'doughnut',
    data: {
        labels: labelsSubyieldfarminglowrisk,
        datasets: [{
            data: dataSubyieldfarminglowrisk,
            backgroundColor: ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Yield Farming LR'
            }
        }
    },
};

var subyieldfarminglowriskChart = new Chart(ctxSubyieldfarminglowrisk, subyieldfarminglowriskConfig);



var subyieldfarminghighriskConfig = {
    type: 'doughnut',
    data: {
        labels: labelsSubyieldfarminghighrisk,
        datasets: [{
            data: dataSubyieldfarminghighrisk,
            backgroundColor: ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Yield Farming HR'
            }
        }
    },
};

var subyieldfarminghighriskChart = new Chart(ctxSubyieldfarminghighrisk, subyieldfarminghighriskConfig);



var suboptionsConfig = {
    type: 'doughnut',
    data: {
        labels: labelsSuboptions,
        datasets: [{
            data: dataSuboptions,
            backgroundColor: ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Options'
            }
        }
    },
};

var suboptionsChart = new Chart(ctxSuboptions, suboptionsConfig);





var subfondsderéserveConfig = {
    type: 'doughnut',
    data: {
        labels: labelsSubfondsderéserve,
        datasets: [{
            data: dataSubfondsderéserve,
            backgroundColor: ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Fonds de réserve'
            }
        }
    },
};

var subfondsderéserveChart = new Chart(ctxSubfondsderéserve, subfondsderéserveConfig);








var subspotbagConfig = {
    type: 'doughnut',
    data: {
        labels: labelsSubspotbag,
        datasets: [{
            data: dataSubspotbag,
            backgroundColor: ['#ff9999', '#66b2ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffd480'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Spot bag'
            }
        }
    },
};

var subspotbagChart = new Chart(ctxSubspotbag, subspotbagConfig);









// Add similar code for other sub charts


function addAsset() {
    var assetCategory = document.getElementById('assetCategory').value;
    var assetName = document.getElementById('assetName').value;
    var assetValue = parseFloat(document.getElementById('assetValue').value);

    var categoryIndexMain = labelsMain.indexOf(assetCategory);

    if (categoryIndexMain > -1) {
        dataMain[categoryIndexMain] += assetValue;
    } else {
        labelsMain.push(assetCategory);
        dataMain.push(assetValue);
    }

    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Trading Intraweek') {
        var assetIndex = labelsSubTradingIntraweek.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubTradingIntraweek[assetIndex] += assetValue;
        } else {
            labelsSubTradingIntraweek.push(assetName);
            dataSubTradingIntraweek.push(assetValue);
        }

        subTradingIntraweekChart.update();
    } 
  

    if (assetCategory === 'Yield Farming LR') {
        var assetIndex = labelsSubyieldfarminglowrisk.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubyieldfarminglowrisk[assetIndex] += assetValue;
        } else {
            labelsSubyieldfarminglowrisk.push(assetName);
            dataSubyieldfarminglowrisk.push(assetValue);
        }

        subyieldfarminglowriskChart.update();
    }

    // Continue similarly for the other categories ...

    mainChart.update();



if (assetCategory === 'Yield Farming HR') {
    var assetIndex = labelsSubyieldfarminghighrisk.indexOf(assetName);

    if (assetIndex > -1) {
        dataSubyieldfarminghighrisk[assetIndex] += assetValue;
    } else {
        labelsSubyieldfarminghighrisk.push(assetName);
        dataSubyieldfarminghighrisk.push(assetValue);
    }

    subyieldfarminghighriskChart.update();
}



if (assetCategory === 'Options') {
    var assetIndex = labelsSuboptions.indexOf(assetName);

    if (assetIndex > -1) {
        dataSuboptions[assetIndex] += assetValue;
    } else {
        labelsSuboptions.push(assetName);
        dataSuboptions.push(assetValue);
    }

    suboptionsChart.update();
}




if (assetCategory === 'Fonds de réserve') {
    var assetIndex = labelsSubfondsderéserve.indexOf(assetName);

    if (assetIndex > -1) {
        dataSubfondsderéserve[assetIndex] += assetValue;
    } else {
        labelsSubfondsderéserve.push(assetName);
        dataSubfondsderéserve.push(assetValue);
    }

    subfondsderéserveChart.update();
}



if (assetCategory === 'Spot Bag') {
    var assetIndex = labelsSubspotbag.indexOf(assetName);

    if (assetIndex > -1) {
        dataSubspotbag[assetIndex] += assetValue;
    } else {
        labelsSubspotbag.push(assetName);
        dataSubspotbag.push(assetValue);
    }

    subspotbagChart.update();
}


mainChart.update();
}


function removeAsset() {
    var assetCategory = document.getElementById('assetCategory').value;
    var assetName = document.getElementById('assetName').value;
    var assetValue = parseFloat(document.getElementById('assetValue').value);

    var categoryIndexMain = labelsMain.indexOf(assetCategory);

    if (categoryIndexMain > -1) {
        dataMain[categoryIndexMain] -= assetValue;

        if (dataMain[categoryIndexMain] <= 0) {
            labelsMain.splice(categoryIndexMain, 1);
            dataMain.splice(categoryIndexMain, 1);
        }
    }

    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Trading Intraweek') {
        var assetIndex = labelsSubTradingIntraweek.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubTradingIntraweek[assetIndex] -= assetValue;

            if (dataSubTradingIntraweek[assetIndex] <= 0) {
                labelsSubTradingIntraweek.splice(assetIndex, 1);
                dataSubTradingIntraweek.splice(assetIndex, 1);
            }
        }

        subTradingIntraweekChart.update();
    }






    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Yield Farming LR') {
        var assetIndex = labelsSubyieldfarminglowrisk.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubyieldfarminglowrisk[assetIndex] -= assetValue;

            if (dataSubyieldfarminglowrisk[assetIndex] <= 0) {
                labelsSubyieldfarminglowrisk.splice(assetIndex, 1);
                dataSubyieldfarminglowrisk.splice(assetIndex, 1);
            }
        }

        subyieldfarminglowriskChart.update();
    }









    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Yield Farming HR') {
        var assetIndex = labelsSubyieldfarminghighrisk.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubyieldfarminghighrisk[assetIndex] -= assetValue;

            if (dataSubyieldfarminghighrisk[assetIndex] <= 0) {
                labelsSubyieldfarminghighrisk.splice(assetIndex, 1);
                dataSubyieldfarminghighrisk.splice(assetIndex, 1);
            }
        }

        subyieldfarminghighriskChart.update();
    }







    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Options') {
        var assetIndex = labelsSuboptions.indexOf(assetName);

        if (assetIndex > -1) {
            dataSuboptions[assetIndex] -= assetValue;

            if (dataSuboptions[assetIndex] <= 0) {
                labelsSuboptions.splice(assetIndex, 1);
                dataSuboptions.splice(assetIndex, 1);
            }
        }

        suboptionsChart.update();
    }





    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Fonds de réserve') {
        var assetIndex = labelsSubfondsderéserve.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubfondsderéserve[assetIndex] -= assetValue;

            if (dataSubfondsderéserve[assetIndex] <= 0) {
                labelsSubfondsderéserve.splice(assetIndex, 1);
                dataSubfondsderéserve.splice(assetIndex, 1);
            }
        }

        subfondsderéserveChart.update();
    }



    // Check specific categories and update the corresponding sub-chart.
    if (assetCategory === 'Spot Bag') {
        var assetIndex = labelsSubspotbag.indexOf(assetName);

        if (assetIndex > -1) {
            dataSubspotbag[assetIndex] -= assetValue;

            if (dataSubspotbag[assetIndex] <= 0) {
                labelsSubspotbag.splice(assetIndex, 1);
                dataSubspotbag.splice(assetIndex, 1);
            }
        }

        subspotbagChart.update();
    }

mainChart.update();
}


