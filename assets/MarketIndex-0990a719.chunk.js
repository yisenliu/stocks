import{r as g,a as N,j,b as _,F as v}from"./vendor-262f8ba3.chunk.js";import{s as B,g as R,D as X}from"./muiDataGrid-0f2b16ca.chunk.js";import{g as G,a as O,S as T,u as C,L as U,E as z,c as A,f as J,i as W}from"./404-374073c5.js";import{h as M}from"./moment-e953ecbf.chunk.js";let w=new Map;const S=[{market:"tw",stock_ids:["TAIEX"]},{market:"us",stock_ids:["^DJI","^GSPC","^IXIC","^SOX"]}],P=S.reduce((s,r)=>{const{market:t}=r;return{...s,[t]:G(t)}},{}),q=S.reduce((s,r)=>{const{market:t}=r;return{...s,[t]:O(t)}},{});function Z(){const[s,r]=g.useState(null),{token:t}=g.useContext(T),y=N(),f=C(P.tw,t,"stocks_info_tw"),d=C(P.us,t,"stocks_info_us");let x=[],n=null,c="idle",Y=s!==null?s.length:0;function E(l){y(`/stock_market/${l.row.market}/${l.id}`)}return(f.error||d.error)&&(n=f.error||d.error),!n&&(f.stage==="fetching"||d.stage==="fetching")&&(c="fetching"),f.stage==="fetched"&&d.stage==="fetched"&&(n=null,c="fetched"),g.useEffect(()=>{function l(e,o){const i=`stock_price_${e}_${o}`;if(w.has(i))return w.get(i);const D={dataset:q[e],data_id:o,start_date:M().subtract(7,"days").format("YYYY-MM-DD"),end_date:M().format("YYYY-MM-DD")},b=A(t?{...D,token:t}:D);return J({url:"https://corsproxy.io/?"+encodeURIComponent("https://api.finmindtrade.com/api/v4/data"+b),headers:{"content-type":"application/x-www-form-urlencoded"}}).then(u=>u.data.data).then(async u=>{const I=`stocks_info_${e}`,{db:$}=await W(I),p=await $.getFromIndex(I,"stock_id",o),F=(p==null?void 0:p.stock_name)||"-",h=u[u.length-1];let a={market:e,id:o,spread:"-",close:"-",open:"-",name:F};if(h){if(e==="tw"){const{spread:m,close:k,open:L}=h;a={...a,spread:m,close:k,open:L}}if(e==="us"){const{Close:m,Open:k}=h;a={...a,spread:m-k,close:m,open:k}}}return w.set(i,a),a})}c==="fetched"&&(S.forEach(({market:e,stock_ids:o})=>{o.forEach(i=>x.push(l(e,i)))}),Promise.all(x).then(e=>{r(e)}))},[c]),j(v,{children:[c==="fetching"&&_(U,{}),n&&_(z,{children:n.message}),Y>0&&_(X,{className:"-m-4",columns:B,disableColumnMenu:!0,disableColumnResize:!0,hideFooter:!0,onRowClick:E,rows:s,sx:R})]})}export{Z as MarketIndex};
