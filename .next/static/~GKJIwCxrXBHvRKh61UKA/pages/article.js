(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8oUA":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article",function(){var e=n("HvHe");return{page:e.default||e}}])},HvHe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return O});var a=n("ln6h"),r=n.n(a),i=n("O40h"),o=n("0iUn"),s=n("sLSF"),c=n("MI3g"),l=n("a7VT"),u=n("AT/M"),d=n("Tit0"),p=n("vYYK"),f=n("MX0m"),m=n.n(f),h=n("q1tI"),g=n.n(h),x=n("CafY"),b=(n("QAIS"),n("00EI")),v=n("vDqi"),w=n.n(v),j=n("Xcx1"),y=n("27Ns"),k=n.n(y),O=(n("YksZ"),function(e){function t(){var e,n;Object(o.default)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(c.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(u.default)(n),"state",{blogList:[],leftHeight:0}),n}return Object(d.default)(t,e),Object(s.default)(t,[{key:"loadList",value:function(){var e=Object(i.default)(r.a.mark(function e(t,n){var a,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(b.a,"/v1/blog/list?tp=").concat(t,"&name=").concat(n),{responseType:"blob"});case 2:return a=e.sent,e.next=5,Object(j.a)(a.data);case 5:i=e.sent,o=k.a.blogListRes.deserializeBinary(i),i=o.toObject(),this.setState({blogList:i.listList});case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(i.default)(r.a.mark(function e(){var t,n,a,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.query,n=t.tp,a=void 0===n?-1:n,i=t.name,o=void 0===i?"":i,e.next=3,this.loadList(a,o);case 3:setTimeout(function(){document.getElementById("t").setAttribute("class","shadownone"),document.getElementById("loading").style.display="none"},500);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.blogList;e.leftHeight;return g.a.createElement(x.a,{title:"文章"},t.map(function(e,t){return g.a.createElement("div",{key:t,onClick:function(){location.href="/detail?id=".concat(e.id)},className:"jsx-3123427205 right_item"},g.a.createElement("img",{src:e.cover,className:"jsx-3123427205 coverimg"}),g.a.createElement("h3",{className:"jsx-3123427205"},1==e.recommended&&"[ 顶 ]"," ",g.a.createElement("span",{style:{color:"#222"},className:"jsx-3123427205 blogname"},e.name)),g.a.createElement("p",{className:"jsx-3123427205"},e.preface))}),g.a.createElement(m.a,{id:"3123427205"},[".blogname.jsx-3123427205:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;color:#555;}",".coverimg.jsx-3123427205{width:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;cursor:pointer;margin-bottom:20px;}",".right_item.jsx-3123427205 p.jsx-3123427205{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}",".right_item.jsx-3123427205 h3.jsx-3123427205{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}",".right_item.jsx-3123427205 i.jsx-3123427205{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}",".right_item.jsx-3123427205{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;cursor:pointer;}"]))}}],[{key:"getInitialProps",value:function(){var e=Object(i.default)(r.a.mark(function e(t){var n,a,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,a=t.query,i=t.jsonPageRes,o=n?n.headers["user-agent"]:navigator.userAgent,e.abrupt("return",{userAgent:o,query:a,jsonPageRes:i});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(g.a.Component))}},[["8oUA",1,0]]]);