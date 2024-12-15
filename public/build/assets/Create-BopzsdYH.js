import{a as u,j as e,M as g,r as s,U as p}from"./app-Bc_-2s0E.js";import{A as x}from"./index-e7_T2kQ8.js";import{A as m}from"./AuthenticatedLayout-CyX_iFAO.js";import"./iconBase-DVeOcSGg.js";import"./transition-Dbu1amtD.js";const N=({auth:n,courses:o,authors:d})=>{const{data:i,setData:a,post:c,errors:l,reset:j,processing:t}=u({accession_no:"",author_id:"",title:"",year:"",copies:"",date_process:"",page_number:"",course_id:"",files:""}),h=r=>{r.preventDefault(),c(route("thesis.store"))};return e.jsxs(m,{user:n.user,header:e.jsx("div",{children:e.jsx("h2",{className:"font-semibold text-lg text-green-100 leading-tight",children:"Add Thesis"})}),children:[e.jsx(g,{title:"Students"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-4xl p-6",children:e.jsxs("form",{onSubmit:h,className:"mt-8 mb-2",children:[e.jsx("div",{className:"grid grid-cols-2 gap-3 mb-5",children:e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"File"}),e.jsx(s.Input,{type:"file",onChange:r=>a("files",r.target.files[0]),error:l.files})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-5",children:[e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Authors"}),e.jsx(s.Select,{label:"Select Author",size:"md",value:i.author_id,onChange:r=>a("author_id",r),error:l.author_id,children:d.map(r=>e.jsxs(s.Option,{value:r.id.toString(),children:[r.firstname," ",r.middlename," ",r.lastname]},r.id))})]}),e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Courses"}),e.jsx(s.Select,{label:"Select Course",size:"md",value:i.course_id,onChange:r=>a("course_id",r),error:l.course_id,children:o.map(r=>e.jsx(s.Option,{value:r.id.toString(),children:r.course_name},r.id))})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Accession No"}),e.jsx(s.Input,{size:"md",value:i.accession_no,onChange:r=>a("accession_no",r.target.value),error:l.accession_no})]}),e.jsxs("div",{className:"col-span-3",children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Title"}),e.jsx(s.Input,{size:"md",value:i.title,onChange:r=>a("title",r.target.value),error:l.title})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Year"}),e.jsx(s.Input,{type:"number",size:"md",value:i.year,onChange:r=>a("year",r.target.value),error:l.year})]}),e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Copy"}),e.jsx(s.Input,{type:"number",size:"md",value:i.copies,onChange:r=>a("copies",r.target.value),error:l.copies})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Page No."}),e.jsx(s.Input,{type:"number",size:"md",value:i.page_number,onChange:r=>a("page_number",r.target.value)})]}),e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h6",color:"blue-gray",children:"Date Proccess"}),e.jsx(s.Input,{type:"date",size:"md",value:i.date_process,onChange:r=>a("date_process",r.target.value)})]})]}),e.jsx("hr",{className:"border-t-3 border-gray-400"}),e.jsxs("div",{className:"flex justify-end items-center gap-4 mt-4",children:[e.jsx(p,{href:route("thesis.index"),children:e.jsx(s.Button,{color:"blue-gray",variant:"outlined",className:"rounded",children:"Cancel"})}),e.jsx(s.Button,{type:"submit",color:"blue",className:"rounded flex items-center",disabled:t,children:t?e.jsx("span",{children:"Saving..."}):e.jsxs(e.Fragment,{children:[e.jsx(x,{className:"me-1 text-xl"}),"Save"]})})]})]})})})]})};export{N as default};
