# React-hooks

### 1. useOnClickOutside
Runs a callback when a click event is detected outside of the provided element.

Usage:
```javascript
export const Wrapper = () => {
const elementRef = useRef<HTMLDivElement>(null);
  ...

  useOnClickOutside(elementRef, doSomething);

  return (
      <div ref={elementRef} />
  );
};
```
