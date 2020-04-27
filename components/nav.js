import Layout from './layout'
import tps from '../utils/blog_types'
// import banner from '../images/banner'
import Event from '../utils/emiter';
var timer = null;
export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      path:"",
      headerTop:0,
      opennav:false,
      opensearch:false
  }

  async componentDidMount(){
      var p=0,t=0;  
      document.onscroll = () => {
        var p = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;      
        if(t<=p && p > 0){//下滚
          Event.emit("top",1)
          if(p > 60){
            this.setState({headerTop:-61})
          } 
          this.setState({opennav:false,searchTxt:"",opensearch:false})
        }else{//上滚  
          Event.emit("top",2) 
          this.setState({headerTop:0,opennav:false,searchTxt:"",opensearch:false})
        }  
        setTimeout(function(){t = p;},0);           
      }
      this.setState({path:location.pathname})
  }

  onSearch(event){
    if(this.state.searchTxt == ""){
      return
    }
    var e = event || window.event;
    if (e && e.keyCode == 13) { //回车键的键值为13
      location.href = `/article?name=${this.state.searchTxt}`
    }
  }

  render() {
    const {path,headerTop,opennav,opensearch,searchTxt} = this.state
    return (
      <div>
        <div style={{width:"100%",height:61,transition:"0.3s",WebkitTransition:"0.3s",backgroundColor:"rgba(255,255,255,0.9)",position:"fixed",borderBottom:"1px solid #ddd",boxShadow:"0 1px 1px rgba(0,0,0,.04)",zIndex:999,top:headerTop,left:0}}>
          <div style={{width:"100%",margin:"0 auto",height:"100%",lineHeight:"60px",fontSize:22,position:"relative"}}>
            <div style={{width:"100%",textAlign:"center",position:"absolute",left:0,top:0}}>Simple</div>
            <h2 id="mnavh" onClick={()=>{
              let open = !opennav
              this.setState({opennav:open})
            }} className={opennav ? "open":""}>
              <span className="navicon"></span>
            </h2>        
            <ul id="starlist" style={{background: "rgba(0,0,0,.5)",width: "100%",display:opennav ? "block":"none"}}>
              <li><a href="/" style={path == "/" ? {color:"#f65a8a"}:{}}>首页</a></li>
              <li><a href="/article" style={path == "/article" || path == "/detail" ? {color:"#f65a8a"}:{}}>文章</a></li> 
              <li><a href="/message" style={path == "/message" ? {color:"#f65a8a"}:{}}>留言</a></li>
              {/* <li><a href="/live" style={path == "/live" ? {color:"#f65a8a"}:{}}>直播</a></li>   */}
              <li><a href="/me" style={path == "/me" ? {color:"#f65a8a"}:{}}>关于</a></li> 
            </ul>
            <div className={opensearch ? "searchbox search_open":"searchbox"}>
              <div id="search_bar" className="search_bar" style={{width:opensearch ? "100%":0}}>
                <input className="input" placeholder="想搜点什么呢.." onKeyUp={this.onSearch.bind(this)} onChange={(e)=>{
                  this.setState({searchTxt:e.target.value})
                }} type="text" />
                <p className="search_ico" onClick={()=>{
                  let o = !opensearch
                  if(!o){
                    this.setState({searchTxt:""})
                  }
                  this.setState({opensearch:o})
                }}><span></span></p>
              </div> 
            </div>
          </div> 
        </div>
        <div style={{height:75}}></div>
        <style jsx>{`
          .search_open .search_bar .input {
              width: 300px;
          }
          .search_open .search_bar .input {
              border-bottom: #222 1px solid;
              background: #fff;
          }
          .search_bar .input {
              position: absolute;
              top: 16px;
              right: 0;
              border: none;
              outline: none;
              height: 30px;
              line-height: 30px;
              z-index: 10;
              font-size: 16px;
              color: #333;
              background: none;
          }
          .searchbox {
              position: absolute;
              right: 0;
              top: 1px;
          }
          .search_open {
              width: 300px;
              display: inline-block;
          }
          .search_bar {
              position: relative;
              width: 0%;
              min-width: 60px;
              height: 60px;
              float: right;
              overflow: hidden;
              -webkit-transition: width 0.3s;
              -moz-transition: width 0.3s;
              transition: width 0.3s;
              -webkit-backface-visibility: hidden;
          }
          .search_ico, .search_btn {
              width: 60px;
              height: 60px;
              display: block;
              position: absolute;
              right: 0;
              top: 0;
              padding: 0;
              margin: 0;
              line-height: 60px;
              cursor: pointer;
              text-align: center;
              z-index: 99;
          }
          .search_ico span {
              position: relative;
              top: 20px;
          }
          .search_ico span:before {
              top: 0;
              left: 0;
          }
          .search_ico span:before {
              content: ' ';
              position: absolute;
              width: 12px;
              height: 12px;
              border: 1px solid #666;
              border-radius: 10px;
          }
          .search_ico span:after {
              content: ' ';
              position: absolute;
              width: 12px;
              height: 4px;
              background: #666;
              border-radius: 5px 0 0 5px;
              -webkit-transform: rotate(225deg);
              -moz-transform: rotate(225deg);
              -ms-transform: rotate(225deg);
              -o-transform: rotate(225deg);
              transform: rotate(225deg);
          }
          .search_ico span:after {
              right: -22px;
              top: 14px;
          }
          .open .navicon:before {
              margin-top: 0;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
          }
          .open .navicon:before, .open .navicon:after {
              content: '';
              display: block;
              width: 30px;
              height: 5px;
              position: absolute;
              background: #000;
          }
          .open .navicon {
              background: none;
          }
          .open .navicon:after {
              margin-top: 0;
              -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
          }
          #mnavh{
            position: absolute;
            display: block;
            top: 8px;
            left: 10px;
          }
          .navicon {
            display: block;
            position: relative;
            width: 30px;
            height: 5px;
            background-color: #000;
            margin-top: 20px;
          }
          .navicon:before {
              margin-top: -10px;
          }
          .navicon:before, .navicon:after {
              content: '';
              display: block;
              width: 30px;
              height: 5px;
              position: absolute;
              background: #000;
              -webkit-transition-property: margin, -webkit-transform;
              transition-property: margin, -webkit-transform;
              transition-property: margin, transform;
              transition-property: margin, transform, -webkit-transform;
              -webkit-transition-duration: 300ms;
              transition-duration: 300ms;
          }
          .navicon:after {
              margin-top: 10px;
          }
          .navicon:before, .navicon:after {
              content: '';
              display: block;
              width: 30px;
              height: 5px;
              position: absolute;
              background: #000;
              -webkit-transition-property: margin, -webkit-transform;
              transition-property: margin, -webkit-transform;
              transition-property: margin, transform;
              transition-property: margin, transform, -webkit-transform;
              -webkit-transition-duration: 300ms;
              transition-duration: 300ms;
          }
          #starlist{
            transition: 0.3s;
            overflow: hidden;
            position: absolute;
            top: 60px;
          }
          #starlist li {
            display: block;
            width: 50%;
            clear: both;
            border-top: #eaeaea 1px solid;
            padding: 0;
            background: #FFF;
            font-size: 16px;
            text-align: center;
          }
          #starlist li a{
            text-decoration: none;
            color: #555;
          }
          #starlist li:last-child {
              padding-bottom: 100%;
          }
        `}</style>
      </div>  
    )
  }
}


