VibeCheck-Cruz_Porteria is a Node.js + Express project developed for CPE 411L. It consists of a backend API and a frontend user interface with buttons that fetch data from the API. The backend is located in the backend/ folder and includes index.js and package.json. The backend provides the following endpoints:

GET /api/fortune – returns a random fortune in JSON format, e.g., { "fortune": "You will debug it in 5 minutes..." }.

GET /api/joke – returns a random joke in JSON format, e.g., { "joke": "Why did the developer go broke?" }.

GET /api/vibe?mood=happy|tired|stressed – returns an emoji and motivational message based on the selected mood, e.g., { "mood": "happy", "emoji": "😄", "message": "Keep going - you're shipping greatness!" }.

POST /api/smash – increases the smash counter and returns the updated value, e.g., { "smashes": 1 }.

GET /api/smashes – returns the current smash counter value in JSON, e.g., { "smashes": 5 }.

GET /api/secret?code=411L – returns a hidden message if the correct code is provided, e.g., { "message": "🎉 Secret unlocked: +10 luck on your next merge!" }.

To run the backend, open a terminal in the backend/ folder, install required packages with npm install express cors if necessary, and start the server using node index.js. The terminal should display VibeCheck API running at http://localhost:3000. The frontend, located in the frontend/ folder, contains index.html and app.js and provides buttons that call these backend endpoints. Clicking the Fortune, Joke, Happy, Tired, Stressed, Smash, and Secret buttons will display the returned JSON data in the Output section of the page. The Smash button specifically increases the counter each time it is clicked. This project demonstrates connecting a frontend UI with a backend API, handling fetch requests, displaying dynamic JSON data, and following proper GitHub workflow practices including feature branches, commits, and pull requests.
