# OTServ Inspector

Welcome to **OTServ Inspector**! This project is a Node.js application designed to communicate with Open Tibia servers to retrieve comprehensive server and player information. Whether you're a server administrator, a player, or a developer, this tool provides valuable insights into server status, player lists, and detailed player statistics. **If you find this project helpful, please give it a star!**

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage and Output](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Retrieve Basic Server Information**: Get the server's name, IP address, and port.
- **Owner Information**: Access details about the server owner, including their email.
- **Miscellaneous Information**: Fetch the Message of the Day (MOTD), server location, URL, and version.
- **Player Statistics**: View the number of online players, peak players, and maximum capacity.
- **Map Details**: Learn about the server's map, author, and dimensions.
- **Extended Player Information**: Get a list of online players along with their levels.
- **Detailed Player Status**: Access in-depth information about each player, including level, vocation, health, mana, and position.
- **Server Software Details**: Know the software name, version, and protocol the server is running.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed (version 12 or higher is recommended).
- **npm**: Node Package Manager comes with Node.js and is required to install dependencies.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/otserv-inspector.git
   ```

2. **Navigate to the Project Directory**

    ```bash
    cd otserv-inspector
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

## Usage

1. **Configure the Server IP**
- In the index.js file (located in the src directory), set the serverIp variable to the IP address or hostname of the Open Tibia server you want to query:

   ```bash
   const serverIp = 'tibinha.online';
   ```

2. **Run the Application**

   ```bash
   node src/index.js
   ```

3. **View the Output**
- The application will output detailed server and player information to the console.

```bash
Basic Server Information:
  Name: Eldoria
  IP: 45.141.214.89
  Port: 7171

Owner Information:
  Owner: RubinOT Team
  Email: rubinot.pix@gmail.com

Miscellaneous Information:
  MOTD: Welcome to RubinOT!
  Location: Brazil
  URL: https://rubinot.com/
  Version: null

Players Information:
  Online: 778
  Peak: 3168
  Maximum: 3300

Map Information:
  Map Name: realmap
  Author: RubinOT Team
  Size: 33736 x 31191

Server Software Information:
  Software Name: RubinOT
  Software Version: MMOServers 1.0
  Software Protocol: 13.10

Player List:
  Elder Fear (Level: 546)
  Hancorzin (Level: 907)
  Fiy (Level: 813)
  Gabuzerahh (Level: 814)
  Trevosa (Level: 757)
  Grann Conn (Level: 812)
  Tom Back (Level: 490)
  Cazador brujas (Level: 13)
  El Nenee (Level: 638)
  Roots ehunts (Level: 846)
  GM Escanor on Eldoria (Level: 2)
  Kayzzo (Level: 21)
```

## Project Structure

```bash
otserv-inspector/
├── src/
│   ├── buffer/
│   │   └── PacketBuffer.js          // Handles packet construction and parsing
│   ├── handler/
│   │   └── ServerResponseHandler.js // Parses and stores server responses
│   ├── network/
│   │   └── OTServer.js              // Manages network communication with the server
│   └── index.js                     // Main script file to run the application
├── package.json                     // Project metadata and dependencies
└── README.md                        // Project documentation
```

## Contributing
- Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the Repository
2. Clone Your Fork
3. Create a Feature Branch
4. Make Your Changes
5. Commit Your Changes
6. Push to Your Fork
7. Create a Pull Request

## License
This project is licensed under the MIT License, which means it's free for personal and commercial use.






