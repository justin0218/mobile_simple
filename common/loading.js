import React from 'react';
const Loading = (props) => {
   return (<div className="lds-css">
   <div className="lds-gear" style={{width:"100%","height":"100%"}}>
       <div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
       </div>
   </div>
   <div style={{height:12}}></div>
   <p style={{fontSize:12,textAlign:"center",color:"#ff7f21"}}>极简主义</p>
</div>)
}
export default Loading


