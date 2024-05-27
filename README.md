# Quabe Purse
![Screenshot 2024-05-27 215744](https://github.com/SaiVenkat07/quabe-purse/assets/125186243/4d30f116-746c-4bdc-abc2-d9af6a94a9d8)
Quabe Dashboard is a responsive web application that provides users with a detailed overview of their expenses, savings, activities, and pending bills. It features a flexible navigation bar, a dashboard displaying key metrics, and a line chart representing monthly expenses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Technologies](#technologies)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SaiVenkat07/quabe-purse.git
   cd quabe-purse
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
quabe-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Chart.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
├── package.json
├── README.md
```

## Components

### Navbar

The `Navbar` component contains the navigation links and a collapsible sidebar that adjusts based on screen size and user interaction.

### Dashboard

The `Dashboard` component is the main content area, displaying key user metrics such as expenses, savings, and a graph of monthly expenses.

### Chart

The `Chart` component uses `react-chartjs-2` to render a line chart depicting the user's monthly expenses.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Chart.js & react-chartjs-2**: Libraries for creating beautiful charts.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations and transitions.
- **Lucide-react**: Icon library for React.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
