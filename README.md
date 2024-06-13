# SourdoughCircle

![SourdoughCircle ](src/assets/images/android-chrome-192x192.png)

SourdoughCircle is a social media application that allows authenticated members to post images and share their content related to sourdough with other people. Members can post, like posts, comment on posts, and also edit and delete their posts. Members can also follow other members to create a personalized feed.

# Live Page
[SourdoughCircle](https://sourdoughcircle-81aa321c22de.herokuapp.com/)

![Website Mockup](docs/images/mockup_sourdoughcircle.png)

# Django Rest Backend
The repository for the backend of the application can be found here:<br>[SourdoughCircle API](https://github.com/Hujanen91/sourdoughcircle_api)

## Table of Contents

* [SourdoughCircle](#sourdoughcircle)
* [UX](#ux)
  * [User Goals](#user-goals)
  * [Agile and planning](#agile-and-planning)
  * [User stories](#user-stories)
  * [Design choices](#design-choices)
    * [Colors](#colors)
    * [Typography](#typography)
    * [Imagery](#imagery)
* [Features](#features)
  * [Future Features](#future-features)
* [Website layout](#website-layout)
  * [Navbar](#navbar)
  * [Home page](#home-page)
  * [Feed page](#feed-page)
  * [Contact page](#contact-page)
  * [Sign in page](#sign-in-page)
  * [Sign up page](#sign-up-page)
  * [Profile page](#profile-page)
  * [Create post](#create-post)
  * [Post page](#post-page)
* [Reusability](#reusability)
  * [Component Reusability](#component-reusability)
  * [Packages and Tools](#packages-and-tools)
* [Testing](#testing)
  * [Manual Testing](#manual-testing)
  * [Performance and Validation](#performance-and-validation)
* [Known Bugs](#known-bugs)
* [Deployment](#deployment)
  * [Heroku](#heroku)
    *[Initial Setup](#initial-setup)
    *[Preparing the Application](#preparing-the-application)
    *[Deployment](#deployment)
    *[Final steps](#final-steps)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)
* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
* [Acknowledgements](#acknowledgements)

## UX

### User Goals

SourdoughCircle is all about sharing your love of sourdough in a fun and supportive space. It's a place to:

1. **Show off your creations!**: Everyone loves a good sourdough picture, and SourdoughCircle lets you add your own unique twist with creative captions. It's all about capturing the essence of your sourdough journey, whatever that may be.

2. **Connect with fellow bread nerds!**: There's a whole community of people out there who share your passion for sourdough, and SourdoughCircle is the perfect place to meet them. We're all about having meaningful conversations about our bakes, from troubleshooting tips to proud moments.

3. **Find endless inspiration!**: SourdoughCircle is overflowing with amazing sourdough content. You'll see all sorts of breads, from classic loaves to artistic creations, with captions that will make you laugh, learn, and get excited to try something new.

4. **Use the platform like a breeze!**: SourdoughCircle is super easy to navigate, no matter how tech-savvy you are. Sharing your bakes and connecting with others should be simple, and that's what we've focused on.

5. **Get a feed that feels like home!**: The more you use SourdoughCircle, the more it tailors itself to your interests. You'll see content that resonates with you, so you can spend your time getting inspired, not lost in a sea of irrelevant posts.

6. **Feel safe and supported!**: SourdoughCircle is a positive space where everyone feels comfortable sharing their creations, asking questions, and learning from each other. There's no room for negativity here, just a supportive community cheering each other on.

By keeping these things in mind, SourdoughCircle is building a one-of-a-kind platform for sourdough lovers to connect, create, and be inspired

&ensp;

### Agile and planning
<hr>
The API and Frontend of this project was planned using Agile methodology and MoSCoW prioritization on github projects.

**The user stories project can be found [here](https://github.com/users/Hujanen91/projects/9)**


The project was illustrated by 13 initial Milestone entitled<br>

`Profiles`
`Posts`
`Likes`
`Comments`
`Category`
`Followers`
`Admin`
`Contact`<br>
`Community Chat`
`Authentication`
`Routing`
`Notifications`
`Navigation`<br>

providing the developer with the freedom to accomplish all issues/tasks flexibly before dates deadline set to June. The Milestones were broken according to their components name main functions.

Throughout the development process, new milestones were added, where tasks started from "Todo," progressing to "In Progress," and finally "Done". The issues were assigned to the sole developer and labeled as "could-have," "should-have,", "must-have", "wont-have" and later on labels like "has been implemented" and "future implementation" was also added.

&ensp;
### User Stories:

<details>
<summary>
<b style="font-size: 15px; font-style: italic;">User stories Milestone list</b>
</summary>
<summary>

#### Comments
- **User Story**: Replying to comments [#44](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/44)
- **User Story**: Comment date [#27](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/27)
- **User Story**: Create a comment [#19](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/19)
- **User Story**: Edit a comment [#25](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/25)
- **User Story**: Delete comments [#32](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/32)
- **User Story**: View comments [#33](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/33)



#### Likes
- **User Story**: Like a post [#29](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/29)
- **User Story**: View liked posts [#23](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/23)

#### Navigation
- **User Story**: Navigation [#36](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/36)
- **User Story**: Navigation: Conditional rendering [#13](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/13)

#### Contact
- **User Story**: Contactpage [#38](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/38)

#### Category
- **User Story**: Categories [#37](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/37)

#### Posts
- **User Story**: Most liked posts [#45](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/45)
- **User Story**: View specific users posts [#15](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/15)
- **User Story**: Edit post [#18](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/18)
- **User Story**: Post page [#21](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/21)
- **User Story**: View posts of followed users [#30](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/30)
- **User Story**: Infinite scroll [#31](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/31)
- **User Story**: Create posts [#20](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/20)
- **User Story**: View recent posts [#28](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/28)
- **User Story**: Search posts [#34](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/34)
- **User Story**: View a post [#35](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/35)

#### Profiles
- **User Story**: Social media links in profile [#39](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/39)
- **User Story**: User profile stats [#12](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/12)
- **User Story**: Edit profile [#14](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/14)
- **User Story**: Update username and profile [#16](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/16)
- **User Story**: Profile page [#7](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/7)
- **User Story**: Basic profile information [#22](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/22)
- **User Story**: Avatar [#26](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/26)

#### Community Chat
- **User Story**: Community chat [#46](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/46)

#### Notifications
- **User Story**: Notifications [#43](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/43)

#### Admin
- **User Story ADMIN**: Email communication [#42](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/42)
- **User Story**: Email communication [#41](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/41)
- **User Story ADMIN**: Respond to users mail [#40](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/40)

#### Followers
- **User Story**: Follow/Unfollow [#17](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/17)
- **User Story**: Most followed profiles [#24](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/24)

#### Routing
- **User Story**: Routing [#11](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/11)

#### Authentication
- **User Story**: Authentication: Refreshing access tokens [#10](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/10)
- **User Story**: Authentication: Sign in [#9](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/9)
- **User Story**: Authentication: Sign up [#8](https://github.com/Hujanen91/sourdoughcircle_frontend/issues/8)

</summary>
</details>

<br>

[Project user stories table can be found here](https://github.com/users/Hujanen91/projects/9/views/1?layout=table&visibleFields=%5B%22Title%22%2C%22Labels%22%2C%22Assignees%22%2C%22Status%22%5D&sortedBy%5Bdirection%5D=asc&sortedBy%5BcolumnId%5D=Labels)
![Project overview](docs/images/Userstories_planning.png)

### Design Choices

- <b>Simple Navigation with Social Proof:</b> The navigation bar uses clear and concise labeling, with icons, to help users find the features they're looking for. It also incorporates a "Most Followed Profiles" section, highlighting users and potentially acting as social proof to new visitors.<br>
- <b>Content Previews and User Activity:</b> The bottom portion of the page showcases a section with "Search posts" and "Filter by Category" options, encouraging users to explore content. Below this section are previews of user posts, including images and captions. This gives visitors a quick glimpse into the kind of content they can expect to find on the platform.<br>
- <b>Muted Color Palette:</b> The color scheme uses a muted color palette of whites, greys, and a light olive green. This unobtrusive color scheme puts the focus on the content and avoids overwhelming users.

#### Colors

- <b>Primary Background:</b> The primary background color is a very light beige or off-white (#f8f8f8). This neutral color creates a clean and airy feel for the website.<br>
- <b>Navigation Bar:</b> The navigation bar uses a dark gray (#363636) for the icons and font. This dark color creates a clear contrast with the light background and makes the text icons easily readable.
The light background for the navbar is a light green/olive color (#bed1bae7) with some opacity to it for some effect while scrolling.
- <b>Text Colors:</b> A bluish black (#212529) is used for the fonts on the website.
- <b>Logo, highlights and hover:</b> The main logo on the page contains colors like (#ad4a31) and (#ff9254) and they have both been used on smaller details like buttons, icons and the hover colors to keep adding some pop of color<br>

Overall, the color palette leans towards cool neutrals with a touch of muted green, creating a sense of calmness and professionalism that aligns with the minimalist design of the website.

![Color palette](docs/images/sourdoughcircle-colors.png)

#### Typography

The font used is Barlow, a friendly and approachable sans-serif font, to make everything on the platform clear, easy to read, and inviting.<br>

Here's why Barlow is perfect for SourdoughCircle:<br>

- <b>Clear and Crisp:</b> Barlow's clean lines and open letterforms ensure all the sourdough goodness – from your post captions to comments – is easy to see, no matter what device you're using.<br>
- <b>Warm and Welcoming:</b> The slightly rounded edges of the Barlow typeface give it a touch of friendliness, reflecting the warm and inviting atmosphere of the SourdoughCircle community.<br>
- <b>Modern and Versatile:</b> Barlow's modern style keeps SourdoughCircle feeling fresh and up-to-date, while its versatility allows it to adapt to all kinds of content.<br>

![Barlow font](docs/images/6262e1576a23db81ff6fe626_60b7b98f118948b13908fa1f_barlow.png)<br>

#### Imagery

SourdoughCircle keeps it simple and to the point with its app iconography.

- <b>Sourdough Icon:</b> The app utilizes a single, clean line drawing of a loaf of sourdough bread as both the favicon and the main icon in the navbar. This minimalist design makes the icon easily recognizable and ensures it scales well across different devices and screen sizes.<br>
- <b>Focus on Sourdough:</b> By featuring the bread itself, the icon immediately communicates the app’s purpose – a platform dedicated to sourdough bread.

- The rest of the icons and imagery follows along matching the colors and styles of the main navbar logo with clean lines, playful colors and easy for the eyes.

![Barlow font](docs/images/6262e1576a23db81ff6fe626_60b7b98f118948b13908fa1f_barlow.png)
![Barlow font](docs/images/6262e1576a23db81ff6fe626_60b7b98f118948b13908fa1f_barlow.png)
![Barlow font](docs/images/6262e1576a23db81ff6fe626_60b7b98f118948b13908fa1f_barlow.png)

# Features

SourdoughCircle isn't just about pretty pictures, it's about creating a vibrant community where everyone feels welcome to share their love of sourdough. Here are some features that make it all possible:

- **User Authentication, join the Circle!**: Signing up for SourdoughCircle is quick and easy. I take user privacy seriously, so you can relax and enjoy sharing your creations in a safe and secure space.
- **Profile Management, make it your space!**: Craft a profile that reflects your unique sourdough personality. Add a bio, choose a profile picture that shows off your baking skills, add your socials and build a collection of all your posts.
- **Post Creation, sharing made simple!**: Uploading photos and adding captions to your sourdough masterpieces is a breeze. The user-friendly interface lets you tell the story behind your bake, share tips, or just show off your beautiful bread!
- **Interactive Features, connect with fellow bakers!**: Like and comment on posts to start conversations and build relationships with other sourdough enthusiasts. Share your knowledge, ask questions, and cheer each other on in your sourdough journeys.
- **Infinite Scroll, infinite inspiration!**: SourdoughCircle keeps the inspiration flowing with a never-ending stream of sourdough content. Just keep scrolling to discover new techniques, drool-worthy creations, and tips from bakers of all experience levels.

## Future Features

There are several different future implementations that could be done to the SourdoughCircle to make it even better:

- **Live community chat**: A field alwats available in the post feeds where users can chat with each other, a live chatroom or community chat.
- **Sharing to other social media**: Implement the option to share posts to other social medias.
- **Admin page specifically for handling user messages**: A page visible only to logged in admin, a frontend page to handle messages sent through the contact form where admins can answer directly to the users messages.
- **Answering other comments**: To boost the social possibilities in the community an option to answer other users comments in the comment field could be added.
- **Like or vote on other comments**: The option to like or vote others comments could be implemented for further social interactions
- **Multi image uploads**: The option to upload several images in one post where the other users then can swipe through the images in the post view
- **User status sharing**: A field next to the username or user avatar that displays a status the user can add themselves.
- **Notifications**: Live notifications for a better user experiens. Could also be used by admins to send out alerts or information to all users on the website.
- **Direct messages between users**: A private message chat to boost the social interactions. Could also be used by admins for easier contact options between admins and users.

These future implementations are just a few of many features that could improve the website further and make it even more fun to use and easier to use.

# Website layout

## Navbar

__Fully responsive navbar__<br>

A fully responsive navbar is futured on top of the page and is always visible. On smaller screens the menu will hide in a hamburger menu bottom for a cleaner look.

  Logged out users:<br>
  - Home page<br>
  - Sign in page<br>
  - Sign up page<br>
  - Contact page<br>

![Navbar logged out](docs/images/Navbar_loggedout.png)

Logged in users:<br>
  - Add posts<br>
  - Home page<br>
  - Feed page<br>
  - Liked page<br>
  - Contact page<br>
  - Sign out page<br>
  - Profile page<br>

![Navbar logged in](docs/images/navbar_loggedin.png)

__Logo hyperlinked to home page:__

A logo is featured on all pages across the site inside the navbar, this is the main logo and makes it clear that the website is bread related. When not on home page the user will be sent back to home when clicking the Logo<br>
![Logo](./src/assets/images/android-chrome-192x192.png)<br>

__Navbar on smaller screens:__

The navbar will adapt depending on screen size to keept it looking good and make every icon fit as needed.
Below is two images displaying the navbar in small screens and medium sized screens:<br>
![Navbar small screen](docs/images/navbar_smallscreens.png)<br>
![Navbar medium screen](docs/images/navbar_mediumscreens.png)<br>


## Home page

__The Home page consists of:__

__The posts page__

The main page where all users posts is displayed, this page is available to non authenticated users.
The homepage displays the posts, the number of comments and likes, a "most followed" box to the right where a list of the most followed users are displayed.<br>

![Home page](docs/images/home_landingpage.png)<br>


__Most followed profiles__

The most followed profiles container sits on the right on big screens and then on the top of the page on smaller screens. The Follow/Unfollow button is hidden on smaller screens to not make the container too crouded and keep a clean look.
The most followed profiles container is visible for the user on all pages displaying posts.<br>

![Most followed](docs/images/most_followed.png)<br>
![Most followed small screens](docs/images/most_followed_smallscreen.png)<br>


__The website title__

The title of the website has been positioned below the navbar and above the main content on each page, this was done to save space in the navbar and not have too much happening in one place.
The title is visible on all pages except for Contact, Profile, Login and Signup page.<br>
![Website title](docs/images/sourdoughcircle_title.png)<br>

__Searchbar__

The searchbar, a function for the user to search and find posts in a simple way.
The searchbar is displayed on the main Home page where all users posts are displayed.<br>
![Searchbar](docs/images/searchbar.png)<br>


__Category filtering__

The category filtering is a filter the user can apply at the Homepage to quickly filter posts by category. The user can click on the dropdown list and in a simple way get all the posts related to one specific category.<br>
![Categories](docs/images/search_category.png)<br>

## Feed page

__The feed page consists of:__

__Feed posts__

The feed page is the page that collects the posts from the users followed profiles.
It's a simple and great way for the user to filter their feed and always be up to date with what their followers are posting.<br>
![Feed posts](docs/images/feed_following_posts.png)<br>

## Contact Page

__The Contact page consists of:__

__Contact form__

The contact form gives the user a way to contact the admin of the website if they have any questions, need help etc.
The contact form is always available in the navbar no matter if the user is authenticated or not, this to ensure that a user that has trouble with their login or signup easily can contact the admin to be assisted further with their technical issues.

The fields the user needs to fill in is:

    - Name
    - Subject
    - Email
    - Message


_Additional_: All of the fields are required to be filled in, if it's not the user will be prompted to fill in the field before sending. 
The email field needs to contain an email with @ in it to be sent.

A modal will appear when hitting the submit/send button to confirm that the message has been sent, the user can then choose to close the modal and stay on the contact page or hit the "back to feed" button and be sent back to the homepage.

__Purpose of feature:__
Provide users with a way to contact the admin and creator of the site when users need help, wants to ask questions or just vent their opinions.<br>

![Contact Page](docs/images/contact_page.png)<br>

## Sign in page

__The Sign in page consists of:__

__Sign in form__

The sign in form allows the user to enter their credentials and authenticate to enter the sites authenticated state.

The sign in form also contains a link to the [Sign up page](https://3000-hujanen91-sourdoughcirc-97h40xcm3uw.ws-eu114.gitpod.io/signup) in case the user is not already registered.

_Additional_: If the user enters the fields incorrectly or the user isn's recognized the're will be clear messages displaying to make the user aware.

__Purpose of feature:__
Provide users with a way to login to the site.<br>

![Login page](docs/images/signin_landingpage.png)<br>

## Sign up page

__The Register page consists of:__

__Sign up form__

The Sign up form which allows the user to enter credentials for registration on the site, 
it contains all the functionality for a secure registration and displays help text and error text to give the user feedback.

The sign up form also contains a link to the [Sign in page](https://3000-hujanen91-sourdoughcirc-97h40xcm3uw.ws-eu114.gitpod.io/signin) in case the user already has an account.

_Additional_: All of the fields are required to be filled in, if it's not the user will be prompted to fill in the field correctly before being able to sign up. 
The email field needs to contain an email with @ in it for the form to accept the sign up request.

__Purpose of feature:__
Provide users with a way to sign up to the site.

![Sign up page](docs/images/signup_landingpage.png)<br>

## Profile page

__The profile page consists of:__

__Profile page and avatar__

The profile page consists of the user avatar, a bio for the user to fill in and give everyone an image of who they are or what they like to post about.
A logged in user is presented with a button to "Follow" or "Unfollow" when navigating to another users profile.
The profile page also presents social media links so others can decide to follow them on other platforms. If a user does not add any socials the icons will be hidden.
The profile page also displays stats about the specific user such as posts posted, followers and how many the user is following.

__Purpose of feature:__
Provides the user with the function to express themselves, present themselves and display to other users who they are. For other users it's a way to get som information about the user and to see what that specific user has posted.

_Additional_: When a logged in user navigates to their own profile three dots will appear up at the top of the right corner of the profile container. Here the user can edit their profile information or delete th

Main view:
![Profile page](docs/images/profile_page.png)<br>
Other users profile with follow/unfollow button:<br>
![Profile page not user](docs/images/profile_page_notuser.png)<br>
Edit profile menu:<br>
![Profile edit options](docs/images/Profile_edit.png)<br>
Edit profile view:<br>
![Edit profile](docs/images/Profile_edit_page.png)<br>
Change username view:<br>
![Change username](docs/images/change_username.png)<br>
Change password view:<br>
![Change password](docs/images/change_password.png)<br>

## Create post

__The Create post page consists of:__

__Creat post field__

In the navbar there's a "Add post" text and icon for authenticated users.
Clicking this button will send the user to the creat post page where the user can upload images, add titel and description and add a category.
After posting the user is sent back to home page where the post is published at the top.

_Additional_: The user will be alerted when required fields are not filled in.
The user will also get an alert when they try to upload images that are too big.<br>

![Create post view](docs/images/post_creation_page.png)<br>
Requierd fields alerts:<br>
![Create post required fields](docs/images/Create_post_reqfields.png)<br>

## Post page

__The Post page consists of:__

__The post__

When clicking on a specific post the user will be sent to the Post page.
Here logged in users can comment and other users than the creator of the post can like the post.

_Additional_: 
The owner of the post has an option to click on three dots in the right upper corner to get the option to edit or delete their own posts.
The user will get alert messages if image is too big or Title isn't added, this function is identical to the Add post alerts.

__Purpose of feature:__
Provide the user with a detailed view of one specific post and to present the user with the comment field where they can interact and socialize with the post creator and other users.<br>

Post page view:<br>
![Post page view](docs/images/Post_page.png)<br>
Post edit menu:<br>
![Post edit menu](docs/images/post_page_edit.png)<br>
Post edit view:<br>
![Post edit view](docs/images/post_page_edit_view.png)<br>

__Comment section__

The comment section allows users to post comments on a post aswell as delete and edit their comment using the menu displayed to the right in the comment field.<br>

Comment section:<br>
![Comment section](docs/images/Comments_field.png)<br>
Comment edit menu:<br>
![Comment menu](docs/images/comment_edit_menu.png)<br>
Comment edit view:<br>
![Comment edit](docs/images/comment_edit_view.png)<br>

<hr>

__Additional functions non visible to users:__

__Infinite scroll__

Infinite scroll is a future that will fetch new posts from the api while the user scrolls to create an infinte scroll. This effect is applied to both posts page, feed, liked feed, comments feed and profile page feed.

# Reusability

## Component Reusability

1. **Asset.js:** This component displays a spinner wherever the page is loading in data, scr or messages that can be edited for the specific purpose in the specific .js component.<br>It can be reused wherever a spinner could be needed, where a scr needs to be called (a specific image for example) or when a message needs to be specified.<br>
From this component `Const Asset` is considered a reusable component and has been reused in:<br>

   NotFound.js, PostCreateForm.js, PostPage.js, PostsPage.js, PopularProfiles.js, ProfilePage.js to display a spinner whenever content is loading. <br>

2. **Avatar.js:** This component provides a form for handling the Avatar images.<br>
It can be reused whenever users need to add avatars or static images before a user or admin changes the image.<br>
From this component `Const Avatar` is considered a reusable component and has been reused in:<br>

   NavBar.js, Comment.js, CommentCreateForm.js, Post.js and Profile.js to handle and import the avatar for the user.<br>

3. **CategoryFilter.js:** This component incapsulates functionality that fetches categories from an API and displays them in a dropdown menu, allowing users to filter items based on the selected category.<br>
Can be reused in different situations where a drop down list with filtering for categories etc is needed.<br>
From this component `Const CategoryFilter` is considered a reusable component and has been reused in:<br>

   PostsPage.js to render the Category filtering of posts.<br>

4. **MoreDropdown.js:** This component are designed to be modular and configurable, which allows for easy reuse with different props and configurations.<br>
Can be reused as a simple dropdown menu in different scenarios for when users need to edit a comment, post, photos etc.<br>
From this component `const MoreDropdown` is considered a reusable component and has been reused in:<br>

   Comment.js, Post.js and ProfilePage.js to render the dropdown menu the enable the user to edit their data.<br>

5. **Navbar.js:** This component presents a form for users to update their passwords.<br>
It can be reused across different parts of the application where password updating functionality is needed.<br>
From this component `const NavBar` is considered a reusable component and has been reused in:<br>

   App.js to render the navbar on the entire website no matter what url path the user is currently located at.

6. **NotFound.js:** This component displays and handles the image and message that is displayed when information can't be found.<br>
From this component `const NotFound` has been used in App.js inside a path to display a "Not found" message when a user wants to use a path that doesn't exist. 
The `const NotFound` was also given a source of `NoResults` and this has been reused in:<br>

   PostsPage.js and ProfilePage.js to display an image and a message to the user when no posts can be found.<br>

7. **SignInForm.js:** This component displays and handles user sign in to the website.<br>
It can be reused in different scenarios such as Employee Portals, Admin Dashboard or in E-commerce stores for users to sign in to their accounts.<br>
From this component `function SignInForm` is considered a reusable component and has been used in:<br>

   App.js to render the SignInForm on the correct url path.<br>

8. **SignUp.js:** This component provides a way for users to register an account on the website.<br>
It can be reused in situations like event registrations, subscriptions or online course platforms for example.<br>
From this component `const SignUpForm` is considered a reusable component and has been used in:<br>

   App.js to render the SignInForm on the correct url path.<br>

9. **Comment.js:** This component is designed to display a comment with options to edit or delete it if the current user is the owner.<br>
This component can be reused in different contexts where similar functionality is needed such as blog post comments, forum threads or product reviews.<br>
From this component `const Comment` is considered a reusable component and has been reused in:<br>

   PostPage.js to fetch comments related to the specific post.<br>

10. **CommentCreateForm.js:** This component is designed to allow users to create new comments. It includes functionality to submit the comment, update the UI with the newly created comment, and reset the form state after submission.<br>
Can be used in the same scenarios and together with Comment.js.<br>
From this component `function CommentCreateForm` is considered a reusable component and has been reused in:<br>

   PostPage.js to render a form to create and post comments.<br>

11. **CommentEditForm.js:** This component allows users to edit existing comments. It provides functionality to update the comment's content and save those changes via an API request.<br>
Can be used in the same scenarios and together with Comment.js and CommentCreateForm.js.<br>
From this component `function CommentEditForm` is considered a reusable component and has been reused in:<br>

   Comment.js to render a form for editing the posted comment.<br>

12. **ContactForm.js:** This component is designed to facilitate user interactions for sending messages through a contact form. It handles form validation, submission via API, and displays success messages in a modal upon successful submission.<br>
Can be reused as Customer support portals, Feedback forms or Business inquiry forms.<br>
From this component `const ContactForm` is considered a reusable component and has been reused in:<br>

   App.js to fetch the ContactForm url path for the Contact Page.<br>

13. **Post.js:** This component is quite versatile and can be reused in various scenarios where displaying and interacting with posts is required.<br>
Can be reused as Blog post display, Forum threads or Portfolio showcases.<br>
From this component `const Post` is considered a reusable component and has been reused in:<br>

   PostPage.js and PostsPage.js to import all the data related to the specific post.<br>

14. **PostCreateForm.js:** This component is designed to facilitate the creation of new posts within an application. It includes form fields for entering a post title, content, an optional image upload, and selecting a category. Users can fill out these fields, upload an image if desired, and submit the form to create a new post.<br>
Can be used in Poll creation.<br>
From this component `function PostCreateForm` is considered a reusable component and has been reused in:<br>

   App.js to render the correct path url for the page that is presenting the Post Create form for creating a post.<br>

14. **PostEditForm.js:** This component is designed to handle the edit form of posts within an application. It includes form fields for entering a post title, content, an optional image upload, and selecting a category but with the option to edit them. Users can edit these fields, change image if desired, and resubmit the form to update the existing post.<br>
Can be used in Poll creation.<br>
From this component `function PostEditForm` is considered a reusable component and has been reused in:<br>

   App.js to render the correct path url for the page that is presenting the Post Edit form for editing an already existing post created with the PostCreateForm component.<br>

15. **PostPage.js:** This component serves as a detailed view for a specific post, displaying the post content along with its comments.<br>
Can be used as Event page, Recipe page, Article detail page.<br>
From this component `function PostPage` is considered a reusable component and has been reused in:<br>

   App.js to render a specific postPage with the users posts.<br>

16. **PostsPage.js:** This component is designed to display a list of posts based on different filters and conditions, such as categories, search queries, or user-specific feeds.<br>
Can be used as a Product listing page, Job listing page or Tutorial/Course directory.<br>
From this component `function PostsPage` is considered a reusable component and has been reused in:<br>

   App.js to render the PostsPage with every users posted posts.<br>

17. **PopularProfiles.js:** This component is designed to display a list of popular profiles, either in a compact format for mobile devices or a full format for larger screens.<br>
Can be used as a Featured authors section, Artist spotlight or Top contributors widget.<br>
From this component `const PopularProfiles` is considered a reusable component and has been reused in:<br>

   PostPage.js, PostsPage.js and ProfilePage.js to render the popular profiles field to the right of the main containers.<br>

18. **Profile.js:** This component is designed to render a user profile with options for following or unfollowing based on the current user's interaction status with the profile.<br>
Can be used as a Community memeber widget, Author card in blog posts, Participant list in events pages. <br>
From this component `const Profile` is considered a reusable component and has been reused in:<br>

   PopularProfiles.js tho render the profiles in the popular profiles field.<br>

19. **ProfileEditForm.js:** This component allows a user to edit their profile information, including their name, bio, social media links, and profile picture.<br>
Can be used as User account settings, Artist profile edit, Event organizers profile edit.<br>
From this component `const ProfileEditForm` is considered a reusable component and has been reused in:<br>

   App.js to fetch the correct url path and the view for the ProfileEditForm page. <br>

20. **ProfilePage.js:** This component is designed to display a user's profile information, including their profile picture, bio, social media links, follower counts, and their posts.<br>
Can be used as a Portfolio or Company page.<br> 
From this component `function ProfilePage` is considered a reusable component and has been reused in:<br>

  App.js to fetch the correct url path and the correct data and view for the Profile Page<br>

21. **UsernameForm.js:** This component allows users to change their username.<br>
Can be used in similar situations where a field of static information can be updated.<br>
From this component `const UsernameForm` is considered a reusable component and has been reused in:<br>

   App.js to fetch the correct url path and the correct data and view for the Username form used in the Change username page.<br>

22. **UserPasswordForm.js:** This component allows users to change their password. It integrates with React, React Bootstrap for UI components, and Axios for making HTTP requests.
Can be used in similar situations to give users the possibility to change/update secret data.<br> 
From this component `const UserPasswordForm` is considered a reusable component and has been reused in:<br>

   App.js to fetch the correct url path and the correct data and view for the user password form used in the Change password page.<br>

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

- **Mock Service Worker (MSW)**
  - Mocks HTTP requests in development and testing environments. Ideal for testing network request scenarios.

- **Scripts for Building, Testing, and Starting**
  - Specific scripts are defined for building, testing, and starting the application, particularly with Heroku deployment in mind.

- **Node.js and npm Versions**
  - The project specifies Node.js and npm versions to ensure a consistent environment setup.

Additionally, specific scripts were defined for building, testing, and starting the application, particularly with Heroku deployment in mind. The project also specifies Node.js and npm versions for consistent environment setup.

# Testing

## Manual testing


The SourcdoughCircle has gone through thorough manual testing that can be found here:
[Manual testing](testing.md)


## Performance and Validation


The SourcdoughCircle perfomance, best practice and validation reports can all be found here:
[Perfomance and Validation](testing.md#performance-and-validation)

# Known Bugs

<hr>

**Current Status**:<br> 
As of the latest deployment, no major bugs are deployed to the website. There's been a few during production that has been either temporarily solved or left as it is:<br>

- During production somehow the /Feed and /Likes searchfield and category filtering stopped working. 
Different AI:s was asked about the issue without any of them finding a solution that would work.
Console.logs and console.errors was used to try to pinpoint the issue but the API was fetching everything as it was supposed to.
My mentor looked at it for a moment and couldn't really see where the problem was due to the filtering and searchfield being defined in the same components as the <br>

<b><i>Solution:</i></b>
Due to the timelimit of this project this bug had to be either left as it was or hidden. I went with the last option and decided to hide the Searchbar and Category filtering on the /Feed and /Liked pages.
This solution felt like the better one so that the page did not contain non functional features for the users.
The Homepage still has these futures and they are working perfectly on that page and is fetching the right data.

- The like and comment count on /Feed and /Liked page also stopped working probably at the same time as the previus bug above. The icons are displayed just as they should and the like button is clickable and is acting as it should. 
The comment count on the other hand is not working as it should and is not displaying. 
If a user likes the post and then unlike it the word "NaN" is appearing next to the like icon. The "NaN" will then be gone if the user updates the page and the icon will still be marked as "liked".<br>

<b><i>Solution:</i></b>
This has been left as it is due to the timelimit but also due to it not being such an extreme bug and it functions as it should apart from not displaying the numbers.

**Devtools**

<b><i>Websocket warning:</i></b>
A websocket warning is happening in the console in devtools. After searching in Slack for this issue I found out it is a known bug and something with some packages in the background non reachable to the user.
Different solutions was tested withouth any success.<br>
![Websocket warning](docs/images/Websocket_error.png)<br>

# Deployment

## Heroku

This project is deployed on Heroku, a cloud platform service that enables easy deployment and scaling for web applications. The deployment process includes the following steps:

### Initial Setup

1. **Create a Heroku Account**: Sign up for a Heroku account at [Heroku's website](https://www.heroku.com/).
2. **Install Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) to interact with Heroku from your local machine.

### Preparing the Application

1. **Procfile**: Create a `Procfile` in your project root directory. This file tells Heroku how to run your application.
2. **Requirements.txt**: Ensure you have a `requirements.txt` file listing all project dependencies.
3. **Config Vars**: Set up necessary configuration variables in Heroku (like `SECRET_KEY`, database URL, etc.).

### Deployment

1. **Create a Heroku App**: Use the Heroku CLI to create a new app.
2. **Add Buildpacks**: If necessary, add the correct buildpacks via the Heroku dashboard or CLI.
3. **Deploy**: Push your code to Heroku either by connecting your GitHub repository to Heroku or using the Heroku CLI to deploy your application.
4. **Database Migration (if applicable)**: Run database migrations using the Heroku CLI.

### Final Steps

1. **Enable the Web Dyno**: Make sure the web dyno is up and running after deployment.
2. **Open the App**: You can open your application from the Heroku dashboard or using the CLI command `heroku open`.

For more detailed instructions and troubleshooting, visit the official [Heroku Dev Center](https://devcenter.heroku.com/).

## Forking the GitHub Repository
<hr>
Forking the GitHub repository allows you to make a copy of the original project on your own GitHub account, enabling you to make changes without affecting the original. Here's how to do it:

1. **Go to the Repository**: Navigate to the original repository on GitHub.
2. **Fork the Repository**: Click the 'Fork' button, located at the top right of the repository page. This creates a copy of the repository in your GitHub account.
3. **Clone Your Fork**: Once forked, you can clone your fork to your local machine for further development.

## Making a Local Clone

Cloning a GitHub repository creates a local copy on your machine, allowing you to sync between the two locations. Here are the steps:

1. **Clone the Repository**: On the GitHub repository page, click the 'Code' button and copy the URL under 'Clone with HTTPS'.
2. **Open Terminal**: Open your terminal and navigate to the directory where you want the clone to be created.
3. **Clone Command**: Type `git clone`, and then paste the URL you copied in Step 1. Press Enter to create your local clone.

# Credits

The following sources and references were resorted for the creation of this website:<br>

- The lessons and tutorials provided by Code Institute, on the final module entitled "Django REST Framework" for the 'Advanced Front-End' specialization<br>
- Modal pop up in ContactForm:<br>
https://react-bootstrap.netlify.app/docs/components/modal/

- I have been getting insperation from following users:<br>
[Gareth McGirr](https://github.com/Gareth-McGirr),<br>
[Hannibani](https://github.com/Haniibani),<br>
[TiagoMA90](https://github.com/TiagoMA90),<br>
[Cushione](https://github.com/Cushione)<br>



## Content

This project has benefited from several educational resources and example projects provided by the Code Institute throughout the course of my bootcamp. The following projects deserve special mention for their direct impact on the development of this application:

- **Django REST Framework Example Project**: A practical example provided by the Code Institute that guided the development of Web APIs using Django REST framework. This project served as a template for best practices in API development with Django and Python.

- **Moments Project**: Another resource from the Code Institute, the Moments project was instrumental in illustrating the development of a full-stack application with a focus on user experience. Various aspects of its design and functionality have been adapted and incorporated into this project.

## Media

- Stock images for profile pictures from:<br> 
https://www.pexels.com/
- Font style from:<br>
https://fonts.google.com/specimen/Barlow?query=Barlow
- Image of Barlow font:<br> 
https://www.fontpair.co/fonts/barlow
- SourdoughCircle icons:<br>
https://www.flaticon.com/authors/mangsaabguru
- Other Icons:<br>
https://www.flaticon.com

# Acknowledgements:

- My mentor [Gareth McGirr](https://github.com/Gareth-McGirr) for his continuing support and great advice throughout this project and all my other projects in this entire course at Code Institute.

- The Code Institute community at Slack that always have people ready to help and more specific the #community-sweden channel with all the amazing people that I have both talked to in the channels but also met in real life for some irl study sessions, you guys are amazing and made this entire course easier and more fun to push through!