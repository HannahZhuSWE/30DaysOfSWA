"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9290],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),h=n,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return a?i.createElement(d,r(r({ref:t},u),{},{components:a})):i.createElement(d,r({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},540:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=a(7462),n=a(3366),o=(a(7294),a(4137)),r=["components"],s={slug:"practices-cosmosdb",title:"#27: Video Conf with ACS & SWA",authors:["david"],tags:["swa","30days","best-practices"],draft:!1},c=void 0,l={permalink:"/blog/practices-cosmosdb",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2022-05-28.md",source:"@site/blog/2022-05-28.md",title:"#27: Video Conf with ACS & SWA",description:"Welcome to Week 4, Day 6 of #30DaysOfSWA!!",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"best-practices",permalink:"/blog/tags/best-practices"}],readingTime:8.375,truncated:!1,authors:[{name:"David Rousset",title:"Senior Program Manager @Microsoft",url:"https://github.com/davrous",imageURL:"https://github.com/davrous.png",key:"david"}],frontMatter:{slug:"practices-cosmosdb",title:"#27: Video Conf with ACS & SWA",authors:["david"],tags:["swa","30days","best-practices"],draft:!1},nextItem:{title:"#26: Azure Functions & SWA",permalink:"/blog/practices-byo-functions"}},u={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Azure Communications Services (ACS)?",id:"what-is-azure-communications-services-acs",level:2},{value:"Building an authentication layer with Azure Function, CosmosDB &amp; Static Web App",id:"building-an-authentication-layer-with-azure-function-cosmosdb--static-web-app",level:2},{value:"1. Azure Static Web Apps - social authentication",id:"1-azure-static-web-apps---social-authentication",level:3},{value:"2. Azure Functions - map to ACS identity",id:"2-azure-functions---map-to-acs-identity",level:3},{value:"3. Azure Functions + CosmosDB Binding",id:"3-azure-functions--cosmosdb-binding",level:3},{value:"4. CosmosDB - stores ACS identity data",id:"4-cosmosdb---stores-acs-identity-data",level:3},{value:"A Static Web App hosting a Metaverse? \ud83e\udd2f",id:"a-static-web-app-hosting-a-metaverse-",level:2},{value:"Exercise",id:"exercise",level:2}],m={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://www.azurestaticwebapps.dev/blog/practices-cosmosdb"}),(0,o.kt)("meta",{name:"twitter:title",content:"#27: Video Conferencing with ACS & SWA"}),(0,o.kt)("meta",{name:"twitter:description",content:"Join @davrous on #30DaysOfSWA as builds an auth workflow for video conferencing with @AzureStatic Apps @AzureFunctions @AzureCosmosDB & Azure Communications Services!"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://www.azurestaticwebapps.dev/assets/images/27-banner.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureStaticApps"}),(0,o.kt)("link",{rel:"canonical",href:"https://www.azurestaticwebapps.dev/blog/practices-cosmosdb"})),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 4, Day 6")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,"In an earlier example this week, we looked at a real-world case study with KlipTok, involving Azure Static Web Apps integration with ",(0,o.kt)("em",{parentName:"p"},"multiple")," backend services, to deliver the desired user experience. Today we look at another great example of an end-to-end development workflow that involves multiple service integrations - this time with a focus on deliver a rich video conferencing web application experience. Let's learn how to build this with ",(0,o.kt)("strong",{parentName:"p"},"a workflow that involves Azure Static Web Apps, Azure Functions, Azure CosmosDB - and Azure Communications Services (ACS)"),"."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is Azure Communications Services (ACS)?"),(0,o.kt)("li",{parentName:"ul"},"The Video Conference Authentication Workflow",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Azure Static Web Apps for social authentication"),(0,o.kt)("li",{parentName:"ul"},"Azure CosmosDB to store ACS identity information"),(0,o.kt)("li",{parentName:"ul"},"Azure Functions to map social auth to ACS identity"))),(0,o.kt)("li",{parentName:"ul"},"A Static Web App - hosting a Metaverse? \ud83e\udd2f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise")," Deploy the sample yourself following the step-by-step tutorial")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4927).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"what-is-azure-communications-services-acs"},"What is Azure Communications Services (ACS)?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/communication-services/overview"},"Azure Communication Services (ACS)")," is a set of ",(0,o.kt)("strong",{parentName:"p"},"rich communication, video, and SMS APIs")," to deploy your applications across any device, on any platform. If you want to enable emails, chat, audio/video conferencing, phone calls or SMS inside an existing app, this service is right for you. You can view it as your building blocks to create your own custom version of Microsoft Teams, it uses the same underlying infrastructure. This ",(0,o.kt)("a",{parentName:"p",href:"https://www.forbes.com/advisor/business/software/what-is-cpaas/"},"CPaaS")," (Communications Platform As A Service) will manage scalability, quality & availability of this service for you. This platform is also built on top of our secure and compliant cloud.  "),(0,o.kt)("p",null,"Watch this short video for a quick introduction \ud83d\udc47\ud83c\udffc"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/chMHVHLFcao",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),(0,o.kt)("p",null,"Of course, this service comes with a price. You can find the cost of each service by visiting\u202f",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/pricing/details/communication-services/"},"Azure Communication Services pricing | Microsoft Azure"),". "),(0,o.kt)("p",null,"ACS exposes its services via\u202fvarious SDKs:\u202f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/communication"},"Azure Communication Services \u2013 Samples and Tools")," available for\u202fJavaScript,\u202f.NET,\u202fJava,\u202fAndroid,\u202fiOS\u202f&\u202fPython\u202fdevelopers. "),(0,o.kt)("p",null,"You can also optionally use this on top of the ACS UI library:\u202f",(0,o.kt)("a",{parentName:"p",href:"https://azure.github.io/communication-ui-library/?path=/story/overview--page"},"Overview \u2013 Page \u22c5 Storybook")," which consists of React-based components implementing the\u202f",(0,o.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/fluentui/"},"Microsoft Fluent Design"),"\u202fto help you build visually engaging web apps. The best sample mixing all of these concepts is ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/communication-services/samples/calling-hero-sample?pivots=platform-web"},"Group calling hero sample \u2013 An Azure Communication Services sample overview")),". "),(0,o.kt)("p",null,"To give you a brief idea, watch this 2 min video tutorial that shows you how to get the internal ACS authentication token to connect to its infrastructure. I can then join an existing Teams meeting using a simple web page and the ACS JavaScript SDK:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FFBBLUtRyZw",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Want to follow along at home?")," You simply need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/create-communication-resource?tabs=windows&pivots=platform-azp"},"Create an Azure Communication Services resource in your Azure Portal")," "),(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/acsquicktest"},"https://aka.ms/acsquicktest")," and follow the video tutorial above.")),(0,o.kt)("p",null,"You\u2019ll discover that, by default, Azure Communication Services provides the basic authentication & identity layer. But you need to build on top of it to connect your own identity platform. Let\u2019s see how to do that, next!"),(0,o.kt)("h2",{id:"building-an-authentication-layer-with-azure-function-cosmosdb--static-web-app"},"Building an authentication layer with Azure Function, CosmosDB & Static Web App"),(0,o.kt)("h3",{id:"1-azure-static-web-apps---social-authentication"},"1. Azure Static Web Apps - social authentication"),(0,o.kt)("p",null,"Well, it turns out that SWA provides an awesome out of the box authentication experience. To know more about it, please read: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations"},"Authentication and authorization for Azure Static Web Apps"),". In seconds, without any additional code required, you\u2019ll have an authentication layer provided to you!"),(0,o.kt)("p",null,"We\u2019re going to use it as our front end to welcome and authenticate our users. "),(0,o.kt)("h3",{id:"2-azure-functions---map-to-acs-identity"},"2. Azure Functions - map to ACS identity"),(0,o.kt)("p",null,"Then, we will map their social account identity with the internal ACS identity via an Azure Function. The Azure Function will store the mapping into a small CosmosDB table. Here\u2019s the flow. "),(0,o.kt)("p",null,"First, you\u2019ll land on a page asking you to choose your favorite social provider:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the Static Web App sample showing the Twitter, Github, Microsoft &amp; Google logos",src:a(5795).Z,width:"1536",height:"610"})),(0,o.kt)("p",null,"Then, once authenticated, you\u2019ll be directly connected to the Azure Communication Services infrastructure. No need to generate a token or whatever, the Azure Function took care of it. I\u2019ve been using my Twitter account in this screenshot for instance:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the Static Web App sample once authentified, showing the web camera active",src:a(2516).Z,width:"2256",height:"1434"})),(0,o.kt)("p",null,"You see that the UI shows how my Twitter account, ",(0,o.kt)("em",{parentName:"p"},"davrous@twitter"),", is mapped to the internal ACS user ID ",(0,o.kt)("em",{parentName:"p"},"8:acs:4ba98fcc"),"\u2026 that you should normally not share to the users of course \ud83d\ude09. "),(0,o.kt)("p",null,"Thanks to that, you\u2019re ready to call friends and colleagues immediately or join a Teams meeting via simply using their social account email address as the person to call."),(0,o.kt)("h3",{id:"3-azure-functions--cosmosdb-binding"},"3. Azure Functions + CosmosDB Binding"),(0,o.kt)("p",null,"Let\u2019s have a look to the Azure Function code enabling this scenario. First, you can see in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davrous/acsauth/blob/main/api/users/function.json"},"function.json file")," that I\u2019m using the CosmosDB binding feature. To know more about this feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-input?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript"},"Azure Cosmos DB input binding for Functions 2.x and higher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-output?tabs=in-process%2Cfunctionsv2&pivots=programming-language-csharp"},"Azure Cosmos DB output binding for Functions 2.x and higher"))),(0,o.kt)("p",null,"In a nutshell, via a simple declaration in the ",(0,o.kt)("em",{parentName:"p"},"function.json")," file, you have a simple data access layer available in your Azure Function code for free. "),(0,o.kt)("p",null,"If you look into my json file, I\u2019m defining a route under ",(0,o.kt)("em",{parentName:"p"},"users/{email}/{lookup:bool?}")," that will be exposed under 2 functions in my Azure Function: ",(0,o.kt)("em",{parentName:"p"},"setUser")," as the output binding (to write or update into CosmosDB) and ",(0,o.kt)("em",{parentName:"p"},"getUser")," as the input binding (to read from CosmosDB). "),(0,o.kt)("p",null,"In this declaration file, I\u2019m also asking the Azure Function to use the CosmosDB database named \u201c",(0,o.kt)("em",{parentName:"p"},"ACS"),"\u201d with the table named \u201c",(0,o.kt)("em",{parentName:"p"},"users"),"\u201d using \u201c",(0,o.kt)("em",{parentName:"p"},"email"),"\u201d parameter as the partition key. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"getUser")," will be called with a first required parameter which is an email address associated to the ACS internal identity. It has a second optional parameter which is a boolean. This asks to the Azure Function to do a simple resolve query to return the internal ACS id associated with the email address. It\u2019s useful when you\u2019d like to call someone on ACS by simply providing his email address rather than being forced to know its internal ACS identity (starting with ",(0,o.kt)("em",{parentName:"p"},"8:acs:xxx"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"setUser")," simply create a new record or update it."),(0,o.kt)("p",null,"You can find the complete source code of the Azure Function there: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davrous/acsauth/blob/main/api/users/index.ts"},"acsauth/index.ts at main \xb7 davrous/acsauth (github.com)"),". "),(0,o.kt)("p",null,"The first block is simply doing the resolve logic I was mentioning just before. The second block is first checking if the user has already been created in the CosmosDB table and if the ACS token is still valid. Indeed, ACS tokens are valid for 24 hours only. If the user doesn\u2019t exist or if its token has expired, we\u2019re using the ACS JavaScript SDK to create a new identity & authentication token to map it to the email address. "),(0,o.kt)("p",null,"If you\u2019re interested in the ACS identity concepts, please read:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/communication-services/concepts/identity-model"},"Identity model - An Azure Communication Services concept")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/access-tokens?pivots=programming-language-javascript"},"Quickstart - Create and manage access tokens - An Azure Communication Services quickstart"))),(0,o.kt)("h3",{id:"4-cosmosdb---stores-acs-identity-data"},"4. CosmosDB - stores ACS identity data"),(0,o.kt)("p",null,"Now, let\u2019s have a look to what\u2019s stored in the CosmosDB table thanks to the Azure Portal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Azure Portal, in the CosmosDB blade showing the content of the table",src:a(6469).Z,width:"2196",height:"909"})),(0,o.kt)("p",null,"You can find all the required information for my scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id"),": an email address coming from the social network, which is my partition key and my primary key for my requests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"userId"),": the associated internal ACS identity in the form of 8:acs:xxxx."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"userToken"),": the associated internal ACS authentication token required to be able to connect to the ACS infrastructure"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expiresOn"),": when the ACS authentication token will expire")),(0,o.kt)("p",null,"The beauty of the Azure Function binding feature is that I didn\u2019t have to write any code to manage the reading or writing part of the records. It can even update an existing record if needed. "),(0,o.kt)("p",null,"With few lines of code, I\u2019ve been able to create a small authentication layer on top of ACS to create users mapped to ACS internal identity. With the out of the box Static Web App authentication experience, I didn\u2019t even need to write any code to authenticate users with their social identity!"),(0,o.kt)("h2",{id:"a-static-web-app-hosting-a-metaverse-"},"A Static Web App hosting a Metaverse? \ud83e\udd2f"),(0,o.kt)("p",null,"In the same sample, I\u2019ve been building on top of the architecture described just above a small metaverse using ",(0,o.kt)("a",{parentName:"p",href:"https://www.babylonjs.com"},"Babylon.js"),", an open source & free WebGL engine I\u2019ve been contributing to. The logic is identical to what I\u2019ve described up to now. "),(0,o.kt)("p",null,"Thanks to the SWA, I\u2019m authenticating the user using his social profile. But then, I can do the video call to another ACS user or someone in Teams from a 3D scene. And everything is waayyy cooler inside a 3D scene, right? "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the Static Web App with a 3D scene of a museum loaded",src:a(4107).Z,width:"1914",height:"1431"})),(0,o.kt)("p",null,"But wait, there\u2019s even better. You can experience this Babylon.js scene in VR thanks to its native WebXR support! To give you an idea, here\u2019s a video where I\u2019m using my Valve Index to call my girl friend in Teams so we can visit this museum together."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Wd4qNeLV_P8",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),(0,o.kt)("p",null,"If you\u2019re interested in WebXR, I\u2019ve written a full article on what you can build with it sharing lot of my samples: ",(0,o.kt)("a",{parentName:"p",href:"https://www.davrous.com/2022/04/12/from-gaming-to-metaverses-building-webxr-apps-with-babylon-js/"},"From gaming to metaverses, building WebXR apps with Babylon.js \u2013 David Rousset (davrous.com)"),"."),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"If you\u2019d like to play and learn from this sample mixing ACS, SWA, Azure Function, CosmosDB & Babylon.js, you can ",(0,o.kt)("strong",{parentName:"p"},"deploy it in less than 10 minutes")," by following the step-be-step tutorial available in this associated repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davrous/acsauth"},"davrous/acsauth: Deploy in less than 10 min an Azure Communication Services sample to be shared & tested with your colleagues & friends"),"."),(0,o.kt)("p",null,"Enjoy and see you in the metaverse! \ud83d\ude0a"))}h.isMDXComponent=!0},4927:function(e,t,a){t.Z=a.p+"assets/images/27-banner-5146de1cca8588633d6475561df82410.png"},5795:function(e,t,a){t.Z=a.p+"assets/images/ACSSWA001-e655d56ddaf55e97d82a83a96250c726.jpg"},2516:function(e,t,a){t.Z=a.p+"assets/images/ACSSWA002-cfcc34d95d25a76a1e84c8d0a8a82873.jpg"},6469:function(e,t,a){t.Z=a.p+"assets/images/ACSSWA003-6bfaf3849bb96b70144a46f3aa55ac37.jpg"},4107:function(e,t,a){t.Z=a.p+"assets/images/ACSSWA004-2c90a2336105c38bffc821977311f72f.jpg"}}]);