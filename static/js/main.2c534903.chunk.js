(this["webpackJsonpstorm-chess"]=this["webpackJsonpstorm-chess"]||[]).push([[0],{17:function(e,n,t){e.exports=t(25)},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(10),c=t.n(o),i=(t(22),t(3)),u=t(4),l=t(6),s=t(11),f=t.n(s),m=t(8),v=t(12),d=t(13),g=["a1","a2","a3","a4","a5","a6","a7","a8","h1","h2","h3","h4","h5","h6","h7","h8","b1","c1","d1","e1","f1","g1","b8","c8","d8","e8","f8","g8","b2","b3","b4","b5","b6","b7","g2","g3","g4","g5","g6","g7","c2","d2","e2","f2","c7","d7","e7","f7","c3","d3","e3","f3","c6","d6","e6","f6","c4","c5","f4","f5","d4","e4","d5","e5"],h=new(t.n(d).a),p=[15,25,35,45],b=function(){var e=0,n=!1,t=g,r=[],a=0;function o(){return h.half_moves>=100||c()||h.in_stalemate()||h.insufficient_material()}function c(){for(var e=0,n=0;n<t.length;n++)e+=i(t[n]).length;return 0===e}function i(n){var r=[],o=t.slice();if(Math.floor(a)+1===p[e]){var c=16-4*e;if(e>=2&&(c=20-4*e),o.splice(0,c).some((function(e){var n=h.get(e);return n&&"k"===n.type&&n.color===h.turn()}))){var i=h.get(n);i&&"k"!==i.type&&(o=[])}}var u,l=h.moves({square:n,verbose:!0}),s=Object(v.a)(l);try{for(s.s();!(u=s.n()).done;){var f=u.value;o.includes(f.to)&&r.push(f.to)}}catch(m){s.e(m)}finally{s.f()}return r}function u(){var n=16-4*e;e>=2&&(n=20-4*e);for(var a=0;a<n;a++)h.remove(t[a]);r.concat(t.splice(0,n)),e+=1}return Object(m.a)(Object(m.a)({},h),{},{in_checkmate:c,game_over:o,move:function(t){var r=t.sourceSquare,c=t.targetSquare,l=h.turn(),s=Math.floor(e/2);if(i(r).includes(c)){if(h.move({from:r,to:c,promotion:"q"}),a+=.5,e>1&&(c.includes((s+1).toString())||c.includes((8-s).toString()))){var f=h.get(c);f&&"p"===f.type&&(h.remove(c),h.put({type:"q",color:l},c))}p.includes(a)&&u(),n=o()}},moves:i,zap:u,stormLevel:e,gameOver:n,liveSquares:t,zappedSquares:r})},S={background:"radial-gradient(circle, #fffc00 36%, transparent 40%)",borderRadius:"50%"};function q(){var e=Object(r.useState)(new b),n=Object(l.a)(e,1)[0],t=Object(r.useState)({}),o=Object(l.a)(t,2),c=o[0],i=o[1];Object(r.useEffect)((function(){n.stormLevel}),[n.stormLevel]);return a.a.createElement(f.a,{position:n.fen(),squareStyles:c,onMouseOverSquare:function(e){var t=n.moves(e);i(Object.fromEntries(t.map((function(e){return[e,S]}))))},onMouseOutSquare:function(){i({})},onDrop:function(e){var t=e.sourceSquare,r=e.targetSquare;n.move({sourceSquare:t,targetSquare:r})}})}function O(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 16px;\n"]);return O=function(){return e},e}function y(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: calc(10px + 2vmin);\n  margin: 16px;\n"]);return y=function(){return e},e}var j=u.a.header(y()),E=u.a.main(O());var w=function(){return a.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.a.createElement(j,null,a.a.createElement("div",null,"Storm Chess")),a.a.createElement(E,null,a.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2c534903.chunk.js.map