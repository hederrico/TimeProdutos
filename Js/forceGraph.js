var graph = {
    "links": [
        //SAM
        {"source": 0,"target": 24},
        {"source": 5, "target": 24},
        {"source": 16, "target": 24},

        //Onboarding
        {"source": 2, "target": 18},
        {"source": 1, "target": 18},
        {"source": 10, "target": 18},

        //IOT
        {"source": 3, "target": 19},
        {"source": 6, "target": 19},
        {"source": 13, "target": 19},

        //Monitoramento
        {"source": 17, "target": 22},
        {"source": 11, "target": 22},

        //Dev FINEP
        {"source": 9, "target": 20},
        {"source": 14, "target": 20},
        {"source": 15, "target": 20},

        //Dev PHP
        {"source": 8, "target": 21},
        {"source": 7, "target": 21},

        //Automação
        {"source": 4, "target": 23},


        //Gestor
        {"source": 12, "target": 18},
        {"source": 12, "target": 19},
        {"source": 12, "target": 20},
        {"source": 12, "target": 21},
        {"source": 12, "target": 22},
        {"source": 12, "target": 23},
        {"source": 12, "target": 24},
    ],
    "nodes": [
        {
            "id": "Andrei",
            "name": "Andrei Travagini",
            "num": 6,
            "hobbies": ['Musculação', 'Viajar', 'Andar de moto'],
            "emojis": ['💪🏻', '🏍️', '😎'],
            "type": "collab",
            "admission": "25/02/2019",
            "team": "SAM",
            "email": "andrei.travagini@hit.com.vc"
        }, //0
        {
            "id": "Bruno",
            "name": "Bruno Papalardo",
            "num": 13, 
            "hobbies": ['Jogar (PC)', 'Ver séries/filmes', 'Ouvir música'], 
            "emojis": ['😁', '🏳️‍🌈', '🤝'], 
            "type": "collab",
            "admission": "13/07/2022",
            "team": "Onboarding",
            "email": "bruno.papalardo@hit.com.vc"
        }, //1
        {
            "id": "Diana",
            "name": "Claudia Diana",
            "num": 4, 
            "hobbies": ['Ler', 'Ver séries', 'Escrever'], 
            "emojis": ['🖤', '🌊', '💻'], 
            "type": "collab", 
            "admission": "05/04/2021",
            "team": "Onboarding",
            "email": "claudia.silva@hit.com.vc"
        }, //2
        {
            "id": "Cris", 
            "name": "Cristofer Bernado",
            "num": 14, 
            "hobbies": ['Jogar videogames', 'Ler', 'Ver séries'], 
            "emojis": ['😁', '🤣'], 
            "type": "collab", 
            "admission": "05/08/2019",
            "team": "IOT",
            "email": "cristofer.bernado@hit.com.vc"
        }, //3
        {
            "id": "Danilo", 
            "name": "Danilo Marquiori",
            "num": 11, 
            "hobbies": ['Ciclismo', 'Jogar (PC)'], 
            "emojis": ['🤪', '😍', '🚴🏽‍♀️'], 
            "type": "collab", 
            "admission": "21/01/2019",
            "team": "Automação",
            "email": "danilo.baptista@hit.com.vc"
        }, //4
        {
            "id": "Fernando", 
            "name": "Fernando Francisquini",
            "num": 17, 
            "hobbies": ['Moto', 'Cervejeiro', 'Churrasco'], 
            "emojis": ['🏍', '🍻', '🍖'], 
            "type": "collab", 
            "admission": "21/08/2017",
            "team": "SAM",
            "email": "fernando.gouvea@hit.com.vc"
        }, //5
        {
            "id": "Francis", 
            "name": "Francis Fanali",
            "num": 8, "hobbies": ['Consertar', 'Entender o funcionamento das coisas', 'Diy'], 
            "emojis": ['😎', '😒', '🙃'], 
            "type": "collab", 
            "admission": "23/06/2022",
            "team": "IOT",
            "email": "francis.fanali@hit.com.vc"
        }, //6
        {
            "id": "Gabriel", 
            "num": 2, 
            "name": "Gabriel Romera",
            "hobbies": ['Jogar', 'Lutar Jiujitsu'], 
            "emojis": ['🦥', '🤔'], 
            "type": "collab", 
            "admission": "05/07/2022",
            "team": "Desenvolvimento em PHP",
            "email": "gabriel.romera@hit.com.vc"
        }, //7
        {
            "id": "Henrique", 
            "num": 9, 
            "name": "Henrique Derrico",
            "hobbies": ['Treinar', 'Jogar', 'Aprender coisas novas'], 
            "emojis": ['🏋🏽‍♂️', '😄', '✌🏽'], 
            "type": "collab", 
            "admission": "15/01/2018",
            "team": "Desenvolvimento em PHP",
            "email": "henrique.derrico@hit.com.vc"
        }, //8
        {
            "id": "Juciele", 
            "num": 15, 
            "name": "Juciele Wander",
            "hobbies": ['Ver séries', 'Jogar', 'Redes sociais'], 
            "emojis": ['🤣', '🥰', '😡'],
            "type": "collab",
            "admission": "12/04/2021",
            "team": "Desenvolvimento em Node",
            "email": "juciele.wander@hit.com.vc"
        }, //9
        {
            "id": "Julia", 
            "num": 18, 
            "name": "Julia Damacena",
            "hobbies": ['Ler', 'Tocar teclado', 'Conhecer lugares novos'], 
            "emojis": ['🥰', '🙄', '😚'], 
            "type": "collab", 
            "admission": "05/07/2022",
            "team": "Onboarding",
            "email": "julia.damacena@hit.com.vc"
        }, //10
        {
            "id": "Julio", 
            "num": 5, 
            "name": "Julio Cassimiro",
            "hobbies": ['Brincar com as filhas', 'Futebol'], 
            "emojis": ['🖤', '🚀', '⚽'], 
            "type": "collab", 
            "admission": "12/05/2022",
            "team": "Monitoramento",
            "email": "julio.cassimiro@hit.com.vc"
        }, //11
        {
            "id": "Bigui", 
            "num": 1, 
            "name": "Leandro Bigui",
            "hobbies": ['Crossfit', 'Cozinhar'], 
            "emojis": ['🚀', '😂'], "type": 
            "collab", 
            "admission": "02/01/2017",
            "team": "Engenharia de Produtos",
            "email": "leandro.bigui@hit.com.vc"
        }, //12
        {
            "id": "Leo", 
            "num": 7, 
            "name": "Leonardo Meirelis",
            "hobbies": ['Caminhar', 'Jogar', 'Tocar violão'], 
            "emojis": ['😂', '🤔', '🤩'], 
            "type": "collab", 
            "admission": "05/08/2019",
            "team": "IOT",
            "email": "leonardo.martins@hit.com.vc"
        }, //13
        {
            "id": "Lucas", 
            "num": 10, 
            "name": "Lucas da Paz",
            "hobbies": ['Apreciar uma boa cerveja', 'Jogar'], 
            "emojis": ['🧙', '🤐', '🤒'], 
            "type": "collab", 
            "admission": "10/10/2019",
            "team": "Desenvolvimento em Node",
            "email": "lucas.paz@hit.com.vc"
        }, //14
        {
            "id": "Marcos", 
            "num": 12, 
            "name": "Marcos Filho",
            "hobbies": ['Curtir a natureza', 'Estudar novas tecnologias', 'Experimentar coisas novas (comidas, lugares, etc)'], 
            "emojis": ['🐼', '🐦'], 
            "type": "collab", 
            "admission": "25/10/2021",
            "team": "Desenvolvimento em Node",
            "email": "marcos.filho@hit.com.vc"
        }, //15
        {
            "id": "Milleny", 
            "name": "Milleny Steffany",
            "num": 16, 
            "hobbies": ['Dançar', 'Alongar', 'Ver Dorama'], 
            "emojis": ['🤩', '😡', '💃🏻'], 
            "type": "collab", 
            "admission": "20/12/2021",
            "team": "SAM",
            "email": "milleny.santos@hit.com.vc"
        }, //16
        {
            "id": "Vinicio",
            "name": "Vinicio Nascimento",
            "num": 3, 
            "hobbies": ['Jogar', 'Ver séries'], 
            "emojis": ['🤙🏻', '👾'], 
            "type": "collab", 
            "admission": "10/11/2015",
            "team": "Monitoramento",
            "email": "vinicio.nascimento@hit.com.vc"
        }, //17

        {"id": "Onboarding"},//18
        {"id": "Iot"},//19
        {"id": "Dev FINEP"},//20
        {"id": "Dev PHP"},//21
        {"id": "Monitoramento"},//22
        {"id": "Automação"},//23
        {"id": "Sam"},//24
    ],
    "directed": false,
    "multigraph": false
};

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

graph.links.forEach(function(d) {
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
    .nodes(graph.nodes)
    .links(graph.links)
    .start();

var link = g.selectAll(".link")
    .data(graph.links)
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
    .data(graph.nodes)
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
    .data(graph.nodes)
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
            return () => keyspace ? (o.source.index == d.index || o.target.index == d.index ? 1 : highlight_trans) : 0;
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