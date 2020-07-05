import axios from 'axios';
import {apiHost} from '../utils/config';
import readStream from '../utils/util';
import protobuf from "../proto/resp_pb";
import blobComment from "../proto/blogComment_pb";
import e from "../proto/errors_pb";
export const GetBlogList = async (tp,name) => {
    let res = await axios.get(`${apiHost}/v1/client/blog/list?tp=${tp}&name=${name}`,{
        responseType: 'blob'
    })
    let data = await readStream(res.data);
    let message = protobuf.blog_list.deserializeBinary(data);
    data = message.toObject();
    return data;
}

export const GetBlogDetail = async (id) => {
    let meDetail = await axios.get(`${apiHost}/v1/client/blog/detail?id=${id}`,{
        responseType: 'blob'
    })
    let medata = await readStream(meDetail.data);
    let meMessage = protobuf.blog_detail.deserializeBinary(medata);
    return meMessage.toObject();
}

export const GetBlogTypes = async () => {
    let res = await axios.get(`${apiHost}/v1/client/blog/types`,{
        responseType: 'blob'
    })
    let data = await readStream(res.data);
    let message = protobuf.blog_types.deserializeBinary(data);
    return message.toObject();
}

export const GetBlogRanking = async (limit = 5) => {
    let rankingRes = await axios.get(`${apiHost}/v1/client/blog/ranking?limit=${limit}`,{
        responseType: 'blob'
    })
    let rankingData = await readStream(rankingRes.data);
    let rankingMessage = protobuf.blog_list.deserializeBinary(rankingData);
    return rankingMessage.toObject();
}

export const GetBlogRecommend = async () => {
    let recommendRes = await axios.get(`${apiHost}/v1/client/blog/recommend`,{
        responseType: 'blob'
    })
    let recommendData = await readStream(recommendRes.data);
    let recommendMessage = protobuf.blog_list.deserializeBinary(recommendData);
    return recommendMessage.toObject();
}

export const GetBlogComments = async (id = 0) => {
    let commentRes = await axios.get(`${apiHost}/v1/client/blog/comment/list?blog_id=${id}`,{
        responseType: 'blob'
    })
    let commentData = await readStream(commentRes.data);
    let commentMessage = protobuf.blog_comments.deserializeBinary(commentData);
    return commentMessage.toObject()
}

export const SubMitComment = async (saytext,blogId) => {
    let message = new blobComment.blog_comment();
        message.setContent(saytext);
        message.setBlogId(blogId);
    let bytes = message.serializeBinary();
    let res = await axios.post(`${apiHost}/v1/client/blog/comment/submit`,bytes,{
        responseType: 'blob',
        headers: {'Content-Type':'application/octet-stream'}
    })
    let data = await readStream(res.data);
    data = e.resp.deserializeBinary(data);
    return data.toObject()
}

export const ReadNetFile = async (url) => {
    let hres = await axios.get(`${apiHost}/v1/public/netfile/read?key=${url}`,{
        responseType: 'blob'
    })
    let hdata = await readStream(hres.data);
    let hmessage = protobuf.file_content.deserializeBinary(hdata);
    return hmessage.toObject();
}

export const MakeGood = async (blogId) => {
    return await axios.post(`${apiHost}/v1/client/blog/good/make?blog_id=${blogId}`)
}

export const GetBlogRooms = async (id = 0) => {
    let res = await axios.get(`${apiHost}/v1/client/blog/room/list`,{
        responseType: 'blob'
    })
    let data = await readStream(res.data);
    return protobuf.blog_rooms.deserializeBinary(data).toObject();
}






