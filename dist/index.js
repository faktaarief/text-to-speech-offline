const TTS = (text, lang = 'id-ID', volume = 1, rate = 1, pitch = 1) => {

    let synthesis = window.speechSynthesis
    let utterance = new SpeechSynthesisUtterance(text)

    utterance.lang = lang
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.volume = volume
    synthesis.cancel()
    
    return synthesis.speak(utterance)

}

module.exports = TTS