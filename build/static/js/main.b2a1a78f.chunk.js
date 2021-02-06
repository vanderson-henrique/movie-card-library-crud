(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(29),a(7)),c=a(1),s=a(3),u=a(4),m=a(11),d=a(6),v=a(5),h=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"loading"},"Carregando...")}}]),a}(n.Component),p=a(15),b=a(12),f=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(b.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(p.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title"},"T\xedtulo"),i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle"},"Subt\xedtulo"),i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},"Imagem"),i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline"},"Sinopse"),i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero"),i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating"},"Avalia\xe7\xe3o"),i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"form"},i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.title,n=e.storyline,r=e.imagePath,o=e.subtitle;return i.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},i.a.createElement(l.b,{to:"/movies/".concat(t)},i.a.createElement("img",{src:r,alt:"",className:"movie-card-image"})),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{className:"movie-card-title"},a),i.a.createElement("h5",{className:"movie-card-subtitle"},o),i.a.createElement("p",{className:"movie-card-storyline"},n),i.a.createElement(l.b,{to:"/movies/".concat(t),className:"movie-card-link"},"VER DETALHES")))}}]),a}(i.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"movie-card-header"},i.a.createElement(l.b,{to:"/",className:"link-header"},i.a.createElement("h1",{className:"page-title"},"Movie Cards Library CRUD")))}}]),a}(i.a.Component),E=a(23),k=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(k));var O=function(){return JSON.parse(localStorage.getItem("movies"))},j=function(e){return localStorage.setItem("movies",JSON.stringify(e))},S=function(e){var t=O().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))},N=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={status:"",shouldRedirect:!1,movie:{}},n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=this,t=this.props.match.params.id;this.setState({status:"loading"},(function(){S(t).then((function(t){e.setState({movie:t,status:""})}))}))}},{key:"handleSubmit",value:function(e){!function(e){var t=O().map((function(t){return t.id===parseInt(e.id,10)?Object(b.a)(Object(b.a)({},t),e):t}));j(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))}(e),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(h,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(f,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),I=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).fetchMovie=e.fetchMovie.bind(Object(m.a)(e)),e.state={loading:!1,movie:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=this,t=this.props.match.params.id;this.setState({loading:!0},(function(){S(t).then((function(t){e.setState({movie:t,loading:!1})}))}))}},{key:"render",value:function(){var e=this.state.loading,t=this.props.match.params.id,a=this.state.movie,n=a.title,r=a.storyline,o=a.imagePath,c=a.genre,s=a.rating,u=a.subtitle;return e?i.a.createElement(h,null):i.a.createElement("div",{"data-testid":"movie-details",className:"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(o),className:"movie-card-image"}),i.a.createElement("h2",{className:"movie-card-title"},"Title: ".concat(n)),i.a.createElement("h4",{className:"movie-card-subtitle"},"Subtitle: ".concat(u)),i.a.createElement("p",{className:"movie-card-storyline"},"Storyline: ".concat(r)),i.a.createElement("p",{className:"movie-card-genre"},"Genre: ".concat(c)),i.a.createElement("p",{className:"movie-card-rating"},"Rating: ".concat(s)),i.a.createElement("div",{className:"links-movie-details"},i.a.createElement(l.b,{to:"/",onClick:function(){return function(e){var t=O();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),j(t),new Promise((function(e){setTimeout((function(){e({status:"OK"})}),1e3)}))}(t)},className:"link-deletar movie-list-link",type:"button"},"DELETAR"),i.a.createElement(l.b,{to:"/movies/".concat(t,"/edit"),className:"link-editar movie-list-link"},"EDITAR"),i.a.createElement(l.b,{to:"/",className:"link-voltar movie-list-link"},"VOLTAR")))}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={movies:[],loading:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=this;this.setState({loading:!0},(function(){new Promise((function(e){setTimeout((function(){var t=O();e(t)}),2e3)})).then((function(t){e.setState({movies:t,loading:!1})}))}))}},{key:"render",value:function(){var e=this.state,t=e.movies;return e.loading?i.a.createElement(h,null):i.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},t.map((function(e){return i.a.createElement(g,{key:e.title,movie:e})})),i.a.createElement("div",{className:"div-link"},i.a.createElement(l.b,{to:"/movies/new",className:"movie-list-link"},"ADICIONAR CART\xc3O")))}}]),a}(n.Component),_=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(e){!function(e){var t=O(),a=t[t.length-1].id+1,n=Object(b.a)(Object(b.a)({},e),{},{id:a});t=[].concat(Object(E.a)(t),[n]),j(t),new Promise((function(e){setTimeout((function(){e("OK")}),1e3)}))}(e),this.props.history.push("/")}},{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(f,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(35);var M=function(){return i.a.createElement(l.a,null,i.a.createElement(y,null),i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:C}),i.a.createElement(c.b,{path:"/movies/:id/edit",component:N}),i.a.createElement(c.b,{path:"/movies/new",component:_}),i.a.createElement(c.b,{path:"/movies/:id",component:I}),i.a.createElement(c.b,{component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b2a1a78f.chunk.js.map