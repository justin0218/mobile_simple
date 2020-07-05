import React from 'react';
const Loading = (props) => {
   return ( <div className="container" id="loadingbg">
   <div className="loader">
     <div className="row">
       <h3 className="title">Loading...</h3>
       <div className="rect"></div>
     </div>  
     <div className="row">
       <div className="circle"></div>
       <div className="circle one"></div>
       <div className="circle two"></div>
       <div className="circle-five"></div>
       <div className="circle three"></div>
       <div className="circle-four"></div>
       </div>
   </div>
</div>)
}
export default Loading


