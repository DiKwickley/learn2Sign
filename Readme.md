# Learn2Sign

Being able to recognize sign language is an interesting computer vision problem while simultaneously being extremely useful for deaf people to interact with people who don’t know how to understand American Sign Language (ASL).

## What it does 🤖
We created this application to help people better communicate with the deaf so that they can express themselves, this application uses a image classifier from teachable machines, which is a Google API. It detect user's hand gestures and show the corresponding english alphabets (basically it converts ASL to english language).

## Challenges we ran into-
- Creating a model with good acccuracy in a general setting.
- Reverse engineering the Teachable Machine's Web Plugin snippet to aggregate data and then display the characters accordingly.
- Integrating the model into our website.
- Deploying the application.

## Tech Stack Used
Web:
- JavaScript
- NEXTjs
- SCSS
- Styled Components

ML:
- Tensorflow.js
- Teachable Machine

## Try it out
- <a href="https://learn2sign.vercel.app/">WebSite</a>

## The Team
Aniket Singh Rawat
Dev Sharma
Harsh Tyagi
Arjun Aditya
Avinash Updahya
