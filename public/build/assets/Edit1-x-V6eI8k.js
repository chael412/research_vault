import{a as m,j as e,M as g,r as a,U as x}from"./app-Bc_-2s0E.js";import{A as j}from"./index-e7_T2kQ8.js";import{A as u}from"./AuthenticatedLayout-CyX_iFAO.js";import"./iconBase-DVeOcSGg.js";import"./transition-Dbu1amtD.js";const _=({auth:t,strands:o,student:s})=>{const{data:i,setData:l,post:c,errors:d,reset:p,processing:n}=m({student_no:s.student_no||"",grade:s.grade||"",firstname:s.firstname||"",middlename:s.middlename||"",lastname:s.lastname||"",birthdate:s.birthdate||"",gender:s.gender||"",email:s.email||"",contact_no:s.contact_no||"",address:s.address||"",image:"",strand_id:s.strand.id.toString()||"",_method:"PUT"});console.log(s);const h=r=>{r.preventDefault(),c(route("student.update",s.id))};return e.jsxs(u,{user:t.user,header:e.jsx("div",{children:e.jsx("h2",{className:"font-semibold text-lg text-green-100 leading-tight",children:"Student Registration"})}),children:[e.jsx(g,{title:"Students"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-4xl p-6",children:e.jsxs("form",{onSubmit:h,className:"mt-8 mb-2",children:[e.jsx("div",{className:"grid grid-cols-2 gap-3 mb-5",children:e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Photo"}),s.image&&e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:s.image,className:"w-64"})}),e.jsx(a.Input,{type:"file",onChange:r=>l("image",r.target.files[0])}),d.image]})}),e.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Student No."}),e.jsx(a.Input,{size:"md",placeholder:"Student No",value:i.student_no,onChange:r=>l("student_no",r.target.value)}),d.student_no]}),e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Strands"}),e.jsx(a.Select,{label:"Select Course",size:"md",value:i.strand_id,onChange:r=>l("strand_id",r),children:o.data.map(r=>e.jsx(a.Option,{value:r.id.toString(),children:r.strand_name},r.id))}),d.strand_id]}),e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Grade"}),e.jsxs(a.Select,{label:"Select Grade",size:"md",value:i.grade,onChange:r=>l("grade",r),children:[e.jsx(a.Option,{value:"11",children:"Grade 11"}),e.jsx(a.Option,{value:"12",children:"Grade 12"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Firstname"}),e.jsx(a.Input,{size:"md",value:i.firstname,onChange:r=>l("firstname",r.target.value)}),d.firstname]}),e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Middlename"}),e.jsx(a.Input,{size:"md",value:i.middlename,onChange:r=>l("middlename",r.target.value)}),d.middlename]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Lastname"}),e.jsx(a.Input,{size:"md",value:i.lastname,onChange:r=>l("lastname",r.target.value)}),d.lastname]}),e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Birthdate"}),e.jsx(a.Input,{type:"date",size:"md",value:i.birthdate,onChange:r=>l("birthdate",r.target.value)}),d.birthdate]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Gender"}),e.jsxs(a.Select,{label:"Select Gender",size:"md",value:i.gender,onChange:r=>l("gender",r),children:[e.jsx(a.Option,{value:"male",children:"Male"}),e.jsx(a.Option,{value:"female",children:"Female"})]}),d.gender]}),e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Address"}),e.jsx(a.Input,{size:"md",value:i.address,onChange:r=>l("address",r.target.value)}),d.address]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-5",children:[e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Contact No."}),e.jsx(a.Input,{size:"md",value:i.contact_no,onChange:r=>l("contact_no",r.target.value)}),d.contact_no]}),e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h6",color:"blue-gray",children:"Email"}),e.jsx(a.Input,{size:"md",placeholder:"Email",value:i.email,onChange:r=>l("email",r.target.value)}),d.email]})]}),e.jsx("hr",{className:"border-t-3 border-gray-400"}),e.jsxs("div",{className:"flex justify-end items-center gap-4 mt-4",children:[e.jsx(x,{href:route("student.index"),children:e.jsx(a.Button,{color:"blue-gray",variant:"outlined",className:"rounded",children:"Cancel"})}),e.jsx(a.Button,{type:"submit",color:"blue",className:"rounded flex items-center",disabled:n,children:n?e.jsx("span",{children:"Updating..."}):e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"me-1 text-xl"}),"Update"]})})]})]})})})]})};export{_ as default};