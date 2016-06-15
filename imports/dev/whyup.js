import {whyDidYouUpdate} from 'why-did-you-update'

export default function WHYUP(){
  if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React)
  }
}
