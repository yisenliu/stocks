import{u as e,j as r,b as a}from"./vendor-262f8ba3.chunk.js";import{B as o,T as s,a as i,P as l}from"./Tab-bab14ce8.chunk.js";import{H as n}from"./index-1f49204e.chunk.js";import"./404-374073c5.js";import"./moment-e953ecbf.chunk.js";function c(){const{bound_data_id:t}=e();return r(l,{name:"treasury_bound_protal",children:[a(o,{to:"/us_treasury_bound",title:t}),r("div",{className:"min-h-full pb-8 bg-gray-900",children:[a("div",{className:"z-5 bg-primary sticky top-0 text-white",children:a(s,{value:"HistoryInfo",TabIndicatorProps:{sx:{bgcolor:"white"}},textColor:"inherit","aria-label":"tabs for the stock details",children:a(i,{label:"走勢",value:"HistoryInfo",sx:{fontSize:16}})})}),a("div",{"data-name":"tab-panel",className:"bg-gray-900 bg-gradient-to-b from-primary from-[60px] via-transparent via-[60px] pt-8 px-2",children:a(n,{dataset:"GovernmentBondsYield",data_id:t,closeKey:"value",maxKey:"value",minKey:"value",tooltipValueLabel:"殖利率"})})]})]})}export{c as TreasuryBound};