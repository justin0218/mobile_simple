import Layout from '../components/layout'
import tps from '../utils/blog_types'
import {apiHost} from '../utils/config'
import axios from 'axios'
import readStream from '../utils/util'
import protobuf from "../proto/blog_pb";
import Event from '../utils/emiter';
export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogList:[],
      leftHeight:0
  }

  async loadList(tp){
    let res = await axios.get(`${apiHost}/v1/blog/list?tp=${tp}`,{
      responseType: 'blob'
    })
    let data = await readStream(res.data);
    let message = protobuf.blogListRes.deserializeBinary(data);
    data = message.toObject();
    console.log(data)
    this.setState({blogList:data.listList})
  }

  async componentDidMount(){
    await this.loadList(-1)
    setTimeout(()=>{
      document.getElementById("t").setAttribute("class","shadownone")
      document.getElementById("loading").style.display = "none";
    },500)
  }

  render() {
    let {blogList,leftHeight} = this.state;
    return (
      <Layout title={`首页`}>
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


