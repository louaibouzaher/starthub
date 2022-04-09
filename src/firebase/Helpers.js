import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import store from '../store'
import { showNotification } from '../store/Notifications/notifications.actions'
import { storage } from './index'

export const Uploader = (file, isVideo) => {
  const storageRef = ref(
    storage,
    (isVideo ? 'videos/' : 'images/') + new Date().toUTCString() + file.name
  )
  const path = uploadBytes(storageRef, file).then((snapshot) => snapshot)
  store.dispatch(showNotification('Picture Uploaded Successfuly', true))
  return path
}

export const Downloader = (fileRef) => {
  const url = getDownloadURL(ref(storage, fileRef.metadata.fullPath))
    .then((url) => {
      return url
    })
    .catch((error) => {
      console.log(error)
    })
  return url
}
