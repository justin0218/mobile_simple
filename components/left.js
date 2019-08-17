import Layout from '../components/layout'
import axios from 'axios'
import readStream from '../utils/util'
import protobuf from "../proto/blog_pb";
import {apiHost} from '../utils/config';
import Event from '../utils/emiter';

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
    path:"",
    orderIndex:[],
    tps:[],
    rankingList:[],
    name:"",
    recommends:[],
    leftStyle:{}
  }

  registerKeyUp(){
    document.getElementById("keyboard").onkeyup = (event) => {
      var e = event || window.event;
      if (e && e.keyCode == 13) { //回车键的键值为13
        location.href = `/article?name=${this.state.name}`
      }
    };
  }

  async componentDidMount(){
    console.log("start")
    let res = await axios.get(`${apiHost}/v1/blog/types`,{
      responseType: 'blob'
    })
    let data = await readStream(res.data);
    let message = protobuf.tps.deserializeBinary(data);
    data = message.toObject();
    let rankingRes = await axios.get(`${apiHost}/v1/blog/ranking?limit=5`,{
      responseType: 'blob'
    })
    let rankingData = await readStream(rankingRes.data);
    let rankingMessage = protobuf.blogListRes.deserializeBinary(rankingData);
    rankingData = rankingMessage.toObject();

    let recommendRes = await axios.get(`${apiHost}/v1/blog/recommend`,{
      responseType: 'blob'
    })
    let recommendData = await readStream(recommendRes.data);
    let recommendMessage = protobuf.blogListRes.deserializeBinary(recommendData);
    recommendData = recommendMessage.toObject();
    this.setState({tps:data.listList,rankingList:rankingData.listList,recommends:recommendData.listList});
    if(location.pathname == "/article" || location.pathname == "/detail"){
      this.setState({orderIndex:[2,3,7,4,8,6]},this.registerKeyUp);
    }else{
      this.setState({orderIndex:[0,2,3,4,5,6]},this.registerKeyUp);
    }
    Event.on("left-fix",()=>{
      let rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
      let leftHeight = document.getElementById("left_box").clientHeight;
      if(leftHeight < rightHeight){
        // var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        this.setState({leftStyle:{
          position:"fixed",
          top:20
        }})
      }
    })
    Event.on("left-static",(h)=>{
      let rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
      let leftHeight = document.getElementById("left_box").clientHeight;
      if(leftHeight < rightHeight){
        this.setState({leftStyle:{
          position:"static",
          marginTop:h
        }})
      }
    })
    console.log("end")
    this.setState({loadings:{"me":false}})
    setTimeout(()=>{
      document.getElementById("t").setAttribute("class","shadownone")
      document.getElementById("loading").style.display = "none";
    },500)

  }

  render() {
    const {path,orderIndex,tps,name,rankingList,recommends,leftStyle} = this.state
    return (
        <div className="left_box" id="left_box" style={leftStyle}>
          {
            orderIndex.map(item => {
              switch(item){
                case 0:
                  // 关于
                  return  <div key={item} className="left_item">
                    <h2>关于</h2>
                    <div style={{padding: 12}}>
                      <i className="about_me_i">
                        <img src="/static/images/me.jpeg" style={{width:120,height:120}} />
                      </i>
                      <p style={{lineHeight: "22px","fontSize": 14,marginTop: -6}}>
                        <b>胡星</b>，93年出生，web前端工程师 && 服务端工程师，没什么特殊爱好，放假也是宅在家里，无聊的时候写写代码，研究研究技术方面的东西，对这种东西算一种热爱吧，但是我认为对于我来说，
                                  只是选择了这一条路，选择了就要热爱，干上一行就得爱上一行，如果当初的选择不是互联网，我也会很热爱。
                      </p>
                    </div>
                  </div> 
                case 1:
                  return <div key={item} className="left_item">
                  <h2>相册</h2>
                  <ul style={{padding: 10,overflow: "hidden",listStyle:"none",margin:0}}>
                   <li><img src="/static/images/b02.jpg" /></li>
                   <li><img src="/static/images/b02.jpg" /></li>
                   <li><img src="/static/images/b02.jpg" /></li>
                   <li><img src="/static/images/b02.jpg" /></li>
                   <li><img src="/static/images/b02.jpg" /></li>
                   <li><img src="/static/images/b02.jpg" /></li>        
                  </ul>
                </div>
                case 2:
                  return <div key={item} className="search" style={{marginBottom: 20}}>
                    <input className="keyboard" id="keyboard" onChange={(e)=>{
                      this.setState({name:e.target.value});
                    }} className="input_text" placeholder="请输入关键字词" style={{color: "#000"}}  type="text" />
                    <button className="input_submit" onClick={()=>{
                      location.href = `/article?name=${name}`
                    }}>搜索</button>
                </div>
                case 3:
                  return <div key={item} className="left_item">
                    <h2>分类</h2>
                    <div style={{padding:10}}>
                    {
                      tps.map((item,k)=>(
                        <div key={k} onClick={()=>{
                          location.href = `/article?tp=${item.id}`
                        }} className="cation_item">{item.lable}（{item.blogNum}）</div>
                      ))
                    }  
                    </div>
                  </div>
                case 4:
                  return <div key={item} className="left_item">
                    <h2>点击排行</h2>
                    <div style={{padding:10}}>
                      {
                        rankingList.map((item,k)=>(
                          <div className="cation_item" onClick={()=>{
                            location.href = `/detail?id=${item.id}`
                          }} key={k} style={{backgroundImage:"url(/static/images/li.png)",backgroundRepeat: "no-repeat",backgroundPositionY: 9,textIndent: 13}}>
                            <span style={{textOverflow: "ellipsis",whiteSpace: "nowrap",overflow: "hidden",width: 265,display: "block"}}>{item.name}</span>
                          </div>
                        ))
                      } 
                    </div>
                  </div>
                case 5:
                  return <div key={item} className="left_item">
                    <h2>友情链接</h2>
                    <div style={{padding:10}}>
                    <div className="cation_item">百度</div>
                    </div>
                  </div>
                case 6:
                  return <div key={item} className="left_item">
                    <h2>关注我</h2>
                    <div style={{padding:10}}>
                      <img style={{width: "86%",background: "#fff",padding: 19}} src="/static/images/erweima.jpg" />
                    </div>
                  </div>
                case 7:
                  return <div key={item} className="left_item">
                    <h2>站长推荐</h2>
                    <div style={{padding:10}}>
                      {
                        recommends.map((item,k)=>(
                          <div className="cation_item" key={k} onClick={()=>{
                            location.href = `/detail?id=${item.id}`
                          }} style={{backgroundImage:"url(/static/images/li.png)",backgroundRepeat: "no-repeat",backgroundPositionY: 9,textIndent: 13}}>
                            <span style={{textOverflow: "ellipsis",whiteSpace: "nowrap",overflow: "hidden",width: 265,display: "block"}}>{item.name}</span>
                          </div>
                        ))
                      }  
                    </div>
                  </div> 
                case 8:
                  return <div key={item} className="left_item">
                    <h2>标签云</h2>
                    <div style={{padding:10}}>
                      <a href={`/article?name=golang`} className="tag" style={{background:"#036564"}}>golang</a>
                      <a href={`/article?name=docker`} className="tag" style={{background:"#3299BB"}}>docker</a>
                      <div style={{clear:"both"}}></div>
                    </div>
                  </div>   
              }
            })
          }  
      
        <style jsx>{`
        .tag{
          line-height: 24px;
          height: 24px;
          display: block;
          background: #999;
          float: left;
          padding: 3px 11px;
          margin: 10px 10px 0 0;
          border-radius: 8px;
          -moz-transition: all 0.5s;
          -webkit-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          color: #FFF;
          text-decoration: none;
        }
        .left_item .cation_item{
          margin-bottom: 10px;
          margin-left: 10px;
          cursor: pointer;
        }
        .left_item .cation_item:hover{
          color:#222;
        }
        .search{
          border: 1px solid #000;
          background: #000;
          border-radius: 0 5px 5px 0;
          position: relative;
        }
        .search .input_submit {
              border: 0;
              background: 0;
              color: #fff;
              outline: none;
              position: absolute;
              top: 10px;
              right: 8%;
              cursor: pointer;
          }
          .search input.input_text {
              border: 0;
              line-height: 36px;
              height: 36px;
              width: 72%;
              padding-left: 10px;
              outline: none;
          }
          .right_item p {
            margin: 20px 0 0 0;
            line-height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
          }
          .right_item h3{
            font-size: 16px;
            line-height: 25px;
            text-shadow: #FFF 1px 1px 1px;
            color: #de4949;
            margin:0;
          }
          .right_item i{
            width: 150px;
            display: block;
            max-height: 100px;
            overflow: hidden;
            float: right;
            margin-left: 20px;
          }
          .right_item{
            background: rgba(255,255,255,0.8);
            padding: 15px;
            overflow: hidden;
            color: #797b7c;
            margin-bottom: 20px;
          }
          .left_box{
            width:300px;
            float:left;
          }
          .left_item{
            background: rgba(255,255,255,0.5);
            margin-bottom: 20px;
            overflow: hidden;
          }
          .left_item ul li{
            width: 32%;
            overflow: hidden;
            float: left;
            height: 80px;
            margin-bottom: 2px;
            margin-right: 2px;
          }
          .left_item ul li img{
            width: 100%;
            height: 100%;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
            display:block;
          }
          .left_item h2{
            color: #333;
            font-size: 14px;
            line-height: 30px;
            padding-left: 20px;
            background: #fff;
            margin:0
          }
          .right_box{
            width:680px;
            float:right;
          }
          .about_me_i{
            width: 120px;
            float: left;
            clear: left;
            margin-right: 10px;
            overflow: hidden;
          }
        `}</style>
      </div>  
    )
  }
}


