function openings(){
    let a1 = new Audio('dn.mp3');
    let a2 = new Audio('snk.mp3');
    let a3 = new Audio('sao.mp3');
    let a4 = new Audio('fmab.mp3');
    let a5 = new Audio('opm.mp3');
    document.getElementById('dn').addEventListener('click', function(){
    a2.pause();a3.pause();a4.pause();a5.pause()
    if (a1.paused) {a1.play()} else {a1.pause()};
    });
    document.getElementById('snk').addEventListener('click', function(){
    a1.pause();a3.pause();a4.pause();a5.pause()
    if (a2.paused) {a2.play()} else {a2.pause()};
    });
    document.getElementById('sao').addEventListener('click', function(){
    a1.pause();a2.pause();a4.pause();a5.pause()
    if (a3.paused) {a3.play()} else {a3.pause()};
    });
    document.getElementById('fma').addEventListener('click', function(){
    a1.pause();a2.pause();a3.pause();a5.pause()
    if (a4.paused) {a4.play()} else {a4.pause()};
    });
    document.getElementById('opm').addEventListener('click', function(){
    a1.pause();a2.pause();a3.pause();a4.pause()
    if (a5.paused) {a5.play()} else {a5.pause()};
    });
}

// Uso de: https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
function fondoimagen() {
    document.getElementById('opm').addEventListener("click", function() {
    document.body.style.backgroundImage = "url('opm.jpg')";
    });
    document.getElementById('snk').addEventListener("click", function() {
    document.body.style.backgroundImage = "url('snk.jpg')";
    });
    document.getElementById('dn').addEventListener("click", function() {
    document.body.style.backgroundImage = "url('dn.jpg')";
    });
    document.getElementById('sao').addEventListener("click", function() {
    document.body.style.backgroundImage = "url('sao.jpg')";
    });
    document.getElementById('fma').addEventListener("click", function() {
    document.body.style.backgroundImage = "url('fmab.jpg')";
    });
 }

function grafico(){
    // Uso del código Barchat de la Ayudantía
    let nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'barchart 1';
    document.body.appendChild(nuevoDiv);


    var trace1 = {
        x: ['One Punch Man', 'F.M.A: Brotherhood', 'Death Note', 'Shingeki no Kyojin', 'Swort art Online'],
        y: [9.23, 8.68, 8.65, 8.47, 7.49],
        marker: {color: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 213, 0, 0.8)', 'rgba(104, 0, 0, 0.8)', 'rgba(243, 121, 8, 0.8)', 'rgba(17, 17, 151, 0.8)']},
        type: 'bar'
    };

    var data = [trace1];

    var layout = {
        title: 'Valoración - Top 5 animes más populares de AnimeList (05/01/20)',
        yaxis: { title: 'Puntaje' }
    };

    Plotly.newPlot('barchart 1', data, layout);
}

function datos(){
    var data = $.csv.toObjetcs('dataset.csv')
    document.getElementById('cries').innerHTML = data;
}

function todo(){
    grafico()
    openings()
    fondoimagen()
}

todo()