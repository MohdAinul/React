useEffect is a React Hook used to perform side effects in functional components.

Side effects =

API calls
timers
subscriptions
DOM manipulation

basic syntax

```useEffect(() => {
// side effect code
}, [dependencies]);
```

callback → kya kaam karna hai
dependency array → kab chalana hai

````
case 1:- useEffect(() => {
console.log("runs every render");
});```

```case 2:- useEffect(() => {
console.log("runs once");
}, []);```

Sirf first render pe chalega

👉 Mostly used for API calls

case 3:-
```
useEffect(() => {
console.log("runs when count changes");
}, [count]);```

Jab count change hoga tab chalega

Real Example :
```
useEffect(() => {
fetch("/api/user")
.then(res => res.json())
.then(data => setUser(data));
}, []);
```

### This useEffect hook is used to fetch user data when the component mounts. The empty dependency array ensures it runs only once. The fetch call returns a promise, which resolves to a response object. We then parse the response using res.json(), which returns another promise containing the actual data. Finally, we update the state using setUser, which triggers a re-render to display the fetched data.

### Mounting is the phase when a React component is created and added to the DOM for the first time. Unmounting is when the component is removed from the DOM. We often use useEffect to run logic on mount and return a cleanup function to handle unmounting, such as clearing timers or subscriptions.

👉 Mount = appear on screen
👉 Unmount = removed from screen
````
