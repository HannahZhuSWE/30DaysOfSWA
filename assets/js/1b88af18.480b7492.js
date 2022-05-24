"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4168],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1186:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(4137)),o=["components"],l={slug:"build-with-react",title:"#09: Manage Inventory - with React",authors:["chris"],tags:["swa","30days","usage-examples","react"],draft:!1},s=void 0,p={permalink:"/blog/build-with-react",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2022-05-10.md",source:"@site/blog/2022-05-10.md",title:"#09: Manage Inventory - with React",description:"Welcome to Week 2, Day 2 of #30DaysOfSWA!!",date:"2022-05-10T00:00:00.000Z",formattedDate:"May 10, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"usage-examples",permalink:"/blog/tags/usage-examples"},{label:"react",permalink:"/blog/tags/react"}],readingTime:2.81,truncated:!1,authors:[{name:"Chris Noring",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/chris_noring",imageURL:"https://github.com/softchris.png",key:"chris"}],frontMatter:{slug:"build-with-react",title:"#09: Manage Inventory - with React",authors:["chris"],tags:["swa","30days","usage-examples","react"],draft:!1},prevItem:{title:"#10: Get Creative - with Vue.js",permalink:"/blog/build-with-vuejs"},nextItem:{title:"#08: Build A Blog - with Astro",permalink:"/blog/build-with-astro"}},u={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Why Learn React?",id:"why-learn-react",level:2},{value:"SWA Quickstart",id:"swa-quickstart",level:2},{value:"Inventory Mgmt",id:"inventory-mgmt",level:2},{value:"Exercise: Try It!",id:"exercise-try-it",level:2},{value:"Resources",id:"resources",level:2}],m={toc:c};function h(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"Week 2, Day 2")," of ",(0,i.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,i.kt)("p",null,"Yesterday we looked at using a static site builder (namely ",(0,i.kt)("a",{parentName:"p",href:"https://astro.build"},"Astro"),") to create a personal blog and host it with Azure Static Web Apps. Over the next two days, we switch gears and look at using Azure Static Web Apps with some popular ",(0,i.kt)("em",{parentName:"p"},"front-end frameworks")," - starting today with ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why Learn React?"),(0,i.kt)("li",{parentName:"ul"},"React + SWA: Quickstart"),(0,i.kt)("li",{parentName:"ul"},"Build: Inventory Management App"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exercise:")," Build & Deploy a basic React SWA.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5712).Z,width:"1000",height:"420"})),(0,i.kt)("h2",{id:"why-learn-react"},"Why Learn React?"),(0,i.kt)("p",null,"React describes itself as ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"a JavaScript library for building user interfaces")," that targets single-page application (SPA) development with a declarative and component-based approach. Today, it's one of the most popular technologies used for web development, leading the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"2021 rising stars of JavaScript")," section for front-end frameworks. Whether you're new to web development, or an experienced developer, it's a technology worth learning."),(0,i.kt)("p",null,"New to React? Here are a couple of resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"Official Tutorial: Intro to React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/learn/paths/react/"},"Creating your first web apps with React")," - on Microsoft Learn"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/Web-Dev-For-Beginners"},"Web Dev For Beginners")," - project-based curriculum")),(0,i.kt)("p",null,"`"),(0,i.kt)("h2",{id:"swa-quickstart"},"SWA Quickstart"),(0,i.kt)("p",null,"Once you have a simple React application scaffolded, configuring it to use Azure Static Web Apps is easy. In week 1, we covered the three different approaches (using Visual Studio Code, using Azure Portal, using Azure CLI) to build and deploy a vanillaJS app."),(0,i.kt)("p",null,"Want to try building and deploying a basic React starter app? The Azure Static Web Apps documentation has ",(0,i.kt)("strong",{parentName:"p"},"Quickstarts")," to help! "),(0,i.kt)("p",null,"The following tutorials use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/staticwebdev/react-basic"},"react-basic")," starter template bootstrapped using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app"),". Pick an option based on your preferred development environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SWA Quickstart: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react"},"Using Visual Studio Code")),(0,i.kt)("li",{parentName:"ul"},"SWA Quickstart: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-cli?tabs=react"},"Using Azure CLI")),(0,i.kt)("li",{parentName:"ul"},"SWA Quickstart: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=react&pivots=azure-devops"},"Using Azure Portal"))),(0,i.kt)("p",null,"This should help you setup and validate the basic tooling required for developing Azure Static Web Apps. Now, let's think about building something a little more functional!"),(0,i.kt)("h2",{id:"inventory-mgmt"},"Inventory Mgmt"),(0,i.kt)("p",null,"Today, I'm publishing the first of a ",(0,i.kt)("em",{parentName:"p"},"multi-part tutorial")," on how you can build an inventory management app with Azure Static Web Apps and React."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.to/azure/build-an-inventory-management-app-with-azure-static-web-apps-with-react-part-1-2l2e"},(0,i.kt)("strong",{parentName:"a"},"Read Part 1 of the Tutorial Here")),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In this series, I'll take you from the very beginning on generating a React app and deploying it within 5 minutes. In the upcoming parts, I'll keep building on the same app, and add things like backend and other things.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Banner image from dev.to article",src:a(5976).Z,width:"864",height:"359"})),(0,i.kt)("p",null,"In this tutorial you'll learn about:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Options to scaffold your React App"),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Snowpack")," option to scaffold your project"),(0,i.kt)("li",{parentName:"ul"},"Use VS Code to configure & deploy the app to SWA.")),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://happy-wave-036ec970f.1.azurestaticapps.net/"},"deployed SWA")," at this stage of the tutorial. In the next part of the series, we'll improve UI and add routing support."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.to/azure/build-an-inventory-management-app-with-azure-static-web-apps-with-react-part-1-2l2e"},(0,i.kt)("strong",{parentName:"a"},"Revisit this series page tomorrow"))," to continue with the tutorial."),(0,i.kt)("h2",{id:"exercise-try-it"},"Exercise: Try It!"),(0,i.kt)("p",null,"This is the perfect time to make sure you have your development environment setup and ready to follow along. Try the quickstart option, then follow along with the tutorial series."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Here are the key resources we shared in this article:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SWA Quickstart: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react"},"Using Visual Studio Code")),(0,i.kt)("li",{parentName:"ul"},"SWA Quickstart: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-cli?tabs=react"},"Using Azure CLI")),(0,i.kt)("li",{parentName:"ul"},"SWA Quickstart: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=react&pivots=azure-devops"},"Using Azure Portal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/tutorial/tutorial.html"},"Official Tutorial: Intro to React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/learn/paths/react/"},"Creating your first web apps with React")," - on Microsoft Learn"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/Web-Dev-For-Beginners"},"Web Dev For Beginners")," - project-based curriculum")))}h.isMDXComponent=!0},5712:function(e,t,a){t.Z=a.p+"assets/images/09-banner-591c45c368672751da7cfb9f1468f043.png"},5976:function(e,t,a){t.Z=a.p+"assets/images/09-snowpack-d2ba42180bf38be57dfacb90e2b44f27.png"}}]);