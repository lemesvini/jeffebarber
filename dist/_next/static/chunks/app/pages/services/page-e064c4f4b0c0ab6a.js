(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{3408:function(e,t,s){Promise.resolve().then(s.bind(s,5813))},5813:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var a=s(7437),n=s(6463),l=s(2265),r=s(35),i=s(7138),c=s(6920),d=s(568),o=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex w-full top-0 bg-[#191919] h-16 items-center text-white p-3 justify-between",children:[(0,a.jsx)(i.default,{href:"/",className:"cursor-pointer",children:(0,a.jsx)("span",{children:"Logo"})}),(0,a.jsx)(i.default,{href:"",target:"_blank",className:"flex flex-row",children:(0,a.jsxs)(r.default,{variant:"outline-success",className:"flex flex-row gap-2 items-center",children:[(0,a.jsx)(c.G,{icon:d.VHX,className:"h-5 w-5"}),(0,a.jsx)("span",{children:"WhatsApp"})]})})]})})},u=s(518),f=s(7592),x=s(3045),h=s(9354),p=s(1538);let m=(0,s(2218).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});function b(e){let{className:t,classNames:s,showOutsideDays:n=!0,...l}=e;return(0,a.jsx)(x._W,{showOutsideDays:n,className:(0,h.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,h.cn)(m({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,h.cn)(m({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"text-black font-bold",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...s},components:{IconLeft:e=>{let{...t}=e;return(0,a.jsx)(u.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,a.jsx)(f.Z,{className:"h-4 w-4"})}},...l})}l.forwardRef((e,t)=>{let{className:s,variant:n,size:l,asChild:r=!1,...i}=e,c=r?p.g7:"button";return(0,a.jsx)(c,{className:(0,h.cn)(m({variant:n,size:l,className:s})),ref:t,...i})}).displayName="Button",b.displayName="Calendar";var g=s(6460),w=function(e){let{value:t,onSelect:s,isSelected:n}=e;return(0,a.jsx)("div",{onClick:()=>s(t),className:"cursor-pointer p-2 rounded-lg hover:bg-[#0D6EFD] ".concat(n?"bg-[#0D6EFD] text-white":"bg-[#525252] text-white"),children:t})};function v(){let[e,t]=(0,l.useState)(new Date),[s,i]=(0,l.useState)({title:"",desc:"",price:"",duration:""}),[c,d]=(0,l.useState)(!0),[o,u]=(0,l.useState)(void 0),f=(0,n.useSearchParams)();return((0,l.useEffect)(()=>{f&&(i({title:f.get("title")||"",desc:f.get("desc")||"",price:f.get("price")||"",duration:f.get("duration")||""}),d(!1))},[f]),c)?(0,a.jsx)("div",{className:"flex w-full h-[calc(100vh-80px)] p-3 justify-center",children:(0,a.jsx)("div",{className:"flex w-full h-full laptop:w-80 bg-[#191919] rounded-xl justify-center",children:(0,a.jsx)("span",{className:"text-white font-bold self-center",children:"Carregando..."})})}):(0,a.jsxs)("div",{className:"flex flex-col laptop:flex-row justify-between laptop:items-start items-center laptop:justify-center laptop:mt-0 w-full h-[calc(100dvh-80px)] p-3 justify-center gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col laptop:flex-col laptop:items-center justify-between w-full h-full items-center max-w-96 laptop:w-fit bg-[#191919] rounded-xl p-4 text-white",children:[(0,a.jsx)("div",{children:(0,a.jsx)(b,{mode:"single",selected:e,onSelect:t,className:"rounded-md flex items-center"})}),(0,a.jsx)("hr",{className:"text-white w-[90%] self-center"}),(0,a.jsx)("div",{className:"gap-2 flex w-fit h-fit flex-wrap justify-center p-2",children:["9:00","10:00","11:00","12:00"].map((e,t)=>(0,a.jsx)(w,{value:e,onSelect:u,isSelected:e===o},t))})]}),(0,a.jsxs)("div",{className:"flex flex-col w-full max-w-96 h-full min-h-[480px] laptop:w-96 bg-[#191919] rounded-xl p-4 mb-4",children:[(0,a.jsx)("span",{className:"w-full text-center font-bold p-3 text-white text-2xl",children:s.title}),(0,a.jsx)("hr",{className:"text-white w-[90%] self-center"}),(0,a.jsx)("span",{className:"text-white p-3 self-center mb-8",children:s.desc}),(0,a.jsxs)("div",{className:"flex w-full flex-row justify-evenly items-center p-3 border rounded-xl",children:[(0,a.jsx)("span",{className:"text-white",children:s.duration}),(0,a.jsx)("span",{className:"bg-[#143A4E] text-white font-bold drop-shadow p-3 rounded-lg",children:s.price})]}),(0,a.jsxs)("div",{className:"w-full flex flex-col h-full justify-evenly text-white",children:[(0,a.jsxs)("div",{className:"w-full border-b flex justify-between",children:[(0,a.jsx)("span",{children:"Data:"}),(0,a.jsx)("span",{className:"font-bold",children:e?(0,g.WU)(e,"dd/MM/yyyy"):"Select a date"})]}),(0,a.jsxs)("div",{className:"w-full flex border-b justify-between",children:[(0,a.jsx)("span",{children:"Hor\xe1rio:"}),(0,a.jsx)("span",{className:"font-bold",children:o||"Select a time"})]})]}),(0,a.jsx)(r.default,{variant:"outline-primary",className:"p-3",children:"SALVAR AGENDAMENTO"})]})]})}var j=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{}),(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(v,{})})]})}},9354:function(e,t,s){"use strict";s.d(t,{cn:function(){return l}});var a=s(4839),n=s(6164);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m6)((0,a.W)(t))}}},function(e){e.O(0,[958,440,376,971,23,744],function(){return e(e.s=3408)}),_N_E=e.O()}]);