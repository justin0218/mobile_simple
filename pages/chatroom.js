import Layout from '../components/layout';
import * as api from '../apis/blog';
import pb from "../proto/ws_pb";
import resp from "../proto/resp_pb";
import readStream from '../utils/util';
import moment from 'moment';
import {apiHost} from '../utils/config';

export default class extends React.Component {
  static async getInitialProps({ req,query,jsonPageRes }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent,query,jsonPageRes }
  }

  state = {
    socket:null,
    saytext:"",
    msgList:[]
  }

  async componentDidMount(){
    const {room} = this.props.query;
    let {socket} = this.state;
    socket = new ReconnectingWebSocket(`ws://${apiHost}/v1/ws/chatroom?room=${room}`);
    socket.debug = false;
    socket.timeoutInterval = 5400;
    socket.onopen = function(){
      //socket.send("发送数据");
    };
        
    socket.onmessage = async (evt) =>
    { 
      let {msgList} = this.state;
      var received_msg = evt.data;
      let receivedMsg = await readStream(received_msg);
      let receivedMsgB = pb.ws_msg_base.deserializeBinary(receivedMsg);
      switch(receivedMsgB.getEvent()){
        case pb.events.CHAT_CONTENT:
          {
            let msg = pb.chat_content.deserializeBinary(receivedMsgB.getData());
            let msgObj = msg.toObject();
            msgList.unshift(msgObj);
            this.setState({msgList});
            //setTimeout(() => {
            document.documentElement.scrollTop = 0
           // }, 1500);
            break
          }
        case pb.events.CHAT_RECORDS:
          {
            let msg = resp.blog_chat_records.deserializeBinary(receivedMsgB.getData());
            let msgObj = msg.toObject();
            let tempMsgList = [];
            for (let i=0;i<msgObj.blogChatRecordListList.length;i++){
              let item = msgObj.blogChatRecordListList[i];
              tempMsgList.push({"timeString":moment(item.createTime).format("YYYY-MM-DD HH:mm:ss"),"msg":item.content});
            }
            this.setState({msgList: tempMsgList});
            setTimeout(()=>{
              document.getElementById("t").setAttribute("class","shadownone")
              document.getElementById("loading").style.display = "none";
            },500)
            break
          }
      }
    };
        
    socket.onclose = function()
    { 
      console.log("链接已关闭")
    };
    this.setState({socket});
  }

  async subMitComment(event){
    let {socket} = this.state;
    var e = event || window.event;
    if (e && e.keyCode == 13) { //回车键的键值为13
      let {saytext} = this.state;
      let baseMsg = new pb.ws_msg_base();
      let msg = new pb.chat_content();
      msg.setMsg(saytext);
      baseMsg.setData(msg.serializeBinary());
      socket.send(baseMsg.serializeBinary());
      this.setState({saytext:""},()=>{
        setTimeout(() => {
          document.documentElement.scrollTop = 0
        }, 300);
      })
    }
  }

  render() {
    let {saytext,msgList} = this.state;
    return (
      <Layout title={`聊天室`}>
        <div>
          <input className="chatcontent" placeholder="聊点什么吧..." value={saytext} onChange={(e)=>{
            this.setState({"saytext":e.target.value})
          }} onKeyUp={this.subMitComment.bind(this)} />
          <ul style={{listStyle:"none"}} className="chatlist">
            {
              msgList.map((item,k)=>(
                <li key={k}>
                  <span>{item.timeString}</span>
                  <div style={{height:12}}></div>
                  <div className="chatbox">{item.msg}</div>
                </li>
              ))
            }
          </ul>
        </div>
        <style jsx>{`
          .chatbox{
            color: #333;
            border-radius: 5px;
          }
          .chatlist{
            width: 94%;
            margin: auto;
          }
          .chatlist li {
            background: #fff;
            box-shadow: 3px 4px 4px #ccc;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 20px;
          }
          .chatlist li span{
            font-size: 14px;
          }
          .chatcontent{
            width: 90%;
            color: #333;
            font-size: 18px;
            padding: 10px 0px;
            border: none;
            background: none;
            margin: auto;
            display: block;
          }
          .chatcontent:hover{
            outline: none;
          }
          .chatcontent:focus{
            outline: none;
          }

        `}</style>
      </Layout>
    )

   

  }
}


