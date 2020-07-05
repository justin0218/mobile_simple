import Layout from '../components/layout';
import * as api from '../apis/blog';

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
    blogRoomList:[]
  }

  async componentDidMount(){
    let data = await api.GetBlogRooms()
    this.setState({blogRoomList:data.blogRoomListList})
    setTimeout(()=>{
      document.getElementById("t").setAttribute("class","shadownone")
      document.getElementById("loading").style.display = "none";
    },500)
  }

  render() {
    const {blogRoomList} = this.state
    return (
      <Layout title={`聊天室`}>
        <div className="picbox">
          <ul>
            {
              blogRoomList.map((item,k)=>(
                <li key={k} className="roomitem" onClick={()=>{
                  location.href = `/chatroom?room=${item.id}`
                }}>
                  <div style={{
                    background: `url(${item.cover})`,
                    width: "100%",
                    height: 250,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                  }}></div>     
                  <div className="picinfo">
                    <h3>
                      {item.name}
                    </h3>
                    <span>房间人数：{item.olnum} 人</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <style jsx>{`
         .roomitem{
            -webkit-transform: translatey(0);
            transform: translatey(0);
            opacity: 1;
            -webkit-transition: -webkit-transform 1s ease-in-out 0s,  opacity 1s ease-in-out 0s;transition: transform 1s ease-in-out 0s, opacity 1s ease-in-out 0s;
            -webkit-perspective: 1000;
            -webkit-backface-visibility: hidden;
          }
          .roomitem img{
            width:100%;
          }
          .picbox ul li i {
              margin: 10px;
              height: auto;
              overflow: hidden;
              display: block;
          }
          .picinfo h3 {
              border-bottom: #ccc 1px solid;
              padding: 10px 0;
              margin: 0 20px;
              font-size: 16px;
          }
          .picinfo span {
              padding: 10px 20px;
              line-height: 26px;
              color: #666;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 2;
          }
          .picbox ul li {
              display: block;
              background: #FFF;
              margin: 0 0 20px 0;
              border: 1px #d9d9d9 solid;
              width:94%;
              cursor: pointer;
              transition:1s;
              -webkit-transition:1s;
              margin:auto;
              margin-bottom:20px;
          }
          .picbox ul li:hover{

          }
        `}</style>
      </Layout>
    )

   

  }
}


