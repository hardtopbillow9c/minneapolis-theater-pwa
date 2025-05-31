# minneapolis-theater-pwa
// ========================================
// FILE 3: README.md
// ========================================
# Minneapolis Theater Hub 🎭

A Progressive Web App for discovering live theater events in downtown Minneapolis with FREE API integrations!

## 🌟 Features

- 📱 **Installable PWA** - Works like a native app on any device
- 🌤️ **Live Weather Data** - Free weather API integration
- 🎫 **Real Event Data** - Pulls from SeatGeek & Bandsintown APIs (no key needed!)
- 📍 **Location Services** - See distance to theaters
- 📅 **Calendar Integration** - Add shows to Google Calendar
- 💾 **Offline Support** - Works without internet
- 🔔 **Push Notifications** - Get alerts for new shows
- 🌙 **Modern Dark UI** - Easy on the eyes

## 🚀 Live Demo

Visit: [https://YOUR-USERNAME.github.io/minneapolis-theater-pwa](https://YOUR-USERNAME.github.io/minneapolis-theater-pwa)

## 📱 Installation

1. Visit the live demo URL on your phone
2. Click "Install App" button or use browser menu
3. The app will install like a native app!

## 🔌 API Integrations (All FREE!)

This app uses several FREE APIs with no authentication required:

### Weather API (wttr.in)
- Real-time weather for Minneapolis
- No API key needed!
- Updates automatically

### SeatGeek Events
- Live theater events data
- Limited free access without key
- Real ticket prices and venues

### Bandsintown API
- Concert and performance data
- Free with app_id
- Live venue information

### OpenStreetMap Geocoding
- Convert addresses to coordinates
- Completely free
- No limits

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/minneapolis-theater-pwa.git

# Navigate to project
cd minneapolis-theater-pwa

# Start a local server (Python)
python -m http.server 8000

# Or use Node.js
npx http-server

# Open in browser
http://localhost:8000
```

## 📁 Project Structure

```
minneapolis-theater-pwa/
├── index.html          # Main app file with all code
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline functionality
├── README.md          # This file
├── icon-192.png       # App icon (optional)
└── icon-512.png       # App icon (optional)
```

## 🎨 Customization

Want to adapt this for your city? Just change:
- City name in the API calls
- Theater venue data
- Coordinates for your city

## 📈 Future Enhancements

- [ ] Add Ticketmaster API (requires key)
- [ ] User accounts with Firebase
- [ ] Push notification server
- [ ] Review system
- [ ] Social features

## 🤝 Contributing

Pull requests are welcome! Feel free to:
- Add new features
- Improve the UI
- Add more theater venues
- Integrate additional APIs

## 📜 License

MIT License - Use this for any city!

## 🙏 Credits

Built with vanilla JavaScript and love for the theater community of Minneapolis.

---
Made with ❤️ in Minneapolis
