(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(64)},48:function(e,t,a){},49:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(28),c=a.n(o),r=(a(48),a(6)),i=a(7),s=a(9),u=a(8),m=a(10),h=window.$,p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={tooltip:"Copy Hex"},a.copyHex=function(e,t){e.preventDefault(),h("#hexValue").val(t).select(),document.execCommand("copy"),a.setState({tooltip:"Copied"})},a.resetTooltip=function(e){a.setState({tooltip:"Copy Hex"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){h('[data-toggle="tooltip"]').tooltip()}},{key:"componentDidUpdate",value:function(){h('[data-toggle="tooltip"]').tooltip()}},{key:"render",value:function(){var e=this,t=this.props.color,a=this.state.tooltip;return l.a.createElement("span",{className:"color","data-toggle":"tooltip","data-placement":"top",style:{backgroundColor:"#"+t,color:"#"+t},title:a,onClick:function(a){e.resetTooltip(),e.copyHex(a,t),h(".color").tooltip("dispose")}},"#",t)}}]),t}(n.Component),d=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={palettes:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://ngocto.com/api/palettes.php").then(function(e){return e.json()}).then(function(t){e.setState({palettes:t})})}},{key:"render",value:function(){var e=this.state.palettes;return l.a.createElement("div",{className:"row"},l.a.createElement("input",{type:"text",id:"hexValue",className:"hidden"}),e.map(function(e){return l.a.createElement("div",{key:e.id,className:"item-container col-12 col-md-6 col-lg-4"},l.a.createElement("h3",{className:"h5"},e.title),l.a.createElement("div",null,e.colors.map(function(e,t){return l.a.createElement(p,{color:e,key:t})})))}),";")}}]),t}(n.Component),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={patterns:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://ngocto.com/api/patterns.php").then(function(e){return e.json()}).then(function(t){e.setState({patterns:t})})}},{key:"render",value:function(){var e=this.state.patterns;return l.a.createElement("div",{className:"row"},e.map(function(e){return l.a.createElement("div",{key:e.id,className:"item-container col-12 col-md-6 col-lg-4"},l.a.createElement("h3",{className:"h5"},e.title),l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:e.badgeUrl,alt:e.title})))}),";")}}]),t}(n.Component),E=a(65),b="http://ngocto.com/api/randomizePalette.php",v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).fetchRPalette=function(){fetch(b).then(function(e){return e.json()}).then(function(t){e.setState({palettes:t})})},e.state={palettes:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.palettes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{id:"paletteRandomize",variant:"link",onClick:this.fetchRPalette},"Random Palette"),l.a.createElement("input",{type:"text",id:"hexValue",className:"hidden"}),e.map(function(e){return l.a.createElement("div",{key:e.id,className:"item-container"},l.a.createElement("h3",{className:"h5"},e.title),l.a.createElement("div",null,e.colors.map(function(e,t){return l.a.createElement(p,{color:e,key:t})})))}))}}]),t}(n.Component),g="http://ngocto.com/api/randomizePattern.php",k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).fetchRPattern=function(){fetch(g).then(function(e){return e.json()}).then(function(t){e.setState({patterns:t})})},e.state={patterns:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.patterns;return l.a.createElement("div",null,l.a.createElement(E.a,{id:"patternRandomize",variant:"link",onClick:this.fetchRPattern},"Random Pattern"),e.map(function(e){return l.a.createElement("div",{key:e.id,className:"item-container"},l.a.createElement("h3",{className:"h5"},e.title),l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:e.badgeUrl,alt:e.title})))}))}}]),t}(n.Component),x=a(70),y=a(68),j=(a(49),a(66)),O=a(69),C=a(67),N=a(37),w=a(71),S=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).handleBackground=function(e){n.setState({background:e.target.value})},n.handleTitle=function(e){n.setState({title:e.target.value})},n.handleSubtitle=function(e){n.setState({subtitle:e.target.value})},n.handleText=function(e){n.setState({text:e.target.value})},n.handleLink=function(e){n.setState({link:e.target.value})},n.state={open:!1,background:"",title:"",subtitle:"",text:"",link:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.open,a=this.state,n=a.background,o=a.title,c=a.subtitle,r=a.text,i=a.link;return l.a.createElement("div",null,l.a.createElement(E.a,{variant:"link",onClick:function(){return e.setState({open:!t})},"aria-controls":"example-collapse-text","aria-expanded":t},"Test Palette"),l.a.createElement(j.a,{in:this.state.open,className:"text-left palette-collapse"},l.a.createElement("div",{className:"row"},l.a.createElement(O.a,{className:"col-12 col-md-4 offset-md-2"},l.a.createElement(O.a.Group,{as:C.a,controlId:"background"},l.a.createElement(O.a.Label,{column:!0,xs:"6",className:"text-right"},"Background Color"),l.a.createElement(N.a,{xs:"4"},l.a.createElement(O.a.Control,{type:"text",placeholder:"FFFFFF",value:n,onChange:function(t){e.handleBackground(t)}}))),l.a.createElement(O.a.Group,{as:C.a,controlId:"title"},l.a.createElement(O.a.Label,{column:!0,xs:"6",className:"text-right"},"Title Color"),l.a.createElement(N.a,{xs:"4"},l.a.createElement(O.a.Control,{type:"text",placeholder:"000000",value:o,onChange:function(t){e.handleTitle(t)}}))),l.a.createElement(O.a.Group,{as:C.a,controlId:"subtitle"},l.a.createElement(O.a.Label,{column:!0,xs:"6",className:"text-right"},"Subtitle Color"),l.a.createElement(N.a,{xs:"4"},l.a.createElement(O.a.Control,{type:"text",placeholder:"000000",value:c,onChange:function(t){e.handleSubtitle(t)}}))),l.a.createElement(O.a.Group,{as:C.a,controlId:"body"},l.a.createElement(O.a.Label,{column:!0,xs:"6",className:"text-right"},"Body Text Color"),l.a.createElement(N.a,{xs:"4"},l.a.createElement(O.a.Control,{type:"text",placeholder:"000000",value:r,onChange:function(t){e.handleText(t)}}))),l.a.createElement(O.a.Group,{as:C.a,controlId:"link"},l.a.createElement(O.a.Label,{column:!0,xs:"6",className:"text-right"},"Link Color"),l.a.createElement(N.a,{xs:"4"},l.a.createElement(O.a.Control,{type:"text",placeholder:"000000",value:i,onChange:function(t){e.handleLink(t)}})))),l.a.createElement(w.a,{className:"offset-2 offset-md-0 col-8 col-md-4",style:{backgroundColor:"#"+n}},l.a.createElement(w.a.Body,null,l.a.createElement(w.a.Title,{className:"font-weight-bold h4",style:{color:"#"+o}},"Test Palette"),l.a.createElement(w.a.Subtitle,{className:"mb-2 text-muted",style:{color:"#"+c}},"An example Usage"),l.a.createElement(w.a.Text,{style:{color:"#"+r}},"Some quick example text to color the title, subtitle, content, link and background."),l.a.createElement(w.a.Text,{style:{color:"#"+r}},"To color an element, change the input color in the text fields beside."),l.a.createElement(w.a.Link,{href:"#",className:"font-weight-bold",style:{color:"#"+i}},"A Link"),l.a.createElement(w.a.Link,{href:"#",className:"font-weight-bold",style:{color:"#"+i}},"Another Link"))))))}}]),t}(n.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"shadow-sm"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Colours and Patterns"),l.a.createElement("p",null,"A simple listing of colors and patterns for you."))),l.a.createElement("main",null,l.a.createElement(x.a,{defaultActiveKey:"palette",id:"tab",className:"nav-tabs"},l.a.createElement(y.a,{eventKey:"palette",title:"Palette"},l.a.createElement("section",null,l.a.createElement("h2",null,"\u2665 Palette Listing \u2665"),l.a.createElement(S,{background:"",heading:"",text:"",link:"",button:"",buttonText:""}),l.a.createElement(v,null),l.a.createElement(d,null))),l.a.createElement(y.a,{eventKey:"pattern",title:"Pattern"},l.a.createElement("section",null,l.a.createElement("h2",null,"\u2665 Pattern Listing \u2665"),l.a.createElement(k,null),l.a.createElement(f,null)))),";"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.aed4bea7.chunk.js.map