"use strict";(self.webpackChunkLibreriaVillarrealVicente=self.webpackChunkLibreriaVillarrealVicente||[]).push([[586],{6586:(v,b,a)=>{a.r(b),a.d(b,{CategoriesModule:()=>u});var l=a(6895),s=a(7825),d=a(6752),_=a(5226),c=a.n(_),t=a(8256),y=a(5137),i=a(433);const x=["addCategory"];function Z(n,e){1&n&&(t.TgZ(0,"span",11),t._uU(1," Name must be longer than 3 letters "),t.qZA())}function A(n,e){1&n&&(t.TgZ(0,"span",11),t._uU(1," Description must be longer than 3 letters "),t.qZA())}const M=function(){return["/category/list"]};class m{constructor(e,o){this.servicio=e,this.route=o,this.name="",this.description=""}ngOnInit(){}nombreValido(e){return this.addCategoryForm?.controls[e]?.invalid&&this.addCategoryForm?.controls[e]?.touched}addCategories(){this.servicio.addCategory(this.name,this.description).subscribe({next:r=>{r&&(this.addCategoryForm.valid?(c().fire({icon:"success",title:"Form completed successfully",text:"\xa1Category added!"}),this.route.navigate(["/category/list"])):c().fire({icon:"error",title:"Oops...",text:"Something has gone wrong!",footer:'<a href="">Why do I have this issue?</a>'}))},error:r=>{c().fire({icon:"error",title:"Oops...",text:"Something has gone wrong!",footer:'<a href="">Why do I have this issue?</a>'}),this.route.navigate(["/category/list"])}})}}m.\u0275fac=function(e){return new(e||m)(t.Y36(y.H),t.Y36(s.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-add-category"]],viewQuery:function(e,o){if(1&e&&t.Gf(x,5),2&e){let r;t.iGM(r=t.CRH())&&(o.addCategoryForm=r.first)}},decls:20,vars:6,consts:[[1,"container"],[1,"heading"],["action","#","method","post",1,"form",3,"ngSubmit"],["addCategory","ngForm"],[1,"form-group"],["for","input2"],["type","text","id","nombre","placeholder","Enter the name","required","","ngModel","","name","name","minlength","3",1,"form-control",3,"ngModel","ngModelChange"],["class","form-text text-danger",4,"ngIf"],["type","text","id","descripcion","placeholder","Enter the Description","required","","name","description","minlength","3",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","espacioButton"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"],[1,"form-text","text-danger"]],template:function(e,o){1&e&&(t.TgZ(0,"body")(1,"div",0)(2,"h1",1),t._uU(3,"Add Category"),t.qZA(),t.TgZ(4,"form",2,3),t.NdJ("ngSubmit",function(){return o.addCategories()}),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Name:"),t.qZA(),t.TgZ(9,"input",6),t.NdJ("ngModelChange",function(g){return o.name=g}),t.qZA(),t.YNc(10,Z,2,0,"span",7),t.qZA(),t.TgZ(11,"div",4)(12,"label",5),t._uU(13,"Description:"),t.qZA(),t.TgZ(14,"input",8),t.NdJ("ngModelChange",function(g){return o.description=g}),t.qZA(),t.YNc(15,A,2,0,"span",7),t.qZA(),t.TgZ(16,"button",9),t._uU(17,"Add Category"),t.qZA(),t.TgZ(18,"button",10),t._uU(19,"Back"),t.qZA()()()()),2&e&&(t.xp6(9),t.Q6J("ngModel",o.name),t.xp6(1),t.Q6J("ngIf",o.nombreValido("name")),t.xp6(4),t.Q6J("ngModel",o.description),t.xp6(1),t.Q6J("ngIf",o.nombreValido("description")),t.xp6(3),t.Q6J("routerLink",t.DdM(5,M)))},dependencies:[l.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.On,i.F,s.rH,s.Od],styles:["body[_ngcontent-%COMP%]{background-image:url(https://images6.alphacoders.com/407/407515.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;height:100vh;overflow:auto}.container[_ngcontent-%COMP%]{width:400px;margin:100px auto;border:none;background-color:#f7f7f7;transition:all .3s ease;box-shadow:0 14px 80px #22233a33;padding:30px 35px;border-radius:15px;overflow:hidden}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem;margin-top:0;margin-bottom:30px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600}.form-control[_ngcontent-%COMP%]{border-radius:10px;margin-top:1em;margin-bottom:1em}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#b4d4f2}.btn-primary[_ngcontent-%COMP%]{background-color:#5c5ae5;border:none;transition:all .3s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#4543d6}.form-control-feedback[_ngcontent-%COMP%]{position:absolute;top:50%;right:20px;transform:translateY(-50%);z-index:2;color:#ccc}.formulario[_ngcontent-%COMP%]{padding-top:15em}"]});const O=["deleteCategory"];function T(n,e){1&n&&(t.TgZ(0,"span",12),t._uU(1," Name must be longer than 3 letters "),t.qZA())}function w(n,e){1&n&&(t.TgZ(0,"span",12),t._uU(1," Description must be longer than 3 letters "),t.qZA())}const U=function(){return["/category/list"]};class h{constructor(e,o,r){this.servicio=e,this.route=o,this.router=r,this.name="",this.description=""}ngOnInit(){this.name=this.route.snapshot.params.id,console.log(this.name),this.servicio.getCategoryId(this.name).subscribe({next:e=>{this.description=e.description}})}nombreValido(e){return this.deleteCategoryForm?.controls[e]?.invalid&&this.deleteCategoryForm?.controls[e]?.touched}deleteCategories(){this.servicio.deleteCategory(this.name).subscribe({next:r=>{r&&(console.log(r),this.deleteCategoryForm.valid?(c().fire({icon:"success",title:"Category successfully deleted",text:"\xa1Category deleted!"}),this.router.navigate(["/category/list"])):c().fire({icon:"error",title:"Oops...",text:"Something has gone wrong!",footer:'<a href="">Why do I have this issue?</a>'}))}})}}h.\u0275fac=function(e){return new(e||h)(t.Y36(y.H),t.Y36(s.gz),t.Y36(s.F0))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-delete-category"]],viewQuery:function(e,o){if(1&e&&t.Gf(O,5),2&e){let r;t.iGM(r=t.CRH())&&(o.deleteCategoryForm=r.first)}},decls:20,vars:6,consts:[[1,"form-bg"],[1,"container"],[1,"heading"],["action","#","method","post",1,"form",3,"ngSubmit"],["deleteCategory","ngForm"],[1,"form-group"],["for","input2"],["type","text","id","nombre","placeholder","Enter the name","required","","ngModel","","name","name","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["class","form-text text-danger",4,"ngIf"],["type","text","id","descripcion","placeholder","Enter the Description","required","","name","description","readOnly","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","espacioButton"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"],[1,"form-text","text-danger"]],template:function(e,o){1&e&&(t._UZ(0,"div",0),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3,"Delete Category"),t.qZA(),t.TgZ(4,"form",3,4),t.NdJ("ngSubmit",function(){return o.deleteCategories()}),t.TgZ(6,"div",5)(7,"label",6),t._uU(8,"Name:"),t.qZA(),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(g){return o.name=g}),t.qZA(),t.YNc(10,T,2,0,"span",8),t.qZA(),t.TgZ(11,"div",5)(12,"label",6),t._uU(13,"Description:"),t.qZA(),t.TgZ(14,"input",9),t.NdJ("ngModelChange",function(g){return o.description=g}),t.qZA(),t.YNc(15,w,2,0,"span",8),t.qZA(),t.TgZ(16,"button",10),t._uU(17,"Delete Category"),t.qZA(),t.TgZ(18,"button",11),t._uU(19,"Back"),t.qZA()()()),2&e&&(t.xp6(9),t.Q6J("ngModel",o.name),t.xp6(1),t.Q6J("ngIf",o.nombreValido("name")),t.xp6(4),t.Q6J("ngModel",o.description),t.xp6(1),t.Q6J("ngIf",o.nombreValido("description")),t.xp6(3),t.Q6J("routerLink",t.DdM(5,U)))},dependencies:[l.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F,s.rH,s.Od],styles:[".form-bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background:url(https://images6.alphacoders.com/407/407515.jpg) center/cover no-repeat fixed;filter:blur(5px)}.container[_ngcontent-%COMP%]{width:400px;margin:100px auto;border:none;background-color:#f7f7f7;transition:all .3s ease;box-shadow:0 14px 80px #22233a33;padding:30px 35px;border-radius:15px;overflow:hidden}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem;margin-top:0;margin-bottom:30px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600}.form-control[_ngcontent-%COMP%]{border-radius:10px;margin-top:1em;margin-bottom:1em}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#b4d4f2}.btn-primary[_ngcontent-%COMP%]{background-color:#5c5ae5;border:none;transition:all .3s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#4543d6}.form-control-feedback[_ngcontent-%COMP%]{position:absolute;top:50%;right:20px;transform:translateY(-50%);z-index:2;color:#ccc}.formulario[_ngcontent-%COMP%]{padding-top:15em}"]});var J=a(9298),k=a(4696),F=a(5227);const q=function(n){return["/category/updateCategory",n]};function L(n,e){if(1&n&&(t.O4$(),t.kcU(),t.TgZ(0,"button",12),t.O4$(),t.TgZ(1,"svg",13),t._UZ(2,"path",14),t.qZA(),t._uU(3," \xa0Edit"),t.qZA()),2&n){const o=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(1,q,o.name))}}const P=function(n){return["/category/deleteCategory",n]};function I(n,e){if(1&n&&(t.O4$(),t.kcU(),t.TgZ(0,"button",15),t.O4$(),t.TgZ(1,"svg",16),t._UZ(2,"path",17),t.qZA(),t._uU(3,"\xa0Delete"),t.qZA()),2&n){const o=t.oxw().$implicit;t.Q6J("routerLink",t.VKq(1,P,o.name))}}const D=function(n){return["/books/listByCat",n]};function Q(n,e){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"div",4)(3,"h5",5),t._uU(4),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"button",7),t.O4$(),t.TgZ(9,"svg",8),t._UZ(10,"path",9),t.qZA(),t._uU(11," \xa0Go to Books"),t.qZA(),t.YNc(12,L,4,3,"button",10),t.YNc(13,I,4,3,"button",11),t.qZA()()),2&n){const o=e.$implicit,r=t.oxw();t.xp6(4),t.Oqu(o.name),t.xp6(2),t.Oqu(o.description),t.xp6(2),t.Q6J("routerLink",t.VKq(5,D,o.name)),t.xp6(4),t.Q6J("ngIf",r.isAdmin),t.xp6(1),t.Q6J("ngIf",r.isAdmin)}}class f{constructor(e,o){this.categoriesServ=e,this.servicio=o,this.categories=[],this.isAdmin=!1,this.jwt=null}ngOnInit(){this.jwt=localStorage.getItem("jwt"),this.getCategoriesInit(),this.jwt&&(this.isAdmin=this.servicio.isUserAdmin(this.jwt))}getCategoriesInit(){this.categoriesServ.getCategories().subscribe({next:e=>this.categories=e,error:e=>console.log(e)})}isAdminRol(){"ADMIN_ROLE"===localStorage.getItem("role")&&(this.isAdmin=!0)}}f.\u0275fac=function(e){return new(e||f)(t.Y36(y.H),t.Y36(J.e))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-list"]],decls:4,vars:1,consts:[[1,"row"],["class","card cartas","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"card","cartas",2,"width","18rem"],["src","https://res.cloudinary.com/dx46uo2cv/image/upload/v1676880936/grimorio-bos-a5-100-fls-black-clover-capa-dura-polen-bold_mmurnj.jpg","alt","imagen_Card",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-warning","espacio","espacioButton",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-book"],["d","M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"],["button","","type","button","class","btn btn-info espacio espacioButton","href","#","routerLinkActive","active",3,"routerLink",4,"ngIf"],["button","","type","button","class","btn btn-danger","href","#","routerLinkActive","active",3,"routerLink",4,"ngIf"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-info","espacio","espacioButton",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil"],["d","M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash-fill"],["d","M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"]],template:function(e,o){1&e&&(t._UZ(0,"app-navbar"),t.TgZ(1,"div",0),t.YNc(2,Q,14,7,"div",1),t.qZA(),t._UZ(3,"app-footer")),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.categories))},dependencies:[l.sg,l.O5,k.S,F.c,s.rH,s.Od],styles:[".espacio[_ngcontent-%COMP%]{margin:.5em}"]});const N=["updateCategory"];function z(n,e){1&n&&(t.TgZ(0,"span",12),t._uU(1," Name must be longer than 3 letters "),t.qZA())}function Y(n,e){1&n&&(t.TgZ(0,"span",12),t._uU(1," Description must be longer than 3 letters "),t.qZA())}const V=function(){return["/category/list"]};class C{constructor(e,o,r){this.servicio=e,this.route=o,this.router=r,this.name="",this.description=""}ngOnInit(){this.name=this.route.snapshot.params.id}nombreValido(e){return this.updateCategoryForm?.controls[e]?.invalid&&this.updateCategoryForm?.controls[e]?.touched}updateCategories(){this.servicio.updateCategory(this.name,this.description).subscribe({next:r=>{r&&(console.log(r),this.updateCategoryForm.valid?(c().fire({icon:"success",title:"Form completed successfully",text:"\xa1Categoria Updated!"}),this.router.navigate(["/category/list"])):c().fire({icon:"error",title:"Oops...",text:"Something has gone wrong!",footer:'<a href="">Why do I have this issue?</a>'}))}})}}C.\u0275fac=function(e){return new(e||C)(t.Y36(y.H),t.Y36(s.gz),t.Y36(s.F0))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-update-category"]],viewQuery:function(e,o){if(1&e&&t.Gf(N,5),2&e){let r;t.iGM(r=t.CRH())&&(o.updateCategoryForm=r.first)}},decls:20,vars:6,consts:[[1,"form-bg"],[1,"container"],[1,"heading"],["action","#","method","post",1,"form",3,"ngSubmit"],["updateCategory","ngForm"],[1,"form-group"],["for","input2"],["type","text","id","nombre","placeholder","Enter the name","required","","ngModel","","name","name","minlength","3","readonly","",1,"form-control",3,"ngModel","ngModelChange"],["class","form-text text-danger",4,"ngIf"],["type","text","id","descripcion","placeholder","Enter the Description","required","","name","description","minlength","3",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","espacioButton"],["button","","type","button","href","#","routerLinkActive","active",1,"btn","btn-danger",3,"routerLink"],[1,"form-text","text-danger"]],template:function(e,o){1&e&&(t._UZ(0,"div",0),t.TgZ(1,"div",1)(2,"h1",2),t._uU(3,"Edit Category"),t.qZA(),t.TgZ(4,"form",3,4),t.NdJ("ngSubmit",function(){return o.updateCategories()}),t.TgZ(6,"div",5)(7,"label",6),t._uU(8,"Name:"),t.qZA(),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(g){return o.name=g}),t.qZA(),t.YNc(10,z,2,0,"span",8),t.qZA(),t.TgZ(11,"div",5)(12,"label",6),t._uU(13,"Description:"),t.qZA(),t.TgZ(14,"input",9),t.NdJ("ngModelChange",function(g){return o.description=g}),t.qZA(),t.YNc(15,Y,2,0,"span",8),t.qZA(),t.TgZ(16,"button",10),t._uU(17,"Edit Category"),t.qZA(),t.TgZ(18,"button",11),t._uU(19,"Back"),t.qZA()()()),2&e&&(t.xp6(9),t.Q6J("ngModel",o.name),t.xp6(1),t.Q6J("ngIf",o.nombreValido("name")),t.xp6(4),t.Q6J("ngModel",o.description),t.xp6(1),t.Q6J("ngIf",o.nombreValido("description")),t.xp6(3),t.Q6J("routerLink",t.DdM(5,V)))},dependencies:[l.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.On,i.F,s.rH,s.Od],styles:[".form-bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background:url(https://images6.alphacoders.com/407/407515.jpg) center/cover no-repeat fixed;filter:blur(5px)}.container[_ngcontent-%COMP%]{width:400px;margin:100px auto;border:none;background-color:#f7f7f7;transition:all .3s ease;box-shadow:0 14px 80px #22233a33;padding:30px 35px;border-radius:15px;overflow:hidden}.heading[_ngcontent-%COMP%]{font-weight:700;font-size:1.8rem;margin-top:0;margin-bottom:30px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600}.form-control[_ngcontent-%COMP%]{border-radius:10px;margin-top:1em;margin-bottom:1em}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-color:#b4d4f2}.btn-primary[_ngcontent-%COMP%]{background-color:#5c5ae5;border:none;transition:all .3s ease}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#4543d6}.form-control-feedback[_ngcontent-%COMP%]{position:absolute;top:50%;right:20px;transform:translateY(-50%);z-index:2;color:#ccc}.formulario[_ngcontent-%COMP%]{padding-top:15em}"]});const S=[{path:"",children:[{path:"addCategory",canActivate:[d.A],component:m},{path:"deleteCategory/:id",canActivate:[d.A],component:h},{path:"list",component:f},{path:"updateCategory/:id",canActivate:[d.A],component:C},{path:"**",redirectTo:"category"}]}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[s.Bz.forChild(S)]});var B=a(4466),E=a(529);class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[l.ez,p,B.m,i.u5,E.JF,s.Bz]})},6752:(v,b,a)=>{a.d(b,{A:()=>d});var l=a(8256),s=a(7825);class d{constructor(c){this.router=c}canActivate(c,t){return"ADMIN"!==localStorage.getItem("role")&&this.router.navigate(["**"]),"ADMIN"===localStorage.getItem("role")}}d.\u0275fac=function(c){return new(c||d)(l.LFG(s.F0))},d.\u0275prov=l.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}}]);