# MovieListWithRedux

   The TMDB app was given to me to assess my technical skills as a reactive developer.


#Application which meets the following criteria:

#Technical Requirements: 
    1. The app can be written using ReactNative.
    2. Use Redux for State ManagementSave the email and password using State Management. 
    3. If there is no state, show LoginScreen. 
    4. If user has already entered Email and Password and proceeded to MovieScreen, then MovieScreen will be shown on app open.
    
#Functional Requirements:
   
     LoginScreen :
      * Form contains two text fields: one is email and other one is passwordEmail must be valid email addressPassword size limitation between 8 - 15               characters(Alpha Number with at least one Capital Letter and 1 Special Character)Submit button to be enabled only in case of email & password are           valid otherwise it will be disabledOnce Submit button is active move to next screen without any Remote API Call. 
     MovieScreen:
       * Using Restful Web APIs load the list of popular Movies on this screen in a grid view with number of columns as 
       * Each Item contains the name and image. Name to be taken from the “title” and image from “poster_path” from the response. 
       * For Screen 2 you will need to create a free account on https://www.themoviedb.org and use their APIs to load the list of Popular                             Movies.https://developers.themoviedb.org/3/movies/get-popular-movies.  
 
 
 #Notes: 

          Feel free to use any design template that follows the modern material design language.App should be bi-lingual. 
          Use Google Translate to add Arabic Translations.
          The source code should be posted in a public repository under your personal GitHub account.
          The task should be submitted with the URL of the Github Repository.


#Step to run application: 

         1. Clone from https://github.com/biplovNagarro/MovieListWithRedux.git
         2. cd MovieListWithRedux
         3. Install Node Modules
         4. Run the application with yarn ios/android.


#Done Tasks application: 
     
       1. Created Language change screen
       2. Created Login screen
       3. Created Movie screen
       4. Done Redux setup
       5. Added multi language in app.
       6. created splash and app icon for both platform.
       7. Save user data and saved language in redux
       8. If user save their data then 2 nd time app will be open from movie screen.
       9. Created components mostly, so that code will be re usable.
      10.Uses callback in some places so that prevent re-0rendering again and again
      11. Done login all validation with regex also
      12. Written some unit test cases.
      13. Using Restful Web APIs load the list of popular Movies on this screen in a grid view with number of columns as 2.
          Each Item contains the name and image. Name to be taken from the “title” and image from “poster_path” from the response. 
        14. time to time git commit so that backup code easily.
        15. Comment given and pushed code on Public repo.




        Thanks and regard 
        Biplov Kumar





