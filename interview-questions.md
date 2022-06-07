# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer:
  Props, or properties, are objects from a parent component that are passed down to a child component when the child component is invoked. While making a tic-tac-toe game I had a specific state within a parent component I needed a child component to know the value of. I passed the state to the child component from within the invocation. Once it was passed, I went to the child component and called the passed state using this.props.state. Properties are very useful in that it allows a component to be used in different ways with little to no modification of the component's code.

  Researched answer:
  Props is a keyword in React that is used pass properties from a parent component to a child component. While making a tic-tac-toe game I had a specific state within a parent component I needed a child component to know the value of. I invoked the child component and passed it a state by giving a variable the property of this.state.blank. Once it was passed, I went to the child component and called the passed state using this.props.state. Properties are very useful in that it allows a component to be used in different ways with little to no modification of the component's code.


2. What is a DOM event?

  Your answer:
  A DOM event are instances in the DOM's lifecycle which include mounting, updating, and unmounting.

  Researched answer:
  DOM events in React are actions that could be triggered as a result of a user interacting with a website. A common one I have used in class projects are onClick. In a tic-tac-toe game I made, a user clicking on an empty square would trigger it to change from empty to an X. If you click on it again, the logic behind the onClick would see that it is already occupied and send an alert to the user to pick an empty square.



3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  Object-oriented programming are programing frameworks that revolve over everything being an object. You begin with a class which would be the ideal baseline of what a certain object would look like and what they all have in common. From there, objects belonging to that class will have the same properties of the parent class, except for whatever additional changes the developer wants for the object. 
  
  Functional programming is different in that it takes code and processes it straight from top to bottom whereas object-oriented programming will call upon different objects, back and forth, that are often nested into other objects.

  Researched answer:
  Object-oriented programming are programing frameworks that revolve over everything being an object. You begin with a class which would be the ideal baseline of what a certain object would look like and what they all have in common. From there, objects belonging to that class will have the same properties of the parent class, except for whatever additional changes the developer wants for the object.

  Functional programming is different in that variables and functions are the main elements of the framework. Functions execute particular tasks and can be invoked and reused.


4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
  An integer is a data class that is a whole number while a float is a data class that is a number with a decimal point. They are not necessarily interchangeable and can return unexpected results if they are used in type coercion.

  Researched answer:
  An integer is a data class that is a whole number while a float is a data class that is a number with a decimal point. They are not necessarily interchangeable and can return unexpected results if they are used in type coercion. For example, if you divide 5 by 50, you get a return of 0. Ruby assumes that because you are using integers that you want an integer as a return. If you were to divide 5.0 by 50.0, or even 5.0 by 50, you will get a return of 0.1.


5. Ruby has an implicit return. What does that mean?

  Your answer:
  An implicit return in Ruby is that with the way the syntax is written, a return is understood and not needed to be explicitly stated in the intended return line. Methods are written like, "given this data, do this." Ruby looks at the developer's code and understands what portion of it it is expected to return.

  Researched answer:
  An implicit return is a function of Ruby in that it will return the value of the last line automatically. Returns can use an explicit return by writing it into the code. It can have some unintended results such as stopping a method in the middle of a conditional statement.



## Looking Ahead: Terms for Next Week

1. Instance Variable: a variable that's locally scoped to the class it belongs to

2. PostgreSQL: an open-source relational database system

3. Ruby on Rails: an open-source web app development framework written in Ruby

4. ORM: Object-relational mapping is a programming technique for converting data between incompatible type systems using object-oriented programming languages

5. Active Record: a type of ORM. 
