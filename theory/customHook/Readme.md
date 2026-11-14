# Custom Hooks in React

Custom Hooks are a way to reuse logic in React without repeating code in multiple components.

---

## What are Custom Hooks?

A custom hook is just a normal JavaScript function that uses React hooks (`useState`, `useEffect`, etc.) inside it so that you can reuse the same logic anywhere.

Instead of writing the same logic again and again in different components, you move it into a custom hook and reuse it.

---

## One-line Definition

Custom Hook = reusable logic written using React hooks

---

## Why do we need Custom Hooks?

### Problem (without custom hooks)

```jsx
useEffect(() => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);
```

You write this in multiple components
Code gets repeated
Hard to maintain

---

### Solution (with custom hook)

Move this logic into one place:

```jsx
function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
}
```

---

## How to use it

```jsx
function App() {
  const users = useUsers();

  return <div>{users.length}</div>;
}
```

Now you can reuse `useUsers()` anywhere.

---

## Naming Rule

Custom hook names must start with `use`

useUsers
useFetch
useAuth

getUsers (wrong)

---

## How it works (simple flow)

```
Component → calls custom hook → hook runs logic → returns data → UI updates
```

---

## Example: useToggle

```jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue((v) => !v);

  return [value, toggle];
}
```

### Usage

```jsx
const [isOpen, toggle] = useToggle();
```

---

## Real-world Examples

useFetch → API calls
useAuth → login/logout logic
useDebounce → search optimization
useLocalStorage → store data in browser

---

## Rules of Custom Hooks

Must start with `use`
Use hooks only at the top level
Do not use inside loops or conditions
Only use inside React components or other hooks

---

## Advantages

Reusable logic
Cleaner code
Less duplication
Easier to maintain

---

## Common Mistakes

Not using `use` prefix
Calling hooks inside conditions
Writing UI inside hooks (hooks should only contain logic)

---

## Interview Questions

### What is a custom hook?

A reusable function that contains logic using React hooks.

---

### Why not a normal function?

Because only custom hooks can use React hooks and lifecycle features.

---

### Do custom hooks share state?

No, each component using a custom hook gets its own separate state.

---

## Final Summary

Custom Hooks help you move repeated logic into one place and reuse it, making your code cleaner and more scalable.

---

## Pro Tip

“I use custom hooks to separate logic from UI and improve reusability and maintainability.”
