import axios from 'axios'
import { useEffect } from 'react'
import { serverUrl } from '../App'
import { useSelector } from 'react-redux'

function useUpdateLocation() {

const {userData}=useSelector(state=>state.user)

useEffect(()=>{

if(!userData) return

const updateLocation = async (lat,lon) => {
    try{
        const result = await axios.post(
            `${serverUrl}/api/user/update-location`,
            {lat,lon},
            {withCredentials:true}
        )
        console.log(result.data)
    }
    catch(err){
        console.log(err)
    }
}

navigator.geolocation.watchPosition((pos)=>{
    updateLocation(pos.coords.latitude,pos.coords.longitude)
})

},[userData])

}

export default useUpdateLocation