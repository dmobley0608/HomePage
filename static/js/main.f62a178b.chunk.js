(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(6),c=a.n(i),r=(a(23),a(24),a(2)),s=a(3),l=a(5),m=a(4),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={time:new Date},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.update=setInterval((function(){e.setState({time:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var e=this.state.time;return o.a.createElement("div",null,o.a.createElement("p",null,e.toLocaleTimeString()))}}]),a}(o.a.Component),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={city:"",state:"",temp:null,imgUrl:"",condition:""},e}return Object(s.a)(a,[{key:"getWeather",value:function(){var e=this;fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=30507",{method:"post"}).then((function(e){return e.json()})).then((function(t){e.setState({temp:Math.round(t.current.temp_f),imgUrl:t.current.condition.icon,condition:t.current.condition.text})}))}},{key:"getLocation",value:function(){var e=this;fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=30507",{method:"post"}).then((function(e){return e.json()})).then((function(t){e.setState({city:t.location.name,state:t.location.region})}))}},{key:"componentDidMount",value:function(){this.getWeather(),this.getLocation()}},{key:"render",value:function(){var e=this.state,t=e.temp,a=e.city,n=e.state,i=e.imgUrl,c=e.condition;return o.a.createElement("div",{className:"flex"},o.a.createElement("p",{className:""},c),o.a.createElement("img",{className:"",alt:"",src:i}),o.a.createElement("p",{className:""},t," \xb0F in ",a,", ",n))}}]),a}(o.a.Component);a(25);var p=function(){return o.a.createElement("nav",{className:"shadow5 fw6 w-100 nav"},o.a.createElement("div",{className:"fr dib white clock"}," ",o.a.createElement(u,null)),o.a.createElement("div",{className:"fl dib white weather"}," ",o.a.createElement(h,null)))},f=(a(26),a(16)),d=a.n(f),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={author:"",quote:""},e}return Object(s.a)(a,[{key:"getQuote",value:function(){var e=this;fetch("https://favqs.com/api/qotd",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({author:t.quote.author,quote:t.quote.body})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){return o.a.createElement("div",{className:"center pr6 justify-around mobileCard"},o.a.createElement(d.a,{className:"Tilt pointer ",options:{max:55},style:{height:300,width:200}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("article",{className:"card  br3 pa3 white pa4-ns mt5   mb0 shadow-5"},o.a.createElement("p",{className:" mt0 tracked ttu underline"},"Quote of the moment:"),o.a.createElement("p",{className:" center"},this.state.quote),o.a.createElement("div",{className:"tc"},o.a.createElement("p",{className:""},"~",this.state.author,"~"))))))}}]),a}(o.a.Component),g=(a(27),new Date);var E=function(){return g.getHours()>0&&g.getHours()<12?o.a.createElement("div",{className:"greeting pa2 mr5 mt5 pointer"},o.a.createElement("h1",null," Good Morning!")):g.getHours()>=12&&g.getHours()<=16?o.a.createElement("div",{className:"greeting pa2 mr5 mt5 pointer"},o.a.createElement("h1",null,"Good Afternoon ","","!")):g.getHours()>=17&&g.getHours()<=20?o.a.createElement("div",{className:"greeting pa2 mr5 mt5 pointer"},o.a.createElement("h1",null,"Good Evening ","","!")):o.a.createElement("div",{className:"greeting pa2 mr5 mt5 pointer"},o.a.createElement("h1",null," ",""," You need to Take Yo ass to bed!"))},v=["https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"],y=["https://images.unsplash.com/photo-1580898179497-ce3b9e9ac350?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1527684651001-731c474bbb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1425969195258-f23f055ef995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1570179476238-611e709b99e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"],w=["https://images.unsplash.com/photo-1503058695716-c5f66a905312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1543443436-bc6deeff2eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"],j=["https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1462240006665-9529b3a399b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60","https://images.unsplash.com/photo-1428094479093-8973a318bd76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60"],x=(a(28),new Date),O=q(v.length),H=q(y.length),N=q(w.length),k=q(j.length);function q(e){return Math.floor(Math.random()*e)}var M=function(){return x.getHours()>4&&x.getHours()<12?o.a.createElement("div",{className:"pushback center"},o.a.createElement("img",{alt:"logo",src:v[O]})):x.getHours()>11&&x.getHours()<17?o.a.createElement("div",{className:"pushback center darken"},o.a.createElement("img",{alt:"logo",src:y[H]})):x.getHours()>16&&x.getHours()<21?o.a.createElement("div",{className:"pushback center"},o.a.createElement("img",{alt:"logo",src:w[N]})):o.a.createElement("div",{className:"pushback center"},o.a.createElement("img",{alt:"logo",src:j[k]}))},D=a(17),W=a.n(D),Q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={ipAddress:""},e}return Object(s.a)(a,[{key:"getIpAddress",value:function(){var e=this;W.a.ipv6().then((function(t){e.setState({ipAddress:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getIpAddress()}},{key:"render",value:function(){var e=this.state.ipAddress;return o.a.createElement("div",null,o.a.createElement("p",null,"Ip Address: ",e))}}]),a}(o.a.Component),B=(a(47),function(){return o.a.createElement("footer",{className:"w-100 white f6 center"},o.a.createElement("div",{className:"w-100 center"},o.a.createElement("div",{className:"dmc dib"},o.a.createElement("span",null,"\xa9 2020"),o.a.createElement("b",{className:""},"  DMC Solutions"),o.a.createElement("span",null,", All Rights Reserved")),o.a.createElement("div",{className:"ip dib"},o.a.createElement(Q,{className:""}))))});var J=function(){return o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(p,null),o.a.createElement(E,null),o.a.createElement(b,null),o.a.createElement(B,null))};a(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f62a178b.chunk.js.map