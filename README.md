# text-to-speech-offline

> A very small JavaScript library, easily triggered a text to speech conversion using Web Speech API. You can use it when offline.

## Attention
Support for Web Speech API speech synthesis is still getting there across mainstream browsers, and is currently limited to the following:

- Firefox desktop and mobile support it in Gecko 42+ (Windows)/44+, without prefixes.
- Firefox OS 2.5+ supports it, by default, and without the need for any permissions.
- Chrome for Desktop and Android have supported it since around version 33, without prefixes.

For more information, [check here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## 🔑 Features

- Set the language of the utterance.
- Set the pitch at which the utterance will be spoken at.
- Set the speed at which the utterance will be spoken at.
- Set the text that will be synthesised when the utterance is spoken.
- Set the volume that the utterance will be spoken at.

## ☁️ Installation
`npm i text-to-speech-offline`

## Basic Usage
Format to use this library:
```jsx
TTS(string, language, volume, rate, pitch)
```

## 📋 Example
Basic usage with default configuration:
- Indonesian language of the Utterance
- Volume: 1 (0.1 - 1)
- Rate: 1 (0.5 - 2)
- Pitch: 1 (0 - 2)

```jsx
import TTS from 'text-to-speech-offline'

<button onClick={() => TTS("Apa kabar?")}> Speak </button>
```
