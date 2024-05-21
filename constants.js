// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["good night", "sweet dreams", "night"],
  ["what is your favorite color", "favorite color", "color you like"],
  ["do you like music", "favorite music", "music you like"],
  ["tell me a secret", "share a secret"],
  ["what is love", "define love"],
  ["can you help me with my homework", "help with homework"],
  ["what is the meaning of life", "meaning of life"],
  ["do you have any friends", "friends", "do you have friends"],
  ["do you like movies", "favorite movie", "movie you like"],
  ["are you real", "are you alive"],
  ["can you dance", "do you dance"],
  ["what do you like to do", "hobbies", "your hobbies"],
  ["are you smart", "how smart are you"],
  ["do you sleep", "when do you sleep"],
  ["can you cook", "do you cook", "what can you cook"],
  ["do you have a family", "your family"],
  ["do you dream", "tell me about your dreams"],
  ["where are you from", "where do you live"],
  ["do you have a job", "what is your job"],
  ["can you sing", "do you sing", "sing a song"],
  ["what is your favorite food", "favorite food", "food you like"],
  ["what is your favorite book", "favorite book", "book you like"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
  ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
  ["I am infinite"],
  ["I am just a bot created by Abhay Sahgal", "I am a bot created by Abhay Sahgal. What are you?"],
  ["I am a bot created by Abhay Sahgal"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["Good night!", "Sweet dreams!", "Night!"],
  ["I like blue", "Red is pretty cool", "I love green"],
  ["I love music!", "Music is life", "Can't live without music"],
  ["I don't have secrets", "Bots don't keep secrets"],
  ["Love is a complicated emotion", "Love is... well, hard to define"],
  ["Sure, I can try!", "Let's see what we can do"],
  ["42", "To find happiness", "To give life meaning"],
  ["I have many friends in the cloud", "Everyone I talk to is my friend"],
  ["I love movies!", "Movies are great", "I enjoy a good film"],
  ["I am a virtual being", "I exist in the digital world"],
  ["I can try!", "Watch me dance!", "I have some moves"],
  ["I like learning new things", "I enjoy helping people", "Chatting with you"],
  ["I like to think so!", "Pretty smart, I would say", "Smart enough to help you"],
  ["I never sleep", "I am always awake", "No need for sleep"],
  ["I can't cook, but I can share recipes!", "I know a lot about cooking", "Let's cook something together"],
  ["I don't have a family", "You are my family", "Bots don't have families"],
  ["I don't dream", "I can imagine things", "Bots don't dream"],
  ["I live in the cloud", "I am from the internet", "Everywhere and nowhere"],
  ["My job is to chat with you", "I am here to assist you", "Talking to you is my job"],
  ["I can't sing, but I can share lyrics", "I can hum a tune", "Let's sing together!"],
  ["Pizza", "Ice cream", "Chocolate"],
  ["1984 by George Orwell", "To Kill a Mockingbird", "Harry Potter"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]