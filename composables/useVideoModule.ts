
import { computed, ref } from "vue"

import { collection, getDocs, deleteDoc, setDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import type { YoutubeAPIResponse } from '../interfaces/YoutubeApiResponse';
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
const loading = ref(false)
const searchTerm = ref<string>('')
const getVideoList = async () => {
    loading.value = true
    const querySnapshot = await getDocs(collection(db, "videos"));
    querySnapshot.forEach((doc) => {
        videoList.value.push(doc.data());
    });
    loading.value = false
    return videoList.value
}
const saveVideoId = async (video: YoutubeAPIResponse) => {
    loading.value = true
    const response = await setDoc(doc(db, "videos", video.etag), video);
    loading.value = false
}
const deleteVideoByEtag = (obj:YoutubeAPIResponse |{}) => {
    loading.value = true
    const docRef = doc(db, "videos", obj.etag);
    deleteDoc(docRef)
        .then(() => {
            let index = videoList.value.indexOf(obj)
            if (index > -1) { 
                videoList.value.splice(index, 1); 
              }
              
            console.log("Entire Document has been deleted successfully.")
            loading.value = false
            deleteModal.value= false
        })
        .catch(error => {
            console.log(error);
        })
}

const getVideoDetails = async (id: string) => {
    id = 'https://youtu.be/lUti-7beuLQ'
    const dataApi = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}O&key=${apiKey}&part=snippet`)
}
const checkUrl = (term: string) => {
    if (term == '') { return }
    if (!term.includes('.com')) {
        return term.split('/').at(-1)
    }
    return term.split('/').at(-1)!.slice(8)
}

const searchVideoDetail = async (id: string) => {
    if(!id)return
    var result = checkUrl(id)
    var channelInfo = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${result}&type=video&key=${apiKey}&maxResults=20`)
    var response: YoutubeAPIResponse = await channelInfo.json();
    await saveVideoId(response)
    videoList.value.unshift(response)
}
const setActiveVideo = (obj: {}) => {
    activeVideo.value = obj
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
        deleteVideoByEtag,
        loading,
        active: computed(() => activeVideo.value),
        list: computed(() => videoList),
    }
}
export default useVideoModule