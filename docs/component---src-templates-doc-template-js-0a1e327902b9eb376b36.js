(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(163),a(7)),s=a.n(r),c=a(39),o=a.n(c),l=a(38),m=a(160),A=a(173),d=(a(175),a(177),"undefined"==typeof window?{removeListener:function(){},addListener:function(){}}:window.matchMedia("(min-width: 800px)")),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={sidebarDocked:d.matches,sidebarOpen:!1},a.mediaQueryChanged=a.mediaQueryChanged.bind(o()(o()(a))),a.onSetSidebarOpen=a.onSetSidebarOpen.bind(o()(o()(a))),a.toggleNavigation=a.toggleNavigation.bind(o()(o()(a))),a}s()(t,e);var a=t.prototype;return a.UNSAFE_componentWillMount=function(){d.addListener(this.mediaQueryChanged)},a.componentWillUnmount=function(){d.removeListener(this.mediaQueryChanged)},a.onSetSidebarOpen=function(e){this.setState({sidebarOpen:e})},a.toggleNavigation=function(){this.onSetSidebarOpen(!this.state.sidebarOpen)},a.mediaQueryChanged=function(){this.setState({sidebarDocked:d.matches,sidebarOpen:!1})},a.render=function(){var e=this.state.sidebarOpen;return i.a.createElement(m.a,null,i.a.createElement("div",{className:"docs-wrapper"},d.matches?null:i.a.createElement("button",{onClick:this.toggleNavigation,className:"hamburger hamburger--spin"+(e?" is-active":""),type:"button"},i.a.createElement("span",{className:"hamburger-box"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement(A.a,{transitions:!1,rootClassName:"docs-sidebar",sidebarClassName:"docs-nav",contentClassName:"docs-content",sidebar:this.renderSidebar(),open:this.state.sidebarOpen,docked:this.state.sidebarDocked,onSetOpen:this.onSetSidebarOpen},i.a.createElement("div",{className:"docs-content"},this.props.children))))},a.renderSidebar=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",null,i.a.createElement("header",null,i.a.createElement(l.Link,{to:"/docs/rules"},"Rules"))),i.a.createElement("section",null,i.a.createElement("header",null,"Guides"),i.a.createElement("ul",null,i.a.createElement(l.Link,{to:"/docs/rule"},i.a.createElement("li",null,"Develop rule")),i.a.createElement(l.Link,{to:"/docs/formatter"},i.a.createElement("li",null,"Develop formatter")))))},t}(i.a.Component);function g(e){var t=e.data.markdownRemark,a=(t.frontmatter,t.html);return i.a.createElement(u,null,i.a.createElement("div",{className:"blog-post-container"},i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}})))}a.d(t,"default",function(){return g}),a.d(t,"pageQuery",function(){return C});var C="997976791"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"revive"}}}}},154:function(e,t,a){},156:function(e,t,a){e.exports=a.p+"static/logo-d46261a11b8c01574d67e461c96e1527.png"},157:function(e,t,a){},159:function(e,t){e.exports="data:image/png;base64,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"},160:function(e,t,a){"use strict";var n=a(153),i=a(0),r=a.n(i),s=a(1),c=a.n(s),o=a(161),l=a.n(o),m=a(38),A=(a(154),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:"90%",padding:"1.45rem 1.0875rem"}},r.a.createElement("nav",null,r.a.createElement("img",{className:"revive-logo",src:a(156),alt:"Guess.js Logo"}),r.a.createElement(m.Link,{to:"/"},"Home"),r.a.createElement(m.Link,{to:"/docs"},"Docs"))))}),d=(a(157),function(e){var t=e.children,i=e.location;return r.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Guess.js documentation website"},{name:"keywords",content:"Guess.js, web performance, predictive prefetching, prefetching, machine learning, markov chain, neural network, lstm"}],link:[{rel:"shortcut icon",type:"image/png",href:a(159)},{href:"https://fonts.googleapis.com/css?family=Roboto",rel:"stylesheet"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(A,{location:i,siteTitle:e.site.siteMetadata.title}),r.a.createElement("a",{href:"https://github.com/mgechev/revive",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",className:"octocat-corner","aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))),r.a.createElement("div",null,t))},data:n})});d.propTypes={children:c.a.node.isRequired};t.a=d},175:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-doc-template-js-0a1e327902b9eb376b36.js.map