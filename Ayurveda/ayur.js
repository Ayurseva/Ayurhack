const btn=document.querySelector('.btn');
const know=document.querySelector('.know');
const btn2=document.querySelector('.btn2');
btn.addEventListener('click',()=>{
    know.classList.add('active');
    btn.classList.add('active');
    btn2.classList.add('active');
})
btn2.addEventListener('click',()=>{
    know.classList.remove('active');
    btn.classList.remove('active');
    btn2.classList.remove('active');
})

const ch=document.querySelector('.ch');
const chat=document.querySelector('.chat');
ch.addEventListener('click',()=>{
    chat.classList.toggle('active');
})
const chatbox = document.getElementById('chatbox');

let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const slides = slider.children.length;
    const slideWidth = slider.children[0].offsetWidth;

    // Update current index based on the direction
    currentIndex += direction;

    // Prevent out-of-bound indices
    if (currentIndex < 0) {
        currentIndex = slides - 1; // Go to the last slide if clicking left at the first slide
    } else if (currentIndex >= slides) {
        currentIndex = 0; // Go to the first slide if clicking right at the last slide
    }

    // Move the slider
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
// Predefined responses for various diseases
const ayurvedicResponses = {
    "cold": "For cold, try taking tulsi tea, ginger, and honey. Also, inhaling steam with eucalyptus oil is beneficial.",
    "fever": "For fever, consume giloy juice and drink warm water. Neem and turmeric also help reduce fever.",
    "headache": "For headaches, try massaging your scalp with Brahmi oil and drink tea made with ginger and mint.",
    "stomach pain": "For stomach pain, try ajwain (carom seeds) with warm water or consume fennel tea.",
    "constipation": "For constipation, drink warm water in the morning and eat soaked raisins. Triphala powder is very effective as well.",
    "diabetes": "For diabetes, taking methi (fenugreek) seeds soaked overnight, amla (Indian gooseberry), and turmeric is beneficial. Bitter gourd (karela) juice is also effective in regulating blood sugar levels.",
    "sugar": "To control blood sugar, drink a mixture of neem, jamun, and bitter gourd juice. Regular use of cinnamon and fenugreek seeds can also help regulate sugar levels.",
    "cancer": "Ayurveda suggests a holistic approach for cancer with herbs like Ashwagandha, Turmeric, and Guduchi (Giloy). Maintaining a balanced diet rich in antioxidants, and managing stress through meditation and yoga are also key components.",
    "hello" : "Namaste! How can I assist you with ayurveda or health today?",
    "hi" : "Namaste! How can I assist you with ayurveda or health today?",
};

// Function to handle user input
function getUserInput() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    if (userInput) {
        displayMessage(userInput, 'user');
        getBotResponse(userInput);
        document.getElementById('userInput').value = ''; // Clear input field
    }
}

// Function to display messages in chatbox
function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

// Function to generate bot response based on user input
function getBotResponse(userInput) {
    let botResponse = "Sorry, I don't have information on that. Try asking about cold, fever, headache, stomach pain, or constipation.";

    for (let disease in ayurvedicResponses) {
        if (userInput.includes(disease)) {
            botResponse = ayurvedicResponses[disease];
            break;
        }
    }

    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 1000); // Delay for bot response to feel natural
}

function startTour() {
    introJs().setOptions({
        steps: [
            {
                element: document.querySelector('#treat'),
                intro: "Click to get Doctoral contacts and Hospital infomation."
            },
            {
                element: document.querySelector('#herbs'),
                intro: "This page shows the herbs in Ayurveda."
            },
            {
                element: document.querySelector('#Tau'),
                intro: "Tutorials for Ayurveda."
            },
            {
                element: document.querySelector('#get'),
                intro:"Get in Touch with ous."
            },
        ],
        showStepNumbers: true,
        exitOnOverlayClick: false,
        scrollToElement: true
    }).start();
}
