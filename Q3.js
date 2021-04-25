import define1 from "./ref2.js";
import define2 from "./ref1.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([
    ["publisher_income_.csv",new URL("./files/publisher_income_",import.meta.url)],
    ["countries-50m.json",new URL("./files/countries-50m",import.meta.url)],
    ["publisher_gametype_country (2).txt",new URL("./files/publisher_gametype_country",import.meta.url)],
    ["firms3.json",new URL("./files/firms",import.meta.url)],
    ["manufacturers_@1.csv",new URL("./files/manufacturers",import.meta.url)],
    ["firms2-12.json",new URL("./files/firms2",import.meta.url)],
    ["publisher_game.txt",new URL("./files/publisher_game",import.meta.url)],
    ["publishers_.csv",new URL("./files/publishers",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# ReadyPlayerOne --Question 3`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
*<span style="font-size: 12pt"> Attention 1: If there is problem with color illustration in (c).social network plot, please refresh the page. Sorry for the trouble! </span>* 

*<span style="font-size: 12pt"> Attention 2: If you experience scaling issue for our visualizations, please narrow your viewing window. Enjoy ! </span>* 😉 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Q3: Which companies are the major players in this market and what are the business relationships among companies within the industry?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In order to answer this question, we will dicsuss the following aspects:
- (a) The count of publishers and manufacturers in each region, which is indicated by different mobile games.
- (b) The portions for different publishers concerning the gross iOS income by their published mobile games.
- (c) The market share for major publishers concerning region, game types and games.
- (d) Business networks for publishers and manufacturers.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## (a) Count of Game Publishers (Manufacturers) in every Region and Their Market Share Concerning the Gross iOS Income
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In this part, we delve into two geographical maps and one waffle chart to find out which countries based on the home countries of leading companies and which firms are in the leading roles in the mobile game industry.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Count of Game Publishers in every Region `
)});
  main.variable(observer()).define(["legend","color","publishers"], function(legend,color,publishers){return(
legend({color, title: publishers.title})
)});
  main.variable(observer("map1")).define("map1", ["d3","width","height","path","outline","location","countries","color","publishers","topojson","world"], function(d3,width,height,path,outline,location,countries,color,publishers,topojson,world)
{
  const svg = d3.create("svg")
      .style("display", "block")
      .attr("viewBox", [0, 0, width, height]);

  const defs = svg.append("defs");

  defs.append("path")
      .attr("id", "outline")
      .attr("d", path(outline));

  defs.append("clipPath")
      .attr("id", "clip")
    .append("use")
      .attr("xlink:href", new URL("#outline", location));

  const g = svg.append("g")
      .attr("clip-path", `url(${new URL("#clip", location)})`);

  g.append("use")
      .attr("xlink:href", new URL("#outline", location))
      .attr("fill", "white");

  g.append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
      .attr("fill", d => color(publishers.get(d.properties.name)))
      .attr("d", path)
    .append("title")
      .text(d => `${d.properties.name}
${publishers.has(d.properties.name) ? publishers.get(d.properties.name) : "N/A"}`);

  g.append("path")
      .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  svg.append("use")
      .attr("xlink:href", new URL("#outline", location))
      .attr("fill", "none")
      .attr("stroke", "black");

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Count of Game Manufacturers in every Region `
)});
  main.variable(observer()).define(["legend","d3","manufacturers"], function(legend,d3,manufacturers){return(
legend({
  color: d3.scaleSequential([0, 223], d3.interpolateYlGnBu),
  title: manufacturers.title
})
)});
  main.variable(observer("map2")).define("map2", ["d3","width","height","path","outline","location","countries","color","manufacturers","topojson","world"], function(d3,width,height,path,outline,location,countries,color,manufacturers,topojson,world)
{
  const svg = d3.create("svg")
      .style("display", "block")
      .attr("viewBox", [0, 0, width, height]);

  const defs = svg.append("defs");

  defs.append("path")
      .attr("id", "outline")
      .attr("d", path(outline));

  defs.append("clipPath")
      .attr("id", "clip")
    .append("use")
      .attr("xlink:href", new URL("#outline", location));

  const g = svg.append("g")
      .attr("clip-path", `url(${new URL("#clip", location)})`);

  g.append("use")
      .attr("xlink:href", new URL("#outline", location))
      .attr("fill", "white");

  g.append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
      .attr("fill", d => color(manufacturers.get(d.properties.name)))
      .attr("d", path)
    .append("title")
      .text(d => `${d.properties.name}
${manufacturers.has(d.properties.name) ? manufacturers.get(d.properties.name) : "N/A"}`);

  g.append("path")
      .datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  svg.append("use")
      .attr("xlink:href", new URL("#outline", location))
      .attr("fill", "none")
      .attr("stroke", "black");

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`From the maps above, we can see China has the most major publishers (159) and manufacturers (223) in the moile game industry. Japan, South Koera and U.S. are the second, third and fourth most successful region concerning the count of major firms of mobile games industry. The gap is really huge and it seems that East Asia has the leading force in the entire market.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Waffle Chart of Market Share Concerning Gross iOS Income for Publishers

`
)});
  main.variable(observer("viewof options")).define("viewof options", ["form","html"], function(form,html){return(
form(html`<form>
  <span><label>Style: <select name="style">
    <option value="whole">Whole</option>
    <option value="portion">Portion</option>
  </select></label></span>&nbsp;
  <span><label>Shape: <select name="shape">
    <option value="rect">Square</option>
    <option value="circle">Circle</option>
  </select></label></span>
<form>`)
)});
  main.variable(observer("options")).define("options", ["Generators", "viewof options"], (G, _) => G.input(_));
  main.variable(observer("waffle_chart")).define("waffle_chart", ["d3v6","width_1","height_1","waffles","whole","width","waffleSize","padding","scale","options","color_1","isRect","chartData","toCurrency","d3"], function(d3v6,width_1,height_1,waffles,whole,width,waffleSize,padding,scale,options,color_1,isRect,chartData,toCurrency,d3)
{
  const svg = d3v6.create("svg")
    .style("cursor", "default")
    .attr("viewBox", [0, 0, width_1, height_1]);
  
  const g = svg.selectAll(".waffle")  
    .data(waffles)
    .join("g")
    .attr("class", "waffle");
  
  if (!whole) {
    const numPerRow = Math.floor(width / (waffleSize + padding.x));
    g.attr("transform", (d, i) => {
      var r = Math.floor(i / numPerRow);
      var c = i - r * numPerRow;
      return `translate(${c * (waffleSize + padding.x)},${r * (waffleSize + padding.y)})`
    });
  }
  
  const cellSize = scale.bandwidth();
  const half = cellSize / 2;
  const cells = g.append("g")
    .selectAll(options.shape)
    .data(d => d)
    .join(options.shape)
    .attr("fill", d => d.index === -1 ? "#ddd" : color_1(d.index));
  
  if (isRect) {
    cells.attr("x", d => scale(d.x))
      .attr("y", d => whole ?  0 : scale(d.y))
      .attr("rx", 3).attr("ry", 3)
      .attr("width", cellSize).attr("height", cellSize)      
  } 
  else {    
    cells.attr("cx", d => scale(d.x) + half)
      .attr("cy", d => whole ? 0 : scale(d.y) + half)
      .attr("r", half);
  }
  
  if (whole) {
    cells.append("title").text(d => {
      const cd = chartData[d.index];
      return `${cd.territory}\n${toCurrency(cd.profit)} (${cd.ratio.toFixed(1)}%)`;
    });    
    
    cells.transition()
      .duration(d => d.y * 100)
      .ease(d3.easeBounce)
      .attr(isRect ? "y" : "cy", d => scale(d.y) + (isRect ? 0 : half));
      svg.transition().delay(550)
      .on("end", drawLegend);
  }
  else {
    g.append("text")
      .style("font-size", 20)
      .style("font-weight", "bold")
      .attr("dy", "1.5em")
      .attr("text-anchor", "middle")            
      .attr("fill", (d, i) => color_1(i))
      .attr("transform", `translate(${waffleSize / 2},0)`)
      .text((d, i) => `${chartData[i].ratio.toFixed(0)}%`);
    
    g.append("g")
      .attr("transform", `translate(0,${waffleSize + padding.y / 2.5})`)
      .call(g => g.append("text").text((d, i) => chartData[i].territory))
      .call(g => g.append("text").attr("dy", "1em").text((d, i) => toCurrency(chartData[i].profit)));
  }  
  
  return svg.node();
  
  var legend;
  function drawLegend() {
    legend = svg.selectAll(".legend")
      .data(chartData.map(d => d.territory))
      .join("g")      
      .attr("opacity", 1)
      .attr("transform", (d, i) => `translate(${waffleSize + 20},${i * 30})`)
      .on("mouseover", highlight)
      .on("mouseout", restore);
    
    legend.append("rect")
      .attr("rx", 3).attr("ry", 3)
      .attr("width", 30).attr("height", 20)
      .attr("fill", (d, i) => color_1(i));    
    
    legend.append("text")
      .attr("dx", 40)
      .attr("alignment-baseline", "hanging")
      .text((d, i) => `${d} (${chartData[i].ratio.toFixed(1)}%)`);
  }
  
  function highlight(e, d, restore) {
    const i = legend.nodes().indexOf(e.currentTarget);
    cells.transition().duration(500)
      .attr("fill", d => d.index === i ? color_1(d.index) : "#ccc");  
  }
  
  function restore() {
    cells.transition().duration(500).attr("fill", d => color_1(d.index))
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`The Waffle Chart is an attractive 10x10 grid in which each cell represents one percentage point. 
In this chart, we could see Tencent and NetEase are dominant powers among the publishers in mobile game industry which has a long-tailed distributions.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## (b) Composition of Revenue for Major Publisers
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
In this part, we want to focus on composition of revenue for major publishers. The following two Sankey charts are given. By this mean, we aim to solve the doubts that whether these major publishers reply on one market as well as if their revenues are mainly from a certain game type or one single game. Furthermore, as for game manufactering, the following charts can also give insights to the game manufacturers about whether it is a good idea to focus on developing a certain kind of game or if the diversty of games matter more?

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Sankey Chart for Association among Publishers, Game Types and Regions

`
)});
  main.variable(observer("viewof costType")).define("viewof costType", ["html","URLSearchParams"], function(html,URLSearchParams){return(
Object.assign(html`
<select>
  <option value=tco selected>iOS income
</select>`, {
  value: new URLSearchParams(html`<a href>`.search).get("costType") || "tco"
})
)});
  main.variable(observer("costType")).define("costType", ["Generators", "viewof costType"], (G, _) => G.input(_));
  main.variable(observer("sankey_chart")).define("sankey_chart", ["d3","width_2","height_2","sankey","publisher_gametype","color_2","format"], function(d3,width_2,height_2,sankey,publisher_gametype,color_2,format)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width_2, height_2 + 20])
      .on('mouseout', () => {
        d3.selectAll(`path`)
            .attr('stroke-opacity', 0.1);
      });

  const {nodes, links} = sankey(publisher_gametype);

  svg.append("g")
      .attr("stroke", "#000")
    .selectAll("rect")
    .data(nodes)
    .join("rect")
      .attr("x", d => d.x0)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => {
        if (d.name === 'iOS_income') {
          return d3.schemeSet1[0];
        }
        
        if (d.name === 'iOS_download') {
          return d3.schemeSet1[4];
        }
    
        return color_2(d.name);
      })
  
    .on('mouseover', (d) => {
        d.sourceLinks.forEach(e => {
          d3.selectAll(`path.trajectory_${e.id}`)
            .attr('stroke-opacity', 0.4);
        });

        d.targetLinks.forEach(e => {
          d3.selectAll(`path.trajectory_${e.id}`)
            .attr('stroke-opacity', 0.4);
        });
      })
      .on('mouseout', d => {

        d.sourceLinks.forEach(e => {
          d3.selectAll(`path.trajectory_${e.id}`)
            .attr('stroke-opacity', 0.1);
        })
  })
  
    .append("title")
      .text(d => `${d.name}\n${format(d.value)}`);

  const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.4)
    .selectAll("g")
    .data(links)
    .join("g")
      .style("mix-blend-mode", "multiply");

  link.append("path")
      .attr('class', d => `trajectory_${d.id}`)
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke", d => d.type === 'iOS_income'
            ? d3.schemeSet1[0]
            : d3.schemeSet1[4]
           )
      .attr('stroke-opacity', 0.2)
      .attr("stroke-width", d => Math.max(1, d.width))
      

  link.append("title")
      .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);

  svg.append("g")
      .style("font", "11px sans-serif")
    .selectAll("text")
    .data(nodes)
    .join("text")
      .attr("x", d => d.x0 < width_2 / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.4em")
      .attr("text-anchor", d => d.x0 < width_2 / 2 ? "start" : "end")
      .text(d => d.name)
      .append('tspan')
      .attr('dy', 12)
      .attr('dx', -20)
      .attr('font-size', '9px sans-serif')
      .text(d => format(d.value));

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
In this Sankey charts, the first layer to the left shows different game publishers, and the middle layer is represented by the game type. Lastly, the layer to the right is five mobile game market. The length of each block indicates the amount of IOS income for each corresponding item. The links between the layers show the composition of IOS income for each element. You can figure out not only the allocation of game types for a certain game publisher, but also which publisher contributes the most to a cetain kind of game. Further more, by looking at the links at the layer to the right, you can also have an idea of the whole distribution of game types within each mobile game market as well as the distribution of their market players. 

It is obvious that Tencent Game and NetEase Game are two major game publishers in the markets. Not like Tencent Game who involves in various kinds of games, NetEase Game seems to put more emphasis on one certain kind of game which is Turn-based MMORPG. And we can also observe through the links from Turn-based MMORPG that NetEase Game is major contributor of this game type. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Sankey Chart for Association among Publishers, Game Types and Games`
)});
  main.variable(observer("viewof costType1")).define("viewof costType1", ["html","URLSearchParams"], function(html,URLSearchParams){return(
Object.assign(html`
<select>
  <option value=tco selected>iOS income
</select>`, {
  value: new URLSearchParams(html`<a href>`.search).get("costType") || "tco"
})
)});
  main.variable(observer("costType1")).define("costType1", ["Generators", "viewof costType1"], (G, _) => G.input(_));
  main.variable(observer("sankey_chart2")).define("sankey_chart2", ["d3","width_2","height_2","sankey","publisher_game","color_2","format","width"], function(d3,width_2,height_2,sankey,publisher_game,color_2,format,width)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width_2, height_2 + 20])
      .on('mouseout', () => {
        d3.selectAll(`path`)
            .attr('stroke-opacity', 0.1);
      });

  const {nodes, links} = sankey(publisher_game);

  svg.append("g")
      .attr("stroke", "#000")
    .selectAll("rect")
    .data(nodes)
    .join("rect")
      .attr("x", d => d.x0)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => {
        if (d.name === 'iOS_income') {
          return d3.schemeSet1[0];
        }
        
        if (d.name === 'iOS_download') {
          return d3.schemeSet1[4];
        }
    
        return color_2(d.name);
      })
  
    .on('mouseover', (d) => {
        d.sourceLinks.forEach(e => {
          d3.selectAll(`path.trajectory_${e.id}`)
            .attr('stroke-opacity', 0.4);
        });

        d.targetLinks.forEach(e => {
          d3.selectAll(`path.trajectory_${e.id}`)
            .attr('stroke-opacity', 0.4);
        });
      })
      .on('mouseout', d => {

        d.sourceLinks.forEach(e => {
          d3.selectAll(`path.trajectory_${e.id}`)
            .attr('stroke-opacity', 0.1);
        })
  })
  
    .append("title")
      .text(d => `${d.name}\n${format(d.value)}`);

  const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.4)
    .selectAll("g")
    .data(links)
    .join("g")
      .style("mix-blend-mode", "multiply");

  link.append("path")
      .attr('class', d => `trajectory_${d.id}`)
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke", d => d.type === 'iOS_income'
            ? d3.schemeSet1[0]
            : d3.schemeSet1[4]
           )
      .attr('stroke-opacity', 0.2)
      .attr("stroke-width", d => Math.max(1, d.width))
      

  link.append("title")
      .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)}`);

  svg.append("g")
      .style("font", "11px sans-serif")
    .selectAll("text")
    .data(nodes)
    .join("text")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.4em")
      .attr("text-anchor", d => d.x0 < width_2 / 2 ? "start" : "end")
      .text(d => d.name)
      .append('tspan')
      .attr('dy', 12)
      .attr('dx', -20)
      .attr('font-size', '9px sans-serif')
      .text(d => format(d.value));

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
In this Sankey plot, we could see that publishers generate income mostly by their first lucrative mobile game and this fact also decides their most lucrative game type (like Honor of Kings, MOBA for Tencent game and Fantasy Westward Journey, Turn-based MMORPG for NetEase game). However, this phenomenon is more serious for those ordinary publishers. They seems to like putting their eggs in one basket. Maybe it is a good idea to focus on one thing while growing the business into the market, but at the same time, it also makes them vunlerable in the market against unpredictable changes.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`##  (c) Social network for Publishers and Manufacturers `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
In this part, we elaborated the cooperations between publishers and manufacturers by social network graphs. 

The relationship among companies in the industry may be a key to their success, and it is also an aspect that new enterprises need to pay attention to.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 🔥 Hierarchical Edge Bundling for main Publishers and Manufacturers
`
)});
  main.variable(observer("edge")).define("edge", ["tree","bilink","d3v6","firms","width_3","id","colornone","line","colorin","colorout"], function(tree,bilink,d3v6,firms,width_3,id,colornone,line,colorin,colorout)
{
  const root = tree(
    bilink(
      d3v6
        .hierarchy(firms)
        .sort(
          (a, b) =>
            d3v6.ascending(a.height, b.height) ||
            d3v6.ascending(a.data.name, b.data.name)
        )
    )
  );

  const svg = d3v6
    .create("svg")
    .attr("viewBox", [-width_3 / 2, -width_3 / 2, width_3, width_3]);

  const node = svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr(
      "transform",
      d => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`
    )
    .append("text")
    .attr("dy", "0.31em")
    .attr("x", d => (d.x < Math.PI ? 6 : -6))
    .attr("text-anchor", d => (d.x < Math.PI ? "start" : "end"))
    .attr("transform", d => (d.x >= Math.PI ? "rotate(180)" : null))
    .text(d => d.data.name)
    .each(function(d) {
      d.text = this;
    })
    .on("mouseover", overed)
    .on("mouseout", outed)
    .call(text =>
      text.append("title").text(
        d => `${id(d)}
${d.outgoing.length} outgoing
${d.incoming.length} incoming`
      )
    );

  const link = svg
    .append("g")
    .attr("stroke", colornone)
    .attr("fill", "none")
    .selectAll("path")
    .data(root.leaves().flatMap(leaf => leaf.outgoing))
    .join("path")
    .style("mix-blend-mode", "multiply")
    .attr("d", ([i, o]) => line(i.path(o)))
    .each(function(d) {
      d.path = this;
    });

  function overed(event, d) {
    link.style("mix-blend-mode", null);
    d3v6.select(this).attr("font-weight", "bold");
    d3v6
      .selectAll(d.incoming.map(d => d.path))
      .attr("stroke", colorin)
      .raise();
    d3v6
      .selectAll(d.incoming.map(([d]) => d.text))
      .attr("fill", colorin)
      .attr("font-weight", "bold");
    d3v6
      .selectAll(d.outgoing.map(d => d.path))
      .attr("stroke", colorout)
      .raise();
    d3v6
      .selectAll(d.outgoing.map(([, d]) => d.text))
      .attr("fill", colorout)
      .attr("font-weight", "bold");
  }

  function outed(event, d) {
    link.style("mix-blend-mode", "multiply");
    d3v6.select(this).attr("font-weight", null);
    d3v6.selectAll(d.incoming.map(d => d.path)).attr("stroke", null);
    d3v6
      .selectAll(d.incoming.map(([d]) => d.text))
      .attr("fill", null)
      .attr("font-weight", null);
    d3v6.selectAll(d.outgoing.map(d => d.path)).attr("stroke", null);
    d3v6
      .selectAll(d.outgoing.map(([, d]) => d.text))
      .attr("fill", null)
      .attr("font-weight", null);
  }

  return svg.node();
}
);
  main.variable(observer()).define(["md","colorout","colorin"], function(md,colorout,colorin){return(
md`

This chart (it may need refresh to be more clear) shows relationships among classes in the mobile game industry. Hover a class to reveal its imports (<b style="color: ${colorout};">publishing</b> edges) and classes that import it (<b style="color: ${colorin};">developing</b> edges).

From this network, we could see that most nodes are not vital for few connections (most only one egde) with others. And it is obvious that Tencent and NetEase are two important nodes here with a lot of connections with other companies. And their market share concerning gross iOS income above also showed their dominance. This reveal the a quasi-duopoly state.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`###  🔥 Graph for Cooperation among Mobile Game Firms
`
)});
  main.variable(observer("network")).define("network", ["data","forceSimulation","d3","DOM","width","height_3","numScenes","color_3","drag"], function(data,forceSimulation,d3,DOM,width,height_3,numScenes,color_3,drag)
{
  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map((d, index) => Object.create(d, { id: { value: index } }));
  console.log(links, 
              nodes);
  const simulation = forceSimulation(nodes, links).on("tick", ticked);

  const svg = d3.select(DOM.svg(width, height_3))
      .attr("viewBox", [-width / 2, -height_3 / 2, width, height_3]);

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .enter().append("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("r", numScenes)
      .attr("fill", color_3)
      .call(drag(simulation));
  
 var texts  = svg.selectAll(".texts")
      .data(nodes)
      .enter()
      .filter( d => (d.value >= 40) )
      .append("text")
      .attr("font-family", "sans-serif")
      .attr("dx", 12)
      .attr("dy", "0.35em")
      .text( d => d.name );

  node.append("title")
      .text(d => d.name);

  function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
    
    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
    
    texts
        .attr("x", d => d.x)
        .attr("y", d => d.y);
    
  }

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md` 
This network of mobile game companies co-occurence in our data is positioned by simulated forces using [d3-force].

By showing network graph in this way, we could see the distance between nodes. First fact we could observe is that the network is very sparse and only dense among some nodes as we said before. 

As we find quasi-duopoly above, now the isolation between two leading firms is also observed, we can also inspect that only Activision Blizzard and 37 Games have direct cooperation with both two leading companies.

As a result, the potential competition among those companies is revealed. New rising mobile company shoud be cautious about which camp or faction to follow.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Data`
)});
  main.variable(observer("world")).define("world", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("countries-50m.json").json()
)});
  main.variable(observer("publishers")).define("publishers", ["d3","FileAttachment","rename"], async function(d3,FileAttachment,rename){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("publishers_.csv").text(), ({country, hale}) => [rename.get(country) || country, +hale])), {title: "Number of Publishers All over the World"})
)});
  main.variable(observer("manufacturers")).define("manufacturers", ["d3","FileAttachment","rename"], async function(d3,FileAttachment,rename){return(
Object.assign(new Map(d3.csvParse(await FileAttachment("manufacturers_@1.csv").text(), ({country, hale}) => [rename.get(country) || country, +hale])), {title: "Number of Manufacturers All over the World"})
)});
  main.variable(observer("rename")).define("rename", function(){return(
new Map([
  ["Antigua and Barbuda", "Antigua and Barb."],
  ["Bolivia (Plurinational State of)", "Bolivia"],
  ["Bosnia and Herzegovina", "Bosnia and Herz."],
  ["Brunei Darussalam", "Brunei"],
  ["Central African Republic", "Central African Rep."],
  ["Cook Islands", "Cook Is."],
  ["Democratic People's Republic of Korea", "North Korea"],
  ["Democratic Republic of the Congo", "Dem. Rep. Congo"],
  ["Dominican Republic", "Dominican Rep."],
  ["Equatorial Guinea", "Eq. Guinea"],
  ["Iran (Islamic Republic of)", "Iran"],
  ["Lao People's Democratic Republic", "Laos"],
  ["Marshall Islands", "Marshall Is."],
  ["Micronesia (Federated States of)", "Micronesia"],
  ["Republic of Korea", "South Korea"],
  ["Republic of Moldova", "Moldova"],
  ["Russian Federation", "Russia"],
  ["Saint Kitts and Nevis", "St. Kitts and Nevis"],
  ["Saint Vincent and the Grenadines", "St. Vin. and Gren."],
  ["Sao Tome and Principe", "São Tomé and Principe"],
  ["Solomon Islands", "Solomon Is."],
  ["South Sudan", "S. Sudan"],
  ["Swaziland", "eSwatini"],
  ["Syrian Arab Republic", "Syria"],
  ["The former Yugoslav Republic of Macedonia", "Macedonia"],
  // ["Tuvalu", ?],
  ["United Republic of Tanzania", "Tanzania"],
  ["Venezuela (Bolivarian Republic of)", "Venezuela"],
  ["Viet Nam", "Vietnam"],
  ["U.S.A","United States of America"],
  ["Taiwan, China","Taiwan"],
  ["Hong Kong, China","Hong Kong"]
  
])
)});
  main.variable(observer("chartData")).define("chartData", ["d3","FileAttachment"], async function(d3,FileAttachment)
{
  const data = d3.csvParse(await FileAttachment("publisher_income_.csv").text(), d3.autoType);
  const total = data.reduce((a, b) => a + Math.abs(b.profit), 0);
  return data.map(d => ({
    territory: d.territory, 
    profit: d.profit, 
    ratio: d.profit / total * 100
  }));  
}
);
  main.variable(observer("publisher_gametype")).define("publisher_gametype", ["d3","FileAttachment","costType"], async function(d3,FileAttachment,costType)
{
  let links = [];
  const csvData = d3.csvParse(await FileAttachment("publisher_gametype_country (2).txt").text(), d3.autoType);
  
  csvData.sort((a, b) => a['NAME_1'] - b['NAME_1']);
  
  csvData.map((row, i) => {
    if (costType === row['TYPE_EXPENSE'] || costType === 'tco') {
      links.push({
        source: row['NAME_1'],
        target: row['NAME_2'],
        type: row['TYPE_EXPENSE'],
        value: row['VALUE'],
        id: i,
      })

      links.push({
        source: row['NAME_2'],
        target: row['EXPENSE'],
        type: row['TYPE_EXPENSE'],
        value: row['VALUE'],
        id: i,
      })

      /*
      links.push({
        source: row['EXPENSE'],
        target: row['TYPE_EXPENSE'],
        type: row['TYPE_EXPENSE'],
        value: row['VALUE'],
        id: i,
      })
      
      */
    }
    
  });
  
  const nodes = Array.from(new Set(links.flatMap(l => [l.source, l.target])), (name, id) => ({name, id}));
  
  links.map(d => {
    d.source = nodes.find(e => e.name === d.source).id;
    d.target = nodes.find(e => e.name === d.target).id;
  })
  return {nodes, links};
}
);
  main.variable(observer("publisher_game")).define("publisher_game", ["d3","FileAttachment","costType1"], async function(d3,FileAttachment,costType1)
{
  let links = [];
  const csvData = d3.csvParse(await FileAttachment("publisher_game.txt").text(), d3.autoType);
  
  csvData.sort((a, b) => a['NAME_1'] - b['NAME_1']);
  
  csvData.map((row, i) => {
    if (costType1 === row['TYPE_EXPENSE'] || costType1 === 'tco') {
      links.push({
        source: row['NAME_1'],
        target: row['NAME_2'],
        type: row['TYPE_EXPENSE'],
        value: row['VALUE'],
        id: i,
      })

      links.push({
        source: row['NAME_2'],
        target: row['EXPENSE'],
        type: row['TYPE_EXPENSE'],
        value: row['VALUE'],
        id: i,
      })

      /*
      links.push({
        source: row['EXPENSE'],
        target: row['TYPE_EXPENSE'],
        type: row['TYPE_EXPENSE'],
        value: row['VALUE'],
        id: i,
      })
      
      */
    }
    
  });
  
  const nodes = Array.from(new Set(links.flatMap(l => [l.source, l.target])), (name, id) => ({name, id}));
  
  links.map(d => {
    d.source = nodes.find(e => e.name === d.source).id;
    d.target = nodes.find(e => e.name === d.target).id;
  })
  return {nodes, links};
}
);
  main.variable(observer("firms")).define("firms", ["hierarchy","FileAttachment"], async function(hierarchy,FileAttachment){return(
hierarchy(await FileAttachment("firms2-12.json").json())
)});
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("firms3.json").json()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Functions`
)});
  main.variable(observer("bilink")).define("bilink", ["id"], function(id){return(
function bilink(root) {
  const map = new Map(root.leaves().map(d => [id(d), d]));
  for (const d of root.leaves()) d.incoming = [], d.outgoing = d.data.imports.map(i => [d, map.get(i)]);
  for (const d of root.leaves()) for (const o of d.outgoing) o[1].incoming.push(o);
  return root;
}
)});
  main.variable(observer("color")).define("color", ["d3","publishers"], function(d3,publishers){return(
d3.scaleSequential()
    .domain(d3.extent(Array.from(publishers.values())))
    .interpolator(d3.interpolateYlGnBu)
    .unknown("#ccc")
)});
  main.variable(observer("color_1")).define("color_1", ["d3v6","sequence","chartData"], function(d3v6,sequence,chartData){return(
d3v6.scaleOrdinal(d3v6.schemeTableau10)
  .domain(sequence(chartData.length))
)});
  main.variable(observer("color_2")).define("color_2", ["d3"], function(d3)
{
  const color = d3.scaleOrdinal(d3.schemeSet3);
  return name => color(name.replace(/ .*/, ""));
}
);
  main.variable(observer("color_3")).define("color_3", function()
{
  //const scale = d3.scaleOrdinal(d3.schemeCategory10);
  //return d => scale(d.value);
  return d => d.colour;
}
);
  main.variable(observer("drag")).define("drag", ["d3"], function(d3){return(
simulation => {
  
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  
  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  
  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}
)});
  main.variable(observer("forceSimulation")).define("forceSimulation", ["d3"], function(d3){return(
function forceSimulation(nodes, links) {
  return d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-130).distanceMin(60))
      .force("center", d3.forceCenter());
}
)});
  main.variable(observer("format")).define("format", ["d3"], function(d3)
{
  const f = d3.format("$.3s");
  return d => `${f(d)}`;
}
);
  main.variable(observer("hierarchy")).define("hierarchy", function(){return(
function hierarchy(data, delimiter = ".") {
  let root;
  const map = new Map;
  data.forEach(function find(data) {
    const {name} = data;
    if (map.has(name)) return map.get(name);
    const i = name.lastIndexOf(delimiter);
    map.set(name, data);
    if (i >= 0) {
      find({name: name.substring(0, i), children: []}).children.push(data);
      data.name = name.substring(i + 1);
    } else {
      root = data;
    }
    return data;
  });
  return root;
}
)});
  main.variable(observer("line")).define("line", ["d3v6"], function(d3v6){return(
d3v6
  .lineRadial()
  .curve(d3v6.curveBundle.beta(0.85))
  .radius(d => d.y)
  .angle(d => d.x)
)});
  main.variable(observer("id")).define("id", function(){return(
function id(node) {
  return `${node.parent ? id(node.parent) + "." : ""}${node.data.name}`;
}
)});
  main.variable(observer("numScenes")).define("numScenes", ["d3"], function(d3)
{
  var width = d3.scaleQuantize()
    .domain([1, 190])
    .range([10, 20, 30, 35, 40, 45])
  return d => width(d.value);
}
);
  main.variable(observer("path")).define("path", ["d3","projection"], function(d3,projection){return(
d3.geoPath(projection)
)});
  main.variable(observer("projection")).define("projection", ["d3"], function(d3){return(
d3.geoEqualEarth()
)});
  main.variable(observer("sankey")).define("sankey", ["d3","width_2","height_2"], function(d3,width_2,height_2)
{
  const sankey = d3.sankey()
      .nodeSort((a, b) => a.id - b.id)
      .nodeId(d => d.id)
      .linkSort(null)
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 5], [width_2 - 1, height_2 - 5]]);
  return ({nodes, links}) => sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d))
  });
}
);
  main.variable(observer("sequence")).define("sequence", function(){return(
(length) => Array.apply(null, {length: length}).map((d, i) => i)
)});
  main.variable(observer("scale")).define("scale", ["d3v6","sequence","waffleSize"], function(d3v6,sequence,waffleSize){return(
d3v6.scaleBand()
  .domain(sequence(10))
  .range([0, waffleSize])
  .padding(0.1)
)});
  main.variable(observer("toCurrency")).define("toCurrency", ["d3"], function(d3){return(
num => d3.format("$,.2f")(num)
)});
  main.variable(observer("tree")).define("tree", ["d3v6","radius"], function(d3v6,radius){return(
d3v6.cluster()
    .size([2 * Math.PI, radius - 100])
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Parameters`
)});
  main.variable(observer("colorin")).define("colorin", function(){return(
"#00f"
)});
  main.variable(observer("colornone")).define("colornone", function(){return(
"#a8dadc"
)});
  main.variable(observer("colorout")).define("colorout", function(){return(
"#f00"
)});
  main.variable(observer("height")).define("height", ["d3","projection","width","outline"], function(d3,projection,width,outline)
{
  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, outline)).bounds(outline);
  const dy = Math.ceil(y1 - y0), l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  return dy;
}
);
  main.variable(observer("height_1")).define("height_1", function(){return(
600
)});
  main.variable(observer("height_2")).define("height_2", function(){return(
900
)});
  main.variable(observer("height_3")).define("height_3", function(){return(
800
)});
  main.variable(observer("isRect")).define("isRect", ["options"], function(options){return(
options.shape === "rect"
)});
  main.variable(observer("radius")).define("radius", ["width_3"], function(width_3){return(
width_3 / 2
)});
  main.variable(observer("waffleSize")).define("waffleSize", ["whole","width_1","height_1"], function(whole,width_1,height_1){return(
whole ? width_1 < height_1 ? width_1 : height_1 : 150
)});
  main.variable(observer("whole")).define("whole", ["options"], function(options){return(
options.style === "whole"
)});
  main.variable(observer("width")).define("width", function(){return(
975
)});
  main.variable(observer("width_1")).define("width_1", function(){return(
1024
)});
  main.variable(observer("width_2")).define("width_2", function(){return(
900
)});
  main.variable(observer("width_3")).define("width_3", function(){return(
954
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Appendix`
)});
  main.variable(observer("waffles")).define("waffles", ["whole","chartData"], function(whole,chartData)
{
  var array = [];
  if (whole) {
    const max = chartData.length; 
    var index = 0, curr = 1, 
        accu = Math.round(chartData[0].ratio), waffle = [];
    
    for (var y = 9; y >= 0; y--)
      for (var x = 0; x < 10; x ++) {
        if (curr > accu && index < max) {
          var r = Math.round(chartData[++index].ratio);
          while(r === 0 && index < max) r = Math.round(chartData[++index].ratio);
          accu += r;
        }
        waffle.push({x, y, index});
        curr++;
      } 
    array.push(waffle);
  }
  else {
    chartData.map((d, i) => {
      var curr = 0, waffle = [];
      for (var y = 9; y >= 0; y--)
        for(var x = 0; x < 10; x ++) {
          waffle.push(({x, y, index: curr < Math.round(d.ratio) ? i : -1}));
          curr++;
        }
      array.push(waffle);
    });
  }  
  return array;
}
);
  main.variable(observer("outline")).define("outline", function(){return(
{type: "Sphere"}
)});
  main.variable(observer("padding")).define("padding", function(){return(
{x: 10, y: 40}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5", "d3-sankey@0.12")
)});
  main.variable(observer("d3v6")).define("d3v6", ["require"], function(require){return(
require("d3@6")
)});
  const child1 = runtime.module(define1);
  main.import("legend", child1);
  const child2 = runtime.module(define2);
  main.import("form", child2);
  main.variable(observer("topojson")).define("topojson", ["require"], function(require){return(
require("topojson-client@3")
)});
  main.variable(observer("countries")).define("countries", ["topojson","world"], function(topojson,world){return(
topojson.feature(world, world.objects.countries)
)});
  return main;
}
