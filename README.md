# CreateComponentPage
This module will create the components and pages structure required for candidly

Steps for using this program

1.) install the prompt-sync

	yarn add prompt-sync
	yarn add replace-in-file

2.) place the whole folder Tasks inside the project in the same directory level of package.json

3.) use the following command to create the component or page

	to create component	->  node Tasks/tasks/component/create.js
	to create page 		->  	node Tasks/tasks/page/create.js


* The components and pages folder should be present in the src folder.
* Add this folder path in the git ignore so that this folder does not added in the git repository.
