var svg = d3.select('svg');
//clickevents

function main(){
document.getElementById('API_x5F_link').onclick = function(){window.open('https://aklevecz.github.io/api_onepage')};
document.getElementById('rweekly_x5F_link').onclick = function(){window.open('http://420.raptor.pizza/raptorweekly')};
document.getElementById('ow_x5F_link').onclick = function(){window.open('http://hathor.nekhen.net')};
document.getElementById('jt_x5F_link').onclick = function(){window.open('http://420.raptor.pizza/talaraptor')};
//talabot
var talacircle = d3.select('#talacircle');
talacirclebounce();
function talacirclebounce() {
talacircle
.transition()
.duration(400)
.attr('r', 40)
.transition()
.duration(100)
.attr('r', 35)
.on('end', talacirclebounce);
}
var note = d3.select('#note');
moveNoteOut();
function moveNoteOut(){
note.transition().duration(2000)
.attr('transform', 'translate(100,0)')
.on('end', function(){
note.transition().duration(2000).style('opacity', 0)
.on('end', function(){
note.attr('transform', '')
.style('opacity', 1)
moveNoteOut();
});
});
}
//---------------
//----
//lil raptor
var lil_raptor = d3.select('#lil_x5F_raptor');
raptorShift();
function raptorShift(){
lil_raptor.select('path').transition().duration(2000).attr('fill', chroma.random());
lil_raptor.select('circle').transition().duration(2000).attr('fill', chroma.random())
.on('end', raptorShift);
}
//-----
//hiq
var changeBub = d3.select('#changeBub');
var text_html = '<text transform="matrix(1 0 0 1 124.0103 269.9697)" fill="#E5438D" font-family="CourierNewPSMT" font-size="12">Ariel</text><text transform="matrix(1 0 0 1 88.0044 288.3257)"><tspan x="0" y="0" fill="#FFFFFF" font-family="CourierNewPSMT" font-size="12">Web Development</tspan><tspan x="-3.601" y="14.4" fill="#FFFFFF" font-family="CourierNewPSMT" font-size="12">Data Integration</tspan><tspan x="32.405" y="28.8" fill="#FFFFFF" font-family="CourierNewPSMT" font-size="12">Design</tspan></text>'
changeBub.append('g').attr('id','info').attr('opacity',0).html(text_html);
changeforward();
function changeforward() {
changeBub.select('text').transition().duration(2000).attr('opacity', 0);
changeBub.select('circle').transition().duration(2000)
.attr('r', "93.41")
.attr('cx', "142.013")
.attr('cy', "287.315")
.attr('fill', 'black')
.on('end', function(){
d3.select('#info').transition().duration(2000).attr('opacity', 1);
setTimeout(changeback, 2000)
});
}
function changeback(){
changeBub.select('circle').transition().duration(2000)
.attr('cx', '142.012')
.attr('cy', '287.314')
.attr('r', '31.914')
.attr('fill', '#E5438D');
changeBub.select('text').transition().duration(2000).attr('opacity', 1);
d3.select('#info').transition().duration(2000).attr('opacity', 0)
.on('end', changeforward);
}
//bubbletown
//<circle fill="#E5438D" cx="255.392" cy="401.67" r="31.914"/>
var bubbles = d3.selectAll('.lil_bubble').style('stroke', 'white');
// bubbles.transition().duration(2000)
//    .attr('cx', 300)
//    .attr('cy', 200)
//    .attr('cy', d3.randomUniform(150,250))
//    .on('end', burster);
burster();
function burster(){
bubbles
// .transition().duration(1000)
.attr('r', 5)
bubbles
.transition().duration(5000)
.attr('fill', 'white')
.attr('cx', d3.randomUniform(50,550))
.attr('cy', d3.randomUniform(-10,-1000))
.on('end', burstback);
}
function burstback(){
bubbles
.attr('fill', "#E5438D")
.attr('cx', "255.392")
.attr('cy', "401.67")
.attr('r', "31.914")
burster();
}
}