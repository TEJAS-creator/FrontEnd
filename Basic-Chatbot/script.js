const inputBox = document.getElementById("user-input");
const sendButton = document.querySelector(".send-button");
const chatContainer = document.getElementById("chat-messages");

const GEMINI_API_KEY = "AIzaSyDLYopcUilEKuBm9kJykxXrEkwoteozfEA"; // replace this with your actual API key

// send when clicked
sendButton.addEventListener("click",()=>{
const userText = inputBox.value.trim();
    if(userText !== ""){
        displayMessage(userText, "user");
        inputBox.value = "";
        getGeminiResponse(userText);
    }
});

// Show message in chat
function displayMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageDiv.innerText = message;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}





// Gemini API function (not self made)
async function getGeminiResponse(prompt) {
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

    const requestData = {
        contents: [
            {
                parts: [{ text: prompt }]
            }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const data = await response.json();

        if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            const botReply = data.candidates[0].content.parts[0].text;
            displayMessage(botReply, "bot");
        } else {
            displayMessage("Sorry, I couldn't understand that.", "bot");
        }

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        displayMessage("Something went wrong.", "bot");
    }
}
