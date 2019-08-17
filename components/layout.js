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
      <script src="/static/js/ispc.js"></script>
    </Head>
    <Nav />
    <div id={'t'} className={`shadow`}>
      <article style={{width:1000,margin:"0 auto"}}>
          <Left />
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
        width:680px;
        float:right;
      }
    `}</style>
     <style global jsx>{`
        *{
          margin:0;
          padding:0; 
        }
        body {
          font: 15px "Microsoft YaHei";
          color: #555;
          background: #efefef;
          line-height: 1.5;
          margin:0;
          padding:0;
        }
        @keyframes lds-gear {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes lds-gear {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        .lds-gear > div {
          -webkit-transform-origin: 100px 100px;
          transform-origin: 100px 100px;
          -webkit-animation: lds-gear 1s infinite linear;
          animation: lds-gear 1s infinite linear;
          position: relative;
        }
        .lds-gear > div div {
          position: absolute;
          width: 26px;
          height: 192px;
          background: #ff7f21;
          left: 100px;
          top: 100px;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .lds-gear > div div:nth-child(1) {
          width: 152px;
          height: 152px;
          border-radius: 50%;
        }
        .lds-gear > div div:nth-child(3) {
          -webkit-transform: translate(-50%, -50%) rotate(30deg);
          transform: translate(-50%, -50%) rotate(30deg);
        }
        .lds-gear > div div:nth-child(4) {
          -webkit-transform: translate(-50%, -50%) rotate(60deg);
          transform: translate(-50%, -50%) rotate(60deg);
        }
        .lds-gear > div div:nth-child(5) {
          -webkit-transform: translate(-50%, -50%) rotate(90deg);
          transform: translate(-50%, -50%) rotate(90deg);
        }
        .lds-gear > div div:nth-child(6) {
          -webkit-transform: translate(-50%, -50%) rotate(120deg);
          transform: translate(-50%, -50%) rotate(120deg);
        }
        .lds-gear > div div:nth-child(7) {
          -webkit-transform: translate(-50%, -50%) rotate(150deg);
          transform: translate(-50%, -50%) rotate(150deg);
        }
        .lds-gear > div div:nth-child(8) {
          width: 80px;
          height: 80px;
          background: #fff;
          border-radius: 50%;
        }
        .lds-gear {
          width: 59px !important;
          height: 59px !important;
          -webkit-transform: translate(-29.5px, -29.5px) scale(0.295) translate(29.5px, 29.5px);
          transform: translate(-29.5px, -29.5px) scale(0.295) translate(29.5px, 29.5px);
        }
        .lds-css{
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          width: 59px;
          height: 59px;
        }
        .shadow{
          /* position:'relative'; */
          /* -webkit-filter:blur(2px);
          filter:blur(2px); */
          opacity:0;
          transition: 1s;
          -webkit-transition:1s;
        }
        .shadownone{
          /* position:'relative'; */
          /* -webkit-filter:blur(0px);
          filter:blur(0px); */
          opacity:1;
          transition: 1s;
          -webkit-transition:1s;
        }  
      `}</style>
  </div>
)