# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    What is a stateful component?
    - A React component that holds state. It holds data that we can pass around and mutate. 
    What is a functional component?
    - A React lego piece that takes in props and returns JSX definitions.
    What are the main differences?
    - Functional components do not have state or lifecycle methods. Stateful components like classes create and manipulate stored data with logic.  

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    What are the stages of the React lifecycle?
    - Mounting, Updating, Unmounting // Birth, Life, Death

    - componentDidMount function is called after components have been rendered. Its called immediately after, and happens during the Mounting stage of a components lifecycle.

    - componentWillUpdate is called before Mounting stage. When props are passed to this component, or state is changed, this will be method will be invoked. 

3. Define stateful logic.
    - Any code used to create or manipulate data. Logic that is built into a component. It can be a function that handles user events, adjusts state, or formats data before displaying it. 

4. What are the three step of creating a successful test? What is done in each phase?
    - Arrange: Layout which inputs and targets will be be in focus. Set up the test case. This means including any special objects or settings, and could mean prepping a database. 
    - Act: Interact with the target to elicit specific behavior. This step should cover the main thing to be tested. 
    - Assert: Veryify the goodness or badness of the responses brought about in the Act step. Determine whether a test passes or    fails. 
