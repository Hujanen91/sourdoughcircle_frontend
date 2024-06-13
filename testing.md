[Back to Readme](README.md#testing)

# Table of Contents

* [Manual testing](#manual-testing)
  * [Comments](#comments)
  * [Likes](#likes)
  * [Navigation](#navigation)
  * [Profiles](#profiles)
  * [Contact](#contact)
  * [Posts](#posts)
  * [Followers](#followers)
  * [Authentication](#authentication)
  * [Conclusion](#conclusion)
* [Perfomance and Validations](#perfomance-and-validations)

# Manual testing

This section outlines the approach and results of testing the frontend features of the Caption of the Day platform. Each test case is designed to validate the functionality and user experience against the specified requirements and user stories.

## Comments

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Writing a comment                                     | Request is successful, comment is added to the list, message is shown                              | ✅ PASS     | [Recording](docs/testinggifs/comment_create.gif)          |
| Editing a comment                                     | Request is successful, comment content is updated, message is shown                                | ✅ PASS     | [Recording](docs/testinggifs/comment_edit.gif)         |
| Delete a comment                                      | Request is successful, comment is deleted, message is shown                                        | ✅ PASS     | [Recording](docs/testinggifs/Comment_deletecomment.gif)       |
| Comment count increase                                | New comments will increase the comment count                                                       | ✅ PASS     | [Recording](docs/testinggifs/comment_count_increase.gif)          |
| Comment count decrease                                | Deleting comments will decrease the comment count                                                  | ✅ PASS     | [Recording](docs/testinggifs/comment_count_decrease.gif)         |
| Comment count /Feed                                   | Like count decreases and like button changes                                                       | FAILED/BUG   | [Recording](docs/testinggifs/comment_count_feed_error.gif)            |
| Comment count /Liked                                  | Comment count should display in Liked page                                                         | FAILED/BUG  | [Recording](docs/testinggifs/comment_count_feed_error.gif)            |

## Likes

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Liking a post on home page                            | Like count increases and like button changes                                                       | ✅ PASS     | [Recording](docs/)            |
| Unliking a post on home page                          | Like count decreases and like button changes                                                       | ✅ PASS     | [Recording](docs/)            |
| Liking a post on post page                            | Like count increases and like button changes                                                       | ✅ PASS     | [Recording](docs/)            |
| Unliking a post on post page                          | Like count decreases and like button changes                                                       | ✅ PASS     | [Recording](docs/)            |
| Liking a post on /Feed page                           | Like count increases and like button changes                                                       |  FAILED/BUG  | [Recording](docs/)            |
| Unliking a post on /Feed page                         | Like count decreases and like button changes                                                       |  FAILED/BUG  | [Recording](docs/)            |
| Liking a post on /Liked page                          | Like count increases and like button changes                                                       |  FAILED/BUG  | [Recording](docs/)            |
| Unliking a post on /Liked page                        | Like count decreases and like button changes                                                       |  FAILED/BUG  | [Recording](docs/)            |

## Navigation

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Buttons in navbar                                     | The buttons on the landing page navigate to the correct page                                       | ✅ PASS     | [Recording](docs/) |
| Open the Homepage unauthenticated                     | Homepage loads and displays posts                                                                  | ✅ PASS     | [Recording](docs/) |
| Open the Feed without following users                 | Feed loads and displays hint to follow members                                                     | ✅ PASS     | [Recording](docs/)       |
| Open the Feed when following users                    | Feed loads and displays the followed users posts                                                   | ✅ PASS     | [Recording](docs/)            |
| Open the Like page without liked posts                | Liked page loads and displays hint to like posts                                                   | ✅ PASS     | [Recording](docs/)              |
| Open the Like page with liked posts                   | Liked page loads and displays the liked posts                                                      | ✅ PASS     | [Recording](docs/)              |
| Open the Contact page                                 | Contact page and the contact form opens                                                            | ✅ PASS     | [Recording](docs/)       |
| Open profile page                                     | Clicking on profile page in navbar opens the profile                                               | ✅ PASS     | [Recording](docs/)               |
| Clicking the logo in navbar loads home page           | Clicking the logo in the navbar sends the user to home page                                        | ✅ PASS     | [Recording](docs/)               |
| Profile in navbar sends user to their profile         | Clicking on profile page in navbar opens the profile                                               | ✅ PASS     | [Recording](docs/)               |
| Profile images on posts sends users to the profile    | Clicking on profile image in posts opens the profile                                               | ✅ PASS     | [Recording](docs/)               |
| Profile images in top followed users go to profile    | Clicking on profile image in most followed profiles opens the profile                              | ✅ PASS     | [Recording](docs/)               |

## Profiles

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Open Profile                                          | Opens Profile Page with correct data                                                               | ✅ PASS     | [Recording](docs/)         |
| Open owner Profile                                    | Opens owner Profile Page with correct data                                                         | ✅ PASS     | [Recording](docs/)     |
| Edit Profile                                          | If data is valid, form is submitted, the profile is updated and the user is redirected to profile  | ✅ PASS     | [Recording](docs/)         |
| Open Profile through url                              | Opens Profile Page with correct data                                                               | ✅ PASS     | [Recording](docs/)         |

## Posts

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Create a Post with valid data                         | Request is successful, post is created and user is redirected to profile                           | ✅ PASS     | [Recording](docs/)          |
| Create a Post with invalid data                       | Request fails, form shows error                                                                    | ✅ PASS     | [Recording](docs/)          |
| Edit a Post with valid data                           | Request is successful, post is updated and user is redirected to post detail                       | ✅ PASS     | [Recording](docs/)            |
| Edit a Post with invalid data                         | Request fails, form shows error                                                                    | ✅ PASS     | [Recording](docs/)            |
| Delete a Post                                         | Request is successful, Post is deleted and user is redirected to profile                           | ✅ PASS     | [Recording](docs/)          |
| Open a post by clicking                               | Post Detail page loads with correct data                                                           | ✅ PASS     | [Recording](docs/)            |
| Open a post through url                               | Post Detail page loads with correct data                                                           | ✅ PASS     | [Recording](docs/)            |
| Search posts invalid data                             | Page is loading and displays hint to adjust searchword                                             | ✅ PASS     | [Recording](docs/)            |
| Search posts valid data                               | Page is loading and displays posts with searchword                                                 | ✅ PASS     | [Recording](docs/)            |

## Followers

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Follow Profile from profile page                      | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/)       |
| Unfollow Profile from profile page                    | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/)       |
| Follow Profile from popular profiles container        | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/)       |
| Unfollow Profile from popular profiles container      | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/)       |

## Category

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Filtering categories valid                            | Request is successful, posts with filtered categories are fetched                                  | ✅ PASS     | [Recording](docs/)       |
| Filtering categories invalid                          | Request is fails, displays hint to adjust searchword                                               | ✅ PASS     | [Recording](docs/)       |
| Filtering categories All categories                   | Request is successful, all posts are loaded again                                                  | ✅ PASS     | [Recording](docs/)       |

## Contact

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| All fields are filled in                              | Request is successful, user can send form                                                          | ✅ PASS     | [Recording](docs/)         |
| Not all fields are filled in                          | Request fails, form loads with data and errors                                                     | ✅ PASS     | [Recording](docs/) |
| Modal when sending message                            | Request is successful, user is presented with a modal that the message has been sent               | ✅ PASS     | [Recording](docs/)     |
| Modal "back to feed" button                           | Request is successful, user is sent back to home feed                                              | ✅ PASS     | [Recording](docs/)      |
| Modal close button form is reset                      | Request is successful, modal is closed and form is reset                                           | ✅ PASS     | [Recording](docs/)        |


## Authentication

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Register a user with valid data                       | Request is successful, user is registered and sent to login                                        | ✅ PASS     | [Recording](docs/)     |
| Register a user with invalid data                     | Request fails, form loads again with data and errors                                               | ✅ PASS     | [Recording](docs/)      |
| Login a user with valid data                          | Request is successful, user is logged in                                                           | ✅ PASS     | [Recording](docs/)        |
| Login a user with invalid data                        | Request fails, form loads again with data and errors                                               | ✅ PASS     | [Recording](docs/)         |
| Logout a user                                         | Request is successful, user is logged out                                              | ✅ PASS     | [Recording](docs/)         |

## Conclusion

This frontend testing documentation presents a comprehensive review of key functionalities within the Caption of the Day platform, ensuring that user experiences align with the project's goals and user stories. Through a combination of manual and automated testing strategies, we have validated the platform's readiness for public release, ensuring a reliable, efficient, and user-friendly environment for our community.


# Perfomance and Validations

As part of our commitment to excellence, I conducted an in-depth performance and best practices analysis using Lighthouse. My analysis revealed several insights:
[Perfomance](testing.md)

![Lighthouse report](src\assets\Performance.png)

- **Performance**: This score prompted me to look into optimization opportunities. I'm currently focusing on improving the Time to Interactive and Speed Index by optimizing images and reducing JavaScript size for a faster, more responsive experience.


[Back to Readme](README.md#testing)