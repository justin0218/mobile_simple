import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import {Button,Input} from 'antd'
import Left from '../components/left'
import Nav from '../components/nav'
import Loading from '../common/loading'
export default ({ children, title = 'simple' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />      
      <link rel="stylesheet" href="/static/css/editormd.min.css" />
      <link rel="stylesheet" href="/static/css/global.css" />
      <script src="/static/js/ispc.js"></script>
    </Head>
    <Nav />
    <div id={'t'} className={`shadow`}>
      <article style={{width:"100%"}}>
          {/* <Left /> */}
          <div className="right_box" id="rbox">
            { children }
          </div>
          <div style={{clear:"both"}}></div>
      </article>
      <footer>
        <p>Make by 极简主义者</p>
      </footer>
      <a href="#" className="cd-top cd-is-visible cd-fade-out">Top</a>
    </div>
    {/* loading */}
    <div className="lds-css" id="loading">
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
      <p style={{fontSize:12,textAlign:"center",color:"#ff7f21"}}>Simple</p>
    </div>
    <style jsx>{`
      .cd-top.cd-is-visible {
          visibility: visible;
          opacity: 1;
      }
      .cd-top {
          display: inline-block;
          height: 40px;
          width: 40px;
          position: fixed;
          bottom: 40px;
          right: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          text-indent: 100%;
          white-space: nowrap;
          background: rgba(0, 0, 0, 0.8) url(/static/images/top.png) no-repeat center;
          visibility: hidden;
          opacity: 0;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          transition: all 0.3s;
      }
      footer{
        width: 100%;
        color: #a5a4a4;
        text-align: center;
        padding-bottom: 20px;
        clear: both;
        text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
      }
      #starlist li {
          float: left;
          display: block;
          padding: 0 0 0 40px;
          font-size: 16px;
      }
      #starlist li a{
        text-decoration: none;
        color: #555;
      }
      .right_box{
        
      }
    `}</style>
  </div>
)