# SourdoughCircle

![SourdoughCircle](src/assets/images/sourdoughWEBP.webp)

SourdoughCircle is a social media application that allows authenticated members to post images and share their content related to sourdough with other people. Members can post, like posts, comment on posts, and also edit and delete their posts. Members can also follow other members to create a personalized feed.

# Live Page
[SourdoughCircle](https://sourdoughcircle-81aa321c22de.herokuapp.com/)

![Website Mockup]()

# Django Rest Backend
The repository for the backend of the application can be found here:<br>[SourdoughCircle_API](https://github.com/Hujanen91/sourdoughcircle_api)

## Table of Contents

* [Introduction](#introduction)
* [UX](#ux)
  * [User Goals](#user-goals)
  * [User Stories](#user-stories)
  * [Design Choices](#design-choices)
    * [Colors](#colors)
    * [Typography](#typography)
    * [Imagery](#imagery)
* [Features](#features)
  * [Existing Features](#existing-features)
  * [Future Features](#future-features)
* [Reusability](#reusability)
  * [Component Reusability](#component-reusability)
  * [Future Possible Reusable Scenarios](#future-possible-reusable-scenarios)
* [Packages and Tools](#packages-and-tools)
* [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Performance and Best Practices Analysis](#performance-and-best-practices-analysis)
  * [Known Bugs](#known-bugs)
* [Deployment](#deployment)
  * [Heroku](#heroku)
    *[Initial Setup](#initial-setup)
    *[Preparing the Application](#preparing-the-application)
    *[Deployment](#deployment)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)
* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)

---

## UX

### User Goals

The primary goals of the target audience for Caption of the Day are centered around creative expression, social interaction, and content discovery in a user-friendly digital environment. The platform is tailored to meet the following user aspirations:

1. **Creative Sharing**: Users seek a platform where they can express themselves creatively through unique captions and imagery. The ability to craft and share content that resonates with personal experiences or interests is paramount.

2. **Community Engagement**: A strong desire exists for connecting with a like-minded community. Users aim to engage in meaningful interactions, be it through commenting on posts, reacting to content, or participating in caption-themed discussions.

3. **Discovering Diverse Content**: Users are interested in exploring and discovering a wide range of captions and images that span various themes, moods, and perspectives. This exploration is a source of inspiration, entertainment, and learning.

4. **Ease of Use**: The target audience values an intuitive and straightforward user interface that makes navigation, content creation, and interaction effortless, regardless of their technical expertise.

5. **Personalized Experience**: Users look for a personalized feed that reflects their interests, past interactions, and preferred content, enhancing their engagement and time spent on the platform.

6. **Safe and Supportive Environment**: A safe space for sharing and interaction, where users feel supported and encouraged to express themselves without judgment or negativity.

By focusing on these goals, Caption of the Day aims to establish itself as a premier platform for creative sharing and community building, setting itself apart in the realm of social media.

### User Stories

#### Epic: User Authentication and Session Management
- **User Story**: New User Sign-Up [#12](https://github.com/Haniibani/pp5_frontend/issues/12)
- **User Story**: Persistent User Sessions [#5](https://github.com/Haniibani/pp5_frontend/issues/5)
- **User Story**: Update Login Credentials [#13](https://github.com/Haniibani/pp5_frontend/issues/13)
- **User Story**: Sign-In and Sign-Up Options for Logged-Out Users [#4](https://github.com/Haniibani/pp5_frontend/issues/4)

#### Epic: Performance and Error Handling
- **User Story**: Fast and Responsive Application Performance [#10](https://github.com/Haniibani/pp5_frontend/issues/10)
- **User Story**: Graceful Error Handling in the Application [#11](https://github.com/Haniibani/pp5_frontend/issues/11)
- **User Story**: Continuous Access with Token Refresh [#18](https://github.com/Haniibani/pp5_frontend/issues/18)

#### Epic: Navigation and Accessibility
- **User Story**: Consistent Navigation Bar Access [#2](https://github.com/Haniibani/pp5_frontend/issues/2)
- **User Story**: Navigation Bar Accessibility on All Pages [#19](https://github.com/Haniibani/pp5_frontend/issues/19)
- **User Story**: Efficient Routing for Seamless Content Viewing [#3](https://github.com/Haniibani/pp5_frontend/issues/3)

#### Epic: User Interface and Experience
- **User Story**: Aesthetically Pleasing Interface Design [#9](https://github.com/Haniibani/pp5_frontend/issues/9)
- **User Story**: Consistent Color Scheme and Design [#17](https://github.com/Haniibani/pp5_frontend/issues/17)

#### Epic: Search and Content Discovery
- **User Story**: Keyword-Based Search for Posts and Profiles [#8](https://github.com/Haniibani/pp5_frontend/issues/8)

#### Epic: User Interaction and Content Management
- **User Story**: User Profile View and Edit [#6](https://github.com/Haniibani/pp5_frontend/issues/6)
- **User Story**: Creating and Editing User Posts [#7](https://github.com/Haniibani/pp5_frontend/issues/7)
- **User Story**: Follow and Unfollow Users [#14](https://github.com/Haniibani/pp5_frontend/issues/14)
- **User Story**: Discover Recent and Popular Posts [#15](https://github.com/Haniibani/pp5_frontend/issues/15)
- **User Story**: Personalized Content Feed [#16](https://github.com/Haniibani/pp5_frontend/issues/16)

### Design Choices

Our design philosophy at "Caption of the Day" is deeply rooted in providing a serene and approachable environment for our users to share and explore. The design choices are reflective of our commitment to a clean, modern, and user-centric interface.

#### Colors

The color scheme is a soothing mix of soft teal and cloud white, invoking a sense of calm and openness reminiscent of a clear sky. Teal, a color often associated with clarity of thought and communication, aligns perfectly with our platform's goal of fostering clear and open exchanges between users. The neutral grey accents used for text and icons provide a gentle contrast, ensuring readability and focus on user content without overwhelming the senses.

#### Typography

We've selected a sans-serif font that balances form and function, offering excellent readability and a contemporary feel. This choice reflects our aim to present text in a manner that is both appealing and easy on the eyes, facilitating longer periods of engagement without strain. The font weight is carefully chosen to ensure that the textual content stands out against the light background, enhancing user focus on the stories and captions shared by the community.

#### Imagery

The use of cloud imagery in our upload icon is symbolic of the seamless and boundless experience we offer, akin to uploading your thoughts to the vastness of the sky. User avatars are presented in greyscale to maintain uniformity and visual harmony, while also allowing the vibrant user-generated content to take center stage. Our logo, which combines a caption bubble and a camera shutter, encapsulates our core offering — a platform to visually share and caption life's moments.

These design elements come together to create an atmosphere that is both inspiring and tranquil, inviting users to stay, explore, and express themselves freely on Caption of the Day.

## Features

Caption of the Day enriches the user experience with a suite of interactive features designed to foster engagement and creativity within the community:

- **User Authentication**: A robust and secure login and registration system that protects user data and ensures a trustworthy environment for sharing personal moments.
- **Profile Management**: Comprehensive profile customization options allow users to express their identity through bios, profile images, and a catalogue of their posts.
- **Post Creation**: An intuitive and user-friendly interface for creating posts, enabling users to share their stories with text and image content that captures the essence of their experiences.
- **Interactive Features**: Engaging social interaction tools that allow users to like and comment on posts, creating a dialogue and connection between community members.
- **Infinite Scroll**: A smooth and uninterrupted browsing experience that dynamically loads content as the user scrolls, making content discovery seamless and enjoyable.

### Future Features

Looking ahead, Caption of the Day is excited to explore and develop additional features that enhance connection and engagement:

- **Live Streaming**: Introduce the ability for users to share live moments with their followers, bringing real-time connection to the community.
- **Advanced Content Filters**: Implement smart filters that allow users to customize their content discovery based on their interests, trends, and activities.
- **Augmented Reality (AR) Integration**: Explore AR technology to enable users to create and share immersive posts that blur the lines between digital and physical worlds.
- **Virtual Gatherings**: Create virtual spaces where users can host and participate in events, fostering deeper community bonds.
- **Mood-Based Content Suggestion**: Develop a mood analysis feature that suggests content based on the user's current mood, detected through machine learning algorithms.
- **Multi-Language Support**: Broaden the platform's reach by offering a multilingual interface that welcomes users from different linguistic backgrounds.
- **Eco-Friendly Initiatives**: Introduce features that promote environmental awareness, including eco-challenges and sustainability-focused content sharing.

These prospective features aim to keep Caption of the Day at the forefront of innovation, providing users with an ever-evolving platform that not only entertains but also connects and inspires.

## Reusability

In this section, we explore the current reusability of our components and envision future scenarios where our components' flexibility can be further utilized.

### Component Reusability

Our application's architecture emphasizes reusability and modularity. Here is an overview of the reusable components:

#### `Avatar.jsx`

- **Description**: Displays user avatars with optional text.
- **Props**:
  - `src`: The image source URL for the avatar.
  - `height`: The size of the avatar (default `45`).
  - `text`: Optional text to display alongside the avatar.
- **Usage**: Used in user profiles, comment sections, and as navigational items.

#### `LikeButton.jsx`

- **Description**: A button for liking posts, with dynamic rendering based on like status.
- **Props**:
  - `isOwner`: Boolean indicating if the current user owns the post.
  - `likeId`: The ID of the like associated with the post, if it exists.
  - `setPosts`: Function to update the state of posts.
  - `postId`: The ID of the post to be liked or unliked.
- **Usage**: Embedded in post components to allow users to like/unlike posts.

#### `NavBar.jsx`

- **Description**: The navigation bar for the application, responsive and adaptive based on user authentication status.
- **Props**: None (utilizes context to determine the current user state).
- **Usage**: Placed at the top of all page layouts for consistent navigation.

#### `Notifications.jsx`

- **Description**: A dropdown component to display user notifications.
- **Props**:
  - `id`: (From `useParams`) The ID used to fetch notifications if needed.
- **Usage**: Included in the `NavBar` for easy access to notifications.

#### `PopularProfiles.jsx`

- **Description**: Displays a list of popular profiles.
- **Props**:
  - `mobile`: Boolean indicating if the view is rendered on a mobile device.
- **Usage**: Utilized in the sidebar or main content area to showcase popular users.

#### `Post.jsx`

- **Description**: Represents a single post in the feed.
- **Props**: Includes post details such as `id`, `owner`, `title`, `content`, and interaction counts.
- **Usage**: Used in profile pages and feeds to display individual posts.

#### `Profile.jsx`

- **Description**: Displays a brief profile summary for a user.
- **Props**:
  - `profile`: Object containing profile information.
  - `mobile`: Boolean for mobile view adjustments.
  - `imageSize`: The size of the profile image (default `55`).
- **Usage**: Showcased in lists where a user profile summary is needed, such as in search results or the popular profiles section.

#### `ProfileInformation.jsx`

- **Description**: Provides detailed profile information, including social media links and follow/unfollow functionality.
- **Props**:
  - `profile`: Object containing detailed profile information.
  - `isOwner`: Boolean indicating if the profile belongs to the current user.
  - `handleFollow`: Function to handle following a user.
  - `handleUnfollow`: Function to handle unfollowing a user.
- **Usage**: Used on the main profile page to display user information and actions.

#### `ProfilePosts.jsx`

- **Description**: Displays a list of posts created by a specific user.
- **Props**:
  - `profilePosts`: The list of posts to display.
  - `setProfilePosts`: Function to update the list of posts.
- **Usage**: Employed in the profile details page to show all posts from a user.

#### `SocialMediaLinks.jsx`

- **Description**: Renders social media icons linked to user profiles.
- **Props**:
  - `profile`: Object containing URLs to social media profiles.
- **Usage**: Included in the `ProfileInformation` component to link to user's social media.

By designing our application with these reusable components, we've created a scalable and maintainable codebase. Each component is crafted to be independent and versatile, promoting consistency and efficiency throughout our development process.


### Possible Reusable Scenarios

As we continue to evolve the Caption of the Day platform, we anticipate new features that will further leverage our existing components. Below are some scenarios where our components could be reused or extended:

#### `Avatar.jsx`

- **Future Use**: Incorporating user status indicators (such as online/offline) next to the avatar for real-time social features.
- **Possible Props**:
  - `status`: A string or boolean indicating the user's current status.

#### `LikeButton.jsx`

- **Future Use**: Expansion to support liking comments or other user-generated content beyond posts.
- **Possible Props**:
  - `contentType`: A string indicating the type of content being liked (e.g., 'post', 'comment').

#### `NavBar.jsx`

- **Future Use**: Adding quick-search functionality within the navigation bar for immediate content discovery.
- **Possible Props**:
  - `onSearch`: Function to handle search queries directly from the navigation bar.

#### `Notifications.jsx`

- **Future Use**: Introducing categorization of notifications to filter by type (likes, comments, follows).
- **Possible Props**:
  - `filterType`: An array or string to specify which notification types to display.

#### `PopularProfiles.jsx`

- **Future Use**: Adding filtering options to sort popular profiles by different criteria (e.g., most active, recently joined).
- **Possible Props**:
  - `sortBy`: A string indicating the sorting criterion for popular profiles.

#### `Post.jsx`

- **Future Use**: Implementing a feature to highlight posts based on trending topics or hashtags.
- **Possible Props**:
  - `isTrending`: A boolean to highlight the post if it's associated with a trending topic.

#### `Profile.jsx`

- **Future Use**: Enabling a 'quick view' mode to see more details on hover or click without navigating away from the current page.
- **Possible Props**:
  - `quickViewEnabled`: A boolean to enable the quick view feature.

#### `ProfileInformation.jsx`

- **Future Use**: Adding the capability for users to customize the visibility of certain profile sections to different audience groups.
- **Possible Props**:
  - `visibilitySettings`: An object detailing visibility preferences for profile sections.

#### `ProfilePosts.jsx`

- **Future Use**: Allowing embedding of posts in external websites or sharing via social media platforms.
- **Possible Props**:
  - `embeddable`: A boolean indicating if the post can be embedded.
  - `onShare`: Function to handle sharing the post externally.

#### `SocialMediaLinks.jsx`

- **Future Use**: Expanding to include more social platforms and integrating with APIs to display live social feed previews.
- **Possible Props**:
  - `additionalPlatforms`: An array of new platform identifiers to include in the profile.

These scenarios are guided by our commitment to flexibility and scalability. As we develop new features, we'll continue to assess our component library for opportunities to reuse and extend components, ensuring a consistent and efficient development experience.

## Packages and Tools

In this project, we've utilized a variety of libraries and tools to enhance functionality and development efficiency. Below is a list of these technologies along with their purposes:

- **React**
  - A JavaScript library for building dynamic and interactive user interfaces. Ideal for single-page applications.
  
- **Axios**
  - A promise-based HTTP client for making HTTP requests, used for fetching or saving data from/to a server.

- **Bootstrap & React-Bootstrap**
  - Bootstrap provides responsive design elements and layouts. React-Bootstrap adapts these into React components for consistent styling.

- **JWT-Decode**
  - A library for decoding JSON Web Tokens. Useful for interpreting the token's data on the client side.

- **React Router DOM**
  - Manages navigation in React applications, enabling dynamic routing without page reloads.

- **React Infinite Scroll Component**
  - Implements infinite scrolling, loading content as the user scrolls down, enhancing user experience.

- **Testing Libraries (Jest, React Testing Library)**
  - Jest is a simple testing framework, and React Testing Library provides utility functions for testing React components.

- **Web Vitals**
  - Measures website performance in terms of loading, interactivity, and visual stability.

- **Mock Service Worker (MSW)**
  - Mocks HTTP requests in development and testing environments. Ideal for testing network request scenarios.

- **Scripts for Building, Testing, and Starting**
  - Specific scripts are defined for building, testing, and starting the application, particularly with Heroku deployment in mind.

- **Node.js and npm Versions**
  - The project specifies Node.js and npm versions to ensure a consistent environment setup.

Additionally, specific scripts were defined for building, testing, and starting the application, particularly with Heroku deployment in mind. The project also specifies Node.js and npm versions for consistent environment setup.

## Testing

### Manual testing
The SourcdoughCircle has gone through thorough manual testing that can be found here:
[Manual testing](testing.md)


### Performance and Best Practices Analysis

As part of our commitment to excellence, I conducted an in-depth performance and best practices analysis using Lighthouse. My analysis revealed several insights:
[Perfomance](testing.md#performance-and-best-practices-analysis)

### Known Bugs

- **Current Status**: As of the latest deployment, no major bugs have been reported. The application is monitored continuously for any anomalies.
- **Minor Issues**: A log of minor issues is maintained, with details about their nature and the environment in which they were encountered.
- **Resolution Process**: These issues are being addressed in a prioritized manner, with regular updates and patches being rolled out.
- **Feedback and Reporting**: Users are encouraged to report any bugs or issues they encounter, contributing to the application's ongoing improvement.

## Deployment

### Heroku

This project is deployed on Heroku, a cloud platform service that enables easy deployment and scaling for web applications. The deployment process includes the following steps:

#### Initial Setup

1. **Create a Heroku Account**: Sign up for a Heroku account at [Heroku's website](https://www.heroku.com/).
2. **Install Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.

#### Preparing the Application

1. **Procfile**: Create a `Procfile` in your project root directory. This file tells Heroku how to run your application.
2. **Requirements.txt**: Ensure you have a `requirements.txt` file listing all project dependencies.
3. **Config Vars**: Set up necessary configuration variables in Heroku (like `SECRET_KEY`, database URL, etc.).

#### Deployment

1. **Create a Heroku App**: Use the Heroku CLI to create a new app.
2. **Add Buildpacks**: If necessary, add the correct buildpacks via the Heroku dashboard or CLI.
3. **Deploy**: Push your code to Heroku either by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
4. **Database Migration (if applicable)**: Run database migrations using the Heroku CLI.

#### Final Steps

1. **Enable the Web Dyno**: Make sure the web dyno is up and running after deployment.
2. **Open the App**: You can open your application from the Heroku dashboard or using the CLI command `heroku open`.

For more detailed instructions and troubleshooting, visit the official [Heroku Dev Center](https://devcenter.heroku.com/).

### Forking the GitHub Repository

Forking the GitHub repository allows you to make a copy of the original project on your own GitHub account, enabling you to make changes without affecting the original. Here's how to do it:

1. **Go to the Repository**: Navigate to the original repository on GitHub.
2. **Fork the Repository**: Click the 'Fork' button, located at the top right of the repository page. This creates a copy of the repository in your GitHub account.
3. **Clone Your Fork**: Once forked, you can clone your fork to your local machine for further development.

### Making a Local Clone

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

1. **Clone the Repository**: On the GitHub repository page, click the 'Code' button and copy the URL under 'Clone with HTTPS'.
2. **Open Terminal**: Open your terminal and navigate to the directory where you want the clone to be created.
3. **Clone Command**: Type `git clone`, and then paste the URL you copied in Step 1. Press Enter to create your local clone.

## Credits

### Content

This project has benefited from several educational resources and example projects provided by the Code Institute throughout the course of my bootcamp. The following projects deserve special mention for their direct impact on the development of this application:

- **Django REST Framework Example Project**: A practical example provided by the Code Institute that guided the development of Web APIs using Django REST framework. This project served as a template for best practices in API development with Django and Python.

- **Moments Project**: Another resource from the Code Institute, the Moments project was instrumental in illustrating the development of a full-stack application with a focus on user experience. Various aspects of its design and functionality have been adapted and incorporated into this project.

A heartfelt thank you goes to the Code Institute for the array of projects and resources that have been made available throughout my bootcamp. These resources have not only guided this project but have also been a cornerstone of my learning journey, providing me with a solid foundation in software development and a deep understanding of full-stack development practices.

### Media

The visual content for this project was sourced from Pixabay and generated using DALL-E by OpenAI:

- **Pixabay Images**: A variety of high-quality images were sourced from [Pixabay](https://pixabay.com/), a platform offering free-to-use, royalty-free images. These images were carefully chosen to enhance the visual aspect of the project.
- **DALL-E Generated Images**: Specific imagery was created using [DALL-E](https://openai.com/dall-e), OpenAI's AI image generator, to produce unique and tailored visuals for the project.