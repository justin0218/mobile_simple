import protobuf from "../proto/blog_pb";
export default function readStream(stream){
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();
        reader.readAsArrayBuffer(stream);
        reader.onload = async (evt) => {
            if(evt.target.readyState == FileReader.DONE){
                let data = new Uint8Array(evt.target.result);
                resolve(data);
            }
        }
    })
}