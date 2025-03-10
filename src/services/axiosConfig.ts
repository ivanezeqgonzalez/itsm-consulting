import _axios from 'axios'

export const axios = _axios.create({
  headers:{
    'X-ITSM': 'consulting'
  }
})
