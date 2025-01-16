# Mobile Motors

Mobile Motors is a React Native application designed to provide users with information about various car brands and models. The app fetches data from the Fipe API to display up-to-date information on car manufacturers and their respective models.

## Features

- User Authentication: Users can log in and log out securely.
- Home Screen: Displays a list of car brands fetched from the Fipe API.
- Brand Details: Upon selecting a brand, users can view a list of models associated with that brand.
- Model Details: Provides detailed information about a selected car model, including available years and specifications.
- Search Functionality: Allows users to search for specific car models.
- Data Caching: Implements caching to store fetched data locally using AsyncStorage, reducing the need for repeated API calls.

## Installation

To run this project locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/Ceagah2/mobile-motors.git
```

Navigate to the project directory:

```bash
cd mobile-motors
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn start
```

Run the application:

For iOS:

```bash
yarn ios
```

For Android:

```bash
yarn android
```

## Dependencies

The project relies on the following major dependencies:

- React Navigation: For handling navigation between screens.
- Expo: The react native framework.
- Axios: For making HTTP requests to the Fipe API.
- AsyncStorage: For caching data locally on the device.
- Styled Components: For styling the application components.
- Context API: To create a user context provider and handle global states

## Project Structure

The project's structure is organized as follows:

```bash
mobile-motors/
├── assets/                      # Asset files (images, fonts, etc.)
├── src/                         # Source files
│   ├── data/                    # Data layer, to keep your user data and services
│   │   ├── context/             # Context files
│   │   │    ├── context.tsx/    # User Context handler
│   │   ├── service/   
│   │   │    ├── api.ts/         # Base Api connections and interceptors
│   │   │    ├── login.ts/       # Login api connections
│   ├── presentation/            # Presentation Layer, to keep our visual components
│   │   ├── components/          # Components folder
│   │   ├── hooks/               # Custom hooks
│   │   ├── screens/             # All our screens
│   │   ├── theme/               # Theme folder, with colors, sizes and font tokens
│   └── validation/              # Navigation configuration
├── App.tsx                      # Entry point of the application
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation
```

## Acknowledgements

[Fipe](https://www.fipe.org.br/) API for providing car data.  
[React Native](https://reactnative.dev/) for the framework.  
[React Navigation](https://reactnavigation.org/) for navigation solutions.  
[Axios](https://axios-http.com/ptbr/docs/intro) for HTTP requests.  
[Styled Components](https://styled-components.com/) for styling.