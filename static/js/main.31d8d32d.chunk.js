(this.webpackJsonpcarpool_table=this.webpackJsonpcarpool_table||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(60),l=n.n(o),c=(n(102),n(8)),u=n(9),s=n(12),i=n(10),m=n(13),p=n(89),d=n(39),h=n(25),b=(n(103),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"DashboardComponent")}}]),t}(a.Component)),v="token",g=n(54),E=n.n(g),f=n(63),O=n(58),y=n.n(O),j=n(90),k=n.n(j),w=/^(?:\w+:)\/\//;y.a.interceptors.request.use(function(){var e=Object(f.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.test(t.url)||((n=localStorage.getItem(v))&&(t.headers={"x-access-token":n}),t.url=k()("http://localhost:3004",t.url)),t.timeout=1e4,e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y.a.interceptors.response.use((function(e){return e}),(function(e){return y.a.isCancel(e)?Promise.reject(e):e.response?Promise.reject(e):Promise.reject({code:"NOT_CONNECT_NETWORK",message:"Cannot connect to server, Please try again."})}));y.a;var C=function(e){return{type:"LOGIN_SUCCESS",payload:e}},L=function(e){return{type:"LOGIN_FAILED",payload:e}},S=function(e,t){return function(){var e=Object(f.a)(E.a.mark((function e(n){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n({type:"LOGIN_FETCHING"});try{localStorage.setItem(v,123456),n(C({user_id:"1"}))}catch(o){n(L(o.message))}return e.abrupt("return",!1);case 6:"ok"===(a=e.sent).data.status?(r=a.data.data,localStorage.setItem(v,r.token),n(C(a.data)),t.push("/dashboard")):n(L(a.data.message)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n(L(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},F=function(e){return function(e){var t=localStorage.getItem(v);e({type:"GET_TOKEN",payload:t})}},I=n(18),N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={showLogout:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.location.pathname,t="/dashboard"===e?"nav-link active":"nav-link",n="/user"===e?"nav-link active":"nav-link";return r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{to:"/dashboard",className:t},"Dashboard")," "," | ",r.a.createElement(h.b,{to:"/user",className:n},"\u0e40\u0e08\u0e49\u0e32\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48"),this.state.showLogout&&r.a.createElement(h.b,{to:"/logout"}," | "," \u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null!=localStorage.getItem(v)?{showLogout:!0}:{showLogout:!1}}}]),t}(a.Component),T={login:S},R=Object(I.b)((function(e){return{LoginReducer:e.LoginReducer}}),T)(Object(d.f)(N)),_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"User")}}]),t}(a.Component),D=n(71),G=n(27),M=n(96),x=n.n(M),P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).responseFacebook=function(e){console.log(e)},n.componentClicked=function(){console.log("Clicked!")},n.showForm=function(e){var t=e.values,a=e.handleChange,o=e.handleSubmit,l=(e.setFieldValue,e.errors),c=e.touched;return r.a.createElement("form",{noValidate:!0,onSubmit:o},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:t.username,onChange:a})),l.username&&c.username?r.a.createElement("div",{style:{color:"red"}},l.username):null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Password: "),r.a.createElement("input",{type:"password",name:"password",value:t.password,onChange:a})),l.password&&c.password?r.a.createElement("div",{style:{color:"red"}},l.password):null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(x.a,{appId:"1206715649505081",autoLoad:!0,fields:"name,email,picture",onClick:n.componentClicked,callback:n.responseFacebook,icon:"fa-facebook"}),r.a.createElement("div",null,r.a.createElement(h.b,{to:"/register"},"\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"))))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.isAuthentication()}},{key:"isAuthentication",value:function(){null!=localStorage.getItem(v)&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this,t=this.props.LoginReducer,n=t.isFetching,a=t.isError,o=t.errMessage,l=G.a().shape({username:G.b().required("Email \u0e15\u0e49\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e27\u0e48\u0e32\u0e07"),password:G.b().required("Password \u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e27\u0e48\u0e32\u0e07")});return r.a.createElement("div",null,!n&&a&&a&&r.a.createElement("div",{style:{color:"red"}},o),r.a.createElement(D.a,{validationSchema:l,initialValues:{username:"admin",password:"admin"},onSubmit:function(t,n){var a=n.setSubmitting,r=new FormData;r.append("username",t.username),r.append("password",t.password),e.props.login(r,e.props.history),setTimeout((function(){e.isAuthentication(),e.props.getToken()}),500),a(!1)}},(function(t){return e.showForm(t)})))}}]),t}(a.Component),A={login:S,getToken:F},q=Object(I.b)((function(e){return{LoginReducer:e.LoginReducer}}),A)(P),U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.logout(this.props.history),this.props.getToken()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component),V={logout:function(e){return function(t){localStorage.removeItem(v),t({type:"LOGOUT"}),e.push("/login")}},getToken:F},K=Object(I.b)((function(e){return{LoginReducer:e.LoginReducer,tokenReducer:e.tokenReducer}}),V)(U),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).showForm=function(e){var t=e.values,n=e.handleChange,a=e.handleSubmit,o=(e.setFieldValue,e.errors),l=e.touched;return r.a.createElement("form",{noValidate:!0,onSubmit:a},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",value:t.username,onChange:n})),o.username&&l.username?r.a.createElement("div",{style:{color:"red"}},o.username):null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:t.password,onChange:n})),o.password&&l.password?r.a.createElement("div",{style:{color:"red"}},o.password):null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:n})),o.name&&l.name?r.a.createElement("div",{style:{color:"red"}},o.name):null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,"Tel"),r.a.createElement("input",{type:"text",name:"tel",value:t.tel,onChange:n})),o.tel&&l.tel?r.a.createElement("div",{style:{color:"red"}},o.tel):null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"),r.a.createElement("div",null,r.a.createElement(h.b,{to:"/login"},"Login"))))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){null!=localStorage.getItem(v)&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this,t=this.props.LoginReducer,n=t.isFetching,a=t.isError,o=t.errMessage,l=G.a().shape({name:G.b().required("Name \u0e15\u0e49\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e27\u0e48\u0e32\u0e07"),tel:G.b().required("Tel \u0e15\u0e49\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e27\u0e48\u0e32\u0e07"),username:G.b().required("Email \u0e15\u0e49\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e27\u0e48\u0e32\u0e07"),password:G.b().required("Password \u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e48\u0e32\u0e27\u0e48\u0e32\u0e07")});return r.a.createElement("div",null,!n&&a&&r.a.createElement("div",{style:{color:"red"}},o),r.a.createElement(D.a,{validationSchema:l,initialValues:{username:"",password:"",name:"",tel:""},onSubmit:function(t,n){var a=n.setSubmitting,r=new FormData;r.append("username",t.username),r.append("password",t.password),e.props.login(r,e.props.history),a(!1)}},(function(t){return e.showForm(t)})))}}]),t}(a.Component),B={login:S},H=Object(I.b)((function(e){return{LoginReducer:e.LoginReducer}}),B)(W),J=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return null!=localStorage.getItem(v)===!0?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/login"})}}))},$=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getToken()}},{key:"render",value:function(){var e=this.props.tokenReducer.token;return r.a.createElement(h.a,null,null!==e&&r.a.createElement(R,null),r.a.createElement(d.b,{exact:!0,path:"/",component:function(){return r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(J,{path:"/dashboard",component:b}),r.a.createElement(J,{path:"/user",component:_}),r.a.createElement(J,{path:"/logout",component:K}),r.a.createElement(d.b,{path:"/register",component:H}),r.a.createElement(d.b,{path:"/login",component:q}))}}]),t}(a.Component),z={getToken:F},Q=Object(I.b)((function(e){return{tokenReducer:e.tokenReducer}}),z)($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(40),Y=n(97),Z=n(56),ee={result:null,isFetching:!1,isError:!1,errMessage:null},te={token:null},ne=Object(X.c)({LoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"LOGIN_FETCHING":return Object(Z.a)({},e,{result:null,isFetching:!0,isError:!1,errMessage:null});case"LOGIN_SUCCESS":return Object(Z.a)({},e,{result:a,isFetching:!1,isError:!1,errMessage:null});case"LOGIN_FAILED":return Object(Z.a)({},e,{result:null,isFetching:!1,isError:!0,errMessage:a});default:return e}},tokenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_TOKEN":return Object(Z.a)({},e,{token:a});default:return e}}}),ae=Object(X.a)(Y.a),re=Object(X.d)(ne,ae);l.a.render(r.a.createElement(I.a,{store:re},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,n){e.exports=n(126)}},[[98,1,2]]]);
//# sourceMappingURL=main.31d8d32d.chunk.js.map