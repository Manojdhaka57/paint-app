
var canvas= document.getElementById('canvas');
var ctx=canvas.getContext('2d');
canvas.width=window.innerWidth-100;
canvas.height=window.innerHeight-150;
var dragging=false;
var dragStartLocation;
var dragEndLocation;

function drawrect(){
    ctx.strokeStyle='rgb('+Math.random()*255+','+Math.random()*255 +','+Math.random()*255+')';
    ctx.fillStyle='rgb('+Math.random()*255+','+Math.random()*255 +','+Math.random()*255+')'; 
    
    ctx.lineWidth=6;
    ctx.strokeRect(dragStartLocation.x,dragStartLocation.y,dragEndLocation.x-dragStartLocation.x,dragEndLocation.y-dragStartLocation.y)
    ctx.fillRect(dragStartLocation.x,dragStartLocation.y,dragEndLocation.x-dragStartLocation.x,dragEndLocation.y-dragStartLocation.y);
    ctx.stroke();
    
    
}
function getCanvasCoordinates(event){
    var x=event.clientX-canvas.getBoundingClientRect().left;
    var y=event.clientY-canvas.getBoundingClientRect().top;
    return {x:x,y:y};
}

function mousemove(){
    if(dragging){
        dragEndLocation=getCanvasCoordinates(event);
        drawrect();
    }
}
function mouseup(){
    dragging=false;
    dragEndLocation=getCanvasCoordinates(event);
    
    drawrect();
}

function mousedown(){
    dragging=true;
    dragStartLocation=getCanvasCoordinates(event);
    
    

}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}
function init(){
    
    canvas.addEventListener('mousedown',mousedown,false);
    canvas.addEventListener('mouseup',mouseup,false);
    canvas.addEventListener('mousemove',mousemove,false);
    var clearcanvas=document.getElementById('btn');
    clearcanvas.addEventListener('click',clearCanvas,false)
}
window.addEventListener('load',init(),false);
// init();

