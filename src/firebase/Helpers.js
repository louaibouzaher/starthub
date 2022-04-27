import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import store from '../store'
import { showNotification } from '../store/Notifications/notifications.actions'
import { storage } from './index'

export const Uploader = async (file, isVideo) => {
  store.dispatch(
    showNotification(isVideo ? 'Uploading Video...' : 'Uploading Picture...', true)
  )
  const storageRef = await ref(
    storage,
    (isVideo ? 'videos/' : 'images/') + new Date().toUTCString() + file.name
  )
  const path = await uploadBytes(storageRef, file).then((snapshot) => snapshot)
  store.dispatch(
    showNotification(
      isVideo ? 'Video Uploaded Successfuly' : 'Picture Uploaded Successfuly',
      true
    )
  )
  return path
}

export const Downloader = (fileRef) => {
  const url = getDownloadURL(ref(storage, fileRef.metadata.fullPath))
    .then((url) => {
      return url
    })
    .catch((error) => {})
  return url
}
