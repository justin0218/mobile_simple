import Layout from '../components/layout';
import * as api from "../apis/blog";
export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogList:[],
      leftHeight:0
  }

  async loadList(tp,name){
    let data = await api.GetBlogList(tp,name)
    this.setState({blogList:data.blogArticleListList})
  }

  async componentDidMount(){
    const {tp=-1,name=""} = this.props.query;
    await this.loadList(tp,name);
    setTimeout(()=>{
      document.getElementById("t").setAttribute("class","shadownone")
      document.getElementById("loading").style.display = "none";
    },500)
  }

  render() {
    let {blogList} = this.state;
    return (
      <Layout title={`文章`}>
        {
          blogList.map((item,k)=>(
            <div className="right_item" key={k} onClick={()=>{
              location.href = `/detail?id=${item.id}`
            }}>
              <img className="coverimg" src={item.cover} />
              <h3>{item.recommended == 1 && "[ 顶 ]"} <span style={{color:"#222"}} className="blogname">{item.name}</span></h3>
              <p>{item.preface}</p>
            </div>
          ))
        }
        <style jsx>{`
          .blogname:hover{
            text-decoration: underline;
            cursor: pointer;
            color: #555;
          }
          .coverimg{
            width: 100%;
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            transition: all 0.5s;
            cursor: pointer;
            margin-bottom: 20px;
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
            cursor: pointer;
          }
        `}</style>
      </Layout>      
    )
  }
}


