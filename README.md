 # Hello React!

 # parcel 
 -Dev Build
 -Local Server
 -HMR (Hot Module Replacement)
 -file watching algorithm (written in c++)
 -caching -Faster builds
 -image optimization
 -minification
 -bundling
 -compressing
 -consistent hashing
 -code splitting  
 -differential bundling
 -diagnostic 
 -error handling
 -HTTPs
 -Tree shaking - remove unused code 
 -different dev and prod bundles

 two types of export/import:

 -default export import
   -export default Component;
   -import Component from "path";

 -Named export import
   -export const component;
   -import {Component} from path;

 -React Hooks => Normal JS utility functions. 2 main type of hooks are:
   -useState() creates superpowerful state variable in react, react uses one way binding, useState is asynchronous
   -useEffect()

 -when a state variable updates react re-renders the component

 -2 types of routing in web apps are:
   -server side routing - making a network call, and that page is coming from server 
   -client side routing - network call is not made as all components are loaded in app (used in single page app)

 -Props drilling

 -React context-used to avoid props drilling

 # Redux Toolkit
  -install @reduxjs/toolkit and react-redux
  -build our store
  -connect store to our app
  -slice(cartSlice)
  -dispatch action 
  -Selector