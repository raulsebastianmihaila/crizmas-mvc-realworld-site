(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var r=a(0),o=a.n(r),l=a(8),n=a.n(l),s=a(34);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}class m extends r.Component{constructor(){super(),this.onSubmit=e=>{e.preventDefault(),this.props.controller.form.submit()},this.onClickLogout=()=>{this.props.controller.logout()}}render(){const{form:e,serverErrors:t,isPending:a}=this.props.controller;return o.a.createElement("div",{className:"settings-page"},o.a.createElement("div",{className:"container page"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},o.a.createElement("h1",{className:"text-xs-center"},"Your Settings"),t&&o.a.createElement("ul",{className:"error-messages"},t.map((e,t)=>o.a.createElement("li",{key:t},e))),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("fieldset",null,o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(s.Input,i({inputClassName:"form-control",type:"text",placeholder:"URL of profile picture",disabled:a},e.get("image")))),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(s.Input,i({inputClassName:"form-control form-control-lg",type:"text",placeholder:"Your Name",disabled:a},e.get("username")))),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(s.Input,i({inputClassName:"form-control form-control-lg",type:"textarea",placeholder:"Short bio about you",inputProps:{rows:"8"},disabled:a},e.get("bio")))),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(s.Input,i({inputClassName:"form-control form-control-lg",type:"email",placeholder:"Email",disabled:a},e.get("email")))),o.a.createElement("fieldset",{className:"form-group"},o.a.createElement(s.Input,i({inputClassName:"form-control form-control-lg",type:"password",placeholder:"Password",disabled:a},e.get("password")))),o.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",disabled:a},"Update Settings"))),o.a.createElement("hr",null),o.a.createElement("button",{className:"btn btn-outline-danger",disabled:a,onClick:this.onClickLogout},"Or click here to logout.")))))}}m.propTypes={controller:n.a.object.isRequired}},63:function(e,t,a){"use strict";a.r(t);var r=a(5),o=a.n(r),l=a(10),n=a.n(l),s=a(9),i=a(1),m=a(11);t.default=o.a.controller((function(){const e={userController:m.a,form:null,serverErrors:null,onEnter:()=>{if(!i.b.isAuthenticated)return s.a.transitionTo("/login"),!1;t()}},t=()=>{e.form=new n.a({children:[{name:"image",initialValue:i.b.image},{name:"username",initialValue:i.b.username,validate:Object(l.validation)(l.validation.required(),m.c)},{name:"bio",initialValue:i.b.bio},{name:"email",initialValue:i.b.email,validate:l.validation.required()},{name:"password",validate:m.b}],actions:{submit:()=>{e.update(e.form.getResult())}},onFormChange:()=>{e.serverErrors=null}})};return e.update=({username:t,email:a,password:r,image:o,bio:l})=>(e.serverErrors=null,m.a.update({username:t,email:a,password:r,image:o,bio:l}).then(()=>{s.a.transitionTo("/")},t=>{e.serverErrors=t})),e.logout=()=>{m.a.logout(),s.a.transitionTo("/")},e}))}}]);
//# sourceMappingURL=settings.bundle-4a2eb1e367b178f6053f.js.map