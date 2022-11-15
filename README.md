# tribehired_test

All of the logic code is in the controllers folder.
## Question 1
The screenshot of question 1: seems like all the post have the same number of commment.
![question1](https://user-images.githubusercontent.com/55307820/202038443-fe527bc2-2d88-4734-b475-d0a0638306e1.png)



## Question 2
The screenshot of question 2: The search is done by inputting the value through the link 
#### Example: 
if the user want the comment from the field of postId=1 then this is the way to input the = http://localhost:8080/question-2?postId=2
#### Example: 
if the user want the specific field "comment body"  = http://localhost:8080/question-2?body=xxxxxx
#### Example: 
if the user want to search from multiple field  = http://localhost:8080/question-2?postId=2&body=sapiente&email=Meghan&id=9&name=provident

NOTE: if there are no params given such as http://localhost:8080/question-2, then it will display all comment.



Demo 1: postId, body=sapient, email=Meghan, id=9, name=provident
![question 2](https://user-images.githubusercontent.com/55307820/202039486-c03cd4bf-1703-4003-98f5-c59882592c2a.png)

Demo 2: email=Meghan@akeem.tv
![question 2](https://user-images.githubusercontent.com/55307820/202039776-3dc36555-0921-4815-91e0-7ed001654dba.png)
