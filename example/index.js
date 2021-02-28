import TTS from '../dist/index.js'

const index = () => {

    const text = document.querySelector('#text') 
    const button = document.querySelector('button')

    button.onclick = () => TTS(text.value, 'en-US')

}

index()