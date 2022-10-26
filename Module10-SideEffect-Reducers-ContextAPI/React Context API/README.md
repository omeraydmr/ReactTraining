# Some Notes About Context
- React Contaxt is not for the high frequency changes
- It shouldn't5 use for the change all coponents

## Rules of Hooks
- Hooks just can callable in function
- Just exportable componenets NOT outer functions
- Hooks only call at the top of the React components
- You cannot call hooks inside of another hook
- You should add all dependencies to useEffect hook for better usage of that hook
- You should not add state setters to useEffect hook's dependencies

