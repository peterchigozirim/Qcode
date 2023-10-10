import server from '@/axios'

const api = 'api/'

export const conactUs = (form)=>server.post(api+ 'qrcode-contact', form)