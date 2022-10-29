var chartContainer = document.getElementById('d3Container');

var w = chartContainer.offsetWidth;
var h = chartContainer.offsetHeight;

var keyc = true, keys = true, keyt = true, keyr = true, keyx = true, keyd = true, keyl = true, keym = true, keyh = true, key1 = true, key2 = true, key3 = true, key0 = true, keyspace = true;
var focus_node = null, highlight_node = null;
var text_center = true;

var highlight_color = "#de7333";
var highlight_trans = 0.1;
var default_node_color = default_link_color = getComputedStyle(bodyElem).getPropertyValue('--textColor');
var default_text_color = getComputedStyle(bodyElem).getPropertyValue('--headingColor');
    
var force = d3.layout.force()
.linkDistance(90)
.charge(-1000)
.size([w,h]);

var nominal_base_node_size = 25;
var max_base_node_size = 4*nominal_base_node_size;

var size = d3.scale.pow()
    .exponent(1)
    .domain([1,100])
    .range([nominal_base_node_size,max_base_node_size]);

var nominal_text_size = 10;
var max_text_size = 2.4*nominal_text_size;

var nominal_stroke = 1.5;
var max_stroke = 3*nominal_stroke;

var min_zoom = 0.1;
var max_zoom = 7;

var svg = d3.select("#d3Container").append("svg");
var zoom = d3.behavior.zoom().scaleExtent([min_zoom,max_zoom])

var defs = svg.append('defs');
var clipPath = defs.append('clipPath').attr('id', 'circleView');
var circle = clipPath.append('circle').attr("cx", 2*nominal_base_node_size).attr("cy", nominal_base_node_size).attr("r", nominal_base_node_size).attr("fill", "blue");

tooltip = d3.select("body").append("div").attr("class", "stacked-tooltip");

var g = svg.append("g");

svg.style("cursor", "move");

var linkedByIndex = {};

collabsInfo.links.forEach(function(d) {
    linkedByIndex[d.source + "," + d.target] = true;
});

function isConnected(a, b) {
    return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
}

function hasConnections(a) {
    for (var property in linkedByIndex) {
        s = property.split(",");
        if ((s[0] == a.index || s[1] == a.index) && linkedByIndex[property]) return true;
    }
    return false;
}

force
    .nodes(collabsInfo.nodes)
    .links(collabsInfo.links)
    .start();

var link = g.selectAll(".link")
    .data(collabsInfo.links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", nominal_stroke)
    .style("stroke", default_link_color)


var customDrag = d3.behavior.drag()
    .on("dragstart", dragstart)
    .on("drag", dragmove)
    .on("dragend", dragend);

function dragstart(d, i) {
    force.stop();
}

function dragmove(d, i) {
    d.px += d3.event.dx;
    d.py += d3.event.dy;
    d.x += d3.event.dx;
    d.y += d3.event.dy;
    tick();
}

function dragend(d, i) {
    // d.fixed = true;
    tick();
}

var node = g.selectAll(".node")
    .data(collabsInfo.nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(force.drag);


node.on("dblclick.zoom", function(d) { 
    d3.event.stopPropagation();
    var dcx = (chartContainer.offsetWidth / 2-d.x * zoom.scale());
    var dcy = (chartContainer.offsetHeight / 2-d.y * zoom.scale());
    zoom.translate([dcx,dcy]);
    g.attr("transform", "translate("+ dcx + "," + dcy + ")scale(" + zoom.scale() + ")");
}).on("mouseover", function(d) {
    set_highlight(d);
}).on("mousedown", function(d) { d3.event.stopPropagation();
    focus_node = d;
    set_focus(d)

    if (d.type == "collab") {
        populateCollabCard(d);
    }
    
    if (highlight_node === null) set_highlight(d)
}).on("mouseout", function(d) {
    exit_highlight();
});

var bgCircles = node.append("circle")
  .attr("cx", 2*nominal_base_node_size)
  .attr("cy", nominal_base_node_size)
  .attr("r", nominal_base_node_size + nominal_stroke)
  .attr("class", "bgCircle")
  .attr("fill", default_node_color);

var circle = node.append("image")
    .attr("width", 4*nominal_base_node_size)
    .attr("height", 2*nominal_base_node_size)
    .attr("xlink:href", function(d) { return `Images/${d.id}.jpg`;})
    .attr("clip-path", "url(#circleView)")
    .on("mousemove", function(d, i) {
        tooltip
        .html(() => {
            return (`<h4 class="bolder">${d.id}</h4>
                <hr style="margin: 0.5rem 0;">
                <span class="bolder">1: </span> ${d.id}
                <br>
                <hr style="margin: 0.5rem 0">
                <span class="bolder">2: </span> ${d.id}`
            )
        })
        .style("left", d3.event.pageX - 80 + "px")
        .style("top", d3.event.pageY - 140 + "px")
        // .style("display", "inline-block")
        // .style("opacity", "1");
    })
    .on("mouseleave", function (d) { tooltip.style("opacity", "0") })

var text = g.selectAll(".text")
    .data(collabsInfo.nodes)
    .enter().append("text")
    
    .attr("class", "text")
    .attr("fill", default_text_color)
    .style("font-size", nominal_text_size + "px")

if (text_center)
    text.text(function(d) { return d.id; })
        .attr("dy", -((nominal_base_node_size+nominal_stroke)*1.1))
        .style("text-anchor", "middle");
else
    text.attr("dx", nominal_base_node_size + nominal_stroke)
    .attr("dy", ".35em")
    .text(function(d) { return '\u2002'+d.id; });

d3.select(window).on("mouseup", function() {
    if (focus_node !== null) {
        focus_node = null;
        if (highlight_trans < 1) {
            bgCircles.style("opacity", 1)
            circle.style("opacity", 1);
            text.style("opacity", keyt ? 1 : 0);
            link.style("opacity", keyspace ? 1 : 0);
        }   
    }
    if (highlight_node === null) exit_highlight();
});

function exit_highlight() {
    highlight_node = null;
    if (focus_node === null) {
        svg.style("cursor","move");

        bgCircles.style("fill", default_node_color)
        text.style("font-weight", "400");
        link.style("stroke", default_link_color);
    }
}

function set_focus(d) {
    if (highlight_trans < 1)  {
        bgCircles.style("opacity", function(o) {
            return isConnected(d, o) ? 1 : highlight_trans;
        });

        circle.style("opacity", function(o) {
            return isConnected(d, o) ? 1 : highlight_trans;
        });

        text.style("opacity", function(o) {
            return keyt ? (isConnected(d, o) ? 1 : highlight_trans) : 0;
        });
        
        link.style("opacity", function(o) {
            return keyspace ? (o.source.index == d.index || o.target.index == d.index ? 1 : highlight_trans) : 0;
        });		
    }
}

function set_highlight(d) {
    svg.style("cursor","pointer");

    if (focus_node !== null) d = focus_node;
    highlight_node = d;

    bgCircles.style("fill", function(o) {
        return isConnected(d, o) ? highlight_color : default_node_color;
    });

    text.style("font-weight", function(o) {
        return isConnected(d, o) ? "600" : "400";}
    );

    link.style("stroke", function(o) {
        return o.source.index == d.index || o.target.index == d.index 
        ? highlight_color 
        : default_link_color;
    });
}

function changeGraphTheme() {
    default_text_color = default_link_color = default_node_color = getComputedStyle(bodyElem).getPropertyValue('--textColor');
    default_text_color = getComputedStyle(bodyElem).getPropertyValue('--headingColor');

    bgCircles.style("fill", default_node_color );
    link.style("stroke", default_link_color);
    text.style("fill", default_text_color);
}

zoom.on("zoom", function() {
    var stroke = nominal_stroke;

    if (nominal_stroke * zoom.scale() > max_stroke) 
        stroke = max_stroke / zoom.scale();
    
    link.style("stroke-width",stroke);

    var base_radius = (nominal_base_node_size*zoom.scale()> max_base_node_size) 
        ? base_radius = max_base_node_size/zoom.scale()
        : nominal_base_node_size;

    bgCircles.attr("r", nominal_base_node_size + stroke)
    if (!text_center) text.attr("dx", nominal_base_node_size + stroke);

    var text_size = nominal_text_size;
    if (nominal_text_size*zoom.scale()>max_text_size) text_size = max_text_size/zoom.scale();
    text.style("font-size",text_size + "px");

    g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
});
 
svg.call(zoom);	  
    
resize();
d3.select(window).on("resize", resize).on("keydown", keydown);

var tick = function() {
    node.attr("transform", function(d) {  return "translate(" + (d.x - nominal_base_node_size*2) + "," + (d.y - nominal_base_node_size) + ")"; });
    text.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
        
    node.attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
};

force.on("tick", tick);

function resize() {
    var width = chartContainer.offsetWidth, height = chartContainer.offsetHeight

    svg.attr("width", width).attr("height", height);

    
    force.size([force.size()[0]+(width-w)/zoom.scale(),force.size()[1]+(height-h)/zoom.scale()]).resume();
        w = width;
        h = height;
}

function keydown() {

    if (d3.event.keyCode == 32) {
        keyspace = !keyspace;

        if (keyspace) {
            force.resume();
            link.style("opacity", "1");
            node.call(force.drag);
        } else {
            force.stop();
            link.style("opacity", "0");
            node.call(customDrag);
        }

    } else if (d3.event.keyCode >= 48 && d3.event.keyCode <= 90 && !d3.event.ctrlKey && !d3.event.altKey && !d3.event.metaKey) {
        switch (String.fromCharCode(d3.event.keyCode)) {
            case "C": keyc = !keyc; break;
            case "S": keys = !keys; break;
            case "T": keyt = !keyt; break;
            case "R": keyr = !keyr; break;
            case "X": keyx = !keyx; break;
            case "D": keyd = !keyd; break;
            case "L": keyl = !keyl; break;
            case "M": keym = !keym; break;
            case "H": keyh = !keyh; break;
            case "1": key1 = !key1; break;
            case "2": key2 = !key2; break;
            case "3": key3 = !key3; break;
            case "0": key0 = !key0; break;
        }

        if (String.fromCharCode(d3.event.keyCode) == "Q") {
            changeTheme();    
        }

        link.style("display", function(d) {
            var flag  = vis_by_type(d.source.type) && vis_by_type(d.target.type) && vis_by_node_score(d.source.score) && vis_by_node_score(d.target.score) && vis_by_link_score(d.score);
            linkedByIndex[d.source.index + "," + d.target.index] = flag;
            return flag ? "inline" : "none";
        });

        node.style("display", function(d) {
            return (key0 || hasConnections(d)) && vis_by_type(d.type) && vis_by_node_score(d.score) ? "inline" : "none";
        });

        text.style("opacity", function(d) {
            return (key0 || hasConnections(d)) && keyt ? 1 : 0;
        });
                        
        if (highlight_node !== null) {
            if ((key0 || hasConnections(highlight_node)) && vis_by_type(highlight_node.type) && vis_by_node_score(highlight_node.score)) {
                if (focus_node!==null) set_focus(focus_node);
                    set_highlight(highlight_node);
            } else {
                exit_highlight();
            }
        }
    }	
}

function vis_by_type(type) {
    switch (type) {
        case "circle": return keyc;
        case "square": return keys;
        case "triangle-up": return keyt;
        case "diamond": return keyr;
        case "cross": return keyx;
        case "triangle-down": return keyd;
        default: return true;
    }
}

function vis_by_node_score(score) {
    if (isNumber(score)) {
        if (score>=0.666) return keyh;
        else if (score>=0.333) return keym;
        else if (score>=0) return keyl;
    }
    return true;
}

function vis_by_link_score(score) {
    if (isNumber(score)) {
        if (score>=0.666) return key3;
        else if (score>=0.333) return key2;
        else if (score>=0) return key1;
    }
    return true;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}	