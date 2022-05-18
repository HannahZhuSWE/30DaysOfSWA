"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2577],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3442:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={slug:"introducing-swa",title:"#01: Introducing SWA",authors:["simona","nitya"],tags:["swa","30days","core-concepts"],draft:!1},l=void 0,p={permalink:"/blog/introducing-swa",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-02.md",source:"@site/blog/2021-05-02.md",title:"#01: Introducing SWA",description:"Welcome to Week 1, Day 1 of #30DaysOfSWA!!",date:"2021-05-02T00:00:00.000Z",formattedDate:"May 2, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"core-concepts",permalink:"/blog/tags/core-concepts"}],readingTime:3.685,truncated:!1,authors:[{name:"Simona Cotin",title:"Principal PM @Microsoft",url:"https://github.com/simonaco",imageURL:"https://github.com/simonaco.png",key:"simona"},{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"introducing-swa",title:"#01: Introducing SWA",authors:["simona","nitya"],tags:["swa","30days","core-concepts"],draft:!1},prevItem:{title:"#02: Building SWA",permalink:"/blog/building-swa"},nextItem:{title:"Kickoff #30DaysOfSWA!",permalink:"/blog/kickoff"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Azure SWA?",id:"what-is-azure-swa",level:2},{value:"How is it Architected?",id:"how-is-it-architected",level:2},{value:"Where can I use it?",id:"where-can-i-use-it",level:2},{value:"10 Things To Know!",id:"10-things-to-know",level:2},{value:"Exercise:",id:"exercise",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 1, Day 1")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,"This week, we'll focus on the ",(0,o.kt)("strong",{parentName:"p"},"Core Concepts")," behind Azure Static Web Apps, starting with an introduction to SWA and continuing on to building, enhancing, and deploying, your SWA for users to experience. Let's get started today by ",(0,o.kt)("em",{parentName:"p"},"Introducing Static Web Apps"),"."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is Azure Static Web Apps?"),(0,o.kt)("li",{parentName:"ul"},"How is it architected?"),(0,o.kt)("li",{parentName:"ul"},"Where can I use it?"),(0,o.kt)("li",{parentName:"ul"},"10 Key Features to know"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise:")," Explore SWA Examples!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource:")," ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Static Web Apps Overview"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8185).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"what-is-azure-swa"},"What is Azure SWA?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Azure Static Web Apps")," is a cloud-based service that ",(0,o.kt)("strong",{parentName:"p"},"automatically")," builds and deploys full-stack web apps to Azure ",(0,o.kt)("strong",{parentName:"p"},"directly from your code repository"),". The service works with popular code sources like GitHub, GitLab and BitBucket by default. Look for the ",(0,o.kt)("em",{parentName:"p"},"Deploying SWA")," post later this week where we walk through the details here."),(0,o.kt)("p",null,"The benefit to you as a developer is that it ",(0,o.kt)("strong",{parentName:"p"},"simplifies your developer experience"),". Just commit changes to your application source code into the repository and step back. The SWA service monitors the codebase for changes, automatically rebuilding and redeploying your app to the hosted endpoint. Look for a ",(0,o.kt)("em",{parentName:"p"},"Previewing SWA")," post later this week where we'll talk about built-in support for previewing apps in non-main branches, or in pull requests, that make it easier to manage apps with multiple contributors."),(0,o.kt)("p",null,"Prefer a 5-minute video overview? We have you covered!"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=what-is-azure-static-web-apps-and-what-can-it-be-used-for-1-of-16--azure-tips-and-tricks-static-web-",frameborder:"0"}),(0,o.kt)("h2",{id:"how-is-it-architected"},"How is it Architected?"),(0,o.kt)("p",null,"Static Web Apps can be built using popular front-end frameworks including React, Angular, Vue, Svelte, or Blazor. These apps typically consist of a collection of ",(0,o.kt)("strong",{parentName:"p"},"static content assets")," (HTML, JS, CSS and media files) coupled with a ",(0,o.kt)("strong",{parentName:"p"},"dynamic API endpoint")," to handle client interactions in real time."),(0,o.kt)("p",null,"Traditional web application deployments use a ",(0,o.kt)("em",{parentName:"p"},"single web server")," to serve both the static assets and the API endpoint. This can make scaling these services sub-optimal in terms of global availability and runtime costs."),(0,o.kt)("p",null,"With Static Web Apps, we ",(0,o.kt)("strong",{parentName:"p"},"separate static assets from API endpoints"),", allowing each to be scaled using the technology best equipped to do this in a cost-effective manner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Static assets get served from geographically-distributed content servers worldwide, distributing the load and speeding up access to users nearby."),(0,o.kt)("li",{parentName:"ul"},"API endpoints are hosted using a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview"},"serverless architecture"),", spinning up compute resources (to execute functions) only as needed, in response to trigger events.")),(0,o.kt)("p",null,"This architecture - with static content servers, serverless backends, and automated CI/CD workflows - simplifies your development workflow ",(0,o.kt)("strong",{parentName:"p"},"allowing you to focus your attention on the application logic and user experience")," components of your modern web application."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9970).Z,width:"596",height:"441"})),(0,o.kt)("h2",{id:"where-can-i-use-it"},"Where can I use it?"),(0,o.kt)("p",null,"That's a great question!! You can use Static Web Apps to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build modern web apps with front-end frameworks (like Angular, React, Vue etc.)"),(0,o.kt)("li",{parentName:"ul"},"Publish static web sites (using Gatsby, Hugo, Astro, Docusaurus, VuePress etc.)"),(0,o.kt)("li",{parentName:"ul"},"Deploy web apps with frameworks like Next.js and Nuxt.js.")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks"},(0,o.kt)("strong",{parentName:"a"},"configure your existing application"))," to use Azure Static Web Apps using an IDE like VS Code, or using Command-line tools (like Azure CLI and SWA CLI), or through the browser (using the Azure Portal). Look for two posts later this week that dive into this in detail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Building SWA")," (tomorrow) on getting started with using SWA in your app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Configuring SWA")," (later) on customizing app behaviors and build process.")),(0,o.kt)("p",null,"But wait - there's one more thing. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep an eye out for an announcement later in the series")," where we'll be debuting a new ",(0,o.kt)("a",{parentName:"p",href:"/showcase"},"Community Showcase"),' page - here\'s a sneak preview. You can filter it to see examples from popular front-end technologies, select "open source" to see the repository for inspiration - ',(0,o.kt)("strong",{parentName:"p"},"and consider adding your own project")," at the end of your journey!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6353).Z,width:"936",height:"826"})),(0,o.kt)("h2",{id:"10-things-to-know"},"10 Things To Know!"),(0,o.kt)("p",null,"We've talked about what SWA is, how it's architected, and where you can use it. But what are the key features that make it powerful? ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview#key-features"},(0,o.kt)("strong",{parentName:"a"},"Read the Documentation"))," for the detailed list - or scan the visual guide below for a summary!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3525).Z,width:"3840",height:"2160"})),(0,o.kt)("h2",{id:"exercise"},"Exercise:"),(0,o.kt)("p",null,"That was a lot to digest right?  It helps to see some of these ideas in action. So here's two things you can do before we dive into the quickstart tomorrow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/static-web-apps-gallery-code-samples"},"Showcase Gallery")," repository to see some examples of SWA in Action."),(0,o.kt)("li",{parentName:"ul"},"Follow the ",(0,o.kt)("a",{parentName:"li",href:"https://dev.to/t/staticwebapps"},"#staticwebapps")," tag to see community-posted articles on usage.")))}m.isMDXComponent=!0},8185:function(e,t,a){t.Z=a.p+"assets/images/01-banner-be8d7d0f3d456b78fd3930cbaab95247.png"},9970:function(e,t,a){t.Z=a.p+"assets/images/01-swa-overview-41d0e428dab8a7da10950b590d54c886.png"},3525:function(e,t,a){t.Z=a.p+"assets/images/01-ten-things-f6eee9ff7c4e6fe0e5c36ee242cdb594.png"},6353:function(e,t,a){t.Z=a.p+"assets/images/swa-showcase-5214e0f3f6ea04a71fc5e8c82a94545a.png"}}]);