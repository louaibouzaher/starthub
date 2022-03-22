import { toast } from 'react-toastify'

export const notify = (title, isSuccess) => {
  if (isSuccess) {
    toast.success(title)
  } else {
    toast.error(title)
  }
}
