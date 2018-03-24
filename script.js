var presentbutton = document.getElementById("2016");
var pastbutton = document.getElementById("1996");
var presentlist = [36,28,15,6,15];
var pastlist = [37,19,17,15,12];

var update = function(e){
    var data = [];
    if(this.getAttribute("id") == "2016"){
	data = presentlist;
    }
    else{
	data = pastlist;
    }
    var bars = d3.select(".chart").selectAll("div");

    bars.data(data)
	.transition()
	.duration(2000)
	.style("width",function(d){return d*8 + "px";})
	.text(function(d){return d + "%";});

}

presentbutton.addEventListener("click",update);
pastbutton.addEventListener("click",update);
