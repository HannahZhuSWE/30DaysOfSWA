"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[631],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8966:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={slug:"api-enabling-swa",title:"#03: API-Enabling SWA",authors:["anthony","nitya"],tags:["swa","30days","core-concepts"],draft:!1},p=void 0,l={permalink:"/blog/api-enabling-swa",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2022-05-04.md",source:"@site/blog/2022-05-04.md",title:"#03: API-Enabling SWA",description:"Welcome to Week 1, Day 3 of #30DaysOfSWA!!",date:"2022-05-04T00:00:00.000Z",formattedDate:"May 4, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"core-concepts",permalink:"/blog/tags/core-concepts"}],readingTime:5.245,truncated:!1,authors:[{name:"Anthony Chu",title:"Senior PM @Microsoft",url:"https://github.com/anthonychu",imageURL:"https://github.com/anthonychu.png",key:"anthony"},{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"api-enabling-swa",title:"#03: API-Enabling SWA",authors:["anthony","nitya"],tags:["swa","30days","core-concepts"],draft:!1},prevItem:{title:"#04: Configuring SWA",permalink:"/blog/configuring-swa"},nextItem:{title:"#02: Building SWA",permalink:"/blog/building-swa"}},u={authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Why Go Serverless?",id:"why-go-serverless",level:2},{value:"Use Azure Functions",id:"use-azure-functions",level:2},{value:"Adding the API",id:"adding-the-api",level:2},{value:"Exercise: SWAG!",id:"exercise-swag",level:2},{value:"Useful Resources",id:"useful-resources",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 1, Day 3")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,"Yesterday, we built and deployed our first Static Web App (using a vanillaJS template) from a GitHub repo. We used the VS Code Extension and, with just a few clicks, it setup automated GitHub Actions (CI/CD) workflows for us transparently. Today - we learn how we can add ",(0,o.kt)("strong",{parentName:"p"},"serverless API endpoints")," to our application using Azure Functions, helping us scale APIs more effectively with demand."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Why go Serverless with SWA?"),(0,o.kt)("li",{parentName:"ul"},"Add API with Azure Functions"),(0,o.kt)("li",{parentName:"ul"},"Quickstart: Use Managed Functions"),(0,o.kt)("li",{parentName:"ul"},"Bring Your Own Functions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example:")," Bring ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/sinedied/azure-swag/"},"Azure-SWAG")," to May 4!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise:")," Try it out yourself!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6591).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"why-go-serverless"},"Why Go Serverless?"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/blog/introducing-swa"},"Introducing SWA"),", we talked about how static web apps are architected to separate ",(0,o.kt)("strong",{parentName:"p"},"static content assets")," and ",(0,o.kt)("strong",{parentName:"p"},"dynamic API endpoints")," into separate components that can be served and scaled independently."),(0,o.kt)("p",null,"In yesterday's post we looked at a basic Static Web App with just content assets (no API). Deploying it with SWA helped us take advantage of Azure's globally-distributed content servers for fast and cost-effective access. Today, we want to add an API endpoint to support dynamic requests from clients. So what does serverless mean, and how do we implement serverless API endpoints?"),(0,o.kt)("p",null,"In this context, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/serverless/web-app"},"Serverless")," is about using an event-driven architecture to allocate our compute resources on-demand. So, our API server will scale as demand grows, but be cost-effective when demand drops."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview"},"Azure Functions")," makes implementing your serverless solutions easier. Event handling is implemented with ",(0,o.kt)("em",{parentName:"p"},"functions")," (code blocks) that run on compute resources that are dynamically-allocated. Resources can spin up as API requests grow, and spin down as demand drops. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/learn/paths/create-serverless-applications/"},(0,o.kt)("strong",{parentName:"a"},"Try this learning path"))," for a deep-dive into using Azure Functions."),(0,o.kt)("h2",{id:"use-azure-functions"},"Use Azure Functions"),(0,o.kt)("p",null,"Static Web Apps and Azure Functions are integrated seamlessly, enabling key features with respect to security (user data) and routing integrations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/user-information?tabs=javascript#api-functions"},"User data access"))," - API functions can directly access user authenticaton and role-based authorization data when handling requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/configuration?#routes"},"API Route access"))," - the application can access the ",(0,o.kt)("inlineCode",{parentName:"li"},"/api")," route securely, without requiring custom CORS rules.")),(0,o.kt)("p",null,"But it gets better. Your SWA can be configured for Azure Functions in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managed Functions")," - where the Azure Static Web Apps service configures and manages your Azure Functions deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bring Your Own Functions")," - where you use a pre-existing Azure Functions application and manage the deployment yourself.")),(0,o.kt)("p",null,"The Free plan supports only the Managed Functions option. It has ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/apis"},"some limitations")," - e.g., supports only HTTP triggers and lacks support for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview"},"Durable Functions")," etc. - but is quick to setup and seamless to use. We'll explore this option today but look for a post in Week 4 that will discuss the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/functions-bring-your-own"},"Bring Your Own Functions"))," approach in detail."),(0,o.kt)("h2",{id:"adding-the-api"},"Adding the API"),(0,o.kt)("p",null,"Want to get some hands-on experience with adding an API endpoint to your Static Web Apps deployment? Check out this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript"},"Quickstart")," tutorial that builds on the vanilla-JS application you deployed previously. The key steps are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Setup Azure Functions for SWA")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"Azure Functions Extension")," for VS Code."),(0,o.kt)("li",{parentName:"ul"},'Open your application root folder ("/") - create an "api" subfolder'),(0,o.kt)("li",{parentName:"ul"},'Select "Azure Static Web Apps: Create HTTP Function" through Command Palette or select the lightning bolt option in Azure extension menu.'),(0,o.kt)("li",{parentName:"ul"},'Enter required configuration information (language="JavaScript", function name="message"), and confirm.')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Sit back and wait till the process completes setup.")," This populates the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api")," directory with configuration files (*.json) in the root folder, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/message")," subfolder that contains 2 files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"function.json")," - defines this function's trigger, bindings and ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference?tabs=blob#function-code"},"other settings"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"index.js")," - implements an async function (accessed at ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/message"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Update the index.js file to implement your function")," - making sure it returns a desired response given the incoming API request and context (input parameters)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Update your application code to invoke the API")," - you can do this by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch('/api/message')")," directly - the seamless Azure Functions integration ensures that the API routing happens automagically."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Test the integration locally with the SWA CLI"),".\nThe Azure Static Web Apps CLI (SWA CLI) is a tool to support local development for Static Web Apps by emulating required services where needed. Follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript#run-the-frontend-and-api-locally"},"these steps"),' to install the tools and run/test your app and API together in your local development environment. Look for a detailed 2-part post in Week 3 ("Developer Tools") where we cover the SWA CLI capabilities, configuration, and usage, in more detail.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Update the GitHub Actions workflow with API location")),(0,o.kt)("p",null,"This is the key step to make sure the Azure Static Web Apps deployment workflow also picks up the new API function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the default GitHub Actions workflow file for your SWA and update the ",(0,o.kt)("inlineCode",{parentName:"li"},"api_location"),' property to "api".'),(0,o.kt)("li",{parentName:"ul"},"Save and commit changes to trigger rebuild and deploy.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Want to see API in action?")," Scroll down to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exercise")," section where we walk through a quick activity you can do to build and deploy a Static Web App with GitHub (SWAG) ",(0,o.kt)("em",{parentName:"p"},"and celebrate #StarWars Day")," in the process!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prefer a video tutorial?")," Check out this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/"},"Azure Static Web Apps: Tips & Tricks")," that walks through the process from a ",(0,o.kt)("em",{parentName:"p"},"react-starter")," template, and showcases the use of remote ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/create-dev-container"},"development container")," for Visual Studio Code that further streamlines your development experience."),(0,o.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://aka.ms/docs/player?show=azure-tips-and-tricks-static-web-apps&ep=how-to-add-an-api-to-your-azure-static-web-app-7-of-16--azure-tips-and-tricks-static-web-apps"}),(0,o.kt)("h2",{id:"exercise-swag"},"Exercise: SWAG!"),(0,o.kt)("p",null,"Today is May 4 - Star Wars Day! Wouldn't it be nice if we could celebrate this with our favorite Star Wars quotes? Thankfully, ",(0,o.kt)("a",{parentName:"p",href:"https://www.twitter.com/sinedied"},"my colleague Yohan")," has a great ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/sinedied/the-easy-way-to-serverless-web-apps-and-apis-with-azure-swag-2heb"},"Azure-SWAG")," template that combines images from ",(0,o.kt)("a",{parentName:"p",href:"https://unsplash.com"},"Unsplash"),' with a pre-defined set of quotes in an API function ("/api/quote") '),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"So I created a version for my ",(0,o.kt)("a",{parentName:"strong",href:"ttps://github.com/nitya/may4-swag"},"May 4 homage")),". Here's what that looks like when deployed. Refresh the SWA to get a new image and quote each time (from the API)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"May The Fourth Homage App",src:a(3962).Z,width:"975",height:"833"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nitya/may4-swag"},"Code Repository")),(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://agreeable-tree-0a216f70f.1.azurestaticapps.net/"},"Deployed SWA"))),(0,o.kt)("p",null,"Your assignment: follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nitya/may4-swag#steps"},"these steps")," to replicate my project, then explore the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nitya/may4-swag/blob/main/api/quote/index.js"},"index.js")," code to see how the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/quote")," function is implemented and review the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nitya/may4-swag/blob/main/app.js"},(0,o.kt)("inlineCode",{parentName:"a"},"app.js"))," code to see how that API is invoked within the application."),(0,o.kt)("h2",{id:"useful-resources"},"Useful Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/apis"},"API Support in SWA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=vanilla-javascript"},"Add API with Managed Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/functions-bring-your-own"},"Bring Your Own Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nitya/may4-swag"},"May4-Swag Demo"))))}d.isMDXComponent=!0},6591:function(e,t,a){t.Z=a.p+"assets/images/03-banner-9229849fe218e3e7721c3687fb4299d8.png"},3962:function(e,t,a){t.Z=a.p+"assets/images/03-may4-a52b69197e93301fb9ee7f81cae37cd0.png"}}]);