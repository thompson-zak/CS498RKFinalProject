(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{290:function(e,t,a){},310:function(e,t,a){e.exports={FormHome:"SubmissionForm_FormHome__4KiWa"}},318:function(e,t,a){e.exports=a.p+"static/media/googleButton.9db907da.png"},320:function(e,t,a){e.exports=a.p+"static/media/treasure-map.52596042.png"},321:function(e,t,a){e.exports=a.p+"static/media/found.d0838330.png"},335:function(e,t,a){e.exports=a(588)},340:function(e,t,a){},426:function(e,t,a){},560:function(e,t,a){},582:function(e,t,a){},587:function(e,t,a){},588:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(38),o=a.n(l),i=(a(340),a(17)),r=a(18),c=a(20),u=a(19),m=a(21),d=a(27),h=a(54),p=a(110),f=(a(95),a(59),a(53)),b=a(32),g=a(608),E=a(599),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleCheck=function(t){return e.props.filter(e.state.filter),function(){var a=Object(p.a)(e.state.filter),n=a.indexOf(t);-1!==n?(a.splice(n,1),e.setState({filter:a})):(a.push(t),e.setState({filter:a}))}},e.handleHide=function(){1==e.state.visible&&e.setState({visible:!1})},e.state={filter:[],visible:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.visible!=this.props.visible&&(console.log("COMPONENT DID UPDATE"),this.setState({visible:this.props.visible}))}},{key:"render",value:function(){var e=this.state.visible;return s.a.createElement(g.a,{visible:e,animation:"overlay"},s.a.createElement("div",{className:"categories-text"},s.a.createElement("p",null," Choose categories: ")),s.a.createElement(E.a,{label:"Book",onChange:this.handleCheck("Book")}),s.a.createElement(E.a,{label:"Bag/Purse/Wallet",onChange:this.handleCheck("Bag/Purse/Wallet")}),s.a.createElement(E.a,{label:"Clothing/Shoes",onChange:this.handleCheck("Clothing")}),s.a.createElement(E.a,{label:"Credit/Debit Card",onChange:this.handleCheck("Card")}),s.a.createElement(E.a,{label:"Cell Phone",onChange:this.handleCheck("Cell Phone")}),s.a.createElement(E.a,{label:"Driver's License/ID",onChange:this.handleCheck("License")}),s.a.createElement(E.a,{label:"Electronics",onChange:this.handleCheck("Electronics")}),s.a.createElement(E.a,{label:"Glasses",onChange:this.handleCheck("Glasses")}),s.a.createElement(E.a,{label:"Jewelry",onChange:this.handleCheck("Jewelry")}),s.a.createElement(E.a,{label:"Keys",onChange:this.handleCheck("Keys")}),s.a.createElement(E.a,{label:"Laptop",onChange:this.handleCheck("Laptop")}),s.a.createElement(E.a,{label:"Other",onChange:this.handleCheck("Other")}))}}]),t}(n.Component),O=a(604),C=(a(426),a(603)),N=a(324),y=(a(427),a(606)),I=a(24),x=a.n(I),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).handleClose=function(){a.props.onClose(a.props.selectedItem)},a.prevItem=function(){a.props.prevItem(a.props.selectedIndex)},a.nextItem=function(){a.props.nextItem(a.props.selectedIndex)},a.foundItem=function(e){return console.log(e.id),x.a.firestore().collection("items").doc(e.id.toString()).update({found:1})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.selectedItem,t.open),n=t.selectedIndex,l=t.items,o=JSON.parse(JSON.stringify(l[n])),i=new Date(1e3*o.dateLostOrFound.seconds).toString();return console.log(o),null!==o&&"undefined"!==typeof o.file&&null!==o.file?s.a.createElement(C.a,{closeIcon:!0,onClose:this.handleClose,open:a},s.a.createElement(C.a.Header,{className:"modal-title"}," ",o.fullName," "),s.a.createElement(C.a.Content,{image:!0,scrolling:!0,className:"modal-content"},s.a.createElement(C.a.Description,{className:"modal-description"},s.a.createElement("p",{className:"subcategory"}," Category: "),s.a.createElement("p",{className:"details"}," ",o.category," "),s.a.createElement("p",{className:"subcategory"}," Brand: "),s.a.createElement("p",{className:"details"}," ",o.brand," "),s.a.createElement("p",{className:"subcategory"}," Date: "),s.a.createElement("p",{className:"details"}," ",i," "),s.a.createElement("p",{className:"subcategory"}," Description: "),s.a.createElement("p",{className:"details"}," ",o.description," "),s.a.createElement("p",{className:"subcategory"}," Location: "),s.a.createElement("p",{className:"details"}," ",o.location," "),s.a.createElement("p",{className:"subcategory"}," Images: "),o.file.map(function(e){return s.a.createElement(N.a,{size:"small",src:e,style:{paddingRight:"20px"},href:e})}),s.a.createElement("p",{className:"subcategory"}," Contact: "),s.a.createElement("p",{className:"details"}," Phone Number: ",o.description," "),s.a.createElement("p",{className:"details"}," Email: ",o.email," "),s.a.createElement(y.a,{className:"button-found",onClick:function(){return e.foundItem(o)}}," FOUND ")))):null!==o?s.a.createElement(C.a,{closeIcon:!0,onClose:this.handleClose,open:a},s.a.createElement(C.a.Header,{className:"modal-title"}," ",o.fullName," "),s.a.createElement(C.a.Content,{image:!0,scrolling:!0,className:"modal-content"},s.a.createElement(C.a.Description,{className:"modal-description"},s.a.createElement("p",{className:"subcategory"}," Category: "),s.a.createElement("p",{className:"details"}," ",o.category," "),s.a.createElement("p",{className:"subcategory"}," Brand: "),s.a.createElement("p",{className:"details"}," ",o.brand," "),s.a.createElement("p",{className:"subcategory"}," Date: "),s.a.createElement("p",{className:"details"}," ",i," "),s.a.createElement("p",{className:"subcategory"}," Description: "),s.a.createElement("p",{className:"details"}," ",o.description," "),s.a.createElement("p",{className:"subcategory"}," Location: "),s.a.createElement("p",{className:"details"}," ",o.location," "),s.a.createElement("p",{className:"subcategory"}," Contact: "),s.a.createElement("p",{className:"details"}," Phone Number: ",o.phoneNumber," "),s.a.createElement("p",{className:"details"}," Email: ",o.email," "),s.a.createElement(y.a,{className:"button-found",onClick:function(){return e.foundItem(o)}}," FOUND ")))):s.a.createElement(C.a,null)}}]),t}(n.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleOpenClick=function(t){return function(){e.setState({open:!0,selectedItem:t,selectedIndex:t.index+1,items:e.props.items})}},e.handleClose=function(t){e.setState({selectedItem:t,selectedIndex:t.index,open:!1})},e.prevItemDetails=function(){console.log("BALEK BRO"),console.log(e.state.selectedIndex),0!=e.state.selectedIndex&&e.setState(function(e){return{selectedIndex:e.selectedIndex-1}})},e.nextItemDetails=function(){console.log("NEXT BRO"),console.log(e.state.selectedIndex),15!=e.state.selectedIndex&&e.setState(function(e){return{selectedIndex:e.selectedIndex+1}})},e.state={open:!1,selectedItem:{},selectedIndex:0,items:[{index:0,brand:"",category:"",dateLostOrFound:"",description:"",email:"",fullName:"",location:"",lostOrFound:"",phoneNumber:"",file:null}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.items);var t=this.props.filter,a=JSON.parse(JSON.stringify(this.props.items));return 0!==t.length&&function(){var e;for(e=0;e<t.length;e++)a=a.filter(function(a){return a.category.includes(t[e])})}(),s.a.createElement("div",{className:"containers"},s.a.createElement("div",null,s.a.createElement("p",{className:"list-title"}," List of Lost Items: (Found: ",a.length," items) ")),s.a.createElement(O.a,{selection:!0,divided:!0,relaxed:!0,className:"item-list",style:{maxHeight:200,overflow:"auto"}},a.map(function(t){return s.a.createElement(O.a.Item,{onClick:e.handleOpenClick(t)},s.a.createElement(O.a.Content,null,s.a.createElement(O.a.Header,null,t.fullName),s.a.createElement(O.a.Description,null,t.brand)))})),s.a.createElement(k,{selectedItem:this.state.selectedItem,open:this.state.open,onClose:this.handleClose,nextItem:this.nextItemDetails,prevItem:this.prevItemDetails,selectedIndex:this.state.selectedIndex,items:this.props.allItems}))}}]),t}(n.Component),S=(a(560),a(88),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t;return this.props&&this.props.user&&(e=s.a.createElement(d.b,{to:"/user"},s.a.createElement("p",{className:"username"},"Dashboard"))),this.props&&this.props.user&&this.props.user.isAdmin&&(t=s.a.createElement(d.b,{to:{pathname:"/admin",state:{id:this.props.user.uid,name:this.props.user.displayName,photoURL:this.props.user.photoURL,email:this.props.user.email}}}," ",s.a.createElement("p",{className:"username"},"Admin")," ")),s.a.createElement("div",{className:"section headers"},s.a.createElement("div",{className:"header-icon hidden"},s.a.createElement(f.a,{icon:b.a,onClick:this.openSidebar})),s.a.createElement("div",{className:"header-logo"},s.a.createElement(d.b,{to:"/"},s.a.createElement("p",{className:"username"},"Home")),e,t),null==this.props.user?s.a.createElement("div",{className:"header-user"}):s.a.createElement("div",{className:"header-user"},s.a.createElement("img",{className:"avatarImg",src:this.props.user.photoURL}),s.a.createElement("p",{className:"username"}," ",this.props.user.displayName," ")))}}]),t}(n.Component)),F=a(152),L=a.n(F),w=a(305),D=a(61),H=a(39),A=a(602),B=a(605),R=a(323),P=a(309),G=a.n(P),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){a.props.onChange(e),a.setState({address:e})},a.state={address:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(G.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,l=e.loading;return s.a.createElement("div",null,s.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input"})),s.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&s.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return s.a.createElement("div",n(e,{className:t,style:a}),s.a.createElement("span",null,e.description))})))})}}]),t}(n.Component),J=(a(570),a(571),a(573),a(310)),T=[{key:"b",text:"Book",value:"Book"},{key:"bpw",text:"Bag/Purse/Wallet",value:"Bag/Purse/Wallet"},{key:"c",text:"Clothing/Shoes",value:"Clothing"},{key:"cd",text:"Credit/Debit Card",value:"Card"},{key:"cp",text:"Cell Phone",value:"Cell Phone"},{key:"d",text:"Driver's License/ID",value:"License"},{key:"e",text:"Electronics",value:"Electronics"},{key:"g",text:"Glasses",value:"Glasses"},{key:"j",text:"Jewelry",value:"Jewelry"},{key:"k",text:"Keys",value:"Keys"},{key:"l",text:"Laptop",value:"Laptop"},{key:"o",text:"Other",value:"Other"}],K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={brand:"",category:"",description:"",email:"",firstName:"",lastName:"",location:"",lostOrFound:"",phoneNumber:"",files:[],dateLostOrFound:new Date,submitted:!1,error:!1},a.fileInputRef=s.a.createRef(),a.lostOrFoundHandler=a.lostOrFoundHandler.bind(Object(H.a)(a)),a.submitHandler=a.submitHandler.bind(Object(H.a)(a)),a.inputChangeHandler=a.inputChangeHandler.bind(Object(H.a)(a)),a.dateHandler=a.dateHandler.bind(Object(H.a)(a)),a.fileChange=a.fileChange.bind(Object(H.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"lostOrFoundHandler",value:function(e,t){var a=t.value;"lost"===a?this.setState({lostOrFound:"lost"}):"found"===a&&this.setState({lostOrFound:"found"})}},{key:"dateHandler",value:function(e){this.setState({dateLostOrFound:e})}},{key:"inputChangeHandler",value:function(e,t){e.target.name?this.setState(Object(D.a)({},e.target.name,t.value)):this.setState(Object(D.a)({},t.name,t.value))}},{key:"fileChange",value:function(e){this.setState({files:e.target.files})}},{key:"submitHandler",value:function(){var e=Object(w.a)(L.a.mark(function e(){var t,a,n,s,l,o,i,r,c,u;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,e.t0=L.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=9;break}if(a=e.t1.value,""!==t[a]){e.next=7;break}return this.setState({submitted:!1,error:!0}),e.abrupt("return");case 7:e.next=2;break;case 9:n=[],s=t.files,l=Date.now(),o=0;case 13:if(!(o<s.length)){e.next=24;break}return i=s[o],r=i.name.substr(0,i.name.lastIndexOf("."))+l+i.name.substr(i.name.lastIndexOf(".")),c=x.a.storage().ref("images/"+r),e.next=19,c.put(i).then(function(e){return e.ref.getDownloadURL()}).catch(function(e){return console.log(e)});case 19:u=e.sent,n.push(u);case 21:o++,e.next=13;break;case 24:x.a.firestore().collection("items").add({brand:t.brand,category:t.category,dateLostOrFound:t.dateLostOrFound,description:t.description,email:t.email,fullName:"".concat(t.firstName," ").concat(t.lastName),location:t.location,lostOrFound:t.lostOrFound,phoneNumber:t.phoneNumber,file:n,found:0}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),this.setState({submitted:!0,error:!1});case 27:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.lostOrFound,n=t.submitted,l=t.error,o=t.dateLostOrFound;return s.a.createElement(A.a,{className:J.FormHome,success:n,error:l},s.a.createElement(A.a.Group,{inline:!0},s.a.createElement("label",null,"I have..."),s.a.createElement(A.a.Radio,{label:"Lost an item",value:"lost",checked:"lost"===a,onChange:this.lostOrFoundHandler}),s.a.createElement(A.a.Radio,{label:"Found an item",value:"found",checked:"found"===a,onChange:this.lostOrFoundHandler})),s.a.createElement(A.a.Group,{widths:"equal"},s.a.createElement(A.a.Input,{fluid:!0,name:"firstName",label:"First name",placeholder:"First name",onChange:this.inputChangeHandler}),s.a.createElement(A.a.Input,{fluid:!0,name:"lastName",label:"Last name",placeholder:"Last name",onChange:this.inputChangeHandler})),s.a.createElement(A.a.Group,{widths:"equal"},s.a.createElement(A.a.Input,{fluid:!0,name:"email",label:"Email",placeholder:"jsmith@illinois.edu",onChange:this.inputChangeHandler}),s.a.createElement(A.a.Input,{fluid:!0,name:"phoneNumber",label:"Phone number",type:"number",placeholder:"xxx-xxx-xxxx",onChange:this.inputChangeHandler})),s.a.createElement(A.a.Field,null,s.a.createElement("label",null,"Date Lost/Found"),s.a.createElement(R.a,{selected:o,onChange:this.dateHandler})),s.a.createElement(A.a.Select,{fluid:!0,name:"category",label:"Item Category",options:T,placeholder:"Category",onChange:this.inputChangeHandler}),s.a.createElement(A.a.Input,{fluid:!0,name:"brand",label:"Brand/Model",placeholder:"e.g. Nike, Samsung Galaxy S10",onChange:this.inputChangeHandler}),s.a.createElement(A.a.Field,null,s.a.createElement("label",null,"Location Lost/Found"),s.a.createElement(U,{onChange:function(t){return e.setState({location:t})}})),s.a.createElement(A.a.Field,null,s.a.createElement("label",null,"Upload Image(s) (Optional)"),s.a.createElement(A.a.Button,{onClick:function(){return e.fileInputRef.current.click()}},"Choose File"),s.a.createElement("input",{ref:this.fileInputRef,type:"file",hidden:!0,multiple:!0,onChange:this.fileChange}),s.a.createElement("div",null,this.state.files.length?Array.from(this.state.files).map(function(e,t){return s.a.createElement("div",{key:t},e.name)}):"")),s.a.createElement(A.a.TextArea,{label:"Description of item",name:"description",onChange:this.inputChangeHandler}),s.a.createElement(A.a.Button,{onClick:this.submitHandler},"Submit"),s.a.createElement(B.a,{success:!0,header:"Success",content:"Form submitted."}),s.a.createElement(B.a,{error:!0,header:"Error",content:"Incomplete fields."}))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleOpenClick=function(t){return function(){e.setState({open:!0,selectedItem:t,selectedIndex:t.index+1,items:e.props.items})}},e.handleClose=function(t){e.setState({selectedItem:t,selectedIndex:t.index,open:!1})},e.prevItemDetails=function(){console.log("BALEK BRO"),console.log(e.state.selectedIndex),0!=e.state.selectedIndex&&e.setState(function(e){return{selectedIndex:e.selectedIndex-1}})},e.nextItemDetails=function(){console.log("NEXT BRO"),console.log(e.state.selectedIndex),15!=e.state.selectedIndex&&e.setState(function(e){return{selectedIndex:e.selectedIndex+1}})},e.state={open:!1,selectedItem:{},selectedIndex:0,items:[{index:0,brand:"",category:"",dateLostOrFound:"",description:"",email:"",fullName:"",location:"",lostOrFound:"",phoneNumber:"",file:null}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.items);var t=this.props.filter,a=JSON.parse(JSON.stringify(this.props.items));return 0!==t.length&&function(){var e;for(e=0;e<t.length;e++)a=a.filter(function(a){return a.category.includes(t[e])})}(),s.a.createElement("div",{className:"containers"},s.a.createElement("div",null,s.a.createElement("p",{className:"list-title"}," List of Found Items: (Found ",a.length," items) ")),s.a.createElement(O.a,{selection:!0,divided:!0,relaxed:!0,className:"item-list",style:{maxHeight:200,overflow:"auto"}},a.map(function(t){return s.a.createElement(O.a.Item,{onClick:e.handleOpenClick(t)},s.a.createElement(O.a.Content,null,s.a.createElement(O.a.Header,null,t.fullName),s.a.createElement(O.a.Description,null,t.brand)))})),s.a.createElement(k,{selectedItem:this.state.selectedItem,open:this.state.open,onClose:this.handleClose,nextItem:this.nextItemDetails,prevItem:this.prevItemDetails,selectedIndex:this.state.selectedIndex,items:this.props.allItems}))}}]),t}(n.Component),W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).openSubmissionForm=function(){e.setState({open:!0})},e.closeSubmissionForm=function(){e.setState({open:!1})},e.openSidebar=function(){0==e.state.visible2&&1==e.state.visible?e.setState({visible:!0,visible2:!0}):e.setState({visible:!e.state.visible,visible2:!e.state.visible2})},e.handleHide=function(){e.setState({visible2:!e.state.visible2})},e.closeSidebar=function(){e.setState({visible:!1})},e.applyFilter=function(t){e.state.filter.length!==t.length&&e.setState({filter:t})},e.auth=x.a.auth(),e.state={visible:!1,visible2:!1,items:[{id:"",index:0,brand:"",category:"",dateLostOrFound:"",description:"",email:"",fullName:"",location:"",lostOrFound:"",phoneNumber:"",file:null}],foundItems:[{id:"",index:0,brand:"",category:"",dateLostOrFound:"",description:"",email:"",fullName:"",location:"",lostOrFound:"",phoneNumber:"",file:null}],filter:[],open:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=(x.a.firestore(),0),a=0;this.auth.onAuthStateChanged(function(n){if(n){e.setState({user:n});var s=x.a.firestore();s.collection("userRoles").doc(n.uid).get().then(function(l){var o=l.data();o&&1==o.isAdmin?(n.isAdmin=o.isAdmin,e.setState({user:n}),s.collection("items").get().then(function(n){n.forEach(function(n){if(0==n.data().found&&"lost"==n.data().lostOrFound){var s=n.data();s.index=t,s.id=n.id,e.setState(function(e){return{items:[].concat(Object(p.a)(e.items),[s])}}),++t}else if(0===n.data().found&&"found"===n.data().lostOrFound){var l=n.data();l.index=a,l.id=n.id,e.setState(function(e){return{foundItems:[].concat(Object(p.a)(e.foundItems),[l])}}),a++}})})):(console.log(e.props),e.props.history.push("/")),console.log(n)})}else e.setState({user:null})})}},{key:"render",value:function(){var e,t,a=this.state.items,n=this.state.foundItems;return a=a.filter(function(e){return""!==e.brand}),n=n.filter(function(e){return""!==e.brand}),console.log(this.state.items),this.state&&this.state.user&&(e=s.a.createElement(d.b,{to:"/user"},s.a.createElement("p",{className:"username"},"Dashboard"))),this.state.user&&this.state.user.isAdmin&&(t=s.a.createElement(d.b,{to:{pathname:"/admin",state:{id:this.state.user.uid,name:this.state.user.displayName,photoURL:this.state.user.photoURL,email:this.state.user.email}}}," ",s.a.createElement("p",{className:"username"},"Admin")," ")),s.a.createElement("div",{className:"sections"},s.a.createElement("div",{className:"section headers"},s.a.createElement("div",{className:"header-icon"},s.a.createElement(f.a,{icon:b.a,onClick:this.openSidebar})),s.a.createElement("div",{className:"header-logo"},s.a.createElement(d.b,{to:"/"},s.a.createElement("p",{className:"username"},"Home")),e,t),null==this.state.user?s.a.createElement("div",{className:"header-user"}):s.a.createElement("div",{className:"header-user"},s.a.createElement("img",{className:"avatarImg",src:this.state.user.photoURL}),s.a.createElement("p",{className:"username"}," ",this.state.user.displayName," "))),s.a.createElement(v,{filter:this.applyFilter,visible:this.state.visible,visible2:this.state.visible2,onHide:this.handleHide}),s.a.createElement("div",{className:"title"},s.a.createElement("p",{className:"list-title"}," Did you Lost/Found an item today? "),s.a.createElement(y.a,{className:"submit-button",onClick:this.openSubmissionForm}," Submit Form ")),s.a.createElement(C.a,{open:this.state.open,onClose:this.closeSubmissionForm,closeIcon:!0},s.a.createElement(C.a.Content,{scrolling:!0},s.a.createElement(K,null))),s.a.createElement("div",{className:"section items"},s.a.createElement(j,{items:a,allItems:this.state.items,filter:this.state.filter})),s.a.createElement("div",{className:""},s.a.createElement(M,{items:n,allItems:this.state.foundItems,filter:this.state.filter})))}}]),t}(n.Component),_=a(600),z=a(607),X=a(601),q=(a(288),n.Component,a(582),a(318)),Y=a.n(q),$=(a(195),a(93)),Q=a.n($),V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={},e.auth=x.a.auth(),e.googleProvider=new x.a.auth.GoogleAuthProvider,e.handleGoogleLogin=e.handleGoogleLogin.bind(Object(H.a)(e)),e.handleGoogleLogout=e.handleGoogleLogout.bind(Object(H.a)(e)),e.authListener=e.authListener.bind(Object(H.a)(e)),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"handleChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value)),console.log("STATE CHANGE",this.state)}},{key:"authListener",value:function(){var e=this;this.auth.onAuthStateChanged(function(t){console.log(t),t?e.setState({user:t}):e.setState({user:null})})}},{key:"handleGoogleLogin",value:function(){this.auth.signInWithPopup(this.googleProvider).catch(function(e){alert(e)}),console.log("login")}},{key:"handleGoogleLogout",value:function(){var e=this;this.auth.signOut().then(function(){e.setState({user:null})}),console.log("logout")}},{key:"render",value:function(){return this.state.user?s.a.createElement("div",{className:"button-wrapper"},s.a.createElement(y.a,{onClick:this.handleGoogleLogout},"logout")):s.a.createElement("div",{className:"loginSection"},s.a.createElement("img",{className:"googleButton",src:Y.a,onClick:this.handleGoogleLogin}))}}]),t}(n.Component),Z=(a(587),a(320)),ee=a.n(Z),te=a(321),ae=a.n(te),ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={user:{}},e.auth=x.a.auth(),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.auth.onAuthStateChanged(function(t){t?(e.setState({user:t}),Q.a.firestore().collection("userRoles").doc(t.uid).get().then(function(a){var n=a.data();n&&1==n.isAdmin&&(t.isAdmin=n.isAdmin,e.setState({user:t})),console.log(t)})):e.setState({user:null})})}},{key:"handleChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"render",value:function(){return console.log(this.state.user),s.a.createElement("div",{className:"sections"},s.a.createElement(S,{user:this.state.user}),s.a.createElement("div",{className:"section content-wrapper"},s.a.createElement("div",{className:"cards-wrapper"},s.a.createElement("div",{className:"title-card card-shadow"},s.a.createElement("h1",{className:"app-title"},"Lost and Found"),s.a.createElement("p",null,"Bringing your old fashion lost and found bin to the world")),s.a.createElement("div",{className:"flex-row"},s.a.createElement("div",{className:"info-card card-shadow"},s.a.createElement("h3",{className:"found-title"},"Found Something"),s.a.createElement("img",{src:ae.a}),s.a.createElement("p",null,"Describe the item that you found and where you found it and we will find the owner")),s.a.createElement("div",{className:"info-card card-shadow"},s.a.createElement("h3",{className:"lost-title"},"Lost Something"),s.a.createElement("img",{src:ee.a}),s.a.createElement("p",null,"Tell us what you lost and we will tell you when soemone finds it"))),s.a.createElement(V,null))))}}]),t}(n.Component),se=(a(290),a(322)),le=a.n(se),oe=a(6),ie=a.n(oe),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).elements={},a.register=function(e,t){a.elements[e]=t},a.unregister=function(e){delete a.elements[e]},a.scrollTo=function(e){var t=Object(l.findDOMNode)(a.elements[e]);le()(t,{time:500,align:{top:0}})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"getChildContext",value:function(){return{scroll:{register:this.register,unregister:this.unregister}}}},{key:"render",value:function(){return s.a.Children.only(this.props.children)}}]),t}(n.Component);re.childContextTypes={scroll:ie.a.object};var ce=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.context.scroll.register(this.props.name,this._element)}},{key:"componentWillUnmount",value:function(){this.context.scroll.unregister(this.props.name)}},{key:"render",value:function(){var e=this;return s.a.cloneElement(this.props.children,{ref:function(t){return e._element=t}})}}]),t}(n.Component);ce.contextTypes={scroll:ie.a.object};var ue=re,me=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={user:null,lostItems:[],foundItems:[]},e.auth=x.a.auth(),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.auth.onAuthStateChanged(function(t){t?(e.setState({user:t}),Q.a.firestore().collection("userRoles").doc(t.uid).get().then(function(a){var n=a.data();n&&1==n.isAdmin&&(t.isAdmin=n.isAdmin,e.setState({user:t})),console.log(t)})):e.setState({user:null});var a=Q.a.firestore();a.collection("items").where("email","==",t.email).where("lostOrFound","==","lost").get().then(function(t){var a=[];t.forEach(function(e){var t=e.data();a.push(t)}),e.state.lostItems.length!=a.length&&e.setState({lostItems:a})}),a.collection("items").where("email","==",t.email).where("lostOrFound","==","found").get().then(function(t){var a=[];t.forEach(function(e){var t=e.data();a.push(t)}),e.state.foundItems.length!=a.length&&e.setState({foundItems:a})})})}},{key:"handleChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"render",value:function(){var e=this;return console.log(this.state.user),s.a.createElement("div",{className:"sections"},s.a.createElement(S,{user:this.state.user}),s.a.createElement("div",{className:"section content-wrapper"},s.a.createElement("div",{className:"items lost"},s.a.createElement("h2",null,"Lost Items"),s.a.createElement(ue,{ref:function(t){return e._scroller=t}},s.a.createElement("div",{className:"scroller"},this.state.lostItems.length?this.state.lostItems.map(function(e){var t=e.brand,a=e.description;return s.a.createElement(ce,null,s.a.createElement("div",{className:"item"},t," - ",a))}):s.a.createElement("span",null,"0 items found!"))),s.a.createElement(d.b,{to:"/form",className:"submissionBtn"},"Add a lost item!")),s.a.createElement("div",{className:"items found"},s.a.createElement("h2",null,"Found Items"),s.a.createElement(ue,{ref:function(t){return e._scroller=t}},s.a.createElement("div",{className:"scroller"},this.state.foundItems.length?this.state.foundItems.map(function(e){var t=e.brand,a=e.description;return s.a.createElement(ce,null,s.a.createElement("div",{className:"item"},t," - ",a))}):s.a.createElement("span",null,"0 Items found!"))),s.a.createElement(d.b,{to:"/form",className:"submissionBtn"},"Add a found item!"))))}}]),t}(n.Component),de={apiKey:"AIzaSyAXh0bhHnzUDfFmEdnX0yyLuLbncYhNAqE",authDomain:"ilini-lostandfound.firebaseapp.com",databaseURL:"https://ilini-lostandfound.firebaseio.com",projectId:"ilini-lostandfound",storageBucket:"ilini-lostandfound.appspot.com",messagingSenderId:"596991029999"},he=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={authUser:null},x.a.initializeApp(de),e.auth=x.a.auth(),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"render",value:function(){return s.a.createElement(d.a,{basename:"/CS498RKfinalproject"},s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/admin",component:W}),s.a.createElement(h.a,{exact:!0,path:"/form",component:K}),s.a.createElement(h.a,{exact:!0,path:"/",component:ne}),s.a.createElement(h.a,{exact:!0,path:"/user",component:me})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){}},[[335,1,2]]]);
//# sourceMappingURL=main.fda0cf2c.chunk.js.map