:- useState is a React Hook that allows functional components to manage and update state.

:- It lets us store values (like numbers, strings, objects, arrays) and re-render the component when those values change.

````
syntax : const [state, setState] = useState(initialValue);```

example:-
````

import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (

<div>
<p>{count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
}```

Important Concept: Re-render

👉 When state changes → component re-renders

👉 React compares old UI vs new UI → updates only required parts

Functional Update (VERY IMPORTANT)
setCount(prev => prev + 1);

Because state updates are asynchronous
setCount(count + 1);
setCount(count + 1);
;

👉 Expected: +2
👉 Actual: +1

setCount(prev => prev + 1);
setCount(prev => prev + 1);

Now correct: +2
