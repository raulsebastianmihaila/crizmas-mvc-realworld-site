(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{41:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return i}));var a=t(0),n=t.n(a),s=t(3),o=t.n(s),l=t(4),c=t(57);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}class i extends a.Component{constructor(){super(),this.onSubmit=e=>{e.preventDefault(),this.props.controller.form.submit()}}render(){const{form:e,serverErrors:r,isPending:t}=this.props.controller;return n.a.createElement("div",{className:"auth-page"},n.a.createElement("div",{className:"container page"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},n.a.createElement("h1",{className:"text-xs-center"},"Sign up"),n.a.createElement("p",{className:"text-xs-center"},n.a.createElement(l.a,{to:"/login"},"Have an account?")),r&&n.a.createElement("ul",{className:"error-messages"},r.map((e,r)=>n.a.createElement("li",{key:r},e))),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("fieldset",{className:"form-group"},n.a.createElement(c.a,m({inputClassName:"form-control form-control-lg",type:"text",placeholder:"Your Name",disabled:t},e.get("username")))),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement(c.a,m({inputClassName:"form-control form-control-lg",type:"email",placeholder:"Email",disabled:t},e.get("email")))),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement(c.a,m({inputClassName:"form-control form-control-lg",type:"password",placeholder:"Password",disabled:t},e.get("password")))),n.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",disabled:t},"Sign up"))))))}}i.propTypes={controller:o.a.object.isRequired}},42:function(e,r,t){"use strict";t.r(r);var a=t(22),n=t(43),s=t(14),o=t(10),l=t(2),c=t(11);r.default=Object(a.a)((function(){const e={userController:c.a,form:null,serverErrors:null,onEnter:()=>{if(l.b.isAuthenticated)return o.a.transitionTo("/"),!1;r()}},r=()=>{e.form=new n.a({children:[{name:"username",validate:Object(s.c)(Object(s.a)(),Object(c.c)())},{name:"email",validate:Object(s.a)()},{name:"password",validate:Object(s.c)(Object(s.a)(),Object(c.b)())}],actions:{submit:()=>{e.register(e.form.getResult())}},onFormChange:()=>{e.serverErrors=null}})};return e.register=({username:r,email:t,password:a})=>(e.serverErrors=null,c.a.register({username:r,email:t,password:a}).then(()=>{o.a.transitionTo("/")},r=>{e.serverErrors=r})),e}))}}]);
//# sourceMappingURL=register.bundle-ebc5b1024b53b056da40.js.map