<h1 align="center">Week No.11 challenges</h1>

<h2>Week Goals</h2>

## Tuesday

### Node.JS Core Understanding

<ol>
<li>
<details>
  <summary>What is Node.JS? </summary>
<p align=justify>
Node.js is a runtime environment.  It is open source JavaScript for building real-time network applications. Lightweight and scalable.

Node.js es un entorno de tiempo de ejecución que está diseñado para generar aplicaciones web de forma altamente optimizada

</p>
</details>
</li>

<li>
<details>
  <summary>What problem does Node.JS solve? </summary>

<p align = justify>

The number one goal declared of Node is "to provide an easy way to build network programs scalable

What is the problem with the current server software? Let's accounts. In languages such as Java™, and PHP, each connection spawns a new thread that potentially comes with 2 MB of memory. In a system that has 8 GB of RAM, this gives a theoretical maximum number of concurrent connections of close to 4,000 users. As you grow your customer base, if you want your application to support more users, you will need to add more and more servers. For all these reasons, the bottleneck in the whole architecture of the Web application (including the performance of the traffic, the processor speed and the memory speed) was the maximum number of concurrent connections that could manage a server. Node solves this problem by changing the way in which a connection is made to the server. Instead of generating a new thread for each connection (and assign the memory front passenger), each connection triggers an execution of event within the process engine Node. Node also says that you'll never be at a standstill, because no locks are allowed, and because it does not crash directly to so-called E/S.
</p>

</details>
</li>
<li>
<details>
  <summary>What is the V8 Javascript Engine?</summary>
  
<p>
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application
</p>
</details>
</li>

<li>
<details>
  <summary>Is Node.JS really necessary in the Development ecosystem?</summary>

<p>
    . It helps you build high-traffic apps that run in real-time in no time
    . You can deploy JavaScript code to both the client and server-side
    . Node.js bridges the gap between front-end and back-end development.
    . With the Node Package Manager, you can access many tools and modules to use to your advantage.
    . Code executes more swiftly than in any other programming language
    . Excellent for developing microservices which can often be an integral part of enterprise application software.
</p>
</details>
</li>

<li>
<details>
  <summary>What is the difference between Node.JS and any other browser?</summary>
  
 <p>
 the browser executes java script code always on the client side, while node.js executes code on the server and client side.
 </p>
</details>
</li>

<li>
<details>
  <summary>What is NVM and Why is it useful for Node.JS developers?</summary>

 <P> 
 nvm. Node Version Manager is a bash script used to manage multiple released versions of Node. js. It allows you to perform operations such as install, uninstall, change version, etc.
 </P>
</details>
</li>

</ol>

### Node.JS Module System

<ol>
<li>
<details>
<summary>What is a Javascript Module?</summary>
<p align = justify>
 A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application.
</p>
</detatils>
</li>
<!-- start area -->
<li>
<details>
<summary>Why are Javascript Modules necessary?</summary>
<p align = justify>
To keep the code organized within a project, and to be able to perform a more efficient scalability
</p>
</detatils>
</li>
<!-- end area -->
<!-- start area -->
<li>
<details>
<summary>What module standards are available in Node.JS?</summary>
<p align = justify>
CommonJS
</p>
</detatils>
</li>
<!-- end are -->
<!-- start area -->
<li>
<details>
<summary>What are the differences between ESModules and CommonJS modules?</summary>
<p align = justify>
CommonJS only allows synchronous loading of modules, while ESM allows both synchronous and asynchronous loading.
</p>
</detatils>
</li>
<!-- end are -->

<!-- start area -->
<li>
<details>
<summary>Which types of modules exist in Node.JS?</summary>
<p align = justify>
There are 3 types of modules. They all work in a similar way but differ in origin.

     Built-in modules: They are the native modules of the Node.js API. They do not need to be installed as they are included by default with Node.js. Some examples are the fs or stream modules. These packages are only updated if you change the version of Node.js.

     Local modules: These are the modules written by the developers and form a large part of the application as a whole. As you have already read, they are structured like this in order to be able to be a reusable code.

     External modules: These are, in essence, the third-party packages distributed through npm (although they may come from other repositories). These packages are installed as dependencies and, although they add functionality to the application, they should not be included in the repository since they are not part of the application
</p>
</detatils>
</li>
<!-- end are -->
</ol>

### Node.JS Module System - Practice

[See Module Example](https://github.com/wisdown/core-code-from-scratch-readme/tree/main/Project-Challeng/module-practice)

### Client-Server Model

<ol>

<!-- start area -->
<li>
<details>
<summary>What is a Server?</summary>
<p align = justify>
codigo aqui
</p>
</detatils>
</li>
<!-- end are -->

<!-- start area -->
<li>
<details>
<summary>Why is a Client?</summary>
<p align = justify>
codigo aqui
</p>
</detatils>
</li>
<!-- end are -->

<!-- start area -->
<li>
<details>
<summary>Is a server just another physical computer? </summary>
<p align = justify>
 
1. Why do we refer to a certain class of applications as Servers?
2. What is the difference?
</p>
</detatils>
</li>
<!-- end are -->

<!-- start area -->
<li>
<details>
<summary>Is there any similarity between human communication and the client-server model?</summary>
<p align = justify>
codigo aqui
</p>
</detatils>
</li>
<!-- end are -->

<!-- start area -->
<li>
<details>
<summary>Is the client-server model applicable only to the Web? </summary>
<p align = justify>
1. Can you mention any other example of this model outside the Web?
</p>
</detatils>
</li>
<!-- end are -->

</ol>