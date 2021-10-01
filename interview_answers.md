# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    What is a stateful component?
    - A React component that holds state. It holds data that we can pass around and mutate. 
    What is a functional component?
    - A React lego piece that takes in props and returns JSX definitions.
    What are the main differences?
    - They both can hold state. They can create, and mutate it. The difference is functional components return JSX.. and stateful components handle non-visual behavior. 
2. When does a componentWillMount function be called? What about a componentWillUpdate?
    What are the stages of the React lifecycle?
    - Mounting, Updating, Unmounting // Birth, Life, Death

    - componentDidMount function is called after components have been rendered. Its called immediately after, and happens during the Mounting stage of a components lifecycle.

    - componentWillUpdate is called before Mounting stage. When props are passed to this component, or state is changed, this will be method will be invoked. 

3. Define stateful logic.
    - Any code used to create or manipulate data. Logic that is built into a component. It can be a function that handles user events, adjusts state, or formats data before displaying it. 

4. What are the three step of creating a successful test? What is done in each phase?
    - Arrange: 
    - Act
    - Assert 
