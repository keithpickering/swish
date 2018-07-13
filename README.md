CUSTOMIZATION
-------------
To significantly customize the visual aspects of this page, you will need to run some simple console commands to set up the SASS compilation. Steps to do so are listed below:

1. Make sure you have NodeJS and NPM (Node Package Manager) installed and working.

2. Extract the theme files to a folder, and open a console/command prompt window in that folder.

3. Type `npm install` and press enter. This will install the necessary dependencies.

4. Type `grunt watch` and press enter. The theme files are now being watched for changes.

5. The SASS files can be found in `src/scss/`. You can easily customize the colors in the `_variables.scss` file. After you make your changes, save the file and the CSS should be automatically compiled. At this point, the `dist` folder will contain your customized version of the page.