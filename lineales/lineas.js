  //para el boton cargar
  $("#botData").on("click", function(){
    console.log(morris1);
    
    var nuevaData = [
        { year: '2010', value: 2.08},
        { year: '2011', value: 4.74},
        { year: '2012', value: 2.65},
        { year: '2013', value: 2.86},
        { year: '2014', value: 3.22},
        { year: '2015', value: 4.40},
        { year: '2016', value: 3.23},
        { year: '2017', value: 1.36},
        { year: '2018', value: 2.19},
        { year: '2019', value: 1.90},
        { year: '2020', value: 1.97},
        { year: '2021', value: 6.43}
    ];
    morris1.setData(nuevaData);
});

var morris1 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: '2010-2021',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2010', value: 2.08},
        { year: '2011', value: 4.74},
        { year: '2012', value: 2.65},
        { year: '2013', value: 2.86},
        { year: '2014', value: 3.22},
        { year: '2015', value: 4.40},
        { year: '2016', value: 3.23},
        { year: '2017', value: 1.36},
        { year: '2018', value: 2.19},
        { year: '2019', value: 1.90},
        { year: '2020', value: 1.97},
        { year: '2021', value: 6.43}
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    lineWidth:1,
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['IPC1'],
    resize: true,
    lineColors: ['#C14D8F','#2CB4AC']
});

//grafica del 2015 al 2021
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: '2015-2021',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2015', value: 4.40},
        { year: '2016', value: 3.23},
        { year: '2017', value: 1.36},
        { year: '2018', value: 2.19},
        { year: '2019', value: 1.90},
        { year: '2020', value: 1.97},
        { year: '2021', value: 6.43}
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    lineWidth:1,
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['IPC1'],
    resize: true,
    lineColors: ['#2CB4AC']
  });

//para meses 2021
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: '2021',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2008', value: 20},
      { year: '2009', value: 10},
      { year: '2010', value: 5},
      { year: '2011', value: 5},
      { year: '2012', value: 20}
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value','value2'],
    lineWidth:1,
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['IPC1','IPC2'],
    resize: true,
    lineColors: ['#C14D8F','#2CB4AC']
  });
