# SPACEX Website

## Technologies And Patterns Used

- **TypeScript** bringing static typing to the JavaScript language and enhancing code quality.

- **Atomic design Pattern** is methodology that breaks down the user interface into smaller,
  reusable building blocks, allowing for a more organized and scalable design system.

- **React Apollo** utilized to efficiently fetch and manage data from the SpaceX API.

- **Recoil** lightweight and intuitive state management library simplifies the process of managing
  and sharing state across different components, enhancing the overall application state management.

- **Styled Component** chosen for styling the components in a modular and maintainable way.

## Features

**HOME PAGE**

- **Header Navigation:** The logo in the header serves as a link, providing a consistent way for
  users to navigate back to the main page. The "Favorites" (as heart) button in the header serves as
  a quick link to redirect users to their personalized favorites page.

- **Banners Section:** The banners section is designed for an engaging user experience. Clicking the
  "View Tours" button seamlessly scrolls down, providing users with a convenient and visually
  appealing way to explore available tours.

- **Main Slider Section:** The main slider section presents dynamic content sourced from the SpaceX
  API. Each slide within the carousel dynamically fetches data from the SpaceX API, showcasing
  information about different trips. The "Add to Favorites" (as heart) button on each slide enables
  users to curate a personalized list of preferred trips, enhancing user engagement and
  customization options.

**FAVORITES PAGE**

- **Header and Banner Sections:** The header remains consistent with other pages, ensuring a
  seamless navigation experience, and banner section maintaining a visually cohesive design. The
  "Favorite" (as heart) button in the header is active, allowing users to easily identify the
  current page and navigate back to their curated favorites.

- **Managing Favorite Flights:** The "Clean All" button offers a straightforward way to remove all
  flights from your favorites, providing a clean slate for new selections. The page displays a
  comprehensive list of your favorite flights, allowing you to track and manage your preferred
  trips. The "Buy" button on each flight does not trigger any action, enabling you to review flight
  details without making a purchase commitment. The "Delete" button, associated with each flight,
  allows you to remove a specific flight from your favorites, providing a tailored and customizable
  experience.

**Enjoy a streamlined and user-friendly Favorites Page, empowering you to curate and refine your
list of preferred flights with ease!**

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AnastasiiaFetch/spacex_test_task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd spacex_test_task
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The website will be accessible at `http://localhost:5173`.
