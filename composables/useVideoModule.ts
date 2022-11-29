
import { computed, ref } from "vue"

import { collection, getDocs,addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import  type { YoutubeAPIResponse } from '../interfaces/YoutubeApiResponse';
const firebaseConfig = {
    apiKey: "AIzaSyC1T37d59hUIhAhbrhyztUOSQhz-okGnNc",
    authDomain: "ong-andes-sur.firebaseapp.com",
    projectId: "ong-andes-sur",
    storageBucket: "ong-andes-sur.appspot.com",
    messagingSenderId: "319024319197",
    appId: "1:319024319197:web:3c393892bb23d9d056e934",
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const apiKey = 'AIzaSyALNVNitPMtKSX-GeQQmoYWism8yQ2vqUM'
const videoList = ref<YoutubeAPIResponse[]>([])
const activeVideo = ref({})
const deleteModal = ref(false)
const watchModal = ref(false)
const searchTerm = ref<string>('')
const getVideoList = async () => {
    const querySnapshot = await getDocs(collection(db, "videos"));
    querySnapshot.forEach((doc) => {
    videoList.value.push(doc.data());
    });
    return videoList.value
}
const saveVideoId = async (video: YoutubeAPIResponse) => {
    const responseGuardaro = await addDoc(collection(db, "videos"), video);
}

const getVideoDetails = async (id:string) => { 
    id ='https://youtu.be/lUti-7beuLQ'
    const dataApi = await  fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}O&key=${apiKey}&part=snippet`)
 }
 const checkUrl = (term:string)=>{
    if(term == ''){return}
    if(!term.includes('.com')){
      return  term.split('/').at(-1)
    }
    return term.split('/').at(-1)!.slice(8)
  }
  
const searchVideoDetail= async (id:string) => { 
    var result = checkUrl(id)
    var channelInfo  = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${result}&type=video&key=${apiKey}&maxResults=20`)
    var response :YoutubeAPIResponse= await channelInfo.json();
    await saveVideoId(response)
    videoList.value.push(response)
    //await getVideoList()
 }
const setActiveVideo=(obj :{})=>{
    activeVideo.value= obj
}

const useVideoModule = () => {

    return {
        videoList,
        getVideoList,
        saveVideoId,
        getVideoDetails,
        searchVideoDetail,
        setActiveVideo,
        deleteModal,
        watchModal,
        searchTerm,
        active: computed(() => activeVideo.value),
    }
}
export default useVideoModule