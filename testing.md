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
| Liking a post on home page                            | Like count increases and like button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/like_count_home_increase.gif)            |
| Unliking a post on home page                          | Like count decreases and like button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/like_count_home_decrease.gif)            |
| Liking a post on post page                            | Like count increases and like button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/Like_like_in_post.gif)            |
| Unliking a post on post page                          | Like count decreases and like button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/Like_ulike_in_post.gif)            |
| Liking a post on /Feed and /Liked page                | Like count increases and like button changes                                                       |  FAILED/BUG  | [Recording](docs/testinggifs/Like_error_increase_likedpage.gif)            |
| Unliking a post on /Feed and /Liked page              | Like count decreases and like button changes                                                       |  FAILED/BUG  | [Recording](docs/testinggifs/Like_error_decrease_likedpage.gif)            |

## Navigation

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Buttons in navbar                                     | The buttons on the landing page navigate to the correct page                                       | ✅ PASS     | [Recording](docs/testinggifs/navbar_alllinks_path.gif) |
| Open the Homepage unauthenticated                     | Homepage loads and displays posts                                                                  | ✅ PASS     | [Recording](docs/testinggifs/clicking_home_loggedout.gif) |
| Open the Feed without following users                 | Feed loads and displays hint to follow members                                                     | ✅ PASS     | [Recording](docs/testinggifs/Navigation_feed_withoutfollowing.gif)       |
| Open the Feed when following users                    | Feed loads and displays the followed users posts                                                   | ✅ PASS     | [Recording](docs/testinggifs/Navigation_feed_withfollowing.gif)            |
| Open the Like page without liked posts                | Liked page loads and displays hint to like posts                                                   | ✅ PASS     | [Recording](docs/testinggifs/Navigation_liked_withoutfollowing.gif)              |
| Open the Like page with liked posts                   | Liked page loads and displays the liked posts                                                      | ✅ PASS     | [Recording](docs/testinggifs/Navigation_liked_withfollowing.gif)              |
| Open the Contact page                                 | Contact page and the contact form opens                                                            | ✅ PASS     | [Recording](docs/testinggifs/Contact_opencontact.gif)       |
| Open profile page                                     | Clicking on profile page in navbar opens the profile                                               | ✅ PASS     | [Recording](docs/testinggifs/Profile_navigate_to.gif)               |
| Clicking the logo in navbar loads home page           | Clicking the logo in the navbar sends the user to home page                                        | ✅ PASS     | [Recording](docs/testinggifs/logo_home.gif)               |
| Profile in navbar sends user to their profile         | Clicking on profile page in navbar opens the profile                                               | ✅ PASS     | [Recording](docs/testinggifs/Profile_navigate_to.gif)               |
| Profile images on posts sends users to the profile    | Clicking on profile image in posts opens the profile                                               | ✅ PASS     | [Recording](docs/testinggifs/Navigation_profilepic_inpost_sendtoprofile.gif)               |
| Profile images in top followed users go to profile    | Clicking on profile image in most followed profiles opens the profile                              | ✅ PASS     | [Recording](docs/testinggifs/Navigation_profilepic_inpopular_sendtoprofile.gif)               |

## Profiles

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Open Profile                                          | Opens Profile Page with correct data                                                               | ✅ PASS     | [Recording](docs/testinggifs/Navigation_profilepic_inpopular_sendtoprofile.gif)         |
| Open owner Profile                                    | Opens owner Profile Page with correct data                                                         | ✅ PASS     | [Recording](docs/testinggifs/Profile_navigate_to.gif)     |
| Edit Profile                                          | If data is valid, form is submitted, the profile is updated and the user is redirected to profile  | ✅ PASS     | [Recording](docs/testinggifs/Profile_editprofile.gif)         |
| Edit username                                         | If data is valid, form is submitted, the username is updated and the user is redirected to profile | ✅ PASS     | [Recording](docs/testinggifs/Profile_editusername.gif)     |
| Change password                                       | If data is valid, form is submitted, the password is updated and the user is redirected to profile  | ✅ PASS     | [Recording](docs/testinggifs/Profile_editpassword_correctdata.gif)         |
| Open Profile through url                              | Opens Profile Page with correct data                                                               | ✅ PASS     | [Recording](docs/testinggifs/profile_url.gif)         |

## Posts

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Create a Post with valid data                         | Request is successful, post is created and user is redirected to profile                           | ✅ PASS     | [Recording](docs/testinggifs/Post_createpost_correctdata.gif)          |
| Create a Post with invalid data                       | Request fails, form shows error                                                                    | ✅ PASS     | [Recording](docs/testinggifs/Post_createpost_incorrectdata.gif)          |
| Edit a Post with valid data                           | Request is successful, post is updated and user is redirected to post detail                       | ✅ PASS     | [Recording](docs/testinggifs/Post_editpost_correctdata.gif)            |
| Edit a Post with invalid data                         | Request fails, form shows error                                                                    | ✅ PASS     | [Recording](docs/testinggifs/Post_editpost_incorrectdata.gif)            |
| Delete a Post                                         | Request is successful, Post is deleted and user is redirected to profile                           | ✅ PASS     | [Recording](docs/testinggifs/Post_delete.gif)          |
| Open a post by clicking                               | Post Detail page loads with correct data                                                           | ✅ PASS     | [Recording](docs/testinggifs/Post_openpost.gif)            |
| Open a post through url                               | Post Detail page loads with correct data                                                           | ✅ PASS     | [Recording](docs/testinggifs/Post_openpost_url.gif)            |
| Search posts invalid data                             | Page is loading and displays hint to adjust searchword                                             | ✅ PASS     | [Recording](docs/testinggifs/Posts_searchbar_invalid.gif)            |
| Search posts valid data                               | Page is loading and displays posts with searchword                                                 | ✅ PASS     | [Recording](docs/testinggifs/Posts_searchbar_valid.gif)            |

## Followers

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Follow Profile from profile page                      | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/follow_followfrom_profile.gif)       |
| Unfollow Profile from profile page                    | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/follow_unfollowfrom_profile.gif)       |
| Follow Profile from popular profiles container        | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/follow_followfrom_PopProfiles.gif)       |
| Unfollow Profile from popular profiles container      | Request is successful, Follow button changes                                                       | ✅ PASS     | [Recording](docs/testinggifs/follow_unfollowfrom_PopProfiles.gif)       |

## Category

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Filtering categories valid                            | Request is successful, posts with filtered categories are fetched                                  | ✅ PASS     | [Recording](docs/testinggifs/Category_valid_option.gif)       |
| Filtering categories invalid                          | Request is fails, displays hint to adjust searchword                                               | ✅ PASS     | [Recording](docs/testinggifs/Category_invalid.gif)       |
| Filtering categories All categories                   | Request is successful, all posts are loaded again                                                  | ✅ PASS     | [Recording](docs/testinggifs/Category_reset_loadsallposts.gif)       |

## Contact

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| All fields are filled in                              | Request is successful, user can send form                                                          | ✅ PASS     | [Recording](docs/testinggifs/contact_correctdata_msg.gif)         |
| Not all fields are filled in                          | Request fails, form loads with data and errors                                                     | ✅ PASS     | [Recording](docs/testinggifs/contact_incorrectdata_msg.gif) |
| Modal when sending message                            | Request is successful, user is presented with a modal that the message has been sent               | ✅ PASS     | [Recording](docs/testinggifs/contact_correctdata_msg.gif)     |
| Modal "back to feed" button                           | Request is successful, user is sent back to home feed                                              | ✅ PASS     | [Recording](docs/testinggifs/contact_modal_backtofeed.gif)      |
| Modal close button form is reset                      | Request is successful, modal is closed and form is reset                                           | ✅ PASS     | [Recording](docs/testinggifs/contact_modal_close.gif)        |


## Authentication

| Testcase                                              | Expected Result                                                                                    | Test Result | Recording                                        |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------ |
| Register a user with valid data                       | Request is successful, user is registered and sent to login                                        | ✅ PASS     | [Recording](docs/testinggifs/signup_correctdata_fields.gif)     |
| Register a user with invalid data                     | Request fails, form loads again with data and errors                                               | ✅ PASS     | [Recording](docs/testinggifs/signup_invalid_data.gif)      |
| Login a user with valid data                          | Request is successful, user is logged in                                                           | ✅ PASS     | [Recording](docs/testinggifs/signin_correctdata.gif)        |
| Login a user with invalid data                        | Request fails, form loads again with data and errors                                               | ✅ PASS     | [Recording](docs/testinggifs/signin_incorrectdata.gif)         |
| Logout a user                                         | Request is successful, user is logged out                                              | ✅ PASS     | [Recording](docs/testinggifs/Authentication_signout_user.gif)         |

## Conclusion

This frontend testing documentation presents a comprehensive review of key functionalities within the Caption of the Day platform, ensuring that user experiences align with the project's goals and user stories. Through a combination of manual and automated testing strategies, we have validated the platform's readiness for public release, ensuring a reliable, efficient, and user-friendly environment for our community.


# Perfomance and Validations

As part of our commitment to excellence, I conducted an in-depth performance and best practices analysis using Lighthouse. My analysis revealed several insights:
[Perfomance](testing.md)

![Lighthouse report]()

- **Performance**: This score prompted me to look into optimization opportunities. I'm currently focusing on improving the Time to Interactive and Speed Index by optimizing images and reducing JavaScript size for a faster, more responsive experience.


[Back to Readme](README.md#testing)