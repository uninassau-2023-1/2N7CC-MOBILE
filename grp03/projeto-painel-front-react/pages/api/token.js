export default function acessToken(){
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY4NTI5NTM2OCwiZXhwIjoxNjg3ODg3MzY4fQ.hB7oC1fWOQoHm7bepxBeFJSW6J-kVdou6chucdaOlxc"
    let urlApi = "http://192.168.156.222:4000" 
    let urlSocket = "http://192.168.156.222:3001" 
    return {token: token, url: urlApi, urlSocket: urlSocket}
}