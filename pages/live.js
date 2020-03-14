import Layout from '../components/layout'
import {getTpValue} from '../utils/blog_types'
import moment from 'moment'
import {apiHost} from '../utils/config';
import protobuf from "../proto/blog_pb";
import axios from 'axios'
import readStream from '../utils/util'

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
      blogDtail:""
  }

  async componentDidMount(){
    const player2 = new FlvJsPlayer({
      id: 'vs2',
      url: 'http://140.143.188.219:7001/live/movie.flv',
      fluid: true,
      playsinline: true,
      autoplay: true,
      videoInit: true,
      controls: false
    })
    setTimeout(()=>{
      document.getElementById("t").setAttribute("class","shadownone")
      document.getElementById("loading").style.display = "none";
    },500)
  }

  render() {
    const {blogDtail,detailData,commentsList,loadings,saytext,commentTotal} = this.state
    return (
      <Layout title={`直播`}>
          <div style={{background:"#fff",padding: "0 12px",marginBottom: 20}}>
            <div id="vs2"></div>
          </div>
      </Layout>     
    )
  }
}


