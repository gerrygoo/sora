import{r as t,u as n,_ as r,a,b as e,c as s,i as c,s as i,d as o,S as u,f,e as l,t as h,j as v,k as p,h as d,l as m,g,m as y,n as b,o as k,v as x,q as E,w as q,p as I,x as R}from"./client.a6f76c25.js";function $(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=a(t);if(n){var c=a(this).constructor;r=Reflect.construct(s,arguments,c)}else r=s.apply(this,arguments);return e(this,r)}}function j(t,n,r){var a=t.slice();return a[3]=n[r].caption,a[4]=n[r].taken_at,a[5]=n[r].path,a}function D(t){var n,r,a,e,s,c,i,o,u,E,q,I,R=(t[3]||".")+"";return{c:function(){n=f("div"),r=f("figure"),a=f("img"),c=l(),i=f("figcaption"),o=f("a"),u=h(R),q=l(),this.h()},l:function(t){n=v(t,"DIV",{class:!0,id:!0});var e=p(n);r=v(e,"FIGURE",{class:!0});var s=p(r);a=v(s,"IMG",{src:!0,alt:!0,class:!0}),c=d(s),i=v(s,"FIGCAPTION",{});var f=p(i);o=v(f,"A",{href:!0,class:!0});var l=p(o);u=m(l,R),l.forEach(g),f.forEach(g),s.forEach(g),q=d(e),e.forEach(g),this.h()},h:function(){a.src!==(e=t[5])&&y(a,"src",e),y(a,"alt",s=t[3]),y(a,"class","svelte-1kqtubo"),y(o,"href",E="archive/#"+t[1](t[5])),y(o,"class","svelte-1kqtubo"),y(r,"class","svelte-1kqtubo"),y(n,"class","card svelte-1kqtubo"),y(n,"id",I=t[1](t[5]))},m:function(t,e){b(t,n,e),k(n,r),k(r,a),k(r,c),k(r,i),k(i,o),k(o,u),k(n,q)},p:function(t,r){1&r&&a.src!==(e=t[5])&&y(a,"src",e),1&r&&s!==(s=t[3])&&y(a,"alt",s),1&r&&R!==(R=(t[3]||".")+"")&&x(u,R),1&r&&E!==(E="archive/#"+t[1](t[5]))&&y(o,"href",E),1&r&&I!==(I=t[1](t[5]))&&y(n,"id",I)},d:function(t){t&&g(n)}}}function w(t){for(var n,r,a=t[0],e=[],s=0;s<a.length;s+=1)e[s]=D(j(t,a,s));return{c:function(){n=l(),r=f("div");for(var t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){E('[data-svelte="svelte-8rhbmb"]',document.head).forEach(g),n=d(t),r=v(t,"DIV",{class:!0});for(var a=p(r),s=0;s<e.length;s+=1)e[s].l(a);a.forEach(g),this.h()},h:function(){document.title="archive",y(r,"class","gallery svelte-1kqtubo")},m:function(t,a){b(t,n,a),b(t,r,a);for(var s=0;s<e.length;s+=1)e[s].m(r,null)},p:function(t,n){var s=q(n,1)[0];if(3&s){var c;for(a=t[0],c=0;c<a.length;c+=1){var i=j(t,a,c);e[c]?e[c].p(i,s):(e[c]=D(i),e[c].c(),e[c].m(r,null))}for(;c<e.length;c+=1)e[c].d(1);e.length=a.length}},i:I,o:I,d:function(t){t&&g(n),t&&g(r),R(e,t)}}}function G(t,n){return A.apply(this,arguments)}function A(){return(A=t(n.mark((function t(r,a){var e,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("media.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return s=t.sent,t.abrupt("return",{media:s});case 7:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function F(t,n,r){var a,e=n.media;return t.$set=function(t){"media"in t&&r(2,e=t.media)},t.$$.update=function(){4&t.$$.dirty&&r(0,a=e.photos)},[a,function(t){var n=t.split("/");return n[n.length-1].split(".")[0]},e]}var P=function(t){r(a,u);var n=$(a);function a(t){var r;return s(this,a),r=n.call(this),c(o(r),t,F,w,i,{media:2}),r}return a}();export default P;export{G as preload};
