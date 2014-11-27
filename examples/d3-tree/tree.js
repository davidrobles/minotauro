///////////////////////
// Tic Tac Toe stuff //
///////////////////////

var tic = new mauler.games.tic.TicTacToe();

tic.move(0);
tic.move(2);

var svgView = new mauler.games.tic.TicTacToeSVGView({
    model: tic,
    width: 200,
    height: 200,
    svg: document.getElementById("tic-svg")
});

///////////////////////////
// Non Tic Tac Toe stuff //
///////////////////////////

document.getElementById("button").addEventListener("click", function() {
    opti.children = [{"name": "David", "size": 5000}];
    drawNodes();
});

var opti = {
    "name": "AspectRatioBanker",
    "size": 7074
};

var root ={
    "name": "flare",
    "children": [
        {
            "name": "analytics",
            "children": [
                {
                    "name": "cluster",
                    "children": [
                        {"name": "AgglomerativeCluster", "size": 3938},
                        {"name": "CommunityStructure", "size": 3812},
                        {"name": "HierarchicalCluster", "size": 6714},
                        {"name": "MergeEdge", "size": 743}
                    ]
                },
                {
                    "name": "graph",
                    "children": [
                        {"name": "BetweennessCentrality", "size": 3534},
                        {"name": "LinkDistance", "size": 5731},
                        {"name": "MaxFlowMinCut", "size": 7840},
                        {"name": "ShortestPaths", "size": 5914},
                        {"name": "SpanningTree", "size": 3416}
                    ]
                },
                {
                    "name": "optimization",
                    "children": [
                        opti
                    ]
                }
            ]
        }]
};

var width = 600,
    height = 600;

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.x, d.y]; });


var svg = d3.select("body")
    .append("svg")
    .attr("width", "800")
    .attr("height", "800")
    .attr("style", "background-color: wheat");

var tree = d3.layout.tree().size([width, height]);
var nodes = tree(root);

var drawNodes = function() {
    svg.selectAll("path")
        .data(tree.links(nodes))
        .enter().append("path")
        .attr("d", diagonal)
        .attr("fill", "none")
        .attr("stroke", "blue");

    svg.selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .attr("transform", function(d) {
            return "translate(" + d.x + ", " + d.y + ")"
        })
        .attr("class", "here");

    svg.selectAll(".here")
        .each(function() {
            svgView.svg = d3.select(this);
            svgView.render();
        });
};

drawNodes();