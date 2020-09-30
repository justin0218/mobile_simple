import Layout from '../components/layout'
import {getTpValue} from '../utils/blog_types'
import moment from 'moment'
import {avatars} from '../utils/config';
import * as api from "../apis/blog";

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogDtail:"",
      detailData:{
        "nextArticle":{},
        "currentArticle":{},
        "prevArticle":{}
      },
      commentsList:[],
      commentTotal:0,
      saytext:"",
      submitDisb:false,
      submitTxt:"提交"
  }

  async getComments(){
    const {id} = this.props.query
    let commentRes = await api.GetBlogComments(id)
    this.setState({commentsList:commentRes.blogCommentListList,commentTotal:commentRes.total})
  }

  async componentDidMount(){
      const {id} = this.props.query
      let res = await api.GetBlogDetail(id);
      let hres = await api.ReadNetFile(res.currentArticle.htmlTxtUrl);
      await this.getComments();
      this.setState({blogDtail:hres.txt,detailData:res})
      setTimeout(()=>{
        document.getElementById("t").setAttribute("class","shadownone")
        document.getElementById("loading").style.display = "none";
      },500)
      
  }

  async subMitComment(event){
    var e = event || window.event;
    if (e && e.keyCode == 13) { //回车键的键值为13
      const {id} = this.props.query
      let {saytext} = this.state;
      let res = await api.SubMitComment(saytext,id);
      if (res.code != 0){
        alert(res.msg);
      }else{
        await this.getComments();
      }
      this.setState({saytext:""})
    }
  }

  async makeGood(){
    let {detailData} = this.state;
    const {id} = this.props.query
    api.MakeGood(id)
    detailData.currentArticle.goodNum++
    this.setState({detailData})
  }

  render() {
    const {blogDtail,detailData,commentsList,saytext,commentTotal} = this.state
    const {currentArticle = {},nextArticle = {},prevArticle = {}} = detailData;
    return (
      <Layout title={currentArticle.name}>
          <div style={{background:"#fff",padding: "0 12px"}}>
            <h3 className="news_title">{currentArticle.name}</h3>
            <div className="bloginfo">
              <ul>
                <li className="author"></li>
                <li className="lmname">{getTpValue(currentArticle.type)}</li>
                <li className="timer">{moment(currentArticle.createTime).format("YYYY-MM-DD")}</li>
                <li className="view">{currentArticle.view} 人已阅读</li>
              </ul>
            </div>
            <div style={{clear:'both'}}></div>
            <div className="news_about">
              <strong>简介</strong> {currentArticle.preface}
            </div>
            <div dangerouslySetInnerHTML={{__html: blogDtail}} className="markdown-body editormd-preview-container" previewcontainer="true" style={{width:"auto",padding:0}}></div>
            <div className="share" style={{padding: "20px"}}>
             <button className="diggit" onClick={this.makeGood.bind(this)}>
               <a>很赞哦！</a>(<b>{currentArticle.goodNum}</b>)
             </button>
            </div>
            <div className="nextinfo">
              {
                prevArticle.id ? <p>上一篇：<a href={`/detail?id=${detailData.prevArticle.id}`}>{detailData.prevArticle.name}</a></p>:<p>上一篇：<a href={`/article`}>回到列表</a></p>
              }
              {
                nextArticle.id ? <p>下一篇：<a href={`/detail?id=${detailData.nextArticle.id}`}>{detailData.nextArticle.name}</a></p>:<p>下一篇：<a href={`/article`}>回到列表</a></p>
              } 
            </div>
            <div className="news_pl" id="news_pl">
                <h2>文章评论</h2>
                <div className="gbko">
                  {
                    commentsList.map((item,k)=>(
                      <div key={k} className="fb">
                        <ul style={{background: `url(${avatars[item.id%avatars.length]}) no-repeat top 14px left 10px`}}>
                          <span style={{color:"#000"}}>{item.name}</span>
                          <p className="fbtime"><span>{moment(item.createTime).format("YYYY-MM-DD")}</span></p>
                          <p className="fbinfo">{item.content}</p>
                        </ul>
                      </div> 
                    ))
                  }                 
                  <div id="plpost">
                    <p className="saying" style={commentsList.length == 0 ? {marginTop: 8}:{}}>
                      <span><a href="javascript:void(0)" style={{textDecoration: "none",color: "#de1513"}}>共有{commentTotal}条评论</a></span>
                      来说两句吧...
                    </p>
                    <textarea name="saytext" value={saytext} onChange={(e)=>{
                      this.setState({saytext:e.target.value})
                    }} rows="6" id="saytext" onKeyUp={this.subMitComment.bind(this)}></textarea>
                  </div>
                </div>
            </div>

          </div>
          <style jsx>{`
          input{
            -webkit-appearance: none;
          }
          .nextinfo a{
            text-decoration: none;
            color: #555;
          }
          .nextinfo a:hover{
            text-decoration: underline;
            color:#222;
          }
          .yzm {
              margin: 10px 10px 10px 0;
          }
          #plpost input[type="submit"] {
            display: block;
            background: #303030;
            color: #fff;
            border: 0;
            line-height: 30px;
            padding: 0 20px;
            border-radius: 5px;
            float: right;
            margin-bottom: 20px;
            margin-top: 13px;
            margin-right: 1%;
          }
          #saytext {
              width: 99%;
              outline: none;
              resize: none;
              border: solid 1px #ccc;
              margin-bottom: 20px;
          }
          .saying span {
                float: right;
          }
           .saying{
            line-height: 30px;
            color: #a9a6a6;
            margin-bottom: 8px;
           } 
           .news_pl h2{
            border-bottom: #000 2px solid;
            line-height: 40px;
            font-size: 14px;
            padding-left: 10px;
            color: #000;
           }
           .fbtime{
            float: right;
            color: #999;
            font-size: 12px;
            width: 66px;
            overflow: hidden;
            white-space: nowrap;
           }
           .fbtime span{
            float: right;
            color: #999;
            font-size: 12px;
            width: 67px;
            overflow: hidden;
            white-space: nowrap;
           }
           p.fbtime{
            color: #000;
           }
           p.fbinfo{
            margin: 10px 0;
            word-wrap: break-word;
           }
           .fb ul{
            margin: 10px 10px;
            padding: 10px 10px 10px 70px;
            border-bottom: #ececec 1px solid;
            background-size: 47px 47px;
           }  
           .news_pl{
            margin: 10px 0 20px 0;
            width: 100%;
            overflow: hidden;
           }
           .nextinfo{
            line-height: 24px;
            width: 100%;
            overflow: hidden;
            margin: 20px 0;
           }
           .nextinfo > p{
            padding: 4px 10px;
            border-radius: 5px;
           }
           .diggit{
            width: 160px;
            margin: auto;
            background: #E2523A;
            color: #fff;
            box-shadow: 1px 2px 6px 0px rgba(0,0,0,.2);
            border-radius: 3px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            outline: none;
            display: block;
            border: none;
           }
           .news_about {
                color: #888888;
                border: 1px solid #F3F3F3;
                padding: 10px;
                margin: 20px auto 15px auto;
                line-height: 23px;
                background: none repeat 0 0 #F6F6F6;
            }
            .bloginfo {
              width: 100%;
              overflow: hidden;
            }
            .news_title {
                font-size: 24px;
                font-weight: normal;
                padding: 20px 0;
                color: #333;
                margin:0;
            }
            .bloginfo li {
                float: left;
                margin-right: 20px;
                list-style: none;
            }
          `}</style>
      </Layout>     
    )
  }
}


