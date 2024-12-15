import{a as u,j as e,M as h,r,U as x}from"./app-BHMVinDP.js";import{A as j}from"./index-DYxhqOeq.js";import{A as g}from"./AuthenticatedLayout-5JsBVXQz.js";import"./iconBase-JGKODCjX.js";import"./transition-Wf3JQOJI.js";const N=({auth:o})=>{const{data:s,setData:t,post:n,errors:l,reset:i,processing:d}=u({firstname:"",middlename:"",lastname:""}),m=async a=>{a.preventDefault();try{await n(route("authors.store")),alert("Author was added successfully"),i()}catch(c){console.error("Error adding author:",c)}};return e.jsxs(g,{user:o.user,header:e.jsx("div",{children:e.jsx("h2",{className:"font-semibold text-lg text-green-100 leading-tight",children:"Add Author"})}),children:[e.jsx(h,{title:"Authors"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-lg p-6",children:e.jsxs("form",{onSubmit:m,className:"mt-8 mb-2",children:[e.jsxs("div",{children:[e.jsx(r.Typography,{variant:"h6",color:"blue-gray",children:"First Name"}),e.jsx(r.Input,{size:"md",value:s.firstname,onChange:a=>t("firstname",a.target.value),error:!!l.firstname})]}),e.jsxs("div",{children:[e.jsx(r.Typography,{variant:"h6",color:"blue-gray",children:"Middle Name"}),e.jsx(r.Input,{size:"md",value:s.middlename,onChange:a=>t("middlename",a.target.value),error:!!l.middlename})]}),e.jsxs("div",{children:[e.jsx(r.Typography,{variant:"h6",color:"blue-gray",children:"Last Name"}),e.jsx(r.Input,{size:"md",value:s.lastname,onChange:a=>t("lastname",a.target.value),error:!!l.lastname})]}),e.jsx("hr",{className:"border-t-3 border-gray-400 mt-8"}),e.jsxs("div",{className:"flex justify-end items-center gap-4 mt-4",children:[e.jsx(x,{href:route("authors.index"),children:e.jsx(r.Button,{color:"blue-gray",variant:"outlined",className:"rounded",children:"Cancel"})}),e.jsxs(r.Button,{type:"submit",color:"blue",className:"rounded flex items-center",disabled:d,children:[e.jsx(j,{className:"me-1 text-lg"}),"Save"]})]})]})})})]})};export{N as default};
